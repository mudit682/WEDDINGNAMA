const InstagramSection = () => {
  const instagramImages = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=500',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=500',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500',
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <a
            href="https://www.instagram.com/weddingnama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <h3 className="text-3xl md:text-4xl font-montserrat font-light text-gray-800 mb-4 uppercase">
              Follow us on Instagram
            </h3>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {instagramImages.map((image, index) => (
            <a
              key={index}
              href="https://www.instagram.com/weddingnama"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden rounded-sm group"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/weddingnama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary/70 hover:text-primary transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
            <span className="text-sm font-medium">@weddingnama</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default InstagramSection

