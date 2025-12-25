const JustUs = () => {
  // Load all local "Just Us" images from the assets folder
  const imageModules = import.meta.glob(
    '../assets/just us/Just Us - WeddingNama - 11_30_2025 2-09-57 PM/*.jpg',
    { eager: true, as: 'url' }
  )

  const justUsImages = Object.entries(imageModules).map(([path, url]) => ({
    image: url,
    alt: path.split('/').pop()?.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, '') || 'Just Us image',
  }))

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-montserrat font-light text-gray-800 mb-16 text-center uppercase">
          Just Us
        </h1>

        {/* Just Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {justUsImages.map((item, index) => (
            <div key={index} className="group cursor-pointer aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JustUs

