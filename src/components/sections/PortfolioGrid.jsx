import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const PortfolioGrid = () => {
  const portfolioItems = [
    {
      title: 'Photography',
      image: 'https://images-pw.pixieset.com/elementfield/164086913/4_Wedding_730_copy-8789dd0b.jpg',
      link: '/portfolio/photography',
    },
    {
      title: 'Films',
      image: 'https://images-pw.pixieset.com/elementfield/664086913/WN_Prachi-Dev_013-new-fd2365cc.jpg',
      link: '/portfolio/films',
    },
    {
      title: 'Just Us',
      image: 'https://images-pw.pixieset.com/elementfield/174086913/Couple_Shoot_218-7de6060a.jpg',
      link: '/portfolio/just-us',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-montserrat font-light text-gray-800 text-center mb-16 uppercase">
          our work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
              <img
                src={item.image}
                alt={item.title}
                className="img-absolute-fill object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
                <h3 className="text-3xl font-montserrat font-light mb-4 uppercase">{item.title}</h3>
                <FaArrowRight size={24} className="opacity-80" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioGrid

