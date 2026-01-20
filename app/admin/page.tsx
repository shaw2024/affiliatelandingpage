'use client'

import { useState } from 'react'
import { Plus, Trash2, Save } from 'lucide-react'
import type { Post, AffiliateProduct } from '@/lib/posts'

export default function AdminPage() {
  const [formData, setFormData] = useState<Partial<Post>>({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    socialPlatform: 'Instagram',
    originalUrl: '',
    originalPostText: '',
    affiliateProducts: [],
  })

  const [currentProduct, setCurrentProduct] = useState<Partial<AffiliateProduct>>({
    name: '',
    description: '',
    price: 0,
    affiliateUrl: '',
    image: '',
  })

  const addProduct = () => {
    if (currentProduct.name && currentProduct.affiliateUrl) {
      const product: AffiliateProduct = {
        id: `prod-${Date.now()}`,
        name: currentProduct.name,
        description: currentProduct.description || '',
        price: currentProduct.price || 0,
        affiliateUrl: currentProduct.affiliateUrl,
        image: currentProduct.image || 'https://via.placeholder.com/400',
      }

      setFormData({
        ...formData,
        affiliateProducts: [...(formData.affiliateProducts || []), product],
      })

      setCurrentProduct({
        name: '',
        description: '',
        price: 0,
        affiliateUrl: '',
        image: '',
      })
    }
  }

  const removeProduct = (productId: string) => {
    setFormData({
      ...formData,
      affiliateProducts: formData.affiliateProducts?.filter(p => p.id !== productId),
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newPost: Post = {
      id: `post-${Date.now()}`,
      title: formData.title || '',
      excerpt: formData.excerpt || '',
      content: formData.content || '',
      image: formData.image || 'https://via.placeholder.com/800',
      date: new Date().toISOString().split('T')[0],
      socialPlatform: formData.socialPlatform as any || 'Instagram',
      originalUrl: formData.originalUrl,
      originalPostText: formData.originalPostText,
      affiliateProducts: formData.affiliateProducts || [],
    }

    console.log('New Post:', newPost)
    alert('Post created! In production, this would save to your database.')
    
    // Reset form
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      image: '',
      socialPlatform: 'Instagram',
      originalUrl: '',
      originalPostText: '',
      affiliateProducts: [],
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Create New Post</h1>
        <p className="text-gray-600">Add a new social media find with affiliate products</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Info */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Post Information</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Post Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="The Amazing Product Everyone Loves"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt (Short Description) *
            </label>
            <textarea
              required
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="A brief, catchy description for the card preview"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Content *
            </label>
            <textarea
              required
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={8}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Write the full article content here. Use double line breaks for paragraphs."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image URL *
            </label>
            <input
              type="url"
              required
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="https://images.unsplash.com/..."
            />
          </div>
        </div>

        {/* Social Media Info */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Social Media Source</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Platform *
            </label>
            <select
              value={formData.socialPlatform}
              onChange={(e) => setFormData({ ...formData, socialPlatform: e.target.value as any })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Twitter">Twitter</option>
              <option value="TikTok">TikTok</option>
              <option value="LinkedIn">LinkedIn</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Original Post URL
            </label>
            <input
              type="url"
              value={formData.originalUrl}
              onChange={(e) => setFormData({ ...formData, originalUrl: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="https://instagram.com/p/..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Original Post Text
            </label>
            <textarea
              value={formData.originalPostText}
              onChange={(e) => setFormData({ ...formData, originalPostText: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="The text from the original social media post"
            />
          </div>
        </div>

        {/* Affiliate Products */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Affiliate Products</h2>

          {/* Add Product Form */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-gray-900">Add Product</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  value={currentProduct.name}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Amazing Product Pro"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={currentProduct.price}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, price: parseFloat(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="29.99"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <input
                type="text"
                value={currentProduct.description}
                onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Brief product description"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Affiliate URL (Amazon, etc.)
              </label>
              <input
                type="url"
                value={currentProduct.affiliateUrl}
                onChange={(e) => setCurrentProduct({ ...currentProduct, affiliateUrl: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="https://amazon.com/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Image URL
              </label>
              <input
                type="url"
                value={currentProduct.image}
                onChange={(e) => setCurrentProduct({ ...currentProduct, image: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="https://images.unsplash.com/..."
              />
            </div>

            <button
              type="button"
              onClick={addProduct}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Product
            </button>
          </div>

          {/* Product List */}
          {formData.affiliateProducts && formData.affiliateProducts.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">
                Products ({formData.affiliateProducts.length})
              </h3>
              {formData.affiliateProducts.map((product) => (
                <div key={product.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-900">{product.name}</h4>
                    <p className="text-sm text-gray-600">${product.price}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeProduct(product.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold text-lg rounded-lg hover:from-primary-700 hover:to-primary-600 transition-all shadow-lg hover:shadow-xl"
        >
          <Save className="w-6 h-6" />
          Publish Post
        </button>
      </form>
    </div>
  )
}
