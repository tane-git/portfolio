export default function projectsData () {
  const projects = [
    {
      title: 'Next.js Portfolio',
      type: 'Personal Project',
      what: 'A new version of this website built with Next.js, a framework for React, that allows the server to send the client a pre-rendered HTML page. This significantly increases the speed of the initial load of the website. Once the initial page has loaded, the web app is \'hydraded\' with the React magic.',
      who: 'Myself',
      link: 'https://tane-wilson.com',
      github: 'https://github.com/tane-git/nextPortfolio',
      tech: ['next', 'react', 'html', 'css'],
      image: 'portfolio-ipad.PNG',
      imageAlt: 'Screenshot of the nextPortfolio website',
      note: 'Check out how fast it loads! This website is still in production so watch out for bugs.'
    },
    {
      title: 'Argumentum',
      type: 'Bootcamp Final Project',
      what: 'A full stack web application, that allows users to select topics they are intereted in discussing, and then allows them to live chat with people that may disagree with them.',
      who: 'A team of 4. I was the Frontend Lead and Product Owner.',
      link: 'https://argumentum-eda.herokuapp.com',
      github: 'https://github.com/horoeka-2021/argumentum',
      tech: ['react', 'redux', 'node', 'sql', 'knex', 'express', 'html', 'css', 'webpack', 'javascript'],
      image: 'argumentum-ipad.PNG',
      imageAlt: 'Screenshot of the Argumentum chat room',
      note: 'This app takes a while to load at first but then will be fast.'
    },
    {
      title: 'Cruellas',
      type: 'Bootcamp Friday Project',
      what: 'A full stack web application, which is based on the idea that everyone is the best in the world at something! What are you the best in the world at? Add your skill to our website and include a little story to explain and our app will generate a full blown story for your skill and display it on the homepage.',
      who: 'A team of 4. We worked together closely on the front and backend.',
      link: 'https://cruellas.herokuapp.com',
      github: 'https://github.com/horoeka-2021/cruella',
      tech: ['react', 'node', 'express', 'html', 'css', 'webpack', 'javascript'],
      image: 'cruellas-ipad.PNG',
      imageAlt: 'Screenshot of the Cruellas homepage',
      note: 'Add a skill and then check out the randomly generated story from the homepage! ps. the randomly generated story can sometimes be weird. Really weird.'
    },
    {
      title: 'CoinGun',
      type: 'Bootcamp Friday Project',
      what: 'A web app that shows the currently trending cryptocurrencies on GeckoCoin.com',
      who: 'A team of 4, my pair programming partner and I did the Backend and integration into the Frontend.',
      link: 'http://coingun.herokuapp.com/#/',
      github: 'https://github.com/horoeka-2021/gecko',
      tech: ['react', 'node', 'express', 'html', 'css', 'webpack', 'javascript', 'threeJs'],
      image: 'coingun-ipad.PNG',
      imageAlt: 'Screenshot of CoinGun trending coins',
      note: 'To see the trending cryptocurrencies, you need to click on the bullseye but the title covers some of this button.'
    },
    {
      title: 'Santa\'s Shopping List',
      type: 'Bootcamp Friday Project',
      what: 'A React web app that allows the cohort to add things to santa\'s shopping List.',
      who: 'A team of 4. We worked closely as a team to put our fresh React skills to use.',
      link: 'https://santas-shopping-list.herokuapp.com/#/',
      github: 'https://github.com/horoeka-2021/Duck-Size-Bear/',
      tech: ['react', 'node', 'express', 'html', 'css', 'webpack', 'javascript'],
      image: 'santas-shopping-list.PNG',
      imageAlt: 'Screenshot of Santa\'s Shopping List for Tane',
      note: "The 'children' are the students and facilitators of the bootcamp!"
    },
    {
      title: 'FiatCoin',
      type: 'Bootcamp Friday Project',
      what: 'A server-side rendered web app with a database, that allows users to sell antique coins for dogecoins. "Trade your useless coins for dogecoins!"',
      who: 'A team of 4, I worked on the back-end.',
      github: 'https://github.com/horoeka-2021/week_three_dogecoin',
      tech: ['node', 'express', 'knex', 'sqlite3', 'postgresql', 'handlebars', 'html', 'css', 'tailwind', 'javascript', 'supertest'],
      image: 'fiatcoin-ipad.PNG',
      imageAlt: 'Screenshot of the FiatCoin homepage',
      note: 'Demo currently unavailable.'
    },
    {
      title: 'Cats vs Birds',
      type: 'Bootcamp Friday Project',
      what: 'A server-side rendered website that allows bird watchers to submit their sightings of birds, and responsible cat owners to register their pets, and then we identify areas where birds are in danger.',
      who: 'A team of 3, we all worked closely together to put our freshly learnt coding skills to use.',
      link: 'https://cats-vs-birds.herokuapp.com/',
      github: 'https://github.com/horoeka-2021/week_two_team_jared',
      tech: ['node', 'express', 'handlebars', 'html', 'css', 'javascript'],
      image: 'cats-vs-birds-ipad.PNG',
      imageAlt: 'Screenshot of the Cats vs Birds homepage',
      note: 'The birds have fun facts on their profiles!'
    }
  ]

  return projects
}
