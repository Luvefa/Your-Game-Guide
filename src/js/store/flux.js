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
				},
				{
					id: 27,
					name: "Cyberpunk 2077",
					genre: " shooter",
					publisher: "Publisher:WB Games",
					ratings: " Mature ",
					photo: "https://gearnuke.com/wp-content/uploads/2018/08/Cyberpunk-2077-1-1.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamor, and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character's cyberware, skill set, and playstyle, and explore a vast city where the choices you make shape the story and world around you.",
					video: " https://www.youtube.com/embed/LembwKDo1Dk "
				},
				{
					id: 28,
					name: " Borderlands 3",
					genre: " Shooter",
					publisher: "2K Games",
					ratings: " Mature ",
					photo: "https://assets.vg247.com/current/2019/07/Borderlands-3-1.jpg ",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"The original shooter-looter returns, packing bazillions of guns and an all-new mayhem-fueled adventure! Blast through new worlds and enemies as one of four brand new Vault Hunters - the ultimate treasure-seeking badasses of the Borderlands, each with deep skill trees, abilities and customization. Play solo or join with friends to take on insane enemies, score loads of loot and save your home from the most ruthless cult leaders in the galaxy.",
					video: " https://www.youtube.com/embed/d9Gu1PspA3Y"
				},
				{
					id: 29,
					name: " Sniper Ghost Warrior 3",
					genre: " Shooter",
					publisher: "CI Games",
					ratings: " Mature",
					photo: "https://games.torrentsnack.com/wp-content/uploads/2016/12/Sniper-Ghost-Warrior-3-PC.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"Go behind enemy lines with the ultimate modern military shooter. Choose your own path to accomplish your missions across an unforgiven open world.Be a Sniper: Engage your targets from the long range. Factor in scope elevation, wind speed and direction, breath control and stance along with weapon and bullet choice.Be a Ghost: Stalk your enemies and eliminate them silently with a broad variety of takedowns. The advanced stealth gameplay includes drone recon and vertical navigation.Be a Warrior: Wield a wide variety of advanced weapons and modify them to suit the needs of your mission and your own personal style. Choose from assault rifles, shotguns, machine guns and even explosives.",
					video: " https://www.youtube.com/embed/Zq4Gxzge9Fc "
				},
				{
					id: 30,
					name: "Far Cry 6 ",
					genre: " Shooter",
					publisher: "Ubisoft",
					ratings: " ",
					photo: "https://ewedit.files.wordpress.com/2018/12/sawlauncher_3840x2160_gold_esrb.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"Welcome to Yara, a tropical paradise frozen in time. As the dictator of Yara, Anton Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, following in his bloody footsteps. Their oppressive rule has ignited a revolution.",
					video: "https://www.youtube.com/embed/-IJuKT1mHO8 "
				},
				{
					id: 31,
					name: "Outriders",
					genre: " Shooter",
					publisher: "Square Enix",
					ratings: " Mature",
					photo:
						"https://cdn-prod.scalefast.com/public/assets/img/resized/squareenix-store-v3/f64f378417b7c2920553f0561f5c9010_1920_KR.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"Outriders is an upcoming third-person shooter developed by People Can Fly and published by Square Enix. It is set to be released on February 2, 2021 for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S. It will also release on Stadia later in 2021.",
					video: " https://www.youtube.com/embed/ED4o1WJFmDY"
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
				},
				{
					id: 32,
					name: "WRC 9 ",
					genre: " Racing",
					publisher: "Nacon",
					ratings: " Everyone",
					photo:
						"https://www.teamvvv.com/wp-content/uploads/2020/04/WRC9_Screenshots_1_New_Zealand_Ford_2_4K-1920x1080.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"WRC 9 is the newest racing simulation game approved by the professional drivers of the real WRC Championship. With three brand new rallies (Kenya, Japan, and New Zealand), 15 legendary vehicles and more than 100 stages to tackle, WRC 9 is the most expansive title in the series to date. WRC 9 also features a variety of new game modes designed for the community, including a fully customizable Club system where players will be able to create their own communities, invite friends, and compete together all over the world in online championships. With the ability to play as the best drivers in the world with their official cars in the most realistic physics engine and environments yet, this is the definitive rally simulation experience.",
					video: " https://www.youtube.com/embed/_aHxlD2icMY"
				},
				{
					id: 33,
					name: "Forza Horizon 4",
					genre: " Racing",
					publisher: "Microsoft Studios",
					ratings: " Everyone",
					photo: "http://ksassets.timeincuk.net/wp/uploads/sites/54/2018/06/Forza-Horizon-4_Autumn-Drive.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"CHANGES EVERYTHING. Dynamic seasons change everything at the world's greatest automotive festival. Go it alone or team up with others to explore beautiful and historic Britain in a shared open world. Collect, modify and drive over 450 cars. Race, stunt, create and explore – choose your own path to become a Horizon Superstar. The Forza Horizon 4 Standard Edition digital bundle includes the full game of Forza Horizon 4 and the Formula Drift Car Pack for Forza Horizon 4.",
					video: "https://www.youtube.com/embed/RCRYs7yfeo4"
				},
				{
					id: 34,
					name: "Need for Speed Heat",
					genre: " Racing",
					publisher: "Electronic Arts",
					ratings: " Everyone",
					photo:
						"https://www.gamespace.com/wp-content/uploads/2020/06/Need-for-Speed-Heat-Gets-Cross-Play.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"Hustle by day and risk it all at night in Need for Speed™ Heat, a white-knuckle racer that pits you against a city’s rogue police force as you battle your way into street racing’s elite. By day compete in the Speedhunter Showdown – a sanctioned competition where you earn bank to customize and upgrade your garage of high-performance cars. When your ride’s perfectly styled and hyper-tuned, and you’re ready to ramp up the intensity, drive out into the night where you and your crew take on the competition in illicit street races that build your reputation and grant you access to bigger races and better parts. But under the cover of darkness patrols a rogue task force looking to bring you down and swipe all you’ve earned.",
					video: "https://www.youtube.com/embed/9ewiJJe_nYI"
				},
				{
					id: 35,
					name: "The Crew 2",
					genre: " Racing",
					publisher: " Ubisoft",
					ratings: " Teen",
					photo: "http://torrentsgames.org/wp-content/uploads/2017/09/The-Crew-2-PC.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"In The Crew® 2, take on the American motorsports scene as you explore and dominate the land, air, and sea of the United States in one of the most exhilarating open worlds ever created. With a wide variety of exotic cars, bikes, boats, and planes to choose from, experience the unbridled thrill and adrenaline-pumping excitement of competing across the entire US as you test your skills in a wide range of driving disciplines. Record every heart-pounding, white-knuckle, asphalt-melting moment and share them with your friends and rivals with the simple push of a button. Fame is yours to take!",
					video: "https://www.youtube.com/embed/X9-bWlWilps"
				},
				{
					id: 36,
					name: "Moto Racer 4",
					genre: " Racing",
					publisher: " Microids",
					ratings: " Mature",
					photo:
						"https://static.gamespot.com/uploads/original/536/5360430/3076225-mr4_screenshots_e3_2016_02.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"In a world where freestyle and risk-taking dominate, impose your riding style all around the world. Impress your opponents and win races with class!Moto Racer 4 is racing game you can play on asphalt or dirt in single or multiplayer mode (up to ten players).Master drifting, wheelies, sharp turns and other techniques to earn a place on the podium!Customize and upgrade your bike! Progress through Moto Racer 4 and take in the stunning environments.From the United States to the Asia by way of the desert, Moto Racer 4 takes you through perilous, breathtaking courses at 100 miles an hour.",
					video: "https://www.youtube.com/embed/torYjTerlso"
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
				},
				{
					id: 22,
					name: " FIFA21 ",
					genre: " Sports",
					publisher: " Ea Sports ",
					ratings: " Everyone ",
					photo:
						" https://image-cdn.essentiallysports.com/wp-content/uploads/20201006215630/maxresdefault-15-5.jpg",
					console: " PC, PS4, PS5, Switch, Xbox, OneXbox, Series X",
					desc:
						"Win as one in EA SPORTS FIFA 21, powered by Frostbite. Whether it's on the streets or in the stadium, FIFA 21 has more ways to play than ever before - including the UEFA Champions League and CONMEBOL Libertadores.",
					video: "  "
				},
				{
					id: 23,
					name: " Tony Hawk's Pro Skater 1 + 2",
					genre: " Sports",
					publisher: " Vicarious Visions",
					ratings: " Teen ",
					photo:
						"https://assets1.ignimgs.com/2020/05/12/tony-hawks-pro-skater-1-2-preorder-guide-1589307395561.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"Drop back in with the most iconic skateboarding games ever made. Play Tony Hawk’s Pro Skater & Tony Hawk’s Pro Skater 2 in one epic collection, rebuilt from the ground up in incredible HD. All the pro skaters, levels and tricks are back and fully-remastered, plus more. Break skateboarding boundaries, show off your own style, and be part of the next generation of skaters and creators with Tony Hawk’s Pro Skater 1 + 2.",
					video: " https://www.youtube.com/embed/p0mNQxLUHyg "
				},
				{
					id: 24,
					name: " PGA Tour 2K21",
					genre: " Sports",
					publisher: " 2k Games",
					ratings: " Teen ",
					photo: "https://realsport101.com/wp-content/uploads/2020/06/pga-tour-2k21-justin-thomas.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"PGA Tour 2K21 is a sports video game developed by HB Studios and published by 2K Sports for Google Stadia, Microsoft Windows, Nintendo Switch, PlayStation 4 and Xbox One. It's a continuation of The Golf Club franchise integrated with 2K Sports and the second game in the franchise to include a PGA Tour license.",
					video: " https://www.youtube.com/embed/OiBOrM7X02c"
				},
				{
					id: 25,
					name: " EA Sports UFC 4",
					genre: " Sports",
					publisher: " Electronic Arts",
					ratings: " Teen ",
					photo:
						"https://www.vgr.com/wp-content/uploads/2020/07/ea-sports-ufc-4-details-leaked-for-console-beta.jpeg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"Shape Your Legend in EA SPORTS UFC 4. In EA SPORTS UFC 4, the fighter you become is shaped by your fight style, your achievements, and your personality. No matter how or where you play EA SPORTS UFC 4 puts ‘you’ at the center of every fight.",
					video: " https://www.youtube.com/embed/GjugTk9ovcI"
				},
				{
					id: 26,
					name: " Kinect Sports Rivals",
					genre: " Sports",
					publisher: " Xbox Game Studios",
					ratings: " Teen ",
					photo: "http://assets.vg247.com/current/2014/04/Kinect_sports_rivals_6.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"The best-selling Kinect franchise is back, made exclusively for Xbox One. The all-new, unparalleled Kinect technology captures your likeness as a champion and thrusts you into sporting events against friends, rivals and the entire world. Skill matters. Precision is rewarded. Small movements make big impacts. With online tournaments, head-to-head rivalries and a world full of competitors, sports are reimagined to ignite your competitive spirit. The game learns how you and your friends compete, creating an ever-evolving network of rivals in the cloud. There's a competitor in each of us just waiting to come alive. It's You vs. the world.",
					video: " https://www.youtube.com/embed/GGGgnf5Fpn4"
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
				},
				{
					id: 17,
					name: " Marvels Avengers ",
					genre: " Action",
					publisher: " Square Enix",
					ratings: " Teen",
					photo: "https://www.justpushstart.com/wp-content/uploads/2020/06/avengers_card_3.jpg",
					console: " PS5, Xbox",
					desc:
						"Marvels Avengers is a 2020 action role-playing brawler video game co-developed by Crystal Dynamics and published by Square Enix. Based on the Marvel Comics superhero team the Avengers, the game is mainly inspired by the Marvel Cinematic Universes iteration of the group, but also incorporates elements from the team's long-running comic book mythology. The plot follows Inhuman teenager Kamala Khan, who gained superpowers after exposure to Terrigen Mist during A-Day, a celebratory day for the Avengers until a tragedy resulted in death and destruction. Blamed for the tragedy, the Avengers disbanded, allowing the science corporation A.I.M. to take their place. Five years later, when A.I.M. threatens to end the world of superpowered individuals, Kamala embarks on a quest to reassemble Earth's Mightiest Heroes so that they could save the world from peril once more.",
					video: " https://www.youtube.com/embed/FQFtXu1xvlQ "
				},
				{
					id: 18,
					name: "Watch Dogs: Legion ",
					genre: " Action",
					publisher: " Ubisoft",
					ratings: " Teen",
					photo: "https://gameranx.com/wp-content/uploads/2019/09/Watch-Dogs-Legion-4-2-1024x576.jpg",
					console: " PS5, Xbox ",
					desc:
						"Watch Dogs is receiving a third main installment to the franchise next year. Ubisoft is taking players to London with Dedsec hoping to end a new powerful regime hitting the United Kingdom but there is a slight change up from previous Watch Dogs installments. With Watch Dogs: Legion players are not going to focus on a single character protagonist but instead a wide variety of potential NPCs. Instead of having a single player that is capable of every skill, the game puts a focus on recruiting NPCs that may have a useful attribute towards a mission. During E3 2019, we got a look at that with a mission regarding players having to seek out a drones expert.",
					video: "https://www.youtube.com/embed/srXrGKGAU20"
				},
				{
					id: 19,
					name: " Final Fantasy VII Remake ",
					genre: " Action",
					publisher: " Square Enix",
					ratings: " TeMature Everyone",
					photo: "https://gameranx.com/wp-content/uploads/2018/03/Final-Fantasy-VII-Remake.png",
					console: " PS4 ",
					desc:
						"The Final Fantasy series has been around for decades and over the years there have been a few notable titles that stood out among the rest. One of those video game titles is Final Fantasy VII which is a game that released originally on the PlayStation back in 1997. Since its release, there have been vocal fans pleading to Square Enix to go back and remake the video game title for the current generation platforms. After years of requests, the remake is finally coming to the marketplace for the PlayStation 4 in March of 2020. Overall, it looks like the same storyline is intact with Cloud Strife joining with an eco-terrorist group known as Avalanche as they battle against the corrupt Shinra megacorporation.",
					video: "https://www.youtube.com/embed/ERgrFVhL-n4"
				},
				{
					id: 20,
					name: " The Last of Us Part 2 ",
					genre: " Action",
					publisher: " Sony Interactive Entertainment",
					ratings: " TeMature Everyone",
					photo: "https://gameranx.com/wp-content/uploads/2019/09/The-Last-of-Us-Part-2.jpg",
					console: " PS4 ",
					desc:
						"A staple franchise for the Sony PlayStation 4, The Last of Us, is receiving a new installment. Set years into the future where Ellie has gone from a child to a young adult and is living life a bit more normally considering the overall pandemic. Even though there is still the growing threat of the zombie-like virus that is turning into mindless hostile creatures, it seems that the main threat in this world is opposing human groups. The storyline for the sequel is more or less focused on a cult-like group though we’re still relatively in the dark on their motives.",
					video: "https://www.youtube.com/embed/X0VubwgS2Y4"
				},
				{
					id: 21,
					name: " Bloodborne",
					genre: " Action",
					publisher: " Sony Interactive Entertainment",
					ratings: " Mature ",
					photo: "http://www.whatsageek.com/wp-content/uploads/2015/05/bloodbornelogo.jpg",
					console: " PS5, PS4 ",
					desc:
						"Bloodborne is an action role-playing game developed by FromSoftware and published by Sony Computer Entertainment for the PlayStation 4. It was released worldwide in March 2015. Bloodborne follows the player's character, a Hunter, through the decrepit Gothic, Victorian era–inspired city of Yharnam, whose inhabitants have been afflicted with an abnormal blood-borne disease.",
					video: "https://www.youtube.com/embed/G203e1HhixY"
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
					id: 17,
					name: " Marvels Avengers ",
					genre: " Action",
					publisher: " Square Enix",
					ratings: " Teen",
					photo: "https://www.justpushstart.com/wp-content/uploads/2020/06/avengers_card_3.jpg",
					console: " PS5, Xbox",
					desc:
						"Marvels Avengers is a 2020 action role-playing brawler video game co-developed by Crystal Dynamics and published by Square Enix. Based on the Marvel Comics superhero team the Avengers, the game is mainly inspired by the Marvel Cinematic Universes iteration of the group, but also incorporates elements from the team's long-running comic book mythology. The plot follows Inhuman teenager Kamala Khan, who gained superpowers after exposure to Terrigen Mist during A-Day, a celebratory day for the Avengers until a tragedy resulted in death and destruction. Blamed for the tragedy, the Avengers disbanded, allowing the science corporation A.I.M. to take their place. Five years later, when A.I.M. threatens to end the world of superpowered individuals, Kamala embarks on a quest to reassemble Earth's Mightiest Heroes so that they could save the world from peril once more.",
					video: " https://www.youtube.com/embed/FQFtXu1xvlQ "
				},
				{
					id: 18,
					name: "Watch Dogs: Legion ",
					genre: " Action",
					publisher: " Ubisoft",
					ratings: " Teen",
					photo: "https://gameranx.com/wp-content/uploads/2019/09/Watch-Dogs-Legion-4-2-1024x576.jpg",
					console: " PS5, Xbox ",
					desc:
						"Watch Dogs is receiving a third main installment to the franchise next year. Ubisoft is taking players to London with Dedsec hoping to end a new powerful regime hitting the United Kingdom but there is a slight change up from previous Watch Dogs installments. With Watch Dogs: Legion players are not going to focus on a single character protagonist but instead a wide variety of potential NPCs. Instead of having a single player that is capable of every skill, the game puts a focus on recruiting NPCs that may have a useful attribute towards a mission. During E3 2019, we got a look at that with a mission regarding players having to seek out a drones expert.",
					video: "https://www.youtube.com/embed/srXrGKGAU20"
				},
				{
					id: 19,
					name: " Final Fantasy VII Remake ",
					genre: " Action",
					publisher: " Square Enix",
					ratings: " TeMature Everyone",
					photo: "https://gameranx.com/wp-content/uploads/2018/03/Final-Fantasy-VII-Remake.png",
					console: " PS4 ",
					desc:
						"The Final Fantasy series has been around for decades and over the years there have been a few notable titles that stood out among the rest. One of those video game titles is Final Fantasy VII which is a game that released originally on the PlayStation back in 1997. Since its release, there have been vocal fans pleading to Square Enix to go back and remake the video game title for the current generation platforms. After years of requests, the remake is finally coming to the marketplace for the PlayStation 4 in March of 2020. Overall, it looks like the same storyline is intact with Cloud Strife joining with an eco-terrorist group known as Avalanche as they battle against the corrupt Shinra megacorporation.",
					video: "https://www.youtube.com/embed/ERgrFVhL-n4"
				},
				{
					id: 20,
					name: " The Last of Us Part 2 ",
					genre: " Action",
					publisher: " Sony Interactive Entertainment",
					ratings: " TeMature Everyone",
					photo: "https://gameranx.com/wp-content/uploads/2019/09/The-Last-of-Us-Part-2.jpg",
					console: " PS4 ",
					desc:
						"A staple franchise for the Sony PlayStation 4, The Last of Us, is receiving a new installment. Set years into the future where Ellie has gone from a child to a young adult and is living life a bit more normally considering the overall pandemic. Even though there is still the growing threat of the zombie-like virus that is turning into mindless hostile creatures, it seems that the main threat in this world is opposing human groups. The storyline for the sequel is more or less focused on a cult-like group though we’re still relatively in the dark on their motives.",
					video: "https://www.youtube.com/embed/X0VubwgS2Y4"
				},
				{
					id: 21,
					name: " Cyberpunk 2077 ",
					genre: " Action",
					publisher: " CD Projekt",
					ratings: " TeMature Everyone",
					photo:
						"https://gameranx.com/wp-content/uploads/2019/05/cyberpunk_2077_gamescom_screen_3-1024x576.jpg",
					console: " PC, PS4, XBO, Google Stadia ",
					desc:
						"Cyberpunk 2077 is easily one of the most anticipated video game titles releasing in 2020. Within Cyberpunk 2077 players are set in a futuristic world, though to be more exact, a dystopia Night City. Big corporations and crime thrive making those who inhabit the area to be tough. That’s where players step into the role of a mercenary name V. You’ll have to handle small jobs and work your street cred up to earn high paying jobs. There’s a lot to do in Night City and the development studio has been stating that the in-game map is dense along with being very lively.",
					video: "https://www.youtube.com/embed/LembwKDo1Dk"
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
					id: 22,
					name: " FIFA21 ",
					genre: " Sports",
					publisher: " Ea Sports ",
					ratings: " Everyone ",
					photo:
						" https://image-cdn.essentiallysports.com/wp-content/uploads/20201006215630/maxresdefault-15-5.jpg",
					console: " PC, PS4, PS5, Switch, Xbox, OneXbox, Series X",
					desc:
						"Win as one in EA SPORTS FIFA 21, powered by Frostbite. Whether it's on the streets or in the stadium, FIFA 21 has more ways to play than ever before - including the UEFA Champions League and CONMEBOL Libertadores.",
					video: "  "
				},
				{
					id: 23,
					name: " Tony Hawk's Pro Skater 1 + 2",
					genre: " Sports",
					publisher: " Vicarious Visions",
					ratings: " Teen ",
					photo:
						"https://assets1.ignimgs.com/2020/05/12/tony-hawks-pro-skater-1-2-preorder-guide-1589307395561.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"Drop back in with the most iconic skateboarding games ever made. Play Tony Hawk’s Pro Skater & Tony Hawk’s Pro Skater 2 in one epic collection, rebuilt from the ground up in incredible HD. All the pro skaters, levels and tricks are back and fully-remastered, plus more. Break skateboarding boundaries, show off your own style, and be part of the next generation of skaters and creators with Tony Hawk’s Pro Skater 1 + 2.",
					video: " https://www.youtube.com/embed/p0mNQxLUHyg "
				},
				{
					id: 24,
					name: " PGA Tour 2K21",
					genre: " Sports",
					publisher: " 2k Games",
					ratings: " Teen ",
					photo: "https://realsport101.com/wp-content/uploads/2020/06/pga-tour-2k21-justin-thomas.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"PGA Tour 2K21 is a sports video game developed by HB Studios and published by 2K Sports for Google Stadia, Microsoft Windows, Nintendo Switch, PlayStation 4 and Xbox One. It's a continuation of The Golf Club franchise integrated with 2K Sports and the second game in the franchise to include a PGA Tour license.",
					video: " https://www.youtube.com/embed/OiBOrM7X02c"
				},
				{
					id: 25,
					name: " EA Sports UFC 4",
					genre: " Sports",
					publisher: " Electronic Arts",
					ratings: " Teen ",
					photo:
						"https://www.vgr.com/wp-content/uploads/2020/07/ea-sports-ufc-4-details-leaked-for-console-beta.jpeg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"Shape Your Legend in EA SPORTS UFC 4. In EA SPORTS UFC 4, the fighter you become is shaped by your fight style, your achievements, and your personality. No matter how or where you play EA SPORTS UFC 4 puts ‘you’ at the center of every fight.",
					video: " https://www.youtube.com/embed/GjugTk9ovcI"
				},
				{
					id: 26,
					name: " Kinect Sports Rivals",
					genre: " Sports",
					publisher: " Xbox Game Studios",
					ratings: " Teen ",
					photo: "http://assets.vg247.com/current/2014/04/Kinect_sports_rivals_6.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"The best-selling Kinect franchise is back, made exclusively for Xbox One. The all-new, unparalleled Kinect technology captures your likeness as a champion and thrusts you into sporting events against friends, rivals and the entire world. Skill matters. Precision is rewarded. Small movements make big impacts. With online tournaments, head-to-head rivalries and a world full of competitors, sports are reimagined to ignite your competitive spirit. The game learns how you and your friends compete, creating an ever-evolving network of rivals in the cloud. There's a competitor in each of us just waiting to come alive. It's You vs. the world.",
					video: " https://www.youtube.com/embed/GGGgnf5Fpn4"
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
					id: 27,
					name: " Cyberpunk 2077",
					genre: " shooter",
					publisher: "Publisher:WB Games",
					ratings: " Mature ",
					photo: "https://gearnuke.com/wp-content/uploads/2018/08/Cyberpunk-2077-1-1.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamor, and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character's cyberware, skill set, and playstyle, and explore a vast city where the choices you make shape the story and world around you.",
					video: " https://www.youtube.com/embed/LembwKDo1Dk "
				},
				{
					id: 28,
					name: " Borderlands 3",
					genre: " Shooter",
					publisher: "2K Games",
					ratings: " Mature ",
					photo: "https://assets.vg247.com/current/2019/07/Borderlands-3-1.jpg ",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"The original shooter-looter returns, packing bazillions of guns and an all-new mayhem-fueled adventure! Blast through new worlds and enemies as one of four brand new Vault Hunters - the ultimate treasure-seeking badasses of the Borderlands, each with deep skill trees, abilities and customization. Play solo or join with friends to take on insane enemies, score loads of loot and save your home from the most ruthless cult leaders in the galaxy.",
					video: " https://www.youtube.com/embed/d9Gu1PspA3Y"
				},
				{
					id: 29,
					name: " Sniper Ghost Warrior 3",
					genre: " Shooter",
					publisher: "CI Games",
					ratings: " Mature",
					photo: "https://games.torrentsnack.com/wp-content/uploads/2016/12/Sniper-Ghost-Warrior-3-PC.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"Go behind enemy lines with the ultimate modern military shooter. Choose your own path to accomplish your missions across an unforgiven open world.Be a Sniper: Engage your targets from the long range. Factor in scope elevation, wind speed and direction, breath control and stance along with weapon and bullet choice.Be a Ghost: Stalk your enemies and eliminate them silently with a broad variety of takedowns. The advanced stealth gameplay includes drone recon and vertical navigation.Be a Warrior: Wield a wide variety of advanced weapons and modify them to suit the needs of your mission and your own personal style. Choose from assault rifles, shotguns, machine guns and even explosives.",
					video: " https://www.youtube.com/embed/Zq4Gxzge9Fc "
				},
				{
					id: 30,
					name: "Far Cry 6 ",
					genre: " Shooter",
					publisher: "Ubisoft",
					ratings: " ",
					photo: "https://ewedit.files.wordpress.com/2018/12/sawlauncher_3840x2160_gold_esrb.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"Welcome to Yara, a tropical paradise frozen in time. As the dictator of Yara, Anton Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, following in his bloody footsteps. Their oppressive rule has ignited a revolution.",
					video: "https://www.youtube.com/embed/-IJuKT1mHO8 "
				},
				{
					id: 31,
					name: "Outriders",
					genre: " Shooter",
					publisher: "Square Enix",
					ratings: " Mature",
					photo:
						"https://cdn-prod.scalefast.com/public/assets/img/resized/squareenix-store-v3/f64f378417b7c2920553f0561f5c9010_1920_KR.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"Outriders is an upcoming third-person shooter developed by People Can Fly and published by Square Enix. It is set to be released on February 2, 2021 for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S. It will also release on Stadia later in 2021.",
					video: " https://www.youtube.com/embed/ED4o1WJFmDY"
				},
				{
					id: 27,
					name: " Cyberpunk 2077",
					genre: " Sports",
					publisher: "Publisher:WB Games",
					ratings: " Mature ",
					photo: "https://gearnuke.com/wp-content/uploads/2018/08/Cyberpunk-2077-1-1.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamor, and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character's cyberware, skill set, and playstyle, and explore a vast city where the choices you make shape the story and world around you.",
					video: " https://www.youtube.com/embed/LembwKDo1Dk "
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
				},
				{
					id: 32,
					name: "WRC 9 ",
					genre: " Racing",
					publisher: "Nacon",
					ratings: " Everyone",
					photo:
						"https://www.teamvvv.com/wp-content/uploads/2020/04/WRC9_Screenshots_1_New_Zealand_Ford_2_4K-1920x1080.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"WRC 9 is the newest racing simulation game approved by the professional drivers of the real WRC Championship. With three brand new rallies (Kenya, Japan, and New Zealand), 15 legendary vehicles and more than 100 stages to tackle, WRC 9 is the most expansive title in the series to date. WRC 9 also features a variety of new game modes designed for the community, including a fully customizable Club system where players will be able to create their own communities, invite friends, and compete together all over the world in online championships. With the ability to play as the best drivers in the world with their official cars in the most realistic physics engine and environments yet, this is the definitive rally simulation experience.",
					video: " https://www.youtube.com/embed/_aHxlD2icMY"
				},
				{
					id: 33,
					name: "Forza Horizon 4",
					genre: " Racing",
					publisher: "Microsoft Studios",
					ratings: " Everyone",
					photo: "http://ksassets.timeincuk.net/wp/uploads/sites/54/2018/06/Forza-Horizon-4_Autumn-Drive.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"CHANGES EVERYTHING. Dynamic seasons change everything at the world's greatest automotive festival. Go it alone or team up with others to explore beautiful and historic Britain in a shared open world. Collect, modify and drive over 450 cars. Race, stunt, create and explore – choose your own path to become a Horizon Superstar. The Forza Horizon 4 Standard Edition digital bundle includes the full game of Forza Horizon 4 and the Formula Drift Car Pack for Forza Horizon 4.",
					video: "https://www.youtube.com/embed/RCRYs7yfeo4"
				},
				{
					id: 34,
					name: "Need for Speed Heat",
					genre: " Racing",
					publisher: "Electronic Arts",
					ratings: " Everyone",
					photo:
						"https://www.gamespace.com/wp-content/uploads/2020/06/Need-for-Speed-Heat-Gets-Cross-Play.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"Hustle by day and risk it all at night in Need for Speed™ Heat, a white-knuckle racer that pits you against a city’s rogue police force as you battle your way into street racing’s elite. By day compete in the Speedhunter Showdown – a sanctioned competition where you earn bank to customize and upgrade your garage of high-performance cars. When your ride’s perfectly styled and hyper-tuned, and you’re ready to ramp up the intensity, drive out into the night where you and your crew take on the competition in illicit street races that build your reputation and grant you access to bigger races and better parts. But under the cover of darkness patrols a rogue task force looking to bring you down and swipe all you’ve earned.",
					video: "https://www.youtube.com/embed/9ewiJJe_nYI"
				},
				{
					id: 35,
					name: "The Crew 2",
					genre: " Racing",
					publisher: " Ubisoft",
					ratings: " Teen",
					photo: "http://torrentsgames.org/wp-content/uploads/2017/09/The-Crew-2-PC.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"In The Crew® 2, take on the American motorsports scene as you explore and dominate the land, air, and sea of the United States in one of the most exhilarating open worlds ever created. With a wide variety of exotic cars, bikes, boats, and planes to choose from, experience the unbridled thrill and adrenaline-pumping excitement of competing across the entire US as you test your skills in a wide range of driving disciplines. Record every heart-pounding, white-knuckle, asphalt-melting moment and share them with your friends and rivals with the simple push of a button. Fame is yours to take!",
					video: "https://www.youtube.com/embed/X9-bWlWilps"
				},
				{
					id: 36,
					name: "Moto Racer 4",
					genre: " Racing",
					publisher: " Microids",
					ratings: " Mature",
					photo:
						"https://static.gamespot.com/uploads/original/536/5360430/3076225-mr4_screenshots_e3_2016_02.jpg",
					console: " PC, PS4, PS5, Xbox, OneXbox, Series X",
					desc:
						"In a world where freestyle and risk-taking dominate, impose your riding style all around the world. Impress your opponents and win races with class!Moto Racer 4 is racing game you can play on asphalt or dirt in single or multiplayer mode (up to ten players).Master drifting, wheelies, sharp turns and other techniques to earn a place on the podium!Customize and upgrade your bike! Progress through Moto Racer 4 and take in the stunning environments.From the United States to the Asia by way of the desert, Moto Racer 4 takes you through perilous, breathtaking courses at 100 miles an hour.",
					video: "https://www.youtube.com/embed/torYjTerlso"
				}
			],
			loggedIn: false
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
