import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  const testimonials = [
    {
      couple: 'Krishma & Dhiraj',
      text: '"These guys have been booked with us since 2019, when our wedding was going to be in Vietnam. They stood by us and made sure their entire team could attend our wedding. They felt the emotion of every postponement with us. Their photos are incredible. They know how to capture the moment. Truly we didn\'t want to get married without them and it was the best decision. Their work is outstanding. Their professionalism is unparalleled."',
      image: 'https://images-pw.pixieset.com/elementfield/944086913/WN_KD_R1_026_1-new-7109182d.jpg',
    },
    {
      couple: 'Shweta & Arjun',
      text: '"When it comes to capturing your most cherished moments for posterity, no one does it better than WeddingNama. Their photographs are alive with vibrancy and we still don\'t know how they captured every minute detail of our wedding with such love and compassion. But the quality that makes WeddingNama stand apart is that both Ankita and Akash are beautiful people, who above everything else, are simply happy to be a part of all the festivities. And a smile behind the camera evokes many in front of it!"',
      image: 'https://images-pw.pixieset.com/elementfield/440250323/exoticfirefly-04-515e1e0e.jpg',
    },
    {
      couple: 'Priyanka & Mishaal',
      text: '"Working with team WeddingNama was a rewarding experience, and we had such a blast together. After looking at the final results, we are in awe of their work and so are all our friends! They edited our pictures through the lockdown and did not let their challenges affect the final result. Their easy-going nature kept us at great ease during the wedding, and we believe that hiring them was one of the best decisions we made."',
      image: 'https://images-pw.pixieset.com/elementfield/143860323/1_Welcome_Dinner_026-new-533ebec5.jpg',
    },
  ]

  const officeImages = [
    'https://images-pw.pixieset.com/elementfield/004091223/Youtube-banner_final-2023_HR-7fdd19d7.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/DD2_1235-8f6dfd2c.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/001-About-Footer_12-scaled-new-63a8687b.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/001-About-Footer_14-scaled-new-5ab75065.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/001-About-Footer_01-new-7a80264d.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/001-About-Footer_07-scaled-new-30b5804d.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/001-About-Footer_06-new-9170c65d.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/001-About-Footer_08-new-461419ff.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/001-About-Footer_15-scaled-new-1f1d1392.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/DJI_0050-53c310a9.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/001-About-Footer_16-scaled-new-af211c41.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/001-About-Footer_04-new-db89a40c.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/001-About-Footer_13-new-fb721675.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/Team-Shot-new-a17a802c.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/001-About-Footer_10-new-b4a39b0c.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/001-About-Footer_11-new-03d2077b.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/001-About-Footer_09-new-63c744ae.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/001-About-Footer_05-scaled-new-04672279.jpg',
    'https://images-pw.pixieset.com/elementfield/004091223/001-About-Footer_03-scaled-new-d078bd75.jpg',
  ]

  const featuredIn = [
    'Vogue',
    'WeddingSutra',
    'Your Story',
    'Hindustan Times',
    'Harpers Bazaar',
    'WedMeGood',
    'WPJA',
    'Love Notes',
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % officeImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + officeImages.length) % officeImages.length)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img
          src="https://images-pw.pixieset.com/elementfield/523086913/SP_4_Wedding_R1_063_LR-b4830ab3.jpg"
          alt="About WeddingNama"
          className="img-absolute-fill object-cover"
        />
        <div className="relative z-20 h-full flex items-end justify-center pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-light text-white text-center">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 w-[90%]">
          <div className="space-y-6 text-primary leading-relaxed text-lg font-georgia">
            <p>
              We love weddings! We feel they are an <strong>adventure</strong> to be experienced and captured in the form of timeless memories. WeddingNama was born out of passion to document love stories by <strong>Ankita Asthana and Akash Agarwal</strong>, a couple themselves! The team's passion and undying enthusiasm has helped WeddingNama carve a niche in the Indian wedding Industry. Our company specializes in both <strong>wedding photography and filming</strong> with an artistic & personal touch. With our <strong>in-house</strong> dynamic team of skilled photographers, cinematographers and editors, we strike a perfect balance between stunning contemporary portraiture and photojournalistic storytelling.
            </p>
            <p>
              WeddingNama was officially founded in <strong>2013</strong>. WeddingNama specialises in capturing the essence of luxury weddings in India and abroad. Behind WeddingNama stands a powerhouse team of passionate professionals who are dedicated to bringing your wedding vision to life. We have gained multiple years of experience by covering numerous weddings in India and abroad. We travel around the world and have done assignments in USA, Mexico, Paris, Turkey, Italy, Kenya, Scotland, India, Thailand, Middle East, Philippines, amongst others.
            </p>
            <p>
              We have won many national and international awards like Fearless Awards, Best of the Best Wedding award Junebug, Gold awards WPJA, ISPWP, Best Wedding photographer in Great Indian Wedding Awards (GIWA), WeddingSutra Awards, Best wedding photographer & best wedding filmmaker at WOW Asia Awards. We have been constantly published in online media & magazines like Vogue, Harpers Bazaar, NYTimes, Huffington Post and others.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Founders Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-montserrat font-light text-primary/60 text-center mb-16 uppercase tracking-widest">
            MEET OUR FOUNDERS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Ankita Asthana */}
            <div className="bg-white p-8">
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img
                  src="https://images-pw.pixieset.com/elementfield/098876223/Ankita_Asthana_profile-88df8276.jpg"
                  alt="Ankita Asthana"
                  className="img-absolute-fill object-cover"
                />
              </div>
              <h3 className="text-3xl font-montserrat font-light text-primary mb-2">
                Ankita Asthana
              </h3>
              <p className="text-primary/60 mb-6 font-georgia">Founder, WeddingNama</p>
              <div className="space-y-4 text-primary/80 leading-relaxed">
                <p className="font-georgia">
                  Awarded TOP 10 wedding photographers of the world in 2022 & 2023 by world photojournalist association (WPJA). She has done her masters in photography from the reputed National Institute of Design (NID), Ahmedabad. She started WeddingNama school to share her learning's with fellow photographers.
                </p>
                <p className="font-georgia">
                  She is an ambassador for various brands like Ilford, Profoto & Nikon. She is featured in the global campaign for Nikon Z8. She has a strong sense of composition while her shooting style follows just one approach – to KEEP IT REAL! In the middle of shoots, editor briefings and client meetings, this #BossLady wears multiple hats, all with that warm smile. She nourishes, she manages, she exhibits. It's kind of a cool gig, the way she does what she does. We trust her instincts implicitly!
                </p>
                <p className="text-primary font-medium font-georgia">
                  Email id: <a href="mailto:ankita.asthana@weddingnama.in" className="hover:underline">ankita.asthana@weddingnama.in</a>
                </p>
              </div>
            </div>

            {/* Akash Agarwal */}
            <div className="bg-white p-8">
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img
                  src="https://images-pw.pixieset.com/elementfield/798876223/Akash_Agarwal_profile-b24a1b2e.jpg"
                  alt="Akash Agarwal"
                  className="img-absolute-fill object-cover"
                />
              </div>
              <h3 className="text-3xl font-montserrat font-light text-primary mb-2">
                Akash Agarwal
              </h3>
              <p className="text-primary/60 mb-6 font-georgia">Founder, WeddingNama</p>
              <div className="space-y-4 text-primary/80 leading-relaxed">
                <p className="font-georgia">
                  A traveller. A Leader. A disciplinarian. A humanitarian. Akash's journey is a testament to his unwavering spirit and remarkable versatility. He completed his Masters in Business Administration (MBA) from XLRI, Jamshedpur. He worked in the finance sector for three years, before taking the leap to cinematography and co-founded WeddingNama, along with Ankita.
                </p>
                <p className="font-georgia">
                  With sharp business acumen, he is a thorough tech geek and has a creative eye and a solid understanding for channeling each story's core emotion into arresting filmography. His visual dynamism has helped cinematography take a whole new meaning at WeddingNama. His leadership shines through in his ability to guide our team with a perfect blend of discipline and compassion, fostering an environment where creativity flourishes.
                </p>
                <p className="text-primary font-medium font-georgia">
                  Email id: <a href="mailto:akash.agarwal@weddingnama.in" className="hover:underline">akash.agarwal@weddingnama.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our WN Family & WN Office Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-montserrat font-light text-primary text-center mb-16">
            Our WN Family & WN Office
          </h2>
        </div>
        
        {/* Image Carousel - Full Width */}
        <div className="relative w-full mb-16">
          <div className="relative aspect-[4/3] overflow-hidden">
              {officeImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`WN Office ${index + 1}`}
                    className="img-absolute-fill object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full transition-colors z-10"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full transition-colors z-10"
            >
              <FaChevronRight size={20} />
            </button>
            
          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-4 py-2 rounded-full text-sm text-primary">
            {String(currentImage + 1).padStart(2, '0')} / {String(officeImages.length).padStart(2, '0')}
          </div>
        </div>
      </section>

      {/* As Featured In Section */}
      <section className="py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-montserrat font-light text-primary text-center mb-12">
            As featured in
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {featuredIn.map((brand, index) => (
              <div
                key={index}
                className="text-2xl md:text-3xl font-montserrat font-light text-primary/70 hover:text-primary transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Love Notes Testimonials Section */}
      <section className="py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Text Column - 50% */}
            <div className="bg-[#fafafa] p-8 md:p-12 flex flex-col justify-center">
              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-500 ${
                      index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                    }`}
                  >
                    <h2 className="text-3xl md:text-4xl font-montserrat font-light text-primary mb-8 uppercase tracking-widest">
                      Love Notes
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-montserrat font-light text-primary mb-6 uppercase">
                      {testimonial.couple}
                    </h3>
                    <p className="text-base md:text-lg text-primary leading-relaxed mb-8 font-georgia">
                      {testimonial.text}
                    </p>
                  </div>
                ))}
                
                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="text-primary hover:text-primary/70 transition-colors"
                  >
                    <FaChevronLeft size={16} />
                  </button>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-px bg-primary/30"></div>
                    <span className="text-sm text-primary/60 font-montserrat">
                      {String(currentTestimonial + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                    </span>
                    <div className="w-8 h-px bg-primary/30"></div>
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="text-primary hover:text-primary/70 transition-colors"
                  >
                    <FaChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Image Column - 50% */}
            <div className="relative w-full h-[500px] md:h-[700px] cursor-pointer group overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentTestimonial ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  onClick={nextTestimonial}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.couple}
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-0 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <img
            src="https://images-pw.pixieset.com/elementfield/784869223/our-story-bf7af3cd.jpg"
            alt="Our Story"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#fafafa]">
        <div className="w-full pl-0 pr-4 md:pr-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-primary/80 hover:bg-primary text-white font-montserrat font-light text-lg uppercase tracking-wider transition-colors"
              >
                Contact us
              </Link>
            </div>
            <div className="text-center space-y-4 text-primary/80 leading-relaxed text-lg">
              <p className="font-georgia">
                We'd love to hear from you, if you are a couple who wish to discuss about photography or filming, please use the <Link to="/contact" className="text-primary font-semibold hover:underline">contact form</Link> on the above link to get in touch with us.
              </p>
              <p className="font-georgia">
                If you prefer to write to us directly, please email at <a href="mailto:weddingnama@gmail.com" className="text-primary font-semibold hover:underline">weddingnama@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-montserrat font-light text-primary text-center mb-8">
            Career at WeddingNama
          </h2>
          <div className="text-center space-y-4 text-primary/80 leading-relaxed text-lg">
            <p className="font-georgia">
              If you feel you have what it takes to be a part of WeddingNama family, do write to us at <a href="mailto:careers@weddingnama.in" className="text-primary font-semibold hover:underline">careers@weddingnama.in</a>
            </p>
            <p className="font-georgia">
              Don't forget to attach your work, past experience, resume, and other relevant information.
            </p>
            <p className="font-georgia">
              Please note that we work in a fully in-house team so only apply if you are looking for a full time opportunity. Our office is located in Andheri, West in Mumbai.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
