import { useState, useEffect } from 'react'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: 'https://images-pw.pixieset.com/elementfield/382086913/WN_NS_Vogue_005-1e9fceb2.jpg',
      title: ['Capturing', 'Love', 'Stories'],
      subtitle: 'UnScripted. Raw. Authentic.',
    },
    {
      image: 'https://images-pw.pixieset.com/elementfield/092086913/WN_SM_R1_269-new_crop-4b247604.jpg',
      title: ['Capturing', 'Love', 'Stories'],
      subtitle: 'UnScripted. Raw. Authentic.',
    },
    {
      image: 'https://images-pw.pixieset.com/elementfield/792086913/SP_0_Couple_shoot_021-c7a80070.jpg',
      title: ['Capturing', 'Love', 'Stories'],
      subtitle: 'UnScripted. Raw. Authentic.',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title.join(' ')}
            className="img-absolute-fill object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-end justify-center pb-16 md:pb-24">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {/* Previous Button - Desktop */}
              <div className="hidden lg:flex">
                <button
                  onClick={prevSlide}
                  className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
                >
                  <span className="ps-arrow ps-arrow--left ps-arrow--xl" />
                </button>
              </div>

              {/* Text Content */}
              <div className="text-center flex-1">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-light text-white mb-4 whitespace-nowrap uppercase">
                  {slides[currentSlide].title.join(' ')}
                </h1>
                <p className="text-sm md:text-base text-white/90 font-georgia font-light">
                  {slides[currentSlide].subtitle}
                </p>
              </div>

              {/* Next Button - Desktop */}
              <div className="hidden lg:flex">
                <button
                  onClick={nextSlide}
                  className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
                >
                  <span className="text-sm mb-2">
                    {String(currentSlide + 1).padStart(2, '0')}
                  </span>
                  <span className="ps-arrow ps-arrow--right ps-arrow--xl" />
                  <span className="text-sm mt-2">
                    {String(slides.length).padStart(2, '0')}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - Mobile */}
      <div className="lg:hidden absolute bottom-8 left-0 right-0 z-30 flex items-center justify-center space-x-4 text-white">
        <button onClick={prevSlide}>
          <span className="ps-arrow ps-arrow--left ps-arrow--xl" />
        </button>
        <span className="text-sm">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
        <button onClick={nextSlide}>
          <span className="ps-arrow ps-arrow--right ps-arrow--xl" />
        </button>
      </div>
    </div>
  )
}

export default HeroSlider

