const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			shooters: [
				{
					id: 9,
					name: " Call of Duty: Black Ops Cold War ",
					genre: " Shooter",
					publisher: " Activison ",
					ratings: " Mature ",
					photo:
						" https://www.denofgeek.com/wp-content/uploads/2020/09/call-of-duty-black-ops-cold-war-beta-dates.jpg?fit=1920%2C1080 ",
					console: " PS5 ",
					desc:
						"The iconic Black Ops series is back with Call of Duty®: Black Ops Cold War - the direct sequel to the original and fan-favorite Call of Duty®: Black Ops. Black Ops Cold War will drop fans into the depths of the Cold War’s volatile geopolitical battle of the early 1980s. Nothing is ever as it seems in a gripping single-player Campaign, where players will come face-to-face with historical figures and hard truths, as they battle around the globe through iconic locales like East Berlin, Vietnam, Turkey, Soviet KGB headquarters and more. As elite operatives, you will follow the trail of a shadowy figure named Perseus who is on a mission to destabilize the global balance of power and change the course of history. Descend into the dark center of this global conspiracy alongside iconic characters Woods, Mason and Hudson and a new cast of operatives attempting to stop a plot decades in the making.",
					video: "https://www.youtube.com/embed/aTS9n_m7TW0"
				},
				{
					id: 10,
					name: " Red Dead Redemption 2 ",
					genre: " Shooter",
					publisher: " Saber Interaction ",
					ratings: " Mature 17+ ",
					photo:
						"  https://images.pushsquare.com/news/2016/10/feature_what_we_want_from_red_dead_redemption_2_on_ps4/large.jpg ",
					console: " PS5 ",
					desc:
						" America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him. Now featuring additional Story Mode content and a fully-featured Photo Mode, Red Dead Redemption 2 alsoincludes  free access to the shared living world of Red Dead Online, where players take on an array of roles to carve their own unique path on the frontier as they track wanted criminals as a Bounty Hunter, create a business as a Trader, unearth exotic treasures as a Collector or run an underground distillery as a Moonshiner and much more. ",
					video: " https://www.youtube.com/embed/eaW0tYpxyp0"
				},
				{
					id: 11,
					name: " Doom Eternal ",
					genre: " Shooter",
					publisher: " ID Software ",
					ratings: " Mature 17+ ",
					photo: " https://cdn.wccftech.com/wp-content/uploads/2020/01/doom_eternal_4K_art-2060x1159.jpg ",
					console: " PS5 ",
					desc:
						" Doom Eternal is a first-person shooter video game developed by id Software and published by Bethesda Softworks. The sequel to Doom (2016), and the fifth main game in the Doom series, it was released on March 20, 2020, for Windows, PlayStation 4, Stadia and Xbox One, with versions for Nintendo Switch, PlayStation 5 and Xbox Series X and Series S planned. ",
					video: "https://www.youtube.com/embed/FkklG9MA0vM"
				},
				{
					id: 12,
					name: " Halo Infinite ",
					genre: " Shooter",
					publisher: " Bungie ",
					ratings: " Mature ",
					photo: " https://attackofthefanboy.com/wp-content/uploads/2020/07/halo-infinite-free-to-play.jpg ",
					console: " Xbox Series X",
					desc:
						"Halo Infinite is an upcoming first-person shooter game developed by 343 Industries and published by Xbox Game Studios for Microsoft Windows, Xbox One, and Xbox Series X and Series S. The sixth main entry of the Halo series and the fourteenth game overall, it continues the story of the Master Chief as the third chapter of the Reclaimer Saga, following Halo 5: Guardians (2015).",
					video: "https://www.youtube.com/embed/HZtc5-syeAk"
				}
			],
			racings: [
				{
					id: 13,
					name: " Wreckfest ",
					genre: "  Racing ",
					publisher: " Bugbear Entertainment ",
					ratings: " Everyone ",
					photo:
						" https://s3.amazonaws.com/prod-media.gameinformer.com/styles/full/s3/2019/08/29/c5adb779/wreckfest.jpg ",
					console: " PS5 ",
					desc:
						" Wreckfest is a racing video game developed by Bugbear Entertainment and published by THQ Nordic. Wreckfest is described as the spiritual successor to the FlatOut series and a cross between FlatOut, Destruction Derby and cult 1989 PC racer Street Rod. A notable feature of the game engine is the use of soft-body damage modeling, which enables location-based damage that affects the driving dynamics of vehicles in a realistic fashion. After a four-year long early access phase, the Microsoft Windows version was released in June 2018, with PlayStation 4 and Xbox One versions released on August 27, 2019 after multiple delays.",
					video: "https://www.youtube.com/embed/pfMURF7nyrU"
				},
				{
					id: 14,
					name: " Need for Speed: Rivals ",
					genre: " Racing ",
					publisher: " Electronic Arts",
					ratings: " Teen ",
					photo: " https://www.savegamedownload.com/wp-content/uploads/2017/11/nfs-rivals-platinum-ps4.jpg ",
					console: " PS4 ",
					desc:
						" Need for Speed Rivals is a racing video game developed in a collaboration between Ghost Games and Criterion Games, and published by Electronic Arts. It is the twentieth installment in the Need for Speed series and the debut title for Ghost Games, who would be established as the primary developer of the series for all subsequent non-mobile installments up until 2020. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360 and Xbox One in November 2013, and is the final Need for Speed game for both the PlayStation 3 and the Xbox 360. ",
					video: "https://www.youtube.com/embed/xsKHweFi7AU"
				},
				{
					id: 15,
					name: " Monster Jam Steel Titans ",
					genre: " Racing ",
					publisher: " Rainbow Studios",
					ratings: " Everyone ",
					photo: " https://www.teamvvv.com/wp-content/uploads/2019/02/monster-jam-steel-titans-6.jpg ",
					console: "  PS4 ",
					desc:
						" Monster Jam Steel Titans delivers the complete Monster Jam experience for everybody to enjoy! All the trucks, stunts, stadiums, racing and massive air in one game! Play in various game modes including Stadium and outdoor Racing, various Stunt Challenges and Destruction modes! - Drive a MONSTER!",
					video: "https://www.youtube.com/embed/aElJ0jpxVuk"
				},
				{
					id: 16,
					name: " DIRT 5 ",
					genre: " Racing ",
					publisher: " Codemaster ",
					ratings: " Teen ",
					photo: " http://images.gamersyde.com/image_dirt_5-41991-4469_0001.jpg ",
					console: " PS5 ",
					desc:
						" DIRT 5 is the bold new off-road racing experience created by Codemasters. Conquer stunning global routes and drive an iconic roster of cars. Experience a star-studded Career mode, four-player split-screen, the Playgrounds arena creator mode and much more! the increased focus on storytelling and its platforming sections.",
					video: "https://www.youtube.com/embed/cEwzdTcFeYA"
				}
			],
			sports: [
				{
					id: 5,
					name: " NBA 2K21",
					genre: " Sports",
					publisher: " Visual Concepts",
					ratings: " Mature Everyone",
					photo: " https://images.pushsquare.com/screenshots/108613/large.jpg",
					console: " PS5",
					desc:
						" NBA 2K21 is the latest release in the world-renowned, best-selling NBA 2K series. 2K21 leads the charge with next-gen innovations, while continuing to deliver an industry-leading sports video game experience on the current generation of gaming platforms. With extensive improvements upon its best-in-class graphics and gameplay, competitive and community online features, and deep, varied game modes, NBA 2K21 offers one-of-a-kind immersion into all facets of NBA basketball and culture - where Everything is Game.",
					video: " https://www.youtube.com/embed/Ib5ygUYjHZI "
				},
				{
					id: 6,
					name: " Riders Republic",
					genre: " Sports ",
					publisher: " Ubisoft Annecy ",
					ratings: " Mature Everyone ",
					photo:
						" https://cdn.entertainment-focus.com/wp-content/uploads/2020/09/11001633/RidersRepublic.jpg ",
					console: " PS5",
					desc:
						" Upgrade to PlayStation 5 Version: Riders Republic PlayStation 4 game on Blu-Ray Disc must be kept inserted in a PlayStation 5 console to play the corresponding Riders Republic PlayStation 5 digital version at no additional cost, when available. Requires a PlayStation 5, the game Blu-Ray Disc, a PlayStation Network registration, additional storage and Broadband internet connection. May incur bandwidth usage fees. Jump into the Riders Republic massive multiplayer playground! Grab your bike, skis, snowboard, or wingsuit and explore an open world sports paradise where the rules are yours to make - or break.",
					video: " https://www.youtube.com/embed/Nj3j8y3h0-Y"
				},
				{
					id: 7,
					name: " WWE 2K Games Battlegrounds ",
					genre: "  Sports ",
					publisher: " Saber Interactive",
					ratings: " Mature Everyone",
					photo: " https://nightwing.stevivor.com/wp-content/uploads/2020/07/wwe-2k-battlegrounds.jpg",
					console: " PS5",
					desc:
						" The world of WWE is your Battleground with all-new, over the top, in-your-face arcade action as your favorite WWE Superstars and Legends battle it out in. outlandish interactive environments around the world. Compete in your favorite match types with an arsenal of exaggerated maneuvers, special abilities, and devastating power-ups, including steel Cage, Royal rumble, Fatal four way and more, as mauro ranallo and jerry “the King” lawler Call all the mayhem! Are you ready to enter the Battleground?",
					video: " https://www.youtube.com/embed/ujOqTFgFnKQ "
				},
				{
					id: 8,
					name: " Madden NFL 21 ",
					genre: " Sports",
					publisher: " Ea Sports ",
					ratings: " Mature Everyone ",
					photo: " https://www.dsogaming.com/wp-content/uploads/2020/06/Madden-NFL-21-screenshots-1.jpg",
					console: " PS5 ",
					desc:
						" Packed with fresh new features and innovative gameplay enhancements, Madden NFL 21 delivers new levels of ingenuity and control developed to inspire creativity on and off the field.",
					video: " https://www.youtube.com/embed/kfEUX1fVy5A "
				}
			],
			actions: [
				{
					id: 1,
					name: "Spider-Man: Miles Morales",
					genre: " Action",
					publisher: "Sony Interactive Entertainment",
					ratings: "Teen",
					photo:
						"https://www.lifewire.com/thmb/QMDxkznPa0Dxz-rzviDgchVByRE=/3840x2160/filters:no_upscale():max_bytes(150000):strip_icc()/miles-morales-the-man-the-spider-man-the-game-5083891-a59a04b17da746a3a85fda077ac513f4.jpg",
					console: " PS5, PS4",
					video: "https://www.youtube.com/embed/NTunTURbyUU",
					desc:
						"In the latest adventure in the Marvel’s Spider-Man universe,teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. But when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power, there must also come great responsibility. To save all of Marvel’s New York, Miles must take up the mantle of Spider-Man and own it."
				},
				{
					id: 2,
					name: " Assassins Creed Valhara ",
					genre: " Action",
					publisher: " Ubisoft Montreal ",
					ratings: " Mature 17+ ",
					photo:
						" https://www.capsulecomputers.com.au/wp-content/uploads/2020/09/Assassins-Creed-Valhalla-Basim-Eivor-Artwork-1024x576.jpg",
					console: " PS5 ",
					desc:
						"Interact with history like never before and dive deeper intu Assassin’s Creed Odyssey with Story Creator Mode, which allows you to create your own narratives in Ancient Greece. Freedom of creativity is key, and with a quest editor and branching dialogue system, the only limit is your imagination. Play other users’ creations and experience new narratives told by the community themselves.",
					video: "https://www.youtube.com/embed/ssrNcwxALS4"
				},
				{
					id: 3,
					name: " Sackboy ",
					genre: " Action",
					publisher: "Sony Interactive Entertainment",
					ratings: " Mature Everyone ",
					console: " PS5, PS4 ",
					photo: "https://images.pushsquare.com/cdc476d48c95b/1280x720.jpg",
					desc:
						"A Big Adventure is an upcoming platform game developed by Sumo Digital and published by Sony Interactive Entertainment for the PlayStation 5, part of the LittleBigPlanet series. It follows Sackboy and features 3D platforming as opposed to 2.5D in previous entries. It was announced at the PlayStation 5 reveal event in June 2020.",
					video: " https://www.youtube.com/embed/ZOk3fj5ujNM "
				},
				{
					id: 4,
					name: "  Demons Souls ",
					genre: " Action",
					publisher: " PlayStation Studios",
					ratings: " Mature",
					photo: "https://cdn.pressstart.com.au/wp-content/uploads/2020/09/Demons-Souls-Remake-770x433.jpg",
					console: " PS5",
					desc:
						"Demons Souls is an action role-playing game developed by FromSoftware for the PlayStation 3 under the supervision of SIE Japan Studio. It was published in Japan by Sony Computer Entertainment in February 2009, in North America by Atlus USA in October 2009, and in PAL territories by Namco Bandai Games in June 2010. The game is referred to as a spiritual successor to FromSoftwares Kings Field series.",
					video: "https://www.youtube.com/embed/Syl1QRue2QE"
				}
			],

			gallerys: [
				{
					id: 1,
					name: "Spider-Man: Miles Morales",
					genre: " Action",
					publisher: "Sony Interactive Entertainment",
					ratings: "Teen",
					photo:
						"https://www.lifewire.com/thmb/QMDxkznPa0Dxz-rzviDgchVByRE=/3840x2160/filters:no_upscale():max_bytes(150000):strip_icc()/miles-morales-the-man-the-spider-man-the-game-5083891-a59a04b17da746a3a85fda077ac513f4.jpg",
					console: " PS5, PS4",
					video: "https://www.youtube.com/embed/NTunTURbyUU",
					desc:
						"In the latest adventure in the Marvel’s Spider-Man universe,teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. But when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power, there must also come great responsibility. To save all of Marvel’s New York, Miles must take up the mantle of Spider-Man and own it."
				},
				{
					id: 2,
					name: " Assassins Creed Valhara ",
					genre: " Action",
					publisher: " Ubisoft Montreal ",
					ratings: " Mature 17+ ",
					photo:
						" https://www.capsulecomputers.com.au/wp-content/uploads/2020/09/Assassins-Creed-Valhalla-Basim-Eivor-Artwork-1024x576.jpg",
					console: " PS5 ",
					desc:
						"Interact with history like never before and dive deeper intu Assassin’s Creed Odyssey with Story Creator Mode, which allows you to create your own narratives in Ancient Greece. Freedom of creativity is key, and with a quest editor and branching dialogue system, the only limit is your imagination. Play other users’ creations and experience new narratives told by the community themselves.",
					video: "https://www.youtube.com/embed/ssrNcwxALS4"
				},
				{
					id: 3,
					name: " Sackboy ",
					genre: " Action",
					publisher: "Sony Interactive Entertainment",
					ratings: " Mature Everyone ",
					console: " PS5, PS4 ",
					photo: "https://images.pushsquare.com/cdc476d48c95b/1280x720.jpg",
					desc:
						"A Big Adventure is an upcoming platform game developed by Sumo Digital and published by Sony Interactive Entertainment for the PlayStation 5, part of the LittleBigPlanet series. It follows Sackboy and features 3D platforming as opposed to 2.5D in previous entries. It was announced at the PlayStation 5 reveal event in June 2020.",
					video: " https://www.youtube.com/embed/ZOk3fj5ujNM "
				},
				{
					id: 4,
					name: "  Demons Souls ",
					genre: " Action",
					publisher: " PlayStation Studios",
					ratings: " Mature",
					photo: "https://cdn.pressstart.com.au/wp-content/uploads/2020/09/Demons-Souls-Remake-770x433.jpg",
					console: " PS5",
					desc:
						"Demons Souls is an action role-playing game developed by FromSoftware for the PlayStation 3 under the supervision of SIE Japan Studio. It was published in Japan by Sony Computer Entertainment in February 2009, in North America by Atlus USA in October 2009, and in PAL territories by Namco Bandai Games in June 2010. The game is referred to as a spiritual successor to FromSoftwares Kings Field series.",
					video: "https://www.youtube.com/embed/Syl1QRue2QE"
				},
				{
					id: 5,
					name: " NBA 2K21",
					genre: " Sports",
					publisher: " Visual Concepts",
					ratings: " Mature Everyone",
					photo: " https://images.pushsquare.com/screenshots/108613/large.jpg",
					console: " PS5",
					desc:
						" NBA 2K21 is the latest release in the world-renowned, best-selling NBA 2K series. 2K21 leads the charge with next-gen innovations, while continuing to deliver an industry-leading sports video game experience on the current generation of gaming platforms. With extensive improvements upon its best-in-class graphics and gameplay, competitive and community online features, and deep, varied game modes, NBA 2K21 offers one-of-a-kind immersion into all facets of NBA basketball and culture - where Everything is Game.",
					video: " https://www.youtube.com/embed/Ib5ygUYjHZI "
				},
				{
					id: 6,
					name: " Riders Republic",
					genre: " Sports ",
					publisher: " Ubisoft Annecy ",
					ratings: " Mature Everyone ",
					photo:
						" https://cdn.entertainment-focus.com/wp-content/uploads/2020/09/11001633/RidersRepublic.jpg ",
					console: " PS5",
					desc:
						" Upgrade to PlayStation 5 Version: Riders Republic PlayStation 4 game on Blu-Ray Disc must be kept inserted in a PlayStation 5 console to play the corresponding Riders Republic PlayStation 5 digital version at no additional cost, when available. Requires a PlayStation 5, the game Blu-Ray Disc, a PlayStation Network registration, additional storage and Broadband internet connection. May incur bandwidth usage fees. Jump into the Riders Republic massive multiplayer playground! Grab your bike, skis, snowboard, or wingsuit and explore an open world sports paradise where the rules are yours to make - or break.",
					video: " https://www.youtube.com/embed/Nj3j8y3h0-Y"
				},
				{
					id: 7,
					name: " WWE 2K Games Battlegrounds ",
					genre: "  Sports ",
					publisher: " Saber Interactive",
					ratings: " Mature Everyone",
					photo: " https://nightwing.stevivor.com/wp-content/uploads/2020/07/wwe-2k-battlegrounds.jpg",
					console: " PS5",
					desc:
						" The world of WWE is your Battleground with all-new, over the top, in-your-face arcade action as your favorite WWE Superstars and Legends battle it out in. outlandish interactive environments around the world. Compete in your favorite match types with an arsenal of exaggerated maneuvers, special abilities, and devastating power-ups, including steel Cage, Royal rumble, Fatal four way and more, as mauro ranallo and jerry “the King” lawler Call all the mayhem! Are you ready to enter the Battleground?",
					video: " https://www.youtube.com/embed/ujOqTFgFnKQ "
				},
				{
					id: 8,
					name: " Madden NFL 21 ",
					genre: " Sports",
					publisher: " Ea Sports ",
					ratings: " Mature Everyone ",
					photo: " https://www.dsogaming.com/wp-content/uploads/2020/06/Madden-NFL-21-screenshots-1.jpg",
					console: " PS5 ",
					desc:
						" Packed with fresh new features and innovative gameplay enhancements, Madden NFL 21 delivers new levels of ingenuity and control developed to inspire creativity on and off the field.",
					video: " https://www.youtube.com/embed/kfEUX1fVy5A "
				},
				{
					id: 9,
					name: " Call of Duty: Black Ops Cold War ",
					genre: " Shooter",
					publisher: " Activison ",
					ratings: " Mature ",
					photo:
						" https://www.denofgeek.com/wp-content/uploads/2020/09/call-of-duty-black-ops-cold-war-beta-dates.jpg?fit=1920%2C1080 ",
					console: " PS5 ",
					desc:
						"The iconic Black Ops series is back with Call of Duty®: Black Ops Cold War - the direct sequel to the original and fan-favorite Call of Duty®: Black Ops. Black Ops Cold War will drop fans into the depths of the Cold War’s volatile geopolitical battle of the early 1980s. Nothing is ever as it seems in a gripping single-player Campaign, where players will come face-to-face with historical figures and hard truths, as they battle around the globe through iconic locales like East Berlin, Vietnam, Turkey, Soviet KGB headquarters and more. As elite operatives, you will follow the trail of a shadowy figure named Perseus who is on a mission to destabilize the global balance of power and change the course of history. Descend into the dark center of this global conspiracy alongside iconic characters Woods, Mason and Hudson and a new cast of operatives attempting to stop a plot decades in the making.",
					video: "https://www.youtube.com/embed/aTS9n_m7TW0"
				},
				{
					id: 10,
					name: " Red Dead Redemption 2 ",
					genre: " Shooter",
					publisher: " Saber Interaction ",
					ratings: " Mature 17+ ",
					photo:
						"  https://images.pushsquare.com/news/2016/10/feature_what_we_want_from_red_dead_redemption_2_on_ps4/large.jpg ",
					console: " PS5 ",
					desc:
						" America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him. Now featuring additional Story Mode content and a fully-featured Photo Mode, Red Dead Redemption 2 alsoincludes  free access to the shared living world of Red Dead Online, where players take on an array of roles to carve their own unique path on the frontier as they track wanted criminals as a Bounty Hunter, create a business as a Trader, unearth exotic treasures as a Collector or run an underground distillery as a Moonshiner and much more. ",
					video: " https://www.youtube.com/embed/eaW0tYpxyp0"
				},
				{
					id: 11,
					name: " Doom Eternal ",
					genre: " Shooter",
					publisher: " ID Software ",
					ratings: " Mature 17+ ",
					photo: " https://cdn.wccftech.com/wp-content/uploads/2020/01/doom_eternal_4K_art-2060x1159.jpg ",
					console: " PS5 ",
					desc:
						" Doom Eternal is a first-person shooter video game developed by id Software and published by Bethesda Softworks. The sequel to Doom (2016), and the fifth main game in the Doom series, it was released on March 20, 2020, for Windows, PlayStation 4, Stadia and Xbox One, with versions for Nintendo Switch, PlayStation 5 and Xbox Series X and Series S planned. ",
					video: "https://www.youtube.com/embed/FkklG9MA0vM"
				},
				{
					id: 12,
					name: " Halo Infinite ",
					genre: " Shooter",
					publisher: " Bungie ",
					ratings: " Mature ",
					photo: " https://attackofthefanboy.com/wp-content/uploads/2020/07/halo-infinite-free-to-play.jpg ",
					console: " Xbox Series X",
					desc:
						"Halo Infinite is an upcoming first-person shooter game developed by 343 Industries and published by Xbox Game Studios for Microsoft Windows, Xbox One, and Xbox Series X and Series S. The sixth main entry of the Halo series and the fourteenth game overall, it continues the story of the Master Chief as the third chapter of the Reclaimer Saga, following Halo 5: Guardians (2015).",
					video: "https://www.youtube.com/embed/HZtc5-syeAk"
				},
				{
					id: 13,
					name: " Wreckfest ",
					genre: "  Racing ",
					publisher: " Bugbear Entertainment ",
					ratings: " Everyone ",
					photo:
						" https://s3.amazonaws.com/prod-media.gameinformer.com/styles/full/s3/2019/08/29/c5adb779/wreckfest.jpg ",
					console: " PS5 ",
					desc:
						" Wreckfest is a racing video game developed by Bugbear Entertainment and published by THQ Nordic. Wreckfest is described as the spiritual successor to the FlatOut series and a cross between FlatOut, Destruction Derby and cult 1989 PC racer Street Rod. A notable feature of the game engine is the use of soft-body damage modeling, which enables location-based damage that affects the driving dynamics of vehicles in a realistic fashion. After a four-year long early access phase, the Microsoft Windows version was released in June 2018, with PlayStation 4 and Xbox One versions released on August 27, 2019 after multiple delays.",
					video: "https://www.youtube.com/embed/pfMURF7nyrU"
				},
				{
					id: 14,
					name: " Need for Speed: Rivals ",
					genre: " Racing ",
					publisher: " Electronic Arts",
					ratings: " Teen ",
					photo: " https://www.savegamedownload.com/wp-content/uploads/2017/11/nfs-rivals-platinum-ps4.jpg ",
					console: " PS4 ",
					desc:
						" Need for Speed Rivals is a racing video game developed in a collaboration between Ghost Games and Criterion Games, and published by Electronic Arts. It is the twentieth installment in the Need for Speed series and the debut title for Ghost Games, who would be established as the primary developer of the series for all subsequent non-mobile installments up until 2020. The game was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360 and Xbox One in November 2013, and is the final Need for Speed game for both the PlayStation 3 and the Xbox 360. ",
					video: "https://www.youtube.com/embed/xsKHweFi7AU"
				},
				{
					id: 15,
					name: " Monster Jam Steel Titans ",
					genre: " Racing ",
					publisher: " Rainbow Studios",
					ratings: " Everyone ",
					photo: " https://www.teamvvv.com/wp-content/uploads/2019/02/monster-jam-steel-titans-6.jpg ",
					console: "  PS4 ",
					desc:
						" Monster Jam Steel Titans delivers the complete Monster Jam experience for everybody to enjoy! All the trucks, stunts, stadiums, racing and massive air in one game! Play in various game modes including Stadium and outdoor Racing, various Stunt Challenges and Destruction modes! - Drive a MONSTER!",
					video: "https://www.youtube.com/embed/aElJ0jpxVuk"
				},
				{
					id: 16,
					name: " DIRT 5 ",
					genre: " Racing ",
					publisher: " Codemaster ",
					ratings: " Teen ",
					photo: " http://images.gamersyde.com/image_dirt_5-41991-4469_0001.jpg ",
					console: " PS5 ",
					desc:
						" DIRT 5 is the bold new off-road racing experience created by Codemasters. Conquer stunning global routes and drive an iconic roster of cars. Experience a star-studded Career mode, four-player split-screen, the Playgrounds arena creator mode and much more! the increased focus on storytelling and its platforming sections.",
					video: "https://www.youtube.com/embed/cEwzdTcFeYA"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			getGallerys: () => {
				return getStore().gallerys;
			},
			getGallery: id => {
				const gallerys = getStore().gallerys;
				id = parseInt(id);
				let gallery = {};

				gallerys.forEach(element => {
					if (id === element.id) {
						gallery = element;
					}
				});
				return gallery;
			},

			//SPORT GAMES
			getSports: () => {
				return getStore().sports;
			},
			getSport: id => {
				const sports = getStore().sports;
				id = parseInt(id);
				let sport = {};

				sports.forEach(element => {
					if (id === element.id) {
						sport = element;
					}
				});
				return sport;
			},

			// ACTION GAMES
			getActions: () => {
				return getStore().actions;
			},
			getAction: id => {
				const actions = getStore().actions;
				id = parseInt(id);
				let action = {};

				actions.forEach(element => {
					if (id === element.id) {
						action = element;
					}
				});
				return action;
			},

			// RACING GAMES
			getRacings: () => {
				return getStore().racings;
			},
			getRacing: id => {
				const racings = getStore().racings;
				id = parseInt(id);
				let racing = {};

				racings.forEach(element => {
					if (id === element.id) {
						racing = element;
					}
				});
				return racing;
			},
			// SHOOTER GAMES
			getShooters: () => {
				return getStore().shooters;
			},
			getShooter: id => {
				const shooters = getStore().shooters;
				id = parseInt(id);
				let shooter = {};

				shooters.forEach(element => {
					if (id === element.id) {
						shooter = element;
					}
				});
				return shooter;
			}
		}
	};
};

export default getState;
