// Blog Post Management System
class BlogManager {
    constructor() {
        this.posts = [];
        this.currentEditId = null;
        this.init();
    }

    init() {
        this.loadPosts();
        this.setupEventListeners();
        this.renderPosts();
    }

    // Load posts from localStorage
    loadPosts() {
        const saved = localStorage.getItem('affiliateBlogPosts');
        if (saved) {
            this.posts = JSON.parse(saved);
        }
    }

    // Save posts to localStorage
    savePosts() {
        localStorage.setItem('affiliateBlogPosts', JSON.stringify(this.posts));
    }

    // Setup event listeners
    setupEventListeners() {
        const toggleBtn = document.getElementById('toggleFormBtn');
        const form = document.getElementById('blogPostForm');
        const cancelBtn = document.getElementById('cancelBtn');

        toggleBtn.addEventListener('click', () => this.toggleForm());
        form.addEventListener('submit', (e) => this.handleSubmit(e));
        cancelBtn.addEventListener('click', () => this.cancelForm());
    }

    // Toggle form visibility
    toggleForm(show = null) {
        const formDiv = document.getElementById('postForm');
        const toggleBtn = document.getElementById('toggleFormBtn');
        
        if (show === null) {
            formDiv.classList.toggle('hidden');
        } else {
            formDiv.classList.toggle('hidden', !show);
        }

        const isHidden = formDiv.classList.contains('hidden');
        toggleBtn.textContent = isHidden ? '✍️ Create New Post' : '❌ Close Form';
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        const postData = {
            id: this.currentEditId || Date.now().toString(),
            title: document.getElementById('postTitle').value,
            content: document.getElementById('postContent').value,
            imageUrl: document.getElementById('postImage').value,
            affiliateLink: document.getElementById('affiliateLink').value,
            ctaText: document.getElementById('ctaText').value || 'Shop Now',
            date: this.currentEditId ? 
                this.posts.find(p => p.id === this.currentEditId).date : 
                new Date().toISOString()
        };

        if (this.currentEditId) {
            // Update existing post
            const index = this.posts.findIndex(p => p.id === this.currentEditId);
            this.posts[index] = postData;
        } else {
            // Add new post
            this.posts.unshift(postData);
        }

        this.savePosts();
        this.renderPosts();
        this.resetForm();
        this.toggleForm(false);
    }

    // Cancel form
    cancelForm() {
        this.resetForm();
        this.toggleForm(false);
    }

    // Reset form
    resetForm() {
        document.getElementById('blogPostForm').reset();
        document.getElementById('postId').value = '';
        document.getElementById('formTitle').textContent = 'Create New Blog Post';
        this.currentEditId = null;
    }

    // Edit post
    editPost(id) {
        const post = this.posts.find(p => p.id === id);
        if (!post) return;

        this.currentEditId = id;
        document.getElementById('postId').value = id;
        document.getElementById('postTitle').value = post.title;
        document.getElementById('postContent').value = post.content;
        document.getElementById('postImage').value = post.imageUrl || '';
        document.getElementById('affiliateLink').value = post.affiliateLink;
        document.getElementById('ctaText').value = post.ctaText;
        document.getElementById('formTitle').textContent = 'Edit Blog Post';

        this.toggleForm(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Delete post
    deletePost(id) {
        if (!confirm('Are you sure you want to delete this post?')) return;

        this.posts = this.posts.filter(p => p.id !== id);
        this.savePosts();
        this.renderPosts();
    }

    // Format date
    formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    // Render posts
    renderPosts() {
        const grid = document.getElementById('postsGrid');
        const emptyState = document.getElementById('emptyState');

        if (this.posts.length === 0) {
            grid.innerHTML = '';
            emptyState.classList.remove('hidden');
            return;
        }

        emptyState.classList.add('hidden');
        
        grid.innerHTML = this.posts.map(post => `
            <article class="post-card">
                ${post.imageUrl ? 
                    `<img src="${this.escapeHtml(post.imageUrl)}" alt="${this.escapeHtml(post.title)}" class="post-image" onerror="this.style.display='none'">` : 
                    '<div class="post-image"></div>'
                }
                <div class="post-content">
                    <h3 class="post-title">${this.escapeHtml(post.title)}</h3>
                    <p class="post-date">📅 ${this.formatDate(post.date)}</p>
                    <p class="post-text">${this.escapeHtml(post.content)}</p>
                    <div class="post-actions">
                        <a href="${this.escapeHtml(post.affiliateLink)}" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="btn btn-primary post-cta">
                            ${this.escapeHtml(post.ctaText)} 🛒
                        </a>
                    </div>
                    <div class="post-actions">
                        <button onclick="blogManager.editPost('${post.id}')" class="btn btn-edit">
                            ✏️ Edit
                        </button>
                        <button onclick="blogManager.deletePost('${post.id}')" class="btn btn-delete">
                            🗑️ Delete
                        </button>
                    </div>
                </div>
            </article>
        `).join('');
    }

    // Escape HTML to prevent XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize blog manager when DOM is ready
let blogManager;
document.addEventListener('DOMContentLoaded', () => {
    blogManager = new BlogManager();
});
