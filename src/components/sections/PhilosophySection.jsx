import { Link } from 'react-router-dom'

const PhilosophySection = () => {
  return (
    <section className="w-full bg-white">
      <div className="info info--style_2 container--full-width w-full">
        <div className="w-full">
          <div className="info__color-full bg-[#fafafa]">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="py-16 md:py-20">
                {/* Colored inner element */}
                {/* <div className="w-full md:w-9/12 mb-12">
                  <div className="info__color-inner bg-[#f0f0eb] h-32 md:h-40"></div>
                </div> */}
                
                {/* Image and Text Content */}
                <div className="w-full relative">
                  <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Image - positioned to overlap text background */}
                    <div className="w-10/12 md:w-9/12 relative z-20 md:-mr-10">
                      <div className="info__photo relative aspect-[4/3] overflow-hidden">
                        <img
                          src="https://images-pw.pixieset.com/elementfield/222086913/AAP_4286-new_crop-09966382.jpg"
                          alt="Our Philosophy"
                          className="img-absolute-fill object-cover"
                          style={{ objectPosition: '50% 50%' }}
                        />
                      </div>
                    </div>
                    
                    {/* Text Content - larger background */}
                    <div className="w-full md:w-10/12 info__text bg-white p-8 md:p-20 relative z-10 md:ml-8">
                      <h2 className="info__title text-4xl md:text-5xl font-montserrat font-light text-gray-800 mb-2 uppercase">
                        Our Philosophy
                      </h2>
                      <span className="info__subtitle block text-sm text-primary/60 uppercase tracking-wider mb-6 font-montserrat font-light">
                        photography is a feeling
                      </span>
                      <p className="info__body text-primary/80 leading-relaxed mb-8 font-georgia">
                        We believe in preserving genuine emotions and authentic moments. Our unobtrusive approach allows us to blend seamlessly into the background, ensuring that you and your loved ones can fully immerse yourselves in the joyous celebration while we capture every heartfelt instant. At WeddingNama, we understand that each couple is unique, and your wedding day should reflect your individuality.
                      </p>
                      <Link
                        to="/about"
                        className="info__button button inline-block px-8 py-3 border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors"
                      >
                        <span className="button__text">Learn More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection
