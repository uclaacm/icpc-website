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
    image: '/static/event/upcoming/interview.png',
    name: 'Coding Interview #1',
    day: 'Thu',
    date: 'Oct. 7',
    time: '6 pm - 8 pm PT',
    location: 'In Person!',
    description: 'Intro to Coding Interviews/Arrays',
    // facebook: 'https://fb.me/e/5DhHuB1F5',
    // discord: 'https://discord.com/channels/702801010426511373/713559003661336607',
  },
  {
    image: '/static/event/upcoming/graph.png',
    name: 'Advanced Training #1',
    day: 'TBA',
    date: 'TBA',
    time: 'TBA',
    location: 'In Person!',
    description: 'TBA',
    // facebook: 'https://fb.me/e/ddXe8iFSC',
    // discord: 'https://discord.com/channels/702801010426511373/765803471621718086',
  },
  {
    image: '/static/event/upcoming/intro.png',
    name: 'Beginner CP #1',
    day: 'TBA',
    date: 'TBA',
    time: 'TBA',
    location: 'In Person!',
    description: 'TBA',
    // facebook: 'https://fb.me/e/2jzENJlPp',
    // discord: 'https://discord.com/channels/702801010426511373/799726570268131398',
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
    quarter: 'Fall',
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
  // {
  //   image: '/static/event/intro.png',
  //   name: 'Intro to Competitive Programming',
  //   quarter: 'Fall',
  //   description: 'From climbing coding leaderboards to competing in ICPC regionals to constructing clever algorithms with clever friends, the Competitive Programming journey starts here. Write your first contest solution and learn what it takes to start solving challenging and often beautiful problems!',
  // },
  // {
  //   image: '/static/event/bruinquest.png',
  //   name: 'Hack x ICPC x Cyber presents BruinQuest',
  //   quarter: 'Fall 2020',
  //   description: 'Explore a virtual UCLA campus and complete fun challenges to compete for points, prizes, and the glory of being Bruin Quest Champion!',
  // },
];

  const members = [
  {
    image: '/static/member/jz.png',
    name: 'Jacob Zhang',
    position: 'President',
    description: 'I\'m a Math/CS Double Major interested in analysis, combinatorics, algorithms, and programming languages. In addition to ICPC workshops, I teach Olympiad problem-solving at LAMC. I enjoy running, rock climbing, and Chinese music.',
    funFacts: {
      'ice cream': 'Salted Caramel',
      professor: 'Eggert',
      editor: 'VS Code',
      'TV show in the last year': 'Silicon Valley',
    },
  },
  // {
  //   image: '/static/member/lx.png',
  //   name: 'Lucas Xia',
  //   position: 'Officer',
  //   description: 'Hi, I\'m Lucas. I like bouldering and kayaking!',
  //   funFacts: {
  //     'ice cream': 'TBD',
  //     professor: 'TBD',
  //     editor: 'TBD',
  //     'TV show in the last year': 'TBD',
  //   },
  // },
  // {
  //   image: '/static/member/sv.png',
  //   name: 'Suraj Vathsa',
  //   position: 'Officer',
  //   description: 'I’m a Junior studying CS at UCLA. At ACM ICPC, I’ve taught Interview Track for the past couple of quarters. Apart from coding, you can catch me reading books, playing FIFA, watching soccer and working out at the gym!',
  //   funFacts: {
  //     'ice cream': 'Strawberry',
  //     professor: 'Darwiche',
  //     editor: 'Vim',
  //     'TV show in the last year': 'Parks and Rec',
  //   },
  // },
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
    description: 'Hi, my name is Alvin Nguyen. I am a third year majoring in computer science and minoring in mathematics. I have an interest in everything theoretical, but often you\'ll find me learning various web development or cybersecurity tools!',
    funFacts: {
      'ice cream': 'Chocolate',
      professor: 'Smallberg',
      editor: 'VS Code',
      'TV show in the last year': 'Daredevil',
    },
  },
  {
    image: '/static/member/jl.png',
    name: 'Justin Li',
    position: 'Officer',
    description: 'Hi, I\'m Justin. I am a sophomore studying Computer Science. I like origami and enjoy music. I am also a 2019 ICPC NAC participant!',
    funFacts: {
      'ice cream': 'Cookies and Cream',
      professor: 'Smallberg',
      editor: 'CodeBlocks',
      'TV show in the last year': 'sike',
    },
  },
  {
    image: '/static/member/rn.png',
    name: 'Rohit Nema',
    position: 'Officer',
    description: 'Hi I\'m Rohit, a 3rd year Computer Science and Math major. I\'m currently involved in Cryptography research and trying to dip my feet in competitive programming. I like to watch anime and play basketball. ',
    funFacts: {
      'ice cream': 'Mint Chocolate Chip',
      professor: 'Ostrovsky',
      editor: 'Vim',
      'TV show in the last year': 'Kaguya-sama',
    },
  },
  {
    image: '/static/member/bl.png',
    name: 'Bill Liu',
    position: 'Officer',
    description: 'Hi there! I\'m Bill, a 3rd year CS major who loves to teach algorithms and make iOS apps! Outside of tech, I enjoy 🎨 painting, 🤺 fencing, and 🎮 gaming!',
    funFacts: {
      'ice cream': 'Mango',
      professor: 'Eggert',
      editor: 'Emacs',
      'TV show in the last year': 'The Boys',
    },
  },
  {
    image: '/static/member/rs.png',
    name: 'Rishi Sankar',
    position: 'Officer',
    description: 'I\'m Rishi, and I\'m a sophomore studying CS/math from the Bay Area. My hobbies include watching movies, going out to eat, running, and playing table tennis. I also enjoy playing video games like Minecraft, Smash Bros, and, recently, Among Us.',
    funFacts: {
      'ice cream': 'Cookie Dough',
      professor: 'Eggert',
      editor: 'Sublime Text',
      'TV show in the last year': 'Avatar The Last Airbender',
    },
  },
  {
    image: '/static/member/tx.png',
    name: 'Tony Xia',
    position: 'Officer',
    description: 'I\'m a sophomore CS&Math major interested in CP, math, and ML. All of these are math-heavy, so I really enjoy playing the violin to relax, as it only requires me to count to 4 (or 6 in rarer cases).',
    funFacts: {
      'ice cream': 'Vanilla + Oreo',
      professor: 'The great professors are all equally great',
      editor: 'VS Code',
      'TV show in the last year': 'The Big Bang Theory',
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
    description: 'Heyo, I\'m kt, a second year Math of Comp major, algorithm & ML enthusiast, Ultimate Frisbee player, and amateur photographer. 7/10 times overly happy bc I’m sleep deprived and a crackhead; 3/10 bc life’s that good :)',
    funFacts: {
      'ice cream': 'Caramel Fudge Brownie',
      professor: 'Reinman',
      editor: 'Sublime Text',
      'TV show in the last year': 'Money Heist & Promised Neverland',
    },
  },
  {
    image: '/static/member/lw.png',
    name: 'Lenny Wu',
    position: 'Officer',
    description: 'I\'m Lenny, a second year CS & Applied Math major. In my free time, I like to cook and shoot photos for my food blog. You might also catch me running, lifting weights, reading, or playing the piano. :^)',
    funFacts: {
      'ice cream': 'Peanut Butter Banana',
      professor: 'Sylvester Eriksson-Bique',
      editor: 'VS Code',
      'TV show in the last year': 'sike',
    },
  },
  {
    image: '/static/member/rd.png',
    name: 'Reiya Downs',
    position: 'Officer',
    description: 'Hi! :) I\'m Reiya, and I\'m a third year studying Math of Computation. I love self-help books, dancing, drawing for animation, and I\'m currently learning web development. Fun facts! I\'m originally from Toronto, Canada, where I worked as an actress!',
    funFacts: {
      'ice cream': 'Double Peanut Butter Chip',
      professor: 'Brent Corbin',
      editor: 'Emacs',
      'TV show in the last year': 'Crazy Ex-Girlfriend',
    },
  },
  {
    image: '/static/member/rl.png',
    name: 'Robert Lee',
    position: 'Officer',
    description: 'Hi! I\'m Robert, a 1st year studying Math of Computation and Aerospace Engineering from San Diego. I love competitive programming and teaching algorithms! My hobbies include working on never-ending projects and gaming.',
    funFacts: {
      'ice cream': 'Vanilla',
      professor: 'Clites',
      editor: 'VS Code',
      'TV show in the last year': 'Queen\'s Gambit',
    },
  },
  {
    image: '/static/member/hlj.png',
    name: 'Ho Lyun Jeong',
    position: 'Officer',
    description: 'Hi I\'m Lucas/Michael/Zach/Kai. I\'m a first year CS major. I sometimes do stuff.',
    funFacts: {
      'ice cream': 'Vanilla',
      professor: 'Clites',
      editor: 'VS Code',
      'TV show in the last year': 'Queen\'s Gambit',
    },
  },
  {
    image: '/static/member/ns.png',
    name: 'Nikil Selvam',
    position: 'Advisor',
    description: 'Hey! I’m Nikil, a 3rd year majoring in CS & Math. I hail from Qatar (bonus points if you know this desert in the Middle East!). Badminton player, ML enthusiast, keyboardist, Factorio novice, and a die-hard Roger Federer fan :)',
    funFacts: {
      'ice cream': 'Cookies and Cream',
      professor: 'Darwiche',
      editor: 'Emacs',
      'TV show in the last year': 'The Crown',
    },
  }
];

export { upcomingEvents, allEvents, members, pastEvents };
