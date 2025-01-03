import { UnorderedList } from "@chakra-ui/react";

const upcomingEvents = [
  {
    name: "Estimathon",
    start_time: "03/04/2023 3:00 PM",
    end_time: "03/04/2023 5:00 PM",
    link: "https://tinyurl.com/estimathonsignup",
    discord: "https://discord.com/channels/702801010426511373/702835998207246426",
    location: "Rolfe Hall Room 3108",
    image: "/static/event/estimathon.png",
    description: "The Estimathon is a team-based contest prepared and hosted by ACM ICPC @ UCLA that combines trivia, game theory, and mathematical thinking. Teams have 30 minutes to work on a set of 13 estimation problems, the winning team being the one with the best set of estimates. If this sounds interesting, please fill out the signup form at https://tinyurl.com/estimathonsignup . You can register as an individual or as a team with up to two of your friends.",
  },
  {
    name: "Interview Track Workshop #2",
    start_time: "01/26/2023 6:00 PM",
    end_time: "01/26/2023 8:00 PM",
    link: "",
    discord: "https://discord.com/channels/702801010426511373/898718342922248252",
    location: "Engr. VI 289",
    image: "/static/event/interview.png",
    description: "Are you preparing for a computer science interview and want to improve your skills in graph theory? Next week\'s workshop on graph traversals is the perfect opportunity for you! This workshop will review graph representations and will cover various types of graph traversals, such as breadth-first search and depth-first search. You will also have the opportunity to practice solving interview-style questions and receive feedback from experienced instructors. The workshop will be held at Engineering VI 289 on Thursday (Jan. 26) at 6-8 PM. Don't miss out on this chance to improve your interview skills!"
  },
  {
    name: "Intermediate Track Workshop #1",
    start_time: "01/23/2023 6:00 PM",
    end_time: "01/23/2023 8:00 PM",
    link: "",
    discord: "https://discord.com/channels/702801010426511373/894508836617084938",
    location: "Engr. VI 289",
    image: "/static/event/intermediate.png",
    description: "Are you ready to level up 🚀 your competitive programming skills? 😍 Our intermediate workshop series is starting this Monday at 6pm, and we're covering some exciting topics this quarter! 🔥 Brush up on Graph Theory 📊, Game Theory 🎲, Dynamic Programming 💻, Divide and Conquer 🤔, and Advanced Mathematics 📚. Join us for the first meeting on Monday Week 3, 🕕 6:00-7:30pm in room 289 of Engineering VI 🏢 for an introduction to Graph Theory! 📊 We will have snacks 🍭, a raffle 💸, a Kahoot 👩‍🏫, a contest 🧠, and more every week! 🤙 Don't miss out on the opportunity to improve your coding abilities and conquer those algorithms together! 💪📚💻 See you there! 🤗"
  }
]

const pastEvents = [
  {
    image: '/static/event/bruinquest.png',
    name: 'Hack x ICPC x Cyber presents BruinQuest',
    quarter: 'Fall 2020',
    description: 'Explore a virtual UCLA campus and complete fun challenges to compete for points, prizes, and the glory of being Bruin Quest Champion!',
  },
  {
    image: '/static/event/intro.png',
    name: 'Intro to Competitive Programming',
    quarter: 'Fall 2020',
    description: 'From climbing coding leaderboards to competing in ICPC regionals to constructing clever algorithms with clever friends, the Competitive Programming journey starts here. Write your first contest solution and learn what it takes to start solving challenging and often beautiful problems!',
  },
  {
    image: '/static/event/fallgm_blank.png',
    name: 'ICPC General Meeting',
    day: 'Thu',
    date: 'Sept. 30',
    time: '7 pm - 8 pm PT',
    quarter: 'Fall 2021',
    location: 'Boelter Hall 4760',
    description: 'In-person space has filled up. Check Facebook/Discord for the Zoom link!',
    facebook: 'https://www.facebook.com/events/1805522092967093',
    discord: 'https://discord.com/channels/702801010426511373/702835998207246426',
  },
  {
    image: '/static/event/upcoming/graph.png',
    name: 'ICPC Team Kickoff',
    day: 'Sat',
    date: 'Oct. 2',
    time: '12 pm - 3 pm PT',
    quarter: 'Fall 2021',
    location: 'Engineering VI 289',
    description: "Join members of last year's Divisionals- and Worlds- qualifying ICPC teams for an ICPC practice and learn more about joining for the 2022 season!",
    // facebook: 'https://fb.me/e/ddXe8iFSC',
    discord: 'https://discord.com/channels/702801010426511373/702835998207246426',
  },
  {
    image: '/static/event/upcoming/graph.png',
    name: 'ICPC Team Tryout #1',
    day: 'Sat',
    date: 'Oct. 9',
    time: '12 pm - 3 pm PT',
    // quarter: 'Fall 2021',
    location: 'Engineering VI 289',
    description: "An individual programming contest to select some of the team members for the 2021-22 Regionals team!",
    // facebook: 'https://fb.me/e/ddXe8iFSC',
    discord: 'https://discord.com/channels/702801010426511373/702835998207246426',
  }
];

const allEvents = [
  {
    image: '/static/event/intro.png',
    name: 'Intro to Competitive Programming',
    description: 'In intro to CP, we explore various beginner-friendly topics that appear frequently in competitive programming. Whether you are completely new to CP, an expert looking for a quick review, or just an algorithm and problem-solving enthusiast, we promise you will find the workshops interesting and fun!',
    quarter: "Fall | Winter | Spring",
    shortDesc: "Workshop",
  },
  {
    image: '/static/event/interview.png',
    name: 'Interview Crash Course (Interview Track)',
    description: 'Worried about your upcoming coding interview? Don\'t worry, we got you covered! ACM ICPC is hosting a crash course that\'ll give you the data structure and algorithm knowledge you\'ll need to ace your next technical interview. Come through to hone your skills and get a head start on your CS career!',
    quarter: "Fall | Winter | Spring",
    shortDesc: "Workshop",
  },
  {
    image: '/static/banner.png',
    name: 'ICPC Training (Advanced Track)',
    description: 'An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!',
    quarter: "Winter | Spring",
    shortDesc: "Workshop",
  },
  {
    image: '/static/event/icpc-banner.png',
    name: 'ICPC Team Tryouts',
    description: 'Think you have what it takes? Come tryout for the UCLA ICPC team! Each Fall, we host two tryouts to select the 15 best contestants to represent UCLA at ICPC regionals, where we compete against other schools in SoCal for a chance to advance to the national championship or even the world final!',
    quarter: "Fall",
    shortDesc: "Contest",
  },
  {
    image: '/static/event/codesprint.png',
    name: 'CodeSprintLA',
    description: 'CodeSprintLA is UCLA\'s own Competitive Programming Competition organized by ACM ICPC. Competitive Programming is the activity (some call it a sport!) of writing programs to solve computational problems. You must be clever with your algorithm to solve the program in a given time limit. Individual or teams compete to solve the most problems!',
    quarter: "Spring",
    shortDesc: "Contest",
  },
  {
    image: '/static/event/bruinquest.png',
    name: 'ICPC x Cyber Puzzle Hunt',
    description: 'Programming puzzles are fun, but do you know what\'s more fun? Programming puzzles + Non-programming puzzles :). Join us to solve some interesting UCLA-related puzzles in an intense team-based contest. Winners get bragging rights, prizes, and more!',
    quarter: 'TBD',
    shortDesc: "Contest"
  },
];

const Seniors = [
  {
    image: '/static/member/rl.JPG',
    name: 'Robert Lee',
    position: 'Advisor, President Emeritus',
    description: 'A 4th year Aero and Math of Comp looking forward to graduation. In my spare time, I read about astronomy and design orbits for CubeSats. You\'ll also catch me cooking, eating out to avoid cooking, or playing Overwatch.',
    funFacts: {
      'ice cream': 'Vietnamese Rocky Road',
      professor: 'Taira',
      editor: 'Vim',
      language: 'C++',
      course: 'MAE 161C',
      'TV show': 'Community',
    },
  },
  {
    image: '/static/member/cc.JPG',
    name: 'Carson Cox',
    position: 'Officer',
    description: 'Howdy! I\'m Carson, a fourth year computer science major. You can probably find me at the climbing gym more often than not, and when I\'m not there I\'m probably watching anime in my apt or playing switch with my roommates. Don\'t be afraid to say hi if you see me!',
    funFacts: {
      'ice cream': 'Vanilla',
      professor: 'Eggert',
      editor: 'Repl.it',
      language: 'C++',
      course: 'CS 131',
      'TV show': 'One Piece',
    },
  },
  {
    image: '/static/member/ad.JPG',
    name: 'Arvin Ding',
    position: 'Officer',
    description: 'Sup! I\'m a third year CS major.  I like math, programming, sushi, anime (Frieren is fire), and shark tank. I want to create a startup at some point.',
    funFacts: {
      'ice cream': 'mango',
      professor: 'Igor Pak!',
      editor: 'Eclipse',
      language: 'Java',
      course: 'CS 35L',
      'TV show': 'Ping Pong The Animation!!!',
    },
  },
  {
    image: '/static/member/snal.JPG',
    name: 'Sumith Nalabolu',
    position: 'Officer',
    description: 'hi im sumith, a 4th year interested in math and pl. i like solving problems, taking/writing contests, and teaching. in my free time i watch/play sports, speed(?)cube, and hopefully will travel a lot this year',
    funFacts: {
      'ice cream': 'Cookies and Cream',
      professor: 'Igor Pak',
      editor: 'Vim',
      language: 'OCaml',
      course: 'Math 184 Combinatorics',
      'TV show': 'Clannad',
    },
  },
  {
    image: '/static/member/lj.png',
    name: 'Lucas Jeong',
    position: 'Officer',
    description: '👋ඞ',
    funFacts: {
      'ice cream': 'stwawbewwy',
      professor: 'sherstov',
      editor: 'nwim',
      language: 'c++',
      course: 'cs 181',
      'TV show': 'i dont watch tv',
    },
  },
  {
    image: '/static/member/nv.JPG',
    name: 'Neil Vaishampayan',
    position: 'Officer',
    description: 'Hi! I\'m Neil, a 5th year undergrad/2nd year masters CS student from the Bay Area interested in compilers and Quantum Programming. In my free time, I like to watch soccer, play the horn, and play video games.',
    funFacts: {
      'ice cream': 'Mint Chocolate Chip',
      professor: 'Palsberg',
      editor: 'VSCode',
      language: 'Ocaml',
      course: 'CS 132',
      'TV show': 'Andor',
    },
  },
  {
    image: '/static/member/jz.png',
    name: 'Jacob Zhang',
    position: 'President',
    description: 'I\'m a 4th year Math/CS double major interested in all things math and CS. I enjoy running, rock climbing, and learning Chinese. I\'ve never been outside of the country, but I have visited over 30 US states.',
    funFacts: {
      'ice cream': 'Handel\'s Graham Central Station',
      professor: 'Eggert',
      editor: 'VSCode + Vim keybindings',
      'TV show': 'Queen\'s Gambit',
    },
  },
  {
    image: '/static/member/ag.png',
    name: 'Ana Gu',
    position: 'Officer',
    description: 'Hello. I\'m Ana. I am a fourth year majoring in CS. In my free time, I\m usually playing my switch and watching TV. Hit me up if you\'re into carnivorous plants and/or houseplants.',
    funFacts: {
      'ice cream': 'Ruby Chocolate',
      professor: 'Smallberg',
      editor: 'Emacs/Pycharm',
      'TV show': 'Brooklyn 99',
    },
  },
  {
    image: '/static/member/an.png',
    name: 'Alvin Nguyen',
    position: 'Officer',
    description: 'Hi, I\'m Alvin. I\'m a 4th year CS major + math minor, and I\'ve helped teach ICPC workshops for almost 3 years now. Outside of tech, I enjoy playing Minecraft, and I also do a little bit of running.',
    funFacts: {
      'ice cream': 'Chocolate',
      professor: 'Smallberg',
      editor: 'VS Code',
      'TV show': 'The Boys',
    },
  },
  {
    image: '/static/member/rn.png',
    name: 'Rohit Nema',
    position: 'Officer',
    description: 'Hi! I\'m Rohit, a 4th year Computer Science and Math major. I\'m currently involved in Cryptography research and trying to dip my feet in competitive programming. I like to watch anime and play basketball.',
    funFacts: {
      'ice cream': 'Mint Chocolate Chip',
      professor: 'Eggert',
      editor: 'Vim',
      'TV show': 'Re:Zero',
    },
  },
  {
    image: '/static/member/bl.png',
    name: 'Bill Liu',
    position: 'Officer',
    description: 'Hi there! I\'m Bill, a fourth-year CS major interested in iOS development and competitive programming! At ICPC, I used to lead Interview Track, and now I\'m involved with events like Bruin Quest! I also enjoy fencing, painting, chess, and digital card games!',
    funFacts: {
      'ice cream': 'Mango/Peach',
      professor: 'Eggert',
      editor: 'Emacs',
      'TV show': 'Mythic Quest',
    },
  },
  {
    image: '/static/member/ak.png',
    name: 'Arjun Kallapur',
    position: 'Officer',
    description: 'Hi I\'m Arjun and I am a 4th year CS major! I\'m super passionate about teaching and learning new things. Catch me gardening, listening to pop music, and trying to (and mostly failing to) cook.',
    funFacts: {
      'ice cream': 'Chocolate',
      professor: 'Eggert',
      editor: 'VS Code',
      'TV show': 'The Bachelor',
    },
  },
  {
    image: '/static/member/aj.png',
    name: 'Arihant Jain',
    position: 'Officer',
    description: '4th year CS Major originally from NJ 1/3 of the ICPC team representing UCLA. Big fan of Air Bud, Rocket League, and spicy food',
    funFacts: {
      'ice cream': 'Butter Pecan',
      professor: 'Nachenberg',
      editor: 'VS Code',
      'TV show': 'Barry',
    },
  },
  {
    image: '/static/member/rd.png',
    name: 'Reiya Downs',
    position: 'Officer',
    description: 'Hi! :) I\'m Reiya, and I\'m a a fourth year Math of Computation major who loves rational fiction, TV, dancing, and learning to draw! I also know 1 card trick, and if you\'re lucky I\'ll show you ;)',
    funFacts: {
      'ice cream': 'Double Peanut Butter Chip',
      professor: 'Jon Eyolfson',
      editor: 'Emacs',
      'TV show': 'Banana Fish',
    },
  },
  {
    image: '/static/member/ns.png',
    name: 'Nikil Selvam',
    position: 'Advisor',
    description: 'Hey! I\'m Nikil, a 4th year majoring in cs & math. i hail from qatar (bonus points if you know this desert in the middle east!). badminton player, ml enthusiast, keyboardist, algorithms junkie, factorio novice, and a die-hard roger federer fan! former icpc prez, now advisor :)',
    funFacts: {
      'ice cream': 'Olive Oil',
      professor: 'Darwiche',
      editor: 'VS Code',
      'TV show': 'The Crown',
    },
  },
]

// Members ordered by position then seniority
const members = [
  {
    image: '/static/member/wz.JPG',
    name: 'William Zhao',
    position: 'President',
    description: 'hi! I\'m William, a 3rd year Computer Science major! I really enjoy competitive programming and problem solving. As for non-CS related stuff, I love learning about 20th century European history, geeking out about airplanes, and reading about baseball analytics.',
    funFacts: {
      'ice cream': 'Cookies and Cream',
      professor: 'Smallberg',
      editor: 'VS Code',
      language: 'c++',
      course: 'CS 35L',
      'TV show': 'Better Call Saul!',
    },
  },
  {
    image: '/static/member/jliu.JPG',
    name: 'Jason Liu',
    position: 'Vice President',
    description: 'Hey, I\'m Jason, a 3rd year Computer Science major. Aside from competitive programming, I like math and playing social deduction games. In short, I really enjoy solving problems. You might also catch me reading in dining halls (in which case please say hi!)',
    funFacts: {
      'ice cream': 'Vanilla',
      professor: 'Eggert',
      editor: 'MacVim',
      language: 'C++',
      course: 'CS 35L',
      'TV show': 'Sousou no Frieren',
    },
  },
  {
    image: '/static/member/am.JPG',
    name: 'Akash Madiraju',
    position: 'Vice President',
    description: 'Hi! I\'m Akash, a 3rd year CS Major from the Bay Area. I like competitive programming and math, and enjoy playing video games (Smash and Rocket League) and playing saxophone for the UCLA Marching Band.',
    funFacts: {
      'ice cream': 'Birthday Cake',
      professor: 'Paul Balmer',
      editor: 'VSCode',
      language: 'C++',
      course: 'CS 132',
      'TV show': 'Death Note',
    },
  },
  {
    image: '/static/member/sn.JPG',
    name: 'Suhas Nagar',
    position: 'Advisor, President Emeritus',
    description: 'Hi! I\'m Suhas, a 4th year CS Major from the Bay Area. In my free time, you can usually find me playing video games (I\'m a big fan of Hollow Knight + Outer Wilds), trying to write my own rap battles, or playing basketball at Wooden :)',
    funFacts: {
      'ice cream': 'Pink Rose',
      professor: 'Reinman',
      editor: 'IntelliJ',
      language: 'Java',
      course: 'CS C122',
      'TV show': 'The Owl House',
    },
  },
  {
    image: '/static/member/is.JPG',
    name: 'Illia Shkirko',
    position: 'Officer',
    description: 'Hi! I am a fourth year Computer Science major. I enjoy rock-climbing, traveling, skiing, and going to concerts.',
    funFacts: {
      'ice cream': 'Chocolate',
      professor: 'Nachenberg',
      editor: 'VSCode',
      language: 'C++',
      course: 'CS 181',
      'TV show': 'how to get away with murder',
    },
  },
  {
    image: '/static/member/jh.JPG',
    name: 'Jason Huang',
    position: 'Officer',
    description: 'Hi! I\'m a 4th year interested in Theoretical CS. Feel free to reach out if you\'re interested in tennis or running!',
    funFacts: {
      'ice cream': 'Cookies',
      professor: 'Gieseker',
      editor: 'Sublime text',
      language: 'C++',
      course: 'math 275D',
      'TV show': 'kimi no na wa',
    },
  },
  {
    image: '/static/member/sk.JPG',
    name: 'Shubham Kumar',
    position: 'Officer',
    description: 'hi! i\'m shubham, a third-year computer engineering major from the bay. i\'m interested in math, competitive programming and ml. in my free time, you can find me losing chess games, playing guitar or biking.',
    funFacts: {
      'ice cream': 'covefe',
      professor: 'Paul Balmer',
      editor: 'repl.it',
      language: 'python',
      course: 'CS 111',
      'TV show': 'spongebob',
    },
  },
  {
    image: '/static/member/xx.JPG',
    name: 'Charlotte Chen',
    position: 'Officer',
    description: 'Hiii, I\'m Charlotte, a third-year math major! I\'m interested in algorithms, analysis, probability, and problem-solving in general. I also like music (esp Bach and Rachmaninoff), a cat called Jr. Kolmogorov (mine), and dota2.',
    funFacts: {
      'ice cream': 'Cookies & Cream',
      professor: 'Marek Biskup',
      editor: 'vs code',
      language: 'C++',
      course: 'Math 131BH',
      'TV show': 'Steins Gate',
    },
  },
  {
    image: '/static/member/pm.png',
    name: 'Peony Mong',
    position: 'Officer',
    description: 'Hi, I\'m Peony, a third-year Computer Science major who is also trying to major in applied math. I like to do logic puzzles, play video games, do wushu, and spend quality time with my friends.',
    funFacts: {
      'ice cream': 'Cookie butter',
      professor: 'KTD',
      editor: 'VSCode',
      language: 'C++',
      course: 'Math 61',
      'TV show': 'Legend of Korra',
    },
  },
  { 
    image: '/static/member/hh.JPG', 
    name: "Henry Huang", 
    position: "Officer", 
    description: 'Hi, my name is Henry Huang, and I\'m a third year CS major at UCLA. I started competitive programming in high school, and it has been a hobby of mine ever since. In my free time, I like to code random things, play video games, and listen to music.', 
    funFacts: { 
      'ice cream': 'Lime', 
      professor: 'Smallberg', 
      editor: 'CLion', 
      language: 'Python', 
      course: 'CS33', 
      'TV show': 'Don\'t watch'
    },
  },
  {
    image: '/static/member/hw.jpg',
    name: 'Henry Wang',
    position: 'Officer',
    description: 'Guitarist band member',
    funFacts: {
      'ice cream': 'strawberry',
      professor: 'none',
      editor: 'VS code',
      language: 'c++',
      course: 'cs35l',
      'TV show': 'Bocchi the rock'
    },
  },
  {
    image: '/static/member/sk-fake.JPG',
    name: 'Shreyas Kaasyap',
    position: 'Officer',
    description: 'Hi, my name is Shreyas, and I\'m a third year EE major at UCLA. In my free time, I like to play basketball, play the guitar and piano, and go out with friends.',
    funFacts: {
      'ice cream': 'cotton candy',
      professor: 'jonathan kao',
      editor: 'vs code',
      language: 'c++',
      course: 'ee 102',
      'TV show': 'The office'
    },
  },
  {
    image: '/static/member/ra.jpg',
    name: 'Rathul Anand',
    position: 'Officer',
    description: 'Whats up! I\'m Rathul, a 2nd year CSE and Math major. More often than not you can find me with a matcha latte, but in the meantime, I enjoy playing percussion, hiking, and spending time with my friends :)',
    funFacts: {
      'ice cream': 'matcha',
      professor: 'eggert',
      editor: 'VS Code',
      language: 'Haskell',
      course: 'CS 111',
      'TV show': 'House'
    },
  },
  {
    image: '/static/member/ew.jpg',
    name: 'Eric Wang',
    position: 'Officer',
    description: 'Hello! I\'m Eric, a 2nd CS major, and I\'m interested in algorithmic puzzles and computer graphics. You\'ll probably find me in E6 trying out dumb things with programming languages. Outside of CS, I\'m also part of Medleys A Cappella, a community service a cappella group!',
    funFacts: {
      'ice cream': 'Cookies and Cream',
      professor: 'KT Do',
      editor: 'Neovim (but really VS Code)',
      language: 'Python',
      course: 'None of them so far',
      'TV show': 'Kaguya-sama: Love is War'
    },
  },
  {
    image: '/static/member/ms.JPG',
    name: 'Michael Song',
    position: 'Officer',
    description: 'Hi! I\'m Michael, a 3rd year CS major, interested in competitive programming and machine learning. Outside of CS, I enjoy playing basketball (or any sport in general) and trying new things with friends. I\'m also involved with other student organizations such as exploretech.la.',
    funFacts: {
      'ice cream': 'Cookie Dough',
      professor: 'KT Do',
      editor: 'anything jetbrains',
      language: 'C++ for comp prog, Python otherwise',
      course: 'CS 188',
      'TV show': 'Don\'t watch'
    },
  },
  {
    image: '/static/member/ss.jpg',
    name: 'Surya Subbarao',
    position: 'Officer',
    description: 'Hi! I\'m Surya, a third-year CS+Math major. I\'m really interested in algorithms, analysis, and alliterations. Outside of these, I love saxophone, singing, stationery, and Spanish.',
    funFacts: {
      'ice cream': 'Mint',
      professor: 'Marek Biskup',
      editor: 'Vim',
      language: 'C++',
      course: 'CS 132',
      'TV show': 'Wheel of Fortune'
    },
  },
  {
    image: '/static/member/hz2.jpg',
    name: 'Harry Zhou',
    position: 'Officer',
    description: 'Hey there! I\'m Harry, a 2nd year CSE major, and I love competitive programming, math, and ML. Outside of CS, I enjoy playing basketball (future Steph Curry in the making :D), chess, and hanging out with my friends!',
    funFacts: {
      'ice cream': 'Sea salt',
      professor: 'Jonathan Kao',
      editor: 'Neovim (really, cough cough Eric)',
      language: 'C++',
      course: 'ECE 147',
      'TV show': 'Friends (all time), Arcane (more recently)'
    },
  },
  {
    image: '/static/member/rg.png',
    name: 'Riya Gupta',
    position: 'Officer',
    description: 'Hi, My name is Riya and I am a second year CS major, insterested in math, algorithms, and machine learning. In my free time, I like to drink boba, listen to music, take naps, chit-chat with my friends.',
    funFacts: {
      'ice cream': 'mint chocolate',
      professor: 'eggert',
      editor: 'vs code',
      language: 'c++',
      course: 'cs 35l',
      'TV show': 'friends'
    },
  },
  {
    image: '/static/member/en.png',
    name: 'Emily Ni',
    position: 'Officer',
    description: 'Hi! I\'m Emily, a 2nd year Math major, DSE minor who enjoys logic puzzles and all things mathy. In my free time I love going out shopping or thrifting with friends and collecting cute jewelry :D',
    funFacts: {
      'ice cream': 'Mint chocolate',
      professor: 'Richard Wong',
      editor: 'VS Code',
      language: 'C++',
      course: 'Math 115AH',
      'TV show': 'The Good Place'
    },
  },
  {
    image: '/static/member/cd.jpeg',
    name: 'Cindy Ding',
    position: 'Officer',
    description: 'Hi! My name is Cindy, and I\'m a second-year CS major. In my free time, I love solving chess puzzles and playing cards or games with friends. I also enjoy exploring matcha spots in K-town and have recently started collecting PopMarts.',
    funFacts: {
      'ice cream': 'matcha',
      professor: 'eggertpenguin',
      editor: 'vs code',
      language: 'java',
      course: 'cs35l',
      'TV show': 'chihayafuru'
    },
  },
  {
    image: '/static/member/aka.jpg',
    name: 'Arsh Koneru-Ansari',
    position: 'Officer',
    description: 'Hi, I\'m a second year, teaching Interview Track this quarter.',
    funFacts: {
      'ice cream': '',
      professor: '',
      editor: '',
      language: '',
      course: '',
      'TV show': ''
    },
  },
  {
    image: '/static/member/ap.jpg',
    name: 'Andy Polizzotto',
    position: 'Officer',
    description: 'Hi, I\'m a Masters student, focusing on Beginner Track and Regionals training for this quarter.',
    funFacts: {
      'ice cream': '',
      professor: '',
      editor: '',
      language: '',
      course: '',
      'TV show': ''
    },
  }
];

export { allEvents, members, pastEvents, upcomingEvents };
