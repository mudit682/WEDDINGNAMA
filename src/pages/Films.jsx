const Films = () => {
  const films = [
    {
      couple: 'Raina & ArjAN',
      location: 'Udaipur, India',
      video: 'https://youtu.be/_NNOZbimqeQ',
    },
    {
      couple: 'Sonika & Sahil',
      location: 'Kiama, Australia',
      video: 'https://youtu.be/rUNncRAYCgU',
    },
    {
      couple: 'Shally & Rahul',
      location: 'UDAIPUR, INDIA',
      video: 'https://youtu.be/BoDZkhosbEc',
    },
    {
      couple: 'Surbhi & Pranshu',
      location: 'Mussourie, India',
      video: 'https://youtu.be/EDVupyZL2ko',
    },
    {
      couple: 'Shweta & Maanav',
      location: 'DUBAI',
      video: 'https://youtu.be/LTGJPGzDHU8',
    },
    {
      couple: 'Riddhi & Jugal',
      location: 'Umaid Bhawan Palace, Jodhpur',
      video: 'https://youtu.be/vbkgruZQ_jo',
    },
    {
      couple: 'Priyanka & Mishaal',
      location: 'Udaipur, India',
      video: 'https://youtu.be/OJ2WBNkvifM',
    },
    {
      couple: 'Sanah & Mufaddal',
      location: 'Mumbai, India',
      video: 'https://youtu.be/O-bcv6iC1pg',
    },
    {
      couple: 'Prachi & Dev',
      location: 'Udaipur, India',
      video: 'https://youtu.be/no-M5sdgxQg',
    },
  ]

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-montserrat font-light text-gray-800 mb-16 text-center uppercase">
          Weddingnama Films
        </h1>

        {/* Films List */}
        <div className="space-y-8 md:space-y-12">
          {films.map((film, index) => {
            // Extract video ID from YouTube URL
            const getVideoId = (url) => {
              if (!url) return null
              const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)
              return match ? match[1] : null
            }

            const videoId = film.video ? getVideoId(film.video) : null

            return (
              <div key={index} className="group cursor-pointer flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="relative w-full md:w-3/5 aspect-[4/3] overflow-hidden">
                  {videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={film.couple}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      src={film.image}
                      alt={film.couple}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl md:text-2xl font-montserrat font-light text-gray-800 mb-2 uppercase">
                    {film.couple}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 uppercase tracking-wide">
                    {film.location}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Films

