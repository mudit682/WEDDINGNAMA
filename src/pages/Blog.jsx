import { Link } from 'react-router-dom'

const Blog = () => {
  const blogPosts = [
    {
      category: 'Pre Wedding',
      title: 'Love amidst the Scottish Highlands!',
      date: 'August 20, 2024',
      image: 'https://images-pw.pixieset.com/elementfield/qkOo9Qr/0_CoupleShoot_144-c3c127a4-1000.jpg',
      slug: 'love-amidst-the-scottish-highlands',
    },
    {
      category: 'Wedding',
      title: 'Marry your best friend!',
      date: 'July 6, 2024',
      image: 'https://images-pw.pixieset.com/elementfield/6xAWKqK/WN_KA_03_WeddingReception_467-472b177d-1000.jpg',
      slug: 'marry-your-best-friend',
    },
    {
      category: 'Wedding',
      title: 'From Schoolmates to Soulmates',
      date: 'July 3, 2024',
      image: 'https://images-pw.pixieset.com/elementfield/84AlRZK/WN_Sim-Dhruv_157-7b79f02f-1000.jpg',
      slug: 'from-schoolmates-to-soulmates',
    },
    {
      category: 'Pre Wedding',
      title: 'From Tinder to Forever: A Love Story',
      date: 'June 24, 2024',
      image: 'https://images-pw.pixieset.com/elementfield/1kopaJp/01_Couple-Shoot_082-COVER-14058d8e-1000.jpg',
      slug: 'from-tinder-to-forever',
    },
    {
      category: 'Pre Wedding',
      title: 'A Dreamy Venetian Affair!',
      date: 'June 10, 2024',
      image: 'https://images-pw.pixieset.com/elementfield/Db85jDL/SD_WN_ItalyCoupleshoot_115-5ca28f1d-1000.jpg',
      slug: 'a-dreamy-venetian-affair',
    },
  ]

  return (
    <div className="pt-20 pb-20">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-light text-gray-800 mb-6 uppercase">
              WN Blog
            </h1>
            <div className="max-w-4xl mx-auto space-y-4 text-primary/80 leading-relaxed text-lg">
              <p>
                Here we invite you into our world where every image tells a tale of love, laughter, and cherished memories. Our blog is more than just a showcase of our work; it's a place of connection and inspiration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-12">
            {blogPosts.map((post, index) => {
              // Alternate layout: reverse order for 2nd and 4th posts (index 1 and 3)
              const isReversed = index === 1 || index === 3;
              
              return (
                <Link
                  key={index}
                  to={post.slug ? `/blog/${post.slug}` : '#'}
                  className="block"
                >
                  <article className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center group cursor-pointer">
                    {/* Image Column */}
                    <div className={`relative aspect-[4/3] overflow-hidden ${isReversed ? 'md:order-2' : ''}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Text Column */}
                    <div className={`space-y-4 ${isReversed ? 'md:order-1' : ''}`}>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-primary/60 uppercase tracking-wider font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary group-hover:text-primary/80 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-primary/60 text-base">
                        {post.date}
                      </p>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
