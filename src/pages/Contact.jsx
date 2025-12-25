import { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: 'Wedding',
    where: '',
    message: '',
    story: '',
    hearAbout: '',
    recommendedBy: '',
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setMessage({
          type: 'success',
          text: data.message || 'Thank you for your submission! We will get back to you soon.',
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          sessionType: 'Wedding',
          where: '',
          message: '',
          story: '',
          hearAbout: '',
          recommendedBy: '',
        })
      } else {
        setMessage({
          type: 'error',
          text: data.message || 'Failed to submit form. Please try again.',
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setMessage({
        type: 'error',
        text: 'Network error. Please check your connection and try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-[100vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img
          src="https://images-pw.pixieset.com/elementfield/233086913/1WN_2436-b025cbe2.jpg"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-end justify-center pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-light text-white mb-4">
                Contact Us
              </h1>
              <h2 className="text-2xl md:text-3xl font-montserrat font-light text-white">
                Become a WeddingNama couple!
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Let's JAm Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-light text-gray-800 mb-6">
              Let's JAm!
            </h2>
            <p className="text-lg text-gray-800/80 leading-relaxed font-georgia">
              We love to work with couples who share a deep appreciation for life, possibly have an adventurous flair towards it, and are seeking a less conventional, more authentic approach to how they want their wedding memories preserved. If that's you, please do get in touch with us!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#fafafa]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 md:p-12">
            {/* Success/Error Message */}
            {message.text && (
              <div
                className={`mb-6 p-4 rounded ${
                  message.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                <p className="font-georgia">{message.text}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2 font-georgia">
                Your name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 border-0 border-b border-gray-800/30 focus:border-gray-800 focus:outline-none bg-transparent font-georgia text-gray-800"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2 font-georgia">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 border-0 border-b border-gray-800/30 focus:border-gray-800 focus:outline-none bg-transparent font-georgia text-gray-800"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-2 font-georgia">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 border-0 border-b border-gray-800/30 focus:border-gray-800 focus:outline-none bg-transparent font-georgia text-gray-800"
              />
            </div>

            {/* Session Type */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2 font-georgia">
                What type of session are you looking for?
              </label>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sessionType"
                    value="Wedding"
                    checked={formData.sessionType === 'Wedding'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="font-georgia">Wedding</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sessionType"
                    value="Engagement"
                    checked={formData.sessionType === 'Engagement'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="font-georgia">Engagement</span>
                </label>
              </div>
            </div>

            {/* Where */}
            <div>
              <label htmlFor="where" className="block text-sm font-medium text-gray-800 mb-2 font-georgia">
                Where? <span className="text-red-500">*</span>
              </label>
              <textarea
                id="where"
                name="where"
                value={formData.where}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Do let us know the details of the destination, venue, city, etc"
                className="w-full px-0 py-3 border-0 border-b border-primary/30 focus:border-primary focus:outline-none bg-transparent resize-none font-georgia"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2 font-georgia">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Please give us as many details as possible. For e.g., What are the exact dates, events, number of guests expected to join and the venue? Any special plans for the wedding?"
                className="w-full px-0 py-3 border-0 border-b border-primary/30 focus:border-primary focus:outline-none bg-transparent resize-none font-georgia"
              />
            </div>

            {/* Your Story */}
            <div>
              <label htmlFor="story" className="block text-sm font-medium text-gray-800 mb-2 font-georgia">
                Your story! <span className="text-red-500">*</span>
              </label>
              <textarea
                id="story"
                name="story"
                value={formData.story}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Would love to know about you guys! How did you meet? How long have you known each other? What's your vibe?"
                className="w-full px-0 py-3 border-0 border-b border-primary/30 focus:border-primary focus:outline-none bg-transparent resize-none font-georgia"
              />
            </div>

            {/* How did you hear about us */}
            <div>
              <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-800 mb-2 font-georgia">
                How did you hear about us?
              </label>
              <select
                id="hearAbout"
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleChange}
                className="w-full px-0 py-3 border-0 border-b border-gray-800/30 focus:border-gray-800 focus:outline-none bg-transparent font-georgia text-gray-800"
              >
                <option value="">Select option</option>
                <option value="From a friend">From a friend</option>
                <option value="Social Media">Social Media</option>
                <option value="Wedding Planner">Wedding Planner</option>
                <option value="Google search">Google search</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Recommended By */}
            <div>
              <label htmlFor="recommendedBy" className="block text-sm font-medium text-gray-800 mb-2 font-georgia">
                If someone has recommended us, would love to know who! (We owe them a treat :)
              </label>
              <input
                type="text"
                id="recommendedBy"
                name="recommendedBy"
                value={formData.recommendedBy}
                onChange={handleChange}
                className="w-full px-0 py-3 border-0 border-b border-gray-800/30 focus:border-gray-800 focus:outline-none bg-transparent font-georgia text-gray-800"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-primary text-white font-medium hover:bg-primary/90 transition-colors font-georgia disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-4 text-gray-800/80 leading-relaxed text-lg">
            <p className="font-georgia">
              If you prefer to write to us directly, please email at <strong><a href="mailto:weddingnama@gmail.com" className="text-gray-800 hover:underline">weddingnama@gmail.com</a></strong>
            </p>
            <p className="font-georgia">
              or please call/WhatsApp us on <strong><a href="tel:+919819806373" className="text-gray-800 hover:underline">+91-9819806373 (Jharana)</a></strong>
            </p>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-montserrat font-light text-gray-800 text-center mb-8">
            Career at WeddingNama
          </h2>
          <div className="text-center space-y-4 text-gray-800/80 leading-relaxed text-lg">
            <p className="font-georgia">
              If you feel you have what it takes to be a part of WeddingNama family, do write to us at <a href="mailto:careers@weddingnama.in" className="text-gray-800 font-semibold hover:underline">careers@weddingnama.in</a>
            </p>
            <p className="font-georgia">
              Don't forget to attach your work, past experience, resume, and other relevant information.
            </p>
            <p className="font-georgia">
              Please note that we work in a fully in-house team so only apply if you are looking for a full time opportunity. Our office is located in Andheri, West in Mumbai.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
