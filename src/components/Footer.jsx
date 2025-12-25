import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/weddingnama"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/70 hover:text-primary transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com/WeddingNama"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/70 hover:text-primary transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/weddingnama/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/70 hover:text-primary transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/user/WeddingNama"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/70 hover:text-primary transition-colors"
              >
                <FaYoutube size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-primary/70">
              All content Copyright © {new Date().getFullYear()} WeddingNama
            </p>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="text-primary/70 hover:text-primary transition-colors"
          >
            <FaArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

