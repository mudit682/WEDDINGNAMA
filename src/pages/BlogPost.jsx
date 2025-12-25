import { useParams, Link } from 'react-router-dom'

const BlogPost = () => {
  const { slug } = useParams()

  // Blog post data - in a real app, this would come from an API
  const blogPosts = {
    'love-amidst-the-scottish-highlands': {
      title: 'Love amidst the Scottish Highlands!',
      date: 'August 20, 2024',
      category: 'Pre Wedding',
      heroImage: 'https://images-pw.pixieset.com/elementfield/qkOo9Qr/0_CoupleShoot_144-c3c127a4-1000.jpg',
      subtitle: "Capturing Love Amidst the Scottish Highlands: Shreya & Vishal's Pre-Wedding Shoot",
      content: [
        {
          type: 'paragraph',
          text: "Scotland had always been on our bucket list, and it's not hard to see why. The landscapes are simply awe-inspiring, offering wide-open spaces that make for beautiful backdrops in any photograph. When Ankita and I heard that Shreya had fond memories of visiting Scotland as a child, we knew we had to make it the setting for her and Vishal's pre-wedding shoot. The idea of reliving those memories while creating new ones with Vishal made it the perfect choice. When we pitched the idea to them, they were beyond excited! And thus began this very interesting journey through the Scottish highlands! But first, let's take a deep breath and admire this gorgeous couple standing against this gorgeous backdrop of Tantallon castle (This cliff-top castle was headquarters for the notorious 'Red Douglas' family. Their commanding coastal fortress was a place of business and banquets, battle and bloodshed. Whoops!) We seized the rare sunlight scene and made the most of it, capturing every moment until it faded away..."
        },
        {
          type: 'image',
          url: 'https://images-pw.pixieset.com/elementfield/Jx7rnpK/0_CoupleShoot_064-2d1a4ed2-2500.jpg',
          alt: 'Shreya & Vishal in the Scottish Highlands'
        },
        {
          type: 'paragraph',
          text: "London-born Shreya and Vishal were set to tie the knot in Gujarat, India, with a big gathering of friends and family. But before the celebration, they wanted a quiet escape, a chance to enjoy some intimate moments together, surrounded by nature's beauty. Scotland offered just that—serenity, breathtaking landscapes, and a touch of adventure."
        },
        {
          type: 'paragraph',
          text: "Planning this shoot was an adventure in itself. Scotland isn't a typical destination for pre-wedding shoots, mainly because it's not the easiest place to get around. You really need a car to explore, and even then, it's a challenge to fit in all the beautiful locations within a short time. We decided to stay and shoot for five days, giving us enough time to explore and capture the best of what Scotland had to offer. The weather was the biggest challenge! It rained most of the time we were there and it was chilly and windy! Kudos to Shreya & Vishal whose enthusiasm and love for photographs warmed us all!"
        },
        {
          type: 'paragraph',
          text: "We flew into Edinburgh. Vijay, Shreya's dad's driver picked up in a 7-seater car that would be our ride for the next few days. We had just wrapped up a wedding shoot in Cyprus, so we were already in the zone, ready to dive into this new adventure. Scroll down all the way for the rare BTS (We managed to capture a few frames of us beind the scenes, the place was so picturesque that it would be a crime not to capture this!)"
        },
        {
          type: 'twoImages',
          images: [
            {
              url: 'https://images-pw.pixieset.com/elementfield/WK1Z9o3/0_CoupleShoot_001-83478388-1500.jpg',
              alt: 'Behind the scenes in Scotland'
            },
            {
              url: 'https://images-pw.pixieset.com/elementfield/VK9rL3d/0_CoupleShoot_005-fb52a64f-1500.jpg',
              alt: 'Behind the scenes in Scotland'
            }
          ]
        },
        {
          type: 'paragraph',
          text: "Our first stop was Aberfeldy, Kenmore, the moment the sun came out, the team went around the region looking for other awe-inspiring backdrops, and the Scottish Highlands did not disappoint. There was a serene lake right next door where we encountered swans and the shutterbug in us could not wait any longer for the shoot to begin! We stayed at a stunning villa in the Scottish Highlands, where Shreya even cooked us homemade meals! She called us from the store to ask about our preferences (I mean talk about a warm, caring person) . When we arrived, the food was laid out beautifully on the table, complete with flowers and glowing candles (and wine). The kitchen was stocked with all the essentials, and we were truly taken care of. It was a small gesture, but it made a big difference, turning our work trip into a warm, memorable experience."
        },
        {
          type: 'paragraph',
          text: "The first morning we walked around the landscape, of course the first stop was the lake! Then we got into the car and started driving around. We had to stop almost every 5 minutes because we were able to spot a unique frame every five minutes! We even spotted orange sheep (which we later figured were orange so that they could be spotted easily against the vast green landscape by the farm owners from a distance!) with whom we shot! The fall colours and the brown tall grass was also beautiful beyond words! Well you can see them in the photographs. One of the reasons why we love photographs, makes the entire scene a lot more tangible!"
        },
        {
          type: 'paragraph',
          text: "We continued our journey through Glencoe via Glenfinnan, a route that took us past rugged hills, shimmering lochs, and dense forests. The landscape here is so diverse, offering a mix of history, nature, and scenic beauty. One of our stops was at Loch Shiel, where we were hoping to catch a glimpse of the Jacobite Steam Train, famously known as the Hogwarts Express. Unfortunately, the train wasn't running that day, but the scenery more than made up for it. You can see in. the behind the scenes photos how the cloud cover shifted for just a second and bathed the entire valley with the warmest glow! We are definitely going to visit this place again to spot the Hogwarts express and imagine Harry hanging from the door while Ron flew the Ford Angelia right above it!"
        },
        {
          type: 'paragraph',
          text: "Shooting in such a location comes with its own set of challenges. The unpredictable weather was one of them. October in Scotland can be cold and windy, especially in exposed areas like Tantallon Castle, where the wind seemed determined to freeze our fingers. We had to make sure Shreya and Vishal were dressed warmly so they could truly enjoy the experience. When the rare sunlight broke through, we shot like crazy to make the most of it!"
        },
        {
          type: 'threeImages',
          images: [
            {
              url: 'https://images-pw.pixieset.com/elementfield/od1Yn3J/0_CoupleShoot_009-5837def3-1500.jpg',
              alt: 'Scottish Highlands photography'
            },
            {
              url: 'https://images-pw.pixieset.com/elementfield/lRneYZo/0_CoupleShoot_011-4ab306c5-1500.jpg',
              alt: 'Scottish Highlands photography'
            },
            {
              url: 'https://images-pw.pixieset.com/elementfield/vwbRjPv/0_CoupleShoot_018-628fef30-1500.jpg',
              alt: 'Scottish Highlands photography'
            }
          ]
        },
        {
          type: 'paragraph',
          text: "The following day brought heavy rain and winds strong enough to ground our drone. But we didn't let that stop us. We had to use the car heater to beat the bitter chill. We even got photographs near a cascading waterfall—a place Shreya had visited as a child. It was like coming full circle for her."
        },
        {
          type: 'paragraph',
          text: "Things we love about traveling for shoots is the chance to explore new places and meet new people. Scotland is a place where you don't always know where your next shoot location will be. Sometimes, you have to park your car and walk for a bit to find that perfect spot. But that's all part of the adventure. We made it a point to talk to locals and get their recommendations. Scotland places minimal restrictions on photography, so we had the freedom to shoot wherever we wanted, which was a huge plus."
        },
        {
          type: 'paragraph',
          text: "On our last day we came across a castle with beautiful architecture on the other side of the cliff. The interiors of the castle were a work in progress and it was giving us 'Downton Abbey' feels! We met the caretaker who was there and as soon as he heard we are wedding photographers gave us quite a warm welcome! After capturing a few shots using the castle as a backdrop, we were ready to leave when the owner invited us in. He gave us a detailed tour of the castle, explaining how wonderful it was for a destination wedding. He insisted we take a couple of photographs inside and even publish them. Although we were late for our flights, we couldn't refuse the proposal!"
        },
        {
          type: 'paragraph',
          text: "In the end, despite the challenges, the shoot went incredibly well. We faced our fair share of surprises, but that's part of the fun when you're shooting in a place as unpredictable and beautiful as Scotland. Shreya and Vishal were the most fun couple to shoot with. They trusted us to capture their love in a way that was true to them. We had a great time capturing their wedding as well but that's a story for another time!"
        }
      ],
      tags: ['Pre wedding', 'pre wedding photoshoot', 'WeddingNama', 'Europe', 'Scotland'],
      relatedPosts: [
        {
          title: 'A Dreamy Venetian Affair!',
          date: 'June 10, 2024',
          category: 'Pre Wedding',
          slug: 'a-dreamy-venetian-affair',
          image: 'https://images-pw.pixieset.com/elementfield/Db85jDL/SD_WN_ItalyCoupleshoot_115-5ca28f1d-1000.jpg'
        },
        {
          title: 'From Tinder to Forever: A Love Story',
          date: 'June 24, 2024',
          category: 'Pre Wedding',
          slug: 'from-tinder-to-forever',
          image: 'https://images-pw.pixieset.com/elementfield/1kopaJp/01_Couple-Shoot_082-COVER-14058d8e-1000.jpg'
        },
        {
          title: 'Marry your best friend!',
          date: 'July 6, 2024',
          category: 'Wedding',
          slug: 'marry-your-best-friend',
          image: 'https://images-pw.pixieset.com/elementfield/6xAWKqK/WN_KA_03_WeddingReception_467-472b177d-1000.jpg'
        }
      ]
    },
    'marry-your-best-friend': {
      title: 'Marry your best friend!',
      date: 'July 6, 2024',
      category: 'Wedding',
      heroImage: 'https://images-pw.pixieset.com/elementfield/6xAWKqK/WN_KA_03_WeddingReception_467-472b177d-1000.jpg',
      subtitle: "From Friends to FOREVER: Kunj and Ashish's Adorable Journey",
      content: [
        {
          type: 'paragraph',
          text: "N'tima Preusser said 'Marry your best friend'. She says to 'find the strongest, happiest friendship in the person you fall in love with.' It's not very rare to find love in friendship, especially when you've known the person since you were little kids. When Kunj and Ashish met in school, little did they know that they'd fall in love and spend the rest of their lives together. Though everyone around them knew, they kept denying their feeling, until one day they realized that they have always loved each other."
        },
        {
          type: 'twoImages',
          images: [
            {
              url: 'https://images-pw.pixieset.com/elementfield/QXzRAz7/WN_KA_04_Cocktail_037-7d0aa974-1500.jpg',
              alt: 'Kunj and Ashish wedding'
            },
            {
              url: 'https://images-pw.pixieset.com/elementfield/7OAvJAq/WN_KA_03_WeddingReception_471-fdef1c6e-1500.jpg',
              alt: 'Kunj and Ashish wedding reception'
            }
          ]
        },
        {
          type: 'paragraph',
          text: "When we met Kunj and Ashish for the first time, we could see the twinkle in their eyes when they looked at each other. Though they have opposing personalities, they complement each other in every aspect. Even when it came to planning the wedding, they both had similar ideas on how they'd like to celebrate the most important day of their lives. It was great to see their energy and enthusiasm for every detail of the wedding as they wanted to make the wedding as special and personal as they could for themselves as well as all their loved ones."
        },
        {
          type: 'twoImages',
          images: [
            {
              url: 'https://images-pw.pixieset.com/elementfield/WK4rVMY/WN_KA_02_HaldiMehendi_050-8d68374f-1500.jpg',
              alt: 'Haldi ceremony'
            },
            {
              url: 'https://images-pw.pixieset.com/elementfield/VKpDV6m/WN_KA_04_Cocktail_497-615a14e2-1500.jpg',
              alt: 'Cocktail celebration'
            }
          ]
        },
        {
          type: 'paragraph',
          text: "One of the special events in their entire wedding celebration was their Haldi ceremony which was held at Kunj's home itself. They were very clear from the start that they wanted an intimate ceremony with only their close family and friends present. While capturing some moments, we realized that the camera loves them! Their interactions were so natural that every photo was priceless. Once the ceremony began, we anticipated it to turn out to be crazy. And it did! It started with some sweet moments between the parents and the couple. But as soon as the friends got them at their disposal, every possible food item present there was poured on Kunj and Ashish! From coconut chutney to schezwan sauce to cold drinks! But that's what makes the Haldi epic, right?"
        },
        {
          type: 'twoImagesTall',
          images: [
            {
              url: 'https://images-pw.pixieset.com/elementfield/deWaVza/WN_KA_02_HaldiMehendi_213-49476df2-1500.jpg',
              alt: 'Haldi ceremony moments'
            },
            {
              url: 'https://images-pw.pixieset.com/elementfield/0JAlkrx/WN_KA_02_HaldiMehendi_254-6690b965-1500.jpg',
              alt: 'Haldi ceremony celebration'
            }
          ]
        },
        {
          type: 'paragraph',
          text: "Their wedding was such a beautiful affair as well. It was nothing less than a dream. What made Kunj's bridal portraits stunning was her grace, while Ashish showed the exact definition of cool. While Ashish raged at his baraat and his friends carried him to the mandap, Kunj's friends were a step ahead to make her groove to the dholwalas. We were ecstatic to capture the varmala during sunset, the light and the moment were all perfect! The moment that stole the show was Ashish's request for a kiss on the cheek by Kunj during their varmala. The beautiful mandap at Mahalaxmi racecourse with the Mumbai skyline looked so picturesque. Some fun moments during the pheras aptly shows how perfect these two are for each other!"
        },
        {
          type: 'paragraph',
          text: "Kunj and Ashish's wedding portrays the true meaning of companionship and how you can find the love of your life in a lifelong friendship.."
        },
        {
          type: 'credits',
          credits: [
            { label: 'Photographs & Film by', value: '@weddingnama' },
            { label: 'WN Bride', value: '@kunjpandya18' },
            { label: 'WN Groom', value: '@ashishsoomaney' },
            { label: 'Planning by', value: '@shreem_events' },
            { label: "Wedding Décor", value: '@its.an.affair' },
            { label: "Bride's Wedding Outfit", value: '@taruntahiliani' },
            { label: "Bride's Jewellery", value: '@maalkafinejewellery' },
            { label: 'Wedding MUA', value: '@dramaeinbaaz' },
            { label: "Groom's Wedding Outfit", value: '@rahulmishra_7' },
            { label: 'Wedding Invites', value: '@perfectinvites.in' },
            { label: 'Wedding Venue', value: 'The Turf Club, Mumbai' }
          ]
        }
      ],
      tags: ['mumbai', 'indian wedding', 'weddingnama', 'love story'],
      relatedPosts: [
        {
          title: 'A Dreamy Venetian Affair!',
          date: 'June 10, 2024',
          category: 'Pre Wedding',
          slug: 'a-dreamy-venetian-affair',
          image: 'https://images-pw.pixieset.com/elementfield/Db85jDL/SD_WN_ItalyCoupleshoot_115-5ca28f1d-1000.jpg'
        },
        {
          title: 'From Tinder to Forever: A Love Story',
          date: 'June 24, 2024',
          category: 'Pre Wedding',
          slug: 'from-tinder-to-forever',
          image: 'https://images-pw.pixieset.com/elementfield/1kopaJp/01_Couple-Shoot_082-COVER-14058d8e-1000.jpg'
        },
        {
          title: 'From Schoolmates to Soulmates',
          date: 'July 3, 2024',
          category: 'Wedding',
          slug: 'from-schoolmates-to-soulmates',
          image: 'https://images-pw.pixieset.com/elementfield/84AlRZK/WN_Sim-Dhruv_157-7b79f02f-1000.jpg'
        }
      ]
    },
    'from-schoolmates-to-soulmates': {
      title: 'From Schoolmates to Soulmates',
      date: 'July 3, 2024',
      category: 'Wedding',
      heroImage: 'https://images-pw.pixieset.com/elementfield/84AlRZK/WN_Sim-Dhruv_157-7b79f02f-1000.jpg',
      subtitle: "A Winter Fairytale in Jaipur: Simran & Dhruv's Wedding",
      content: [
        {
          type: 'paragraph',
          text: "Those high school sweethearts who are soulmates now? Yeah, their December wedding in Jaipur totally stole our hearts! Simran and Dhruv's love story culminated in a magical wedding at the majestic Hyatt Regency Jaipur Mansarovar. It was a celebration overflowing with love, tradition, and heartwarming connections. Our journey with this couple began well before the wedding day. We shared an unforgettable adventure capturing their pre-wedding photos in Italy. It wasn't just about stunning visuals; it was about forging a bond. We laughed, we shared stories, and we created memories that set the stage for what was to come. The photos and videos were a hit, solidifying a connection that went beyond photographers and clients."
        },
        {
          type: 'paragraph',
          text: "Fast forward to the wedding day, and the warmth from the pre-wedding shoot continued to shine. This trust allowed us to seamlessly capture intimate moments amidst the bustling festivities. From their first emotional glance to heartwarming family interactions, every photo overflowed with genuine emotion. We'll never forget Simran reading a heartfelt letter to Dhruv, bringing tears to everyone's eyes, including ours. Dhruv returned the gesture with a beautiful letter of his own. These raw, real moments are the essence of what makes our job so special."
        },
        {
          type: 'paragraph',
          text: "Despite the grand scale of 400 guests, Simran and Dhruv's focus on authenticity and connection created an intimate atmosphere. Their enthusiasm for being photographed ensured we captured every perfect moment. Their families welcomed us with open arms, making us feel like part of the celebration."
        },
        {
          type: 'paragraph',
          text: "One unforgettable scene unfolded just before the first look. Dharmil himself offered Dhruv a calming back massage, showcasing the level of comfort and trust we shared."
        },
        {
          type: 'paragraph',
          text: "We recommended a first look before Dhruv went for his Baraat to get beautiful daytime shots despite a late evening ceremony. The pure joy and anticipation on their faces as they saw each other was breathtaking. (Scroll till the end for BTS!)"
        },
        {
          type: 'paragraph',
          text: "The new Hyatt Regency Jaipur Mansarovar provided a stunning backdrop, its architecture and warm staff complementing the Rajasthani-themed shots. Every corner offered a unique setting, making our job both effortless and delightful."
        },
        {
          type: 'paragraph',
          text: "The celebration commenced with a welcoming dinner, followed by a vibrant carnival that kept the guests entertained. Dhruv's grand baraat arrival on an elephant was a spectacular sight. The energetic cocktail party and lively sangeet night showcased everyone's love for the couple."
        },
        {
          type: 'paragraph',
          text: "When we finally presented Simran and Dhruv with their photos and videos, their response was beyond heartening."
        },
        {
          type: 'paragraph',
          text: "They wrote:"
        },
        {
          type: 'quote',
          text: "\"We knew WeddingNama had to be our photographer after seeing you capture a friend's after- party. We're so glad we chose you! You've become family, and the experience was incredible. We couldn't have asked for anything better. You made it fun, easy-going, and the best time of our lives!\n\nThank you so much, WeddingNama! We love you!\""
        },
        {
          type: 'paragraph',
          text: "Moments like these remind us of our purpose. Capturing and preserving such profound emotions is a true privilege. Simran and Dhruv's wedding was a beautiful reminder that love, in its purest form, is the heart of every celebration!"
        }
      ],
      tags: ['jaipur', 'indian wedding', 'weddingnama', 'winter wedding'],
      relatedPosts: [
        {
          title: 'From Tinder to Forever: A Love Story',
          date: 'June 24, 2024',
          category: 'Pre Wedding',
          slug: 'from-tinder-to-forever',
          image: 'https://images-pw.pixieset.com/elementfield/1kopaJp/01_Couple-Shoot_082-COVER-14058d8e-1000.jpg'
        },
        {
          title: 'Marry your best friend!',
          date: 'July 6, 2024',
          category: 'Wedding',
          slug: 'marry-your-best-friend',
          image: 'https://images-pw.pixieset.com/elementfield/6xAWKqK/WN_KA_03_WeddingReception_467-472b177d-1000.jpg'
        },
        {
          title: 'Love amidst the Scottish Highlands!',
          date: 'August 20, 2024',
          category: 'Pre Wedding',
          slug: 'love-amidst-the-scottish-highlands',
          image: 'https://images-pw.pixieset.com/elementfield/qkOo9Qr/0_CoupleShoot_144-c3c127a4-1000.jpg'
        }
      ]
    },
    'from-tinder-to-forever': {
      title: 'From Tinder to Forever: A Love Story',
      date: 'June 24, 2024',
      category: 'Pre Wedding',
      heroImage: 'https://images-pw.pixieset.com/elementfield/1kopaJp/01_Couple-Shoot_082-COVER-14058d8e-1000.jpg',
      subtitle: "From Tinder to Forever: Kajal & Sachin's Love Story",
      content: [
        {
          type: 'paragraph',
          text: "Hey everyone, Ankita and Akash here, from WeddingNama! We've been in this crazy, beautiful world of wedding photography for over a decade now and each new wedding brings its own unique excitement and charm. We're passionate about capturing the love and joy in every couple's story, and we approach each new project with fresh enthusiasm and a keen eye for those unforgettable moments."
        },
        {
          type: 'paragraph',
          text: "Today, we're thrilled to share the beautiful story of Kajal and Sachin. This couple's journey is truly inspiring. Despite facing numerous challenges, including Sachin's extraordinary resilience in the face of physical adversity, they have built a life filled with love, strength, and beauty. Their story is a testament to the power of love and determination, and we feel incredibly honored to have been chosen to capture their special moments."
        },
        {
          type: 'paragraph',
          text: "We met Sachin way back in 2015, shooting his brother's wedding in Thailand. Even back then, he was the life of the party, full of energy. Life threw Sachin a curveball back in 2008, but this champion never let it dim his fire. Three-time national boccia gold medallist, entrepreneur extraordinaire, and he maneuvers his high-tech wheels like a pro gamer? Talk about an inspiration! And then came Kajal, a ray of sunshine who swiped right into Sachin's life on Tinder. Let's just say, sparks flew! We can't even describe how much fun we had filming their interviews. These two lovebirds bickered sweetly, their playful banter filling the room with warmth. And Sachin's bond with his friends? Pure gold. Their unwavering support for him shone through the entire wedding. There were happy tears all around on the wedding day. We've been in this business for over a decade, but this one? This was special. Even for us, there wasn't a dry eye in the house."
        },
        {
          type: 'paragraph',
          text: "Ankita here, and let me tell you, Kajal is a dream! She's this incredibly warm, caring soul who makes you feel like you've known her forever. She's a dentist and true to her profession has the warmest brightest smile! Together, these two are a powerhouse of fun and pure love."
        },
        {
          type: 'paragraph',
          text: "Sachin's incredible determination shone through when it came to picking their wedding venue. Accessibility was his top priority, and seeing a hotel prioritize that too – well, it was a beautiful thing. It made us realize how important these little things are – choosing a venue that's welcoming and inclusive, not just stunning. It has to be crafted for comfort and convenience for everyone."
        },
        {
          type: 'paragraph',
          text: "Speaking of stunning backdrops, remember when we were brainstorming locations for their pre-wedding shoot? Well, after much deliberation, we landed on the majestic ITC Grand Bharat in Delhi. Ankita has a personal connection to this place, having worked on its design way back when she was working as an architect in Delhi (life truly does come full circle!). The ITC's commitment to smooth accessibility was a game-changer, allowing us to capture the couple's love in every gorgeous corner of the hotel."
        },
        {
          type: 'paragraph',
          text: "The shoot itself? Pure, unadulterated emotion. We kept it short, sweet, and focused on the raw love between these two. A single session, one evening, bathed in that magical golden light. And guess what? Sachin had a surprise up his sleeve for Kajal! He used those breathtaking pre-wedding photos and some AI magic to create a fairytale-worthy Disney proposal video. Needless to say, the tears flowed freely!"
        },
        {
          type: 'paragraph',
          text: "Honestly, guys, we feel incredibly lucky to have been a part of Kajal and Sachin's incredible journey. It's a story of love, resilience, and living life on your own terms. We can't wait to see what the future holds for them – we know it'll be as magical as their pre-wedding shoot, if not more! Hooked? Don't worry we got you covered, the story of their wedding is coming up next!"
        },
        {
          type: 'paragraph',
          text: "At the end of the day, it's couples like Kajal and Sachin who remind us why we do what we do. Their love, energy, and zest for life make every moment behind the lens so special. Here's to more beautiful stories and unforgettable shoots! Cheers!"
        }
      ],
      tags: ['Pre wedding', 'Delhi', 'photoshoot', 'love story', 'pre wedding photoshoot', 'WeddingNama'],
      relatedPosts: [
        {
          title: 'A Dreamy Venetian Affair!',
          date: 'June 10, 2024',
          category: 'Pre Wedding',
          slug: 'a-dreamy-venetian-affair',
          image: 'https://images-pw.pixieset.com/elementfield/Db85jDL/SD_WN_ItalyCoupleshoot_115-5ca28f1d-1000.jpg'
        },
        {
          title: 'Marry your best friend!',
          date: 'July 6, 2024',
          category: 'Wedding',
          slug: 'marry-your-best-friend',
          image: 'https://images-pw.pixieset.com/elementfield/6xAWKqK/WN_KA_03_WeddingReception_467-472b177d-1000.jpg'
        },
        {
          title: 'Love amidst the Scottish Highlands!',
          date: 'August 20, 2024',
          category: 'Pre Wedding',
          slug: 'love-amidst-the-scottish-highlands',
          image: 'https://images-pw.pixieset.com/elementfield/qkOo9Qr/0_CoupleShoot_144-c3c127a4-1000.jpg'
        }
      ]
    },
    'a-dreamy-venetian-affair': {
      title: 'A Dreamy Venetian Affair!',
      date: 'June 10, 2024',
      category: 'Pre Wedding',
      heroImage: 'https://images-pw.pixieset.com/elementfield/Db85jDL/SD_WN_ItalyCoupleshoot_115-5ca28f1d-1000.jpg',
      subtitle: "Simran & Dhruv's Pre-Wedding Shoot",
      content: [
        {
          type: 'paragraph',
          text: "As wedding photographers, we have the joy of capturing countless love stories, but there's something truly special about pre-wedding shoots. They offer a unique chance to capture the essence of a couple's love away from the hustle and bustle of the wedding day. This was especially important for Simran and Dhruv, whose upcoming wedding at the Hyatt Regency Jaipur Mansarovar was set to be a grand affair with around 400 guests."
        },
        {
          type: 'paragraph',
          text: "From the outset, Simran and Dhruv were clear—they wanted a pre-wedding shoot. They knew that amidst the festivities and rituals, it would be challenging to find moments just for the two of them. They wanted these photos not just as memories, but to include in their invites and share in the countdown to their big day."
        },
        {
          type: 'paragraph',
          text: "Our initial meetings were filled with excitement as we brainstormed locations. September was ideal for Europe, with its pleasant weather and picturesque landscapes. We finally settled on Italy, a country that offers an incredible variety of backdrops. Simran and Dhruv were particularly drawn to Venice, with its romantic canals, and they were also keen on exploring historical and architectural sites. So we mixed it up with the locations and got a really good variety. We planned a 5 day shoot starting with a day in Milan, then we headed to the dreamy Lake Como, then to the canals of Venice and ended our trip in Florence."
        },
        {
          type: 'paragraph',
          text: "The concept for the shoot was to keep things natural and authentic. We didn't want to create something overly staged; instead, we aimed for a series of moments that felt genuine. We encouraged them to engage in activities they would typically do on a date—sitting in a park, taking photos of each other, sharing a pizza, tasting wine, and just enjoying each other's company. Our goal was to capture their raw emotions and the fun they naturally have together."
        },
        {
          type: 'paragraph',
          text: "Executing this vision came with its own set of challenges. Traveling to Italy with all our equipment required meticulous planning. We aimed to capture the best light during the golden hours of sunrise and sunset, which meant early mornings and late evenings. Italy's extended golden hours were a blessing, but coordinating our schedule to cover Milan, Lake Como, Florence, and Venice was quite a feat."
        },
        {
          type: 'paragraph',
          text: "Getting the necessary permissions to shoot at these iconic locations was a hurdle. We essentially did a virtual recce to ensure everything was in place. September, being a busy tourist season, meant crowded streets. But rather than shy away from it, we embraced the hustle and bustle, capturing Simran and Dhruv amidst the lively crowd. It added a beautiful documentary style to the shoot, making it feel even more authentic. Of course, we also managed to snag some stunning shots with fewer people around, balancing the chaos with serene moments."
        },
        {
          type: 'paragraph',
          text: "Despite the challenges, the shoot was an incredible success. Simran and Dhruv were naturals, and their chemistry made our job easy. The entire experience was enriching—not just for them but for us as well. Building that rapport during the pre-wedding shoot allowed us to capture their wedding day even more naturally."
        },
        {
          type: 'paragraph',
          text: "The final video was a true reflection of our time together—fun, genuine, and full of life. The chosen song and the flow of the video perfectly matched the tone we had envisioned. It was a beautiful prelude to their grand wedding, and we were thrilled to be a part of their journey."
        },
        {
          type: 'paragraph',
          text: "Here's to our amazing WN couple Simran and Dhruv, and to capturing many more love stories at WeddingNama!"
        }
      ],
      tags: ['Pre Wedding', 'pre wedding photoshoot', 'WeddingNama', 'Italy', 'Europe'],
      relatedPosts: [
        {
          title: 'From Tinder to Forever: A Love Story',
          date: 'June 24, 2024',
          category: 'Pre Wedding',
          slug: 'from-tinder-to-forever',
          image: 'https://images-pw.pixieset.com/elementfield/1kopaJp/01_Couple-Shoot_082-COVER-14058d8e-1000.jpg'
        },
        {
          title: 'Marry your best friend!',
          date: 'July 6, 2024',
          category: 'Wedding',
          slug: 'marry-your-best-friend',
          image: 'https://images-pw.pixieset.com/elementfield/6xAWKqK/WN_KA_03_WeddingReception_467-472b177d-1000.jpg'
        },
        {
          title: 'Love amidst the Scottish Highlands!',
          date: 'August 20, 2024',
          category: 'Pre Wedding',
          slug: 'love-amidst-the-scottish-highlands',
          image: 'https://images-pw.pixieset.com/elementfield/qkOo9Qr/0_CoupleShoot_144-c3c127a4-1000.jpg'
        }
      ]
    }
  }

  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="pt-20 pb-20 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section with Overlay Text */}
      <section className="relative w-full">
        <div className="relative h-screen overflow-hidden">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Title and Meta Overlay at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-10 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat font-light text-white mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-base md:text-lg">
                <span>{post.date}</span>
                <span>—</span>
                <span className="uppercase tracking-wider">{post.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="w-[90%] mx-auto px-4">

          {/* Subtitle */}
          {post.subtitle && (
            <h2 className="text-2xl md:text-3xl font-montserrat font-light text-primary mb-8 md:mb-12">
              {post.subtitle}
            </h2>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((section, index) => {
              if (section.type === 'image') {
                return (
                  <div key={index} className="my-8 md:my-12 w-screen -ml-[calc((100vw-90%)/2+1rem)] -mr-[calc((100vw-90%)/2+1rem)]">
                    <img
                      src={section.url}
                      alt={section.alt || ''}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )
              }
              if (section.type === 'twoImages') {
                return (
                  <div key={index} className="my-8 md:my-12 flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl w-full">
                      {section.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="relative w-full aspect-[4/3] overflow-hidden">
                          <img
                            src={img.url}
                            alt={img.alt || ''}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }
              if (section.type === 'twoImagesTall') {
                return (
                  <div key={index} className="my-8 md:my-12 flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-[80%]">
                      {section.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="relative w-full aspect-[2/3] overflow-hidden">
                          <img
                            src={img.url}
                            alt={img.alt || ''}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }
              if (section.type === 'threeImages') {
                return (
                  <div key={index} className="my-8 md:my-12 w-screen -ml-[calc((100vw-90%)/2+1rem)] -mr-[calc((100vw-90%)/2+1rem)]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                      {section.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="relative w-full aspect-[4/3] overflow-hidden">
                          <img
                            src={img.url}
                            alt={img.alt || ''}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }
              if (section.type === 'credits') {
                return (
                  <div key={index} className="my-12 md:my-16 pt-8 border-t border-primary/20">
                    <div className="space-y-3 font-georgia text-center">
                      {section.credits.map((credit, creditIndex) => (
                        <div key={creditIndex} className="text-primary/90">
                          <span className="font-medium">{credit.label}:</span>{' '}
                          <span>{credit.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }
              if (section.type === 'quote') {
                return (
                  <blockquote
                    key={index}
                    className="my-8 md:my-12 pl-6 md:pl-8 border-l-4 border-primary/30 italic text-primary/90 leading-relaxed text-base md:text-lg font-georgia"
                  >
                    {section.text.split('\n').map((line, lineIndex, array) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < array.length - 1 && <br />}
                      </span>
                    ))}
                  </blockquote>
                )
              }
              return (
                <p
                  key={index}
                  className="text-primary/90 leading-relaxed mb-6 md:mb-8 text-base md:text-lg font-georgia"
                >
                  {section.text}
                </p>
              )
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-primary/20">
            <div className="flex flex-wrap gap-2 justify-center">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-primary/70 bg-primary/5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-12 border-t border-primary/20">
            <h3 className="text-2xl md:text-3xl font-montserrat font-light text-primary mb-8">
              Related Posts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {post.relatedPosts.map((relatedPost, index) => (
                <Link
                  key={index}
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-sm text-primary/60 mb-2">{relatedPost.date}</div>
                  <h4 className="text-xl font-montserrat font-light text-primary group-hover:text-primary/80 transition-colors">
                    {relatedPost.title}
                  </h4>
                  <div className="text-sm text-primary/60 uppercase tracking-wider mt-2">
                    {relatedPost.category}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Back to Blog Link */}
          <div className="mt-12 pt-8 border-t border-primary/20 text-center">
            <Link
              to="/blog"
              className="inline-block text-primary hover:text-primary/80 transition-colors font-georgia"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPost

