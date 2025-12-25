import { useState } from 'react'
import { Link } from 'react-router-dom'

const CoupleStories = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = [
    'All',
    'anand karaj',
    'beach',
    'destination wedding',
    'international',
    'outdoor',
    'pre wedding',
    'rajasthan',
    'south indian',
  ]

  const coupleStories = [
    { name: 'Aanchal & Raghav', location: 'Turkey', image: 'https://images.pixieset.com/94564117/099cb797487c6b3befded8674425e088-cover-large.jpg', category: 'destination wedding', slug: 'aanchalandraghav' },
    { name: 'Nikita & Rishi', location: 'Greece', image: 'https://images.pixieset.com/829726201/4c7a1652d3ee37ed3ff922665a4a9fc0-cover-large.jpg', category: 'destination wedding', slug: 'nikitaandrishi' },
    { name: 'Natasha & Aadil', location: 'Zanzibar', image: 'https://images.pixieset.com/220726201/ec65c63add882ca35c7c92d6a0964a5e-cover-large.jpg', category: 'destination wedding', slug: 'natashaandaadil' },
    { name: 'Rhea & Rishi', location: 'Chandigarh', image: 'https://images.pixieset.com/751772101/edd1ef46bdc561be2713dc20823b776d-cover-large.jpg', category: 'outdoor', slug: 'rheaandrishi' },
    { name: 'Resham & Jamie', location: 'Australia', image: 'https://images.pixieset.com/282472101/2817f96fa5b4741fbab807f6b63d5c4c-cover-large.jpg', category: 'international', slug: 'reshamandjamie' },
    { name: 'Drishti & Chiraag', location: 'Bali', image: 'https://images.pixieset.com/778372101/c8f1c172f73816342ad60df66bc0f375-cover-large.jpg', category: 'destination wedding', slug: 'drishtiandchiraag' },
    { name: 'Sanjana & Shamit', location: 'Mumbai', image: 'https://images.pixieset.com/81553397/f204efd7e27f2699e6b5d41692f42583-cover-large.jpg', category: 'pre wedding', slug: 'sanjanaandshamitcopy' },
    { name: 'N + V', location: 'Goa', image: 'https://images.pixieset.com/05583187/75071acfc0d38b830b10edaf093e2bf0-cover-large.jpg', category: 'beach', slug: 'nikitaandvidit' },
    { name: 'Prachi & Dev', location: 'Udaipur', image: 'https://images.pixieset.com/56745727/0b1a57e271ccb8dd46720bbbf3e1929c-cover-large.jpg', category: 'rajasthan', slug: 'prachianddev' },
    { name: 'Meera & Jay', location: 'Mexico', image: 'https://images.pixieset.com/14648327/01ad76e1409ee11cdc199148d8ff1ee6-cover-large.jpg', category: 'international', slug: 'meeraandjay' },
    { name: 'Niki & Sid', location: 'Goa', image: 'https://images.pixieset.com/00038327/36117e34e88281d706c87d163da3c502-cover-large.jpg', category: 'beach', slug: 'nikiandsid' },
    { name: 'Anjali & Ishaan', location: 'Mumbai', image: 'https://images.pixieset.com/57112136/373e2d342e813fae772eccd1d6ec8c20-cover-large.jpg', category: 'pre wedding', slug: 'anjaliandishaan' },
  ]

  const filteredStories = activeFilter === 'All' 
    ? coupleStories 
    : coupleStories.filter(story => story.category === activeFilter)

  return (
    <div className="pt-20 pb-20">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-light text-gray-800 mb-6 uppercase">
              STories that touched our heart
            </h1>
            <div className="w-full space-y-4 text-primary/80 leading-relaxed text-lg">
              <p>
                At WeddingNama, our bond with each couple is deeply rooted in our shared passion for love! We pour our hearts into portraying their story authentically and artistically. This allow us to go beyond being photographers, evolving into storytellers who preserve the very essence of each couple's relationship, making it timeless for future generations.
              </p>
              <p className="text-xl font-semibold text-primary">
                The perfect time capsule of LOVE!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-[#fafafa] border-t border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary hover:bg-primary/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => {
              const CardContent = (
                <>
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-xl font-montserrat font-light text-gray-800 mb-1 text-center uppercase">
                      {story.name}
                    </h3>
                    <p className="text-primary/70 text-center">
                      {story.location}
                    </p>
                  </div>
                </>
              )

              return story.slug ? (
                <Link
                  key={index}
                  to={`/couple-stories/${story.slug}`}
                  className="group cursor-pointer flex flex-col"
                >
                  {CardContent}
                </Link>
              ) : (
                <div key={index} className="group cursor-pointer flex flex-col">
                  {CardContent}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-center items-center gap-4">
            <button className="px-4 py-2 bg-primary text-white font-medium">
              01
            </button>
            <button className="px-4 py-2 bg-white text-primary border border-primary/30 font-medium hover:bg-primary/10 transition-colors">
              02
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoupleStories
