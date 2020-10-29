const pastEvents = [
  {
    image: '/static/event/upcoming/fallgm.png',
    name: 'Fall General Meeting',
    date: 'Thurs, Oct. 08',
    time: '6 pm - 7 pm PT',
    location: 'Zoom',
    description: 'Learn more about ACM ICPC and our events at Fall GM 🙂',
    facebook: 'https://www.facebook.com/events/793543541440096/',
    discord: 'https://discord.com/channels/702801010426511373/702835998207246426',
  },
];

const upcomingEvents = [
  {
    image: '/static/event/upcoming/intro.png',
    name: 'Intro to CP #3',
    date: 'Oct. 29',
    time: '7 pm - 9 pm PT',
    location: 'Zoom',
    description: 'Arrays',
    facebook: 'https://www.facebook.com/events/1683530848515881/',
    discord: 'https://discord.com/channels/702801010426511373/765803180642533407',
  },
  {
    image: '/static/event/upcoming/interview.png',
    name: 'Coding Interview #3',
    date: 'Oct. 30',
    time: '6 pm - 8 pm PT',
    location: 'Zoom',
    description: 'Linked Lists',
    facebook: 'https://www.facebook.com/events/349843332922152/',
    discord: 'https://discord.com/channels/702801010426511373/713559003661336607',
  },
  {
    image: '/static/event/upcoming/graph.png',
    name: 'Advanced Training #3',
    date: 'Nov. 3',
    time: '7 pm - 9 pm PT',
    location: 'Zoom',
    description: 'Biconnected and Strongly Connected Components + Top Sort',
    facebook: 'https://www.facebook.com/events/1749129341930211/',
    discord: 'https://discord.com/channels/702801010426511373/765803471621718086',
  },
];

const allEvents = [
  {
    image: '/static/event/intro.png',
    name: 'Intro to Competitive Programming',
    quarter: 'Fall 2020',
    description: 'From climbing coding leaderboards to competing in ICPC regionals to constructing clever algorithms with clever friends, the Competitive Programming journey starts here. Write your first contest solution and learn what it takes to start solving challenging and often beautiful problems!',
  },
  {
    image: '/static/event/interview.png',
    name: 'Coding Interview Crash Course (Interview Track)',
    quarter: 'Fall 2020',
    description: 'Worried about your upcoming coding interview? Don’t worry, we got you covered! ACM ICPC is hosting a crash course that’ll give you the data structure and algorithm knowledge you’ll need to ace your next technical interview. Come through to hone your skills and get a head start on your CS career!',
  },
  {
    image: '/static/event/advanced.png',
    name: 'Advanced Training',
    quarter: 'Fall 2020',
    description: 'An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!',
  },
  {
    image: '/static/event/bruinquest.png',
    name: 'Hack x ICPC x Cyber presents BruinQuest',
    quarter: 'Fall 2020',
    description: 'Explore a virtual UCLA campus and complete fun challenges to compete for points, prizes, and the glory of being Bruin Quest Champion!',
  },
  {
    image: '/static/event/codesprint.png',
      name: 'CodeSprintLA',
    quarter: 'Spring 2021',
    description: 'CodeSprintLA is UCLA\'s own Competitive Programming Competition organized by ACM ICPC. Competitive Programming is the activity (some call it a sport!) of writing programs to solve computational problems. You must be clever with your algorithm to solve the program in a given time limit. Individual or teams compete to solve the most problems!',
  },

];

  const members = [
  {
    image: '/static/member/ns.png',
    name: 'Nikil Selvam',
    position: 'President',
    description: 'Hey! I’m Nikil, a 3rd year majoring in CS & Math. I hail from Qatar (bonus points if you know this desert in the Middle East!). Badminton player, ML enthusiast, keyboardist, Factorio novice, and a die-hard Roger Federer fan :)',
    funFacts: {
      'ice cream': 'Cookies and Cream',
      professor: 'Darwiche',
      editor: 'Emacs',
      'TV show in the last year': 'The Crown',
    },
  },
  {
    image: '/static/member/jz.png',
    name: 'Jacob Zhang',
    position: 'Officer',
    description: 'I\'m a Math/CS Double Major interested in analysis, combinatorics, algorithms, and programming languages. In addition to ICPC workshops, I teach Olympiad problem-solving at LAMC. I enjoy running, rock climbing, and Chinese music.',
    funFacts: {
      'ice cream': 'Salted Caramel',
      professor: 'Eggert',
      editor: 'VS Code',
      'TV show in the last year': 'Silicon Valley',
    },
  },
  {
    image: '/static/member/lx.png',
    name: 'Lucas Xia',
    position: 'Officer',
    description: 'Hi, I\'m Lucas. Stay tuned to know more about me!',
    funFacts: {
      'ice cream': 'TBD',
      professor: 'TBD',
      editor: 'TBD',
      'TV show in the last year': 'TBD',
    },
  },
  {
    image: '/static/member/sv.png',
    name: 'Suraj Vathsa',
    position: 'Officer',
    description: 'I’m a Junior studying CS at UCLA. At ACM ICPC, I’ve taught Interview Track for the past couple of quarters. Apart from coding, you can catch me reading books, playing FIFA, watching soccer and working out at the gym!',
    funFacts: {
      'ice cream': 'Strawberry',
      professor: 'Darwiche',
      editor: 'Vim',
      'TV show in the last year': 'Parks and Rec',
    },
  },
  {
    image: '/static/member/ag.png',
    name: 'Ana Gu',
    position: 'Officer',
    description: 'Hi. My name is Ana and I am a third year CS major with a minor in statistics. I switched from Bioengineering to CS. My hobbies include playing splatoon and reading.',
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
    description: 'Hi, I\'m Arihant. Stay tuned to know more about me!',
    funFacts: {
      'ice cream': 'TBD',
      professor: 'TBD',
      editor: 'TBD',
      'TV show in the last year': 'TBD',
    },
  },
];

export { upcomingEvents, allEvents, members };
