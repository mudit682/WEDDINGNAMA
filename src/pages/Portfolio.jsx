import { Link } from 'react-router-dom'

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'Photography',
      image: 'https://images-pw.pixieset.com/elementfield/164086913/4_Wedding_730_copy-8789dd0b.jpg',
      link: '/portfolio/photography',
    },
    {
      title: 'Just Us',
      image: 'https://images-pw.pixieset.com/elementfield/174086913/Couple_Shoot_218-7de6060a.jpg',
      link: '/portfolio/just-us',
    },
    {
      title: 'Films',
      image: 'https://images-pw.pixieset.com/elementfield/664086913/WN_Prachi-Dev_013-new-fd2365cc.jpg',
      link: '/portfolio/films',
    },
    {
      title: 'Black and White',
      image: 'https://images-pw.pixieset.com/elementfield/164086913/4_Wedding_730_copy-8789dd0b.jpg',
      link: '/portfolio/black-and-white',
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-[95vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img
          src="https://images-pw.pixieset.com/elementfield/933086913/WN_ID_R1_472-new-crop_LR-bc93401f.jpg"
          alt="Our Portfolio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-end justify-center pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-light text-white mb-4 uppercase">
                Our Portfolio
              </h1>
              <p className="text-xl md:text-2xl font-montserrat font-light text-white/90 italic">
                A Time capsule to your memories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-20 bg-white">
        {/* Description Section - Full Width */}
        <div className="w-full px-4 md:px-8 mb-16 space-y-6 text-gray-800/80 leading-relaxed text-lg font-lora">
          <p>
            We have a detail oriented approach and since we limit the number of weddings we take up, we are able to give enough time to each wedding for post-production. The team shoots in a manner that is unobtrusive and encapsulates moments, details, emotions (that you might have not witnessed in the general chaos) beautifully! Our talented editors then combine these visuals with voice-overs (if any) with the perfect background music to weave your story!
          </p>
          <p>
            We bring out the character and essence of the celebrations and ceremonies in all its glory, tailoring our techniques to highlight the couple's personalities and chemistry. Something that speaks volumes about you. Something that is all you!
          </p>
          <p>
            There is a great deal of customization that goes with attention to every minute detail, right from the way the photographs are processed to the selection of soundtracks that strike the right chords to the film edit that amplifies the narrative of the story. A story that will make your hearts fuller. One you can watch over and over again to reminisce about these very moments. We put our heart into collecting your special moments and preserving them for years to come, a return ticket to your memories! We strongly believe that every story is unique and it needs to be captured differently.
          </p>
        </div>

        <div className="container mx-auto px-4 max-w-7xl">
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {portfolioItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group relative aspect-[2/3] overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10"></div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-light text-white uppercase">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
          </div>

          {/* View Couple Stories Link */}
          <div className="text-center">
            <Link
              to="/couple-stories"
              className="inline-block px-8 py-3 border-2 border-gray-800 text-gray-800 font-montserrat font-light uppercase tracking-wider hover:bg-gray-800 hover:text-white transition-colors"
            >
              View Wn couple stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio

