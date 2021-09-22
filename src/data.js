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
  }
];

const upcomingEvents = [
  {
    image: '/static/event/fallgm_blank.png',
    name: 'ICPC General Meeting',
    day: 'Thu',
    date: 'Sept. 30',
    time: '7 pm - 8 pm PT',
    location: 'Boelter Hall 4760',
    description: 'Make sure to stop by to learn more about our events for the quarter and what we do :)',
    facebook: 'https://www.facebook.com/groups/ucla.icpc/',
    discord: 'https://discord.com/channels/702801010426511373/702835998207246426',
  },
  {
    image: '/static/event/upcoming/graph.png',
    name: 'ICPC Team Kickoff',
    day: 'Saturday',
    date: 'Oct. 2',
    time: '12 pm - 3 pm PT',
    location: 'Engineering VI 289',
    description: "Join members of last year's Divisionals- and Worlds- qualifying ICPC teams for an ICPC practice and learn more about joining for the 2022 season!",
    // facebook: 'https://fb.me/e/ddXe8iFSC',
    discord: 'https://discord.com/channels/702801010426511373/702835998207246426',
  },
  {
    image: '/static/event/upcoming/intro.png',
    name: 'Beginner CP #1',
    day: 'Wed',
    date: 'Oct. 6',
    time: '6 pm - 8 pm PT',
    location: 'In Person!',
    description: ' \n More details soon.',
    // facebook: 'https://fb.me/e/2jzENJlPp',
    discord: 'https://discord.com/channels/702801010426511373/702835998207246426',
  },
  {
    image: '/static/event/upcoming/interview.png',
    name: 'Coding Interview #1',
    day: 'Thu',
    date: 'Oct. 7',
    time: '6 pm - 8 pm PT',
    location: 'In Person!',
    description: 'Intro to Coding Interviews/Arrays More details soon.',
    // facebook: 'https://fb.me/e/5DhHuB1F5',
    discord: 'https://discord.com/channels/702801010426511373/702835998207246426',
  },
];

const allEvents = [
  {
    image: '/static/event/intro.png',
    name: 'Beginner Competitive Programming',
    quarter: 'Fall',
    description: 'Continue your journey into competitive programming with Beginner CP. Continuing on from Intro CP, we explore slightly more advanced yet beginner-friendly themes in competitive programming. Whether you are completely new to CP, an expert looking for a quick review, or just an algorithm and problem-solving enthusiast, we promise you will find the workshops interesting and fun!',
  },
  {
    image: '/static/event/interview.png',
    name: 'Interview Crash Course (Interview Track)',
    quarter: 'Fall/Winter',
    description: 'Worried about your upcoming coding interview? Don’t worry, we got you covered! ACM ICPC is hosting a crash course that’ll give you the data structure and algorithm knowledge you’ll need to ace your next technical interview. Come through to hone your skills and get a head start on your CS career!',
  },
  {
    image: '/static/event/advanced.png',
    name: 'Advanced Training',
    quarter: 'Fall',
    description: 'An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!',
  },
  {
    image: '/static/event/codesprint.png',
    name: 'CodeSprintLA',
    quarter: 'Spring',
    description: 'CodeSprintLA is UCLA\'s own Competitive Programming Competition organized by ACM ICPC. Competitive Programming is the activity (some call it a sport!) of writing programs to solve computational problems. You must be clever with your algorithm to solve the program in a given time limit. Individual or teams compete to solve the most problems!',
  },
];

const members = [
  {
    image: '/static/member/jz.png',
    name: 'Jacob Zhang',
    position: 'President',
    description: 'I\'m a 4th year Math/CS double major interested in all things math and CS. I enjoy running, rock climbing, and learning Chinese. I\'ve never been outside of the country, but I have visited over 30 US states.',
    funFacts: {
      'ice cream': 'Handel\'s Graham Central Station',
      professor: 'Eggert',
      editor: 'VSCode + Vim keybindings',
      'TV show in the last year': 'Queen\'s Gambit',
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
      'TV show in the last year': 'Brooklyn 99',
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
      'TV show in the last year': 'The Boys',
    },
  },
  {
    image: '/static/member/jl.png',
    name: 'Justin Li',
    position: 'Officer',
    description: 'Hi, I\'m Justin, a Junior CS major from the Bay Area. Besides from doing competitive programming, I like to play and transcribe music as well as learn new dishes to cook. ',
    funFacts: {
      'ice cream': 'Cookies and Cream',
      professor: 'Darwiche',
      editor: 'CodeBlocks',
      'TV show in the last year': 'I don\'t watch TV :)',
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
      'TV show in the last year': 'Re:Zero',
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
      'TV show in the last year': 'Mythic Quest',
    },
  },
  {
    image: '/static/member/rs.png',
    name: 'Rishi Sankar',
    position: 'Officer',
    description: 'Hi! I\'m Rishi, a 3rd year from the Bay Area. In my free time I enjoy eating out with friends, watching movies, playing table tennis, and Smash Ultimate.',
    funFacts: {
      'ice cream': 'Cookies and Cream',
      professor: 'Eggert',
      editor: 'VS Code',
      'TV show in the last year': 'Lupin',
    },
  },
  {
    image: '/static/member/tx.png',
    name: 'Tony Xia',
    position: 'Officer',
    description: 'I\'m a third year CS & applied math double major interested in CP, math, and ML. All of these are math-heavy, so I really enjoy playing the violin to relax, as it only requires me to count to 4 (or 6 in rarer cases).',
    funFacts: {
      'ice cream': 'Coffee or Oreo',
      professor: 'Eggert',
      editor: 'VS Code',
      'TV show in the last year': 'The Queen\'s Gambit',
    },
  },
  {
    image: '/static/member/ss.png',
    name: 'Saarthak Sharma',
    position: 'Officer',
    description: 'I am a second-year CS Major at UCLA. I am relatively new to competitive programming but am extremely interested and trying my best to be a part of the great ACM ICPC community.',
    funFacts: {
      'ice cream': 'Chocolate Chip',
      professor: 'Reinman',
      editor: 'VS Code',
      'TV show in the last year': 'Breaking Bad',
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
      'TV show in the last year': 'The Bachelor',
    },
  },
  {
    image: '/static/member/aj.png',
    name: 'Arihant Jain',
    position: 'Officer',
    description: 'Hello! I\'m a third year CS major and I was on the team that went to ICPC nationals last year. In my free time I like to run and play video games. ',
    funFacts: {
      'ice cream': 'Cookies and Cream',
      professor: 'Nachenberg',
      editor: 'Vim',
      'TV show in the last year': 'Barry',
    },
  },
  {
    image: '/static/member/kc.png',
    name: 'Katie Chang',
    position: 'Officer',
    description: 'Heyo! I\’m a third yr CS Major interested in ML (CV wya!), Algo, and DB. Recently into photography, skateboarding, and bothering my cat KB. ',
    funFacts: {
      'ice cream': 'Fudge Brownie ',
      professor: 'Jonathan Rubin',
      editor: 'Sublime. Always. Sometimes nano/vim if I’m feeling frisky',
      'TV show in the last year': 'My life jk the Blacklist!',
    },
  },
  {
    image: '/static/member/lw.png',
    name: 'Lenny Wu',
    position: 'Officer',
    description: 'I\'m Lenny, a 3rd-year CS and Applied Math major. I like to cook, shoot photos, play piano, and read. You\'ll also catch me running or lifting weights! :^)',
    funFacts: {
      'ice cream': 'Peanut Butter Banana',
      professor: 'Smallberg',
      editor: 'VS Code',
      'TV show in the last year': 'WORLDSTAR HIPHOP',
    },
  },
  {
    image: '/static/member/rd.png',
    name: 'Reiya Downs',
    position: 'Officer',
    description: 'Hi! :) I\'m Reiya, and I\'m a a fourth year Math of Computation major who loves rational fiction, TV, dancing, and learning to draw! I also know 1 card trick, and if you’re lucky I’ll show you ;)',
    funFacts: {
      'ice cream': 'Double Peanut Butter Chip',
      professor: 'Jon Eyolfson',
      editor: 'Emacs',
      'TV show in the last year': 'Banana Fish',
    },
  },
  {
    image: '/static/member/rl.png',
    name: 'Robert Lee',
    position: 'Officer',
    description: 'Hi! I\'m Robert, a 2nd year studying Math of Computation and Aerospace Engineering from San Diego. I love competitive programming and teaching algorithms! My hobbies include working on never-ending projects and gaming.',
    funFacts: {
      'ice cream': 'Vanilla',
      professor: 'Clites',
      editor: 'VS Code',
      'TV show in the last year': 'Community',
    },
  },
  {
    image: '/static/member/hlj.png',
    name: 'Ho Lyun Jeong',
    position: 'Officer',
    description: 'hello, michael here. i sometimes do stuff.',
    funFacts: {
      'ice cream': 'strawberry',
      professor: 'Reinman',
      editor: 'intellij idea',
      'TV show in the last year': 'whats a tv',
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
      'TV show in the last year': 'The Crown',
    },
  }
];

export { upcomingEvents, allEvents, members, pastEvents };
