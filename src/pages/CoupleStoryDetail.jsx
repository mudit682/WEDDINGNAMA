import { useParams, Link } from 'react-router-dom'

const CoupleStoryDetail = () => {
  const { slug } = useParams()

  // Load images for Aanchal & Raghav from local assets
  const aanchalRaghavImageModules = import.meta.glob(
    '../assets/WNCouples/Aanchal - Raghav- Turkey by WeddingNama - 12_18_2025 1-13-12 AM/*.{jpg,jpeg,png}',
    { eager: true, as: 'url' }
  )

  const aanchalRaghavImages = Object.entries(aanchalRaghavImageModules)
    .map(([path, url]) => url)
    .filter(url => !url.includes('default-skin') && !url.includes('image-protect')) // Filter out non-image files

  // Load images for Nikita & Rishi from local assets
  const nikitaRishiImageModules = import.meta.glob(
    '../assets/WNCouples/Nikita - Rishi- Greece by WeddingNama - 12_18_2025 1-13-34 AM/*.{jpg,jpeg,png}',
    { eager: true, as: 'url' }
  )

  const nikitaRishiImages = Object.entries(nikitaRishiImageModules)
    .map(([path, url]) => url)
    .filter(url => !url.includes('default-skin') && !url.includes('image-protect')) // Filter out non-image files

  // Load images for Natasha & Aadil from local assets
  const natashaAadilImageModules = import.meta.glob(
    '../assets/WNCouples/Natasha - Aadil- Zanzibar by WeddingNama - 12_19_2025 7-51-32 PM/*.{jpg,jpeg,png}',
    { eager: true, as: 'url' }
  )

  const natashaAadilImages = Object.entries(natashaAadilImageModules)
    .map(([path, url]) => url)
    .filter(url => !url.includes('default-skin') && !url.includes('image-protect')) // Filter out non-image files

  // Load images for Rhea & Rishi from local assets
  const rheaRishiImageModules = import.meta.glob(
    '../assets/WNCouples/Rhea - Rishi- Chandigarh by WeddingNama - 12_19_2025 7-55-53 PM/*.{jpg,jpeg,png}',
    { eager: true, as: 'url' }
  )

  const rheaRishiImages = Object.entries(rheaRishiImageModules)
    .map(([path, url]) => url)
    .filter(url => !url.includes('default-skin') && !url.includes('image-protect')) // Filter out non-image files

  // Load images for Resham & Jamie from local assets
  const reshamJamieImageModules = import.meta.glob(
    '../assets/WNCouples/Resham - Jamie- Australia by WeddingNama - 12_19_2025 7-58-29 PM/*.{jpg,jpeg,png}',
    { eager: true, as: 'url' }
  )

  const reshamJamieImages = Object.entries(reshamJamieImageModules)
    .map(([path, url]) => url)
    .filter(url => !url.includes('default-skin') && !url.includes('image-protect')) // Filter out non-image files

  // Load images for Drishti & Chiraag from local assets
  const drishtiChiraagImageModules = import.meta.glob(
    '../assets/WNCouples/Drishti - Chiraag- Bali by WeddingNama - 12_19_2025 8-00-23 PM/*.{jpg,jpeg,png}',
    { eager: true, as: 'url' }
  )

  const drishtiChiraagImages = Object.entries(drishtiChiraagImageModules)
    .map(([path, url]) => url)
    .filter(url => !url.includes('default-skin') && !url.includes('image-protect')) // Filter out non-image files

  // Load images for Sanjana & Shamit from local assets
  const sanjanaShamitImageModules = import.meta.glob(
    '../assets/WNCouples/Sanjana - Shamit- Mumbai by WeddingNama - 12_19_2025 8-03-12 PM/*.{jpg,jpeg,png}',
    { eager: true, as: 'url' }
  )

  const sanjanaShamitImages = Object.entries(sanjanaShamitImageModules)
    .map(([path, url]) => url)
    .filter(url => !url.includes('default-skin') && !url.includes('image-protect')) // Filter out non-image files

  // Load images for Prachi & Dev from local assets
  const prachiDevImageModules = import.meta.glob(
    '../assets/WNCouples/Prachi - Dev- Udaipur by WeddingNama - 12_19_2025 8-06-05 PM/*.{jpg,jpeg,png}',
    { eager: true, as: 'url' }
  )

  const prachiDevImages = Object.entries(prachiDevImageModules)
    .map(([path, url]) => url)
    .filter(url => !url.includes('default-skin') && !url.includes('image-protect')) // Filter out non-image files

  // Load images for Meera & Jay from local assets
  const meeraJayImageModules = import.meta.glob(
    '../assets/WNCouples/Meera - Jay- Mexico by WeddingNama - 12_19_2025 8-08-50 PM/*.{jpg,jpeg,png}',
    { eager: true, as: 'url' }
  )

  const meeraJayImages = Object.entries(meeraJayImageModules)
    .map(([path, url]) => url)
    .filter(url => !url.includes('default-skin') && !url.includes('image-protect')) // Filter out non-image files

  // Load images for Niki & Sid from local assets
  const nikiSidImageModules = import.meta.glob(
    '../assets/WNCouples/Niki - Sid- Goa by WeddingNama - 12_19_2025 8-18-23 PM/*.{jpg,jpeg,png}',
    { eager: true, as: 'url' }
  )

  const nikiSidImages = Object.entries(nikiSidImageModules)
    .map(([path, url]) => url)
    .filter(url => !url.includes('default-skin') && !url.includes('image-protect')) // Filter out non-image files

  // Load images for Anjali & Ishaan from local assets
  const anjaliIshaanImageModules = import.meta.glob(
    '../assets/WNCouples/Anjali - Ishaan- Mumbai by WeddingNama - 12_19_2025 8-20-59 PM/*.{jpg,jpeg,png}',
    { eager: true, as: 'url' }
  )

  const anjaliIshaanImages = Object.entries(anjaliIshaanImageModules)
    .map(([path, url]) => url)
    .filter(url => !url.includes('default-skin') && !url.includes('image-protect')) // Filter out non-image files

  // Story data - in a real app, this would come from an API
  const stories = {
    'aanchalandraghav': {
      name: 'Aanchal & Raghav',
      location: 'Turkey',
      coverImage: aanchalRaghavImages[0] || 'https://images.pixieset.com/94564117/099cb797487c6b3befded8674425e088-cover-large.jpg',
      images: aanchalRaghavImages,
    },
    'nikitaandrishi': {
      name: 'Nikita & Rishi',
      location: 'Greece',
      coverImage: nikitaRishiImages[0] || 'https://images.pixieset.com/829726201/4c7a1652d3ee37ed3ff922665a4a9fc0-cover-large.jpg',
      images: nikitaRishiImages,
    },
    'natashaandaadil': {
      name: 'Natasha & Aadil',
      location: 'Zanzibar',
      coverImage: natashaAadilImages[0] || 'https://images.pixieset.com/220726201/ec65c63add882ca35c7c92d6a0964a5e-cover-large.jpg',
      images: natashaAadilImages,
    },
    'rheaandrishi': {
      name: 'Rhea & Rishi',
      location: 'Chandigarh',
      coverImage: rheaRishiImages[0] || 'https://images.pixieset.com/751772101/edd1ef46bdc561be2713dc20823b776d-cover-large.jpg',
      images: rheaRishiImages,
    },
    'reshamandjamie': {
      name: 'Resham & Jamie',
      location: 'Australia',
      coverImage: reshamJamieImages[0] || 'https://images.pixieset.com/282472101/2817f96fa5b4741fbab807f6b63d5c4c-cover-large.jpg',
      images: reshamJamieImages,
    },
    'drishtiandchiraag': {
      name: 'Drishti & Chiraag',
      location: 'Bali',
      coverImage: drishtiChiraagImages[0] || 'https://images.pixieset.com/778372101/c8f1c172f73816342ad60df66bc0f375-cover-large.jpg',
      images: drishtiChiraagImages,
    },
    'sanjanaandshamitcopy': {
      name: 'Sanjana & Shamit',
      location: 'Mumbai',
      coverImage: sanjanaShamitImages[0] || 'https://images.pixieset.com/81553397/f204efd7e27f2699e6b5d41692f42583-cover-large.jpg',
      images: sanjanaShamitImages,
    },
    'nikitaandvidit': {
      name: 'N + V',
      location: 'Goa',
      coverImage: 'https://images.pixieset.com/05583187/75071acfc0d38b830b10edaf093e2bf0-cover-large.jpg',
      images: [
        'https://images.pixieset.com/05583187/75071acfc0d38b830b10edaf093e2bf0-cover-large.jpg',
        'https://images.pixieset.com/05583187/75071acfc0d38b830b10edaf093e2bf0-cover-large.jpg',
        'https://images.pixieset.com/05583187/75071acfc0d38b830b10edaf093e2bf0-cover-large.jpg',
        'https://images.pixieset.com/05583187/75071acfc0d38b830b10edaf093e2bf0-cover-large.jpg',
        'https://images.pixieset.com/05583187/75071acfc0d38b830b10edaf093e2bf0-cover-large.jpg',
        'https://images.pixieset.com/05583187/75071acfc0d38b830b10edaf093e2bf0-cover-large.jpg',
        'https://images.pixieset.com/05583187/75071acfc0d38b830b10edaf093e2bf0-cover-large.jpg',
        'https://images.pixieset.com/05583187/75071acfc0d38b830b10edaf093e2bf0-cover-large.jpg',
        'https://images.pixieset.com/05583187/75071acfc0d38b830b10edaf093e2bf0-cover-large.jpg',
      ],
    },
    'prachianddev': {
      name: 'Prachi & Dev',
      location: 'Udaipur',
      coverImage: prachiDevImages[0] || 'https://images.pixieset.com/56745727/0b1a57e271ccb8dd46720bbbf3e1929c-cover-large.jpg',
      images: prachiDevImages,
    },
    'meeraandjay': {
      name: 'Meera & Jay',
      location: 'Mexico',
      coverImage: meeraJayImages[0] || 'https://images.pixieset.com/14648327/01ad76e1409ee11cdc199148d8ff1ee6-cover-large.jpg',
      images: meeraJayImages,
    },
    'nikiandsid': {
      name: 'Niki & Sid',
      location: 'Goa',
      coverImage: nikiSidImages[0] || 'https://images.pixieset.com/00038327/36117e34e88281d706c87d163da3c502-cover-large.jpg',
      images: nikiSidImages,
    },
    'anjaliandishaan': {
      name: 'Anjali & Ishaan',
      location: 'Mumbai',
      coverImage: anjaliIshaanImages[0] || 'https://images.pixieset.com/57112136/373e2d342e813fae772eccd1d6ec8c20-cover-large.jpg',
      images: anjaliIshaanImages,
    },
  }

  const story = stories[slug]

  if (!story) {
    return (
      <div className="pt-20 pb-20 text-center">
        <h1 className="text-4xl font-montserrat font-light text-gray-800 mb-4 uppercase">Story Not Found</h1>
        <Link to="/couple-stories" className="text-gray-800 hover:underline">
          Back to Couple Stories
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img
          src={story.coverImage}
          alt={story.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-light mb-2 uppercase">
              {story.name}
            </h1>
            <p className="text-xl md:text-2xl font-montserrat font-light">
              {story.location}
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {slug === 'meeraandjay' && (
        <section className="w-full bg-white pt-8 md:pt-12 pb-8 md:pb-12">
          <div className="relative w-full" style={{ paddingBottom: '40%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/sIfMlV4WxRI"
              title="Wedding Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8 text-center">
            <Link
              to="/couple-stories"
              className="inline-block px-6 py-2 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors font-montserrat font-light uppercase tracking-wider"
            >
              Back to Stories
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {story.images.map((image, index) => (
              <div key={index} className="group cursor-pointer aspect-[4/3] overflow-hidden">
                <img
                  src={image}
                  alt={`${story.name} - ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoupleStoryDetail

