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
    description: "Are you preparing for a computer science interview and want to improve your skills in graph theory? Next week’s workshop on graph traversals is the perfect opportunity for you! This workshop will review graph representations and will cover various types of graph traversals, such as breadth-first search and depth-first search. You will also have the opportunity to practice solving interview-style questions and receive feedback from experienced instructors. The workshop will be held at Engineering VI 289 on Thursday (Jan. 26) at 6-8 PM. Don't miss out on this chance to improve your interview skills!"
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
    description: 'Worried about your upcoming coding interview? Don’t worry, we got you covered! ACM ICPC is hosting a crash course that’ll give you the data structure and algorithm knowledge you’ll need to ace your next technical interview. Come through to hone your skills and get a head start on your CS career!',
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
    description: 'CodeSprintLA is UCLA’s own Competitive Programming Competition organized by ACM ICPC. Competitive Programming is the activity (some call it a sport!) of writing programs to solve computational problems. You must be clever with your algorithm to solve the program in a given time limit. Individual or teams compete to solve the most problems!',
    quarter: "Spring",
    shortDesc: "Contest",
  },
  {
    image: '/static/event/bruinquest.png',
    name: 'ICPC x Cyber Puzzle Hunt',
    description: 'Programming puzzles are fun, but do you know what’s more fun? Programming puzzles + Non-programming puzzles :). Join us to solve some interesting UCLA-related puzzles in an intense team-based contest. Winners get bragging rights, prizes, and more!',
    quarter: 'TBD',
    shortDesc: "Contest"
  },
];

const Seniors = [
  {
    image: '/static/member/jz.png',
    name: 'Jacob Zhang',
    position: 'President',
    description: 'I’m a 4th year Math/CS double major interested in all things math and CS. I enjoy running, rock climbing, and learning Chinese. I’ve never been outside of the country, but I have visited over 30 US states.',
    funFacts: {
      'ice cream': 'Handel’s Graham Central Station',
      professor: 'Eggert',
      editor: 'VSCode + Vim keybindings',
      'TV show': 'Queen’s Gambit',
    },
  },
  {
    image: '/static/member/ag.png',
    name: 'Ana Gu',
    position: 'Officer',
    description: 'Hello. I’m Ana. I am a fourth year majoring in CS. In my free time, I\m usually playing my switch and watching TV. Hit me up if you’re into carnivorous plants and/or houseplants.',
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
    description: 'Hi, I’m Alvin. I’m a 4th year CS major + math minor, and I’ve helped teach ICPC workshops for almost 3 years now. Outside of tech, I enjoy playing Minecraft, and I also do a little bit of running.',
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
    description: 'Hi! I’m Rohit, a 4th year Computer Science and Math major. I’m currently involved in Cryptography research and trying to dip my feet in competitive programming. I like to watch anime and play basketball.',
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
    description: 'Hi there! I’m Bill, a fourth-year CS major interested in iOS development and competitive programming! At ICPC, I used to lead Interview Track, and now I’m involved with events like Bruin Quest! I also enjoy fencing, painting, chess, and digital card games!',
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
    description: 'Hi I’m Arjun and I am a 4th year CS major! I’m super passionate about teaching and learning new things. Catch me gardening, listening to pop music, and trying to (and mostly failing to) cook.',
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
    description: 'Hi! :) I’m Reiya, and I’m a a fourth year Math of Computation major who loves rational fiction, TV, dancing, and learning to draw! I also know 1 card trick, and if you’re lucky I’ll show you ;)',
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
    description: 'Hey! I’m Nikil, a 4th year majoring in cs & math. i hail from qatar (bonus points if you know this desert in the middle east!). badminton player, ml enthusiast, keyboardist, algorithms junkie, factorio novice, and a die-hard roger federer fan! former icpc prez, now advisor :)',
    funFacts: {
      'ice cream': 'Olive Oil',
      professor: 'Darwiche',
      editor: 'VS Code',
      'TV show': 'The Crown',
    },
  },
]

const members = [
  {
    image: '/static/member/sn.png',
    name: 'Suhas Nagar',
    position: 'President',
    description: 'Hi! I’m Suhas, a 2nd year CS Major from the Bay Area. I’m the Codesprint 2023 Director for the upcoming year. In my free time, you can usually find me playing video games (I’m a big fan of Hollow Knight), trying to write my own rap battles, or playing basketball at Hitch :)',
    funFacts: {
      'ice cream': 'Cookies and Cream',
      professor: 'Smallberg',
      editor: 'IntelliJ IDEA',
      language: 'Java',
      course: 'CS 33',
      'TV show': 'The Owl House',
    },
  },
  {
    image: '/static/member/cc.png',
    name: 'Carson Cox',
    position: 'Vice President',
    description: 'Hi! My name is Carson, and I am a third year computer science major living in the university apartments this year. In my free time, I like to game, climb, and binge anime, and I am also an intro to competitive programming track lead.',
    funFacts: {
      'ice cream': 'Vanilla',
      professor: 'Eggert',
      editor: 'Emacs',
      language: 'Python',
      course: 'CS 161',
      'TV show': 'One Piece',
    },
  },
  {
    image: '/static/member/jl.png',
    name: 'Justin Li',
    position: 'Advisor',
    description: 'I’m Justin, a fourth year Computer Science major! I like doing competitive programming and solving puzzles, but I also really enjoy doing non-techy things like cooking, reading, or hiking. Always looking to try something new!',
    funFacts: {
      'ice cream': 'Cookies and Cream',
      professor: 'Smallberg',
      editor: 'CodeBlocks',
      language: 'C++',
      course: 'Filet Mignon',
      'TV show': 'I don’t watch TV :)',
    },
  },
  {
    image: '/static/member/rs.png',
    name: 'Rishi Sankar',
    position: 'Officer',
    description: 'Hi! I’m Rishi, a 4th year from the Bay Area. This year I’ve been involved with Codesprint and team practices with ICPC. In my free time I enjoy watching movies, going out to eat, and playing table tennis.',
    funFacts: {
      'ice cream': 'Cookies and Cream',
      professor: 'Eggert',
      editor: 'VS Code',
      language: 'Java',
      course: 'CS 132',
      'TV show': 'the big bang theory',
    },
  },
  {
    image: '/static/member/tx.png',
    name: 'Tony Xia',
    position: 'Officer',
    description: 'I’m a fourth year CS & applied math double major interested in CP, math, and computer vision. I spend almost all my time in E6 so come find me here LOL. I play league, val, violin, and soccer in my spare time and have been a Messi fan since 2008.',
    funFacts: {
      'ice cream': 'Coffee or Oreo',
      professor: 'Sahai',
      editor: 'VS Code',
      language: 'Python',
      course: 'CS 188 Deep Learning for Computer Vision',
      'TV show': 'Boba Fett',
    },
  },
  {
    image: '/static/member/ss.png',
    name: 'Saarthak Sharma',
    position: 'Officer',
    description: 'I am a fourth-year CS Major at UCLA. I am relatively new to competitive programming but am extremely interested and trying my best to be a part of the great ACM ICPC community.',
    funFacts: {
      'ice cream': 'Chocolate Chip',
      professor: 'Reinman',
      editor: 'VS Code',
      langauge: '',
      course: '',
      'TV show': 'Breaking Bad',
    },
  },
  {
    image: '/static/member/kc.png',
    name: 'Katie Chang',
    position: 'Officer',
    description: 'heyo this is kt! I am currently a fourth year cs major who is interested in ML, CV, bothering my friends about my cat KB, and bothering my cat :") come talk to me to get bothered uwu',
    funFacts: {
      'ice cream': 'Fudge Brownie ',
      professor: 'Smallberg',
      editor: 'Sublime. Always. Sometimes nano/vim if I’m feeling frisky',
      language: 'C++',
      course: 'all the CS188s <3',
      'TV show': 'umm can’t decide between Solar Opposites and the Blacklist',
    },
  },
  {
    image: '/static/member/lw.png',
    name: 'Lenny Wu',
    position: 'Officer',
    description: 'I’m Lenny, a 4th-year CS and Applied Math major. I like to cook, shoot photos, play piano, and read. You’ll also catch me running or lifting weights! :^)',
    funFacts: {
      'ice cream': 'Peanut Butter Banana',
      professor: 'my boi JONATHAN KAO',
      editor: 'VS Code',
      language: 'Python',
      course: 'EE C143A - Neural Signal Processing',
      'TV show': 'sike',
    },
  },
  {
    image: '/static/member/rl.png',
    name: 'Robert Lee',
    position: 'Advisor, President Emeritus',
    description: 'Hi! I’m Robert, a 3rd year studying Math of Computation and Aerospace Engineering from San Diego. I love competitive programming and teaching algorithms! My hobbies include working on never-ending projects and playing Overwatch.',
    funFacts: {
      'ice cream': 'Vietnamese Rocky Road',
      professor: 'Taira',
      editor: 'VS Code',
      language: 'C++',
      course: 'CS 35L',
      'TV show': 'Community',
    },
  },
  {
    image: '/static/member/lj.png',
    name: 'Lucas Jeong',
    position: 'Officer',
    description: '\\o',
    funFacts: {
      'ice cream': 'stwawbewwy',
      professor: 'sherstov',
      editor: 'nvim',
      language: 'python',
      course: 'cs 181',
      'TV show': 'i dont watch tv',
    },
  },
  {
    image: '/static/member/nv.png',
    name: 'Neil Vaishampayan',
    position: 'Officer',
    description: 'Hi! I’m Neil, a 4th year undergrad/1st year masters CS student from the Bay Area interested in compilers and ML. In my free time, I like to watch soccer, play the horn, and play video games.',
    funFacts: {
      'ice cream': 'Mint Chocolate Chip',
      professor: 'Palsberg',
      editor: 'PyCharm',
      language: 'Python',
      course: 'CS 132',
      'TV show': 'Andor',
    },
  },
  {
    image: '/static/member/is.png',
    name: 'Illia Shkirko',
    position: 'Officer',
    description: 'Hi! I am a second year Computer Science and Engineering major. I was co-leading Intro to Competitive Programming track this fall. I enjoy rock-climbing, meeting new people, trying new food, and learning Chinese!',
    funFacts: {
      'ice cream': 'Chocolate',
      professor: 'Nachenberg',
      editor: 'VSCode',
      language: 'C++',
      course: 'CS 35L',
      'TV show': 'how to get away with murder',
    },
  },
  // {
  //   image: '/static/member/rt.png',
  //   name: 'Ryan Tjoa',
  //   position: 'Officer',
  //   description: 'I’m a second year computer science major from Seattle. I was a part of Interview Track in winter, and am helping out with Beginner Track now.',
  //   funFacts: {
  //     'ice cream': 'Cookie Dough',
  //     professor: 'Millstein',
  //     editor: 'VS Code',
  //     language: 'Python',
  //     course: 'CS 231',
  //     'TV show': 'Squid Game',
  //   },
  // },
  {
    image: '/static/member/jh.png',
    name: 'Jason Huang',
    position: 'Officer',
    description: 'Hi! I’m a second-year math major with an interest in ML. You can usually catch me playing piano at Covel. I also like to lift weights and watch anime (big fan of Attack on Titan and Studio Ghibli movies).',
    funFacts: {
      'ice cream': 'Cotton candy',
      professor: 'Gieseker',
      editor: 'Sublime Text',
      language: 'Java',
      course: 'Japan 50 ',
      'TV show': 'Attack on Titan',
    },
  },
  {
    image: '/static/member/ad.png',
    name: 'Arvin Ding',
    position: 'Officer',
    description: 'Hi! I’m a second year CS major. I like math, Valorant, competitive programming, sushi, and shark tank. I want do a triathlon and create a startup at some point.',
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
    image: '/static/member/snal.png',
    name: 'Sumith Nalabolu',
    position: 'Intern',
    description: 'Hi! I’m Sumith, a third year from San Diego studying CS and math. I’m very interested in math adjacent stuff and I’ve been involved in competitions ever since high school; aside from academics, I like reading manga, playing bedwars, and attempting to play basketball.',
    funFacts: {
      'ice cream': 'Cookies and Cream',
      professor: 'Igor Pak',
      editor: 'Vim',
      language: 'LaTeX',
      course: 'Math 184 Combinatorics',
      'TV show': 'Clannad',
    },
  },
  {
    image: '/static/member/wz.png',
    name: 'William Zhao',
    position: 'Intern',
    description: 'I’m William, a 1st year Computer Science major! I really enjoy competitive programming and problem solving. As for non-CS related stuff, I love learning about 20th century European history, geeking out about airplanes, and reading about baseball analytics. ',
    funFacts: {
      'ice cream': 'Cookies and Cream',
      professor: 'Smallberg',
      editor: 'Vim I guess',
      language: 'c++',
      course: 'CS 31',
      'TV show': 'Better Call Saul!',
    },
  },
  {
    image: '/static/member/sk.png',
    name: 'Shubham Kumar',
    position: 'Intern',
    description: 'hi! i’m shubham, a first-year computer engineering major from the bay. i’m interested in math, competitive programming and ml. in my free time, you can find me losing chess games, playing guitar or biking.',
    funFacts: {
      'ice cream': 'coffee',
      professor: 'Howard Stahl',
      editor: 'repl.it',
      language: 'python',
      course: 'Ling 1',
      'TV show': 'spongebob',
    },
  },
  {
    image: '/static/member/jliu.png',
    name: 'Jason Liu',
    position: 'Intern',
    description: 'I am a first year CS major. Aside from competitive programming, I also like math and cryptography. I spend most of my free time reading cultivation novels or playing Set.',
    funFacts: {
      'ice cream': 'vanilla',
      professor: 'Corbin',
      editor: 'MacVim',
      language: 'C++',
      course: 'Physics 1B',
      'TV show': 'The Promised Neverland',
    },
  },
  {
    image: '/static/member/am.png',
    name: 'Akash Madiraju',
    position: 'Intern',
    description: 'Hi! I’m Akash, a 1st year CS Major this year, and I’m from the Bay Area. I like competitive programming and math, and enjoy playing video games (Smash and Rocket League) and playing the piano and saxophone. ',
    funFacts: {
      'ice cream': 'Birthday Cake',
      professor: 'Smallberg',
      editor: 'Xcode',
      language: 'C++',
      course: 'Math 101',
      'TV show': 'Death Note',
    },
  },
  {
    image: '/static/member/xx.png',
    name: 'Xiaoxian Chen',
    position: 'Intern',
    description: 'I’m Xiaoxian, a first-year math major. I’m interested in competitive programming, cryptography, and analysis. I also enjoy music, reading poetry and playing video games! My favorite game is Civilization VI, my favorite animation is Steins Gate, and my favorite composers are Bach and Rachmaninoff :)',
    funFacts: {
      'ice cream': 'Cookies & Cream',
      professor: 'Not sure, first quarter in ucla',
      editor: 'sublime text',
      language: 'C++',
      course: 'Math 115AH',
      'TV show': 'The Big Bang Theory',
    },
  },
  {
    image: '/static/member/pm.png',
    name: 'Peony Mong',
    position: 'Intern',
    description: 'I am a first year computer science major; I’m excited to help out with Interview Track plus the first in-person Estimathon event this year! I’m also involved in UCLA Wushu, but down to play tennis and video games ',
    funFacts: {
      'ice cream': 'Cookies and cream',
      professor: 'David Smallberg',
      editor: 'VS Code',
      language: 'C++/Java',
      course: 'CS 31',
      'TV show': 'The Simpsons (early seasons GOAT)',
    },
  },
];

export { allEvents, members, pastEvents, upcomingEvents };
