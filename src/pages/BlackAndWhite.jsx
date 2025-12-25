const BlackAndWhite = () => {
  // Load all local Black & White images from the assets folder
  const imageModules = import.meta.glob(
    '../assets/black&white/Black and White - WeddingNama - 12_1_2025 8-07-05 PM/*.{jpg,jpeg,png}',
    { eager: true, as: 'url' }
  )

  const blackAndWhiteImages = Object.entries(imageModules).map(([path, url]) => ({
    image: url,
    alt: path.split('/').pop()?.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, '') || 'Black and white image',
  }))

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-montserrat font-light text-gray-800 mb-16 text-center uppercase">
          Black & white
        </h1>

        {/* Black & White Grid - Matching reference site layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {blackAndWhiteImages.map((item, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlackAndWhite

