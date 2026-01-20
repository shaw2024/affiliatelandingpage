# Affiliate Blog - Stories & Products

A simple, lightweight affiliate blog page that allows you to repost stories from Facebook and attach affiliate links or product pages. Built with vanilla HTML, CSS, and JavaScript - no frameworks required!

## 🌟 Features

- **Easy Post Management**: Create, edit, and delete blog posts with a user-friendly interface
- **Facebook Story Integration**: Easily paste and repost your Facebook stories
- **Affiliate Link Support**: Add affiliate links or product pages to each post
- **Customizable CTAs**: Set custom call-to-action button text for each post
- **Image Support**: Add images to make your posts more engaging
- **Local Storage**: All posts are saved locally in your browser
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations

## 🚀 Getting Started

### Installation

1. Clone this repository or download the files
2. Open `index.html` in your web browser

That's it! No build process, no dependencies to install.

### Usage

1. **Create a New Post**:
   - Click the "Create New Post" button
   - Fill in the post title
   - Paste your Facebook story or write your content
   - (Optional) Add an image URL
   - Add your affiliate link or product page URL
   - Customize the call-to-action button text (default: "Shop Now")
   - Click "Save Post"

2. **Edit a Post**:
   - Click the "Edit" button on any post card
   - Modify the fields as needed
   - Click "Save Post"

3. **Delete a Post**:
   - Click the "Delete" button on any post card
   - Confirm the deletion

4. **Share with Customers**:
   - Your customers can click the call-to-action button on each post
   - The button opens your affiliate link in a new tab

## 📁 File Structure

```
affiliatelandingpage/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Blog post management logic
└── README.md       # This file
```

## 🎨 Customization

### Change Colors

Edit `styles.css` and modify the gradient colors:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Fonts

Update the font-family in `styles.css`:

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

### Modify Post Layout

Adjust the grid in `styles.css`:

```css
.posts-grid {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}
```

## 💾 Data Storage

All blog posts are stored in your browser's localStorage. This means:
- ✅ No server or database required
- ✅ Fast and instant loading
- ⚠️ Data is browser-specific (not synced across devices)
- ⚠️ Clearing browser data will delete posts

### Backup Your Posts

To backup your posts, open the browser console and run:
```javascript
const posts = localStorage.getItem('affiliateBlogPosts');
console.log(posts); // Copy this JSON string to save it
```

To restore posts:
```javascript
localStorage.setItem('affiliateBlogPosts', 'YOUR_SAVED_JSON_STRING');
location.reload();
```

## 🔒 Security Features

- HTML escaping to prevent XSS attacks
- `rel="noopener noreferrer"` on all external links
- Input validation on forms

## 🌐 Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## 📱 Mobile Responsive

The design automatically adapts to different screen sizes:
- Desktop: Multi-column grid layout
- Tablet: Responsive grid
- Mobile: Single column stack

## 🛠️ Technical Details

- **No dependencies**: Pure vanilla JavaScript
- **Modern CSS**: Flexbox and Grid layouts
- **ES6+**: Class-based architecture
- **LocalStorage API**: For data persistence
- **Responsive**: Mobile-first design approach

## 💡 Tips for Best Results

1. **Image URLs**: Use high-quality images from reliable hosting services
2. **Content Length**: Keep posts concise for better engagement
3. **Affiliate Links**: Always test your affiliate links before posting
4. **CTAs**: Use action-oriented text like "Shop Now", "Learn More", "Get Yours"
5. **Regular Updates**: Post consistently to keep your audience engaged

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📞 Support

For issues or questions, please open an issue in the repository.

---

Built with ❤️ for affiliate marketers