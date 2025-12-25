const WelcomeSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-montserrat font-light text-gray-800 mb-4 uppercase">
              HEy there!
            </h1>
            <h3 className="text-3xl md:text-4xl font-montserrat font-light text-gray-800 uppercase">
              Welcome to the Weddingnama EXPERIENCE
            </h3>
          </div>
          <div className="space-y-4 text-primary/80 leading-relaxed">
            <p className="font-georgia">
              Time although continuous, is momentary. It passes yet its shadow lingers.
            </p>
            <p className="font-georgia">
              At WeddingNama, we document these fleeting moments that can reside in your memory lane for eternity, moments that evoke emotions, moments that you can tuck away in your hearts forever. Moments that make you feel!
            </p>
            <p className="font-georgia">
              With our in-house dynamic team of skilled photographers, cinematographers, & editors, we specialise in photography and filming of luxurious, destination weddings. We are leaving our footprints around the world, one wedding at a time!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection

