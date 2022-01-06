export default function projectsData () {
  const projects = [
    {
      title: 'Argumentum',
      what: 'A Bootcamp Final Week Project, full stack web application, that allows users to select topics they are intereted in discussing, and then allows them to live chat with people that may disagree with them.',
      who: 'A team of 4. I was the Frontend Lead and Product Owner.',
      link: 'https://argumentum-eda.herokuapp.com',
      github: 'https://github.com/horoeka-2021/argumentum',
      image: 'argumentum-ipad.PNG',
      imageAlt: 'Screenshot of the Argumentum chat room',
      note: 'Sorry this app takes a while to load :('
    },
    {
      title: 'Cruellas',
      what: 'A Bootcamp Friday Project, full stack web application, which is based on the idea that everyone is the best in the world at something! What are you the best in the world at? Add your skill to our website and include a little story to explain and our app will generate a full blown story for your skill and display it on the homepage.',
      who: 'A team of 4. We worked together closely on the front and backend.',
      link: 'https://cruellas.herokuapp.com',
      github: 'https://github.com/horoeka-2021/cruella',
      image: 'cruellas-ipad.PNG',
      imageAlt: 'Screenshot of the Cruellas homepage',
      note: 'Add a skill and then check out the randomly generated story from the homepage!'
    },
    {
      title: 'CoinGun',
      what: 'A Bootcamp Friday Project web app that shows the currently trending cryptocurrencies on GeckoCoin.com',
      who: 'A team of 4, my pair programming partner and I did the Backend and integration into the Frontend.',
      link: 'http://coingun.herokuapp.com/#/',
      github: 'https://github.com/horoeka-2021/gecko',
      tech: ['React', 'Node', 'Express', 'HTML', 'CSS', 'Webpack', 'Javascript', 'Three.js'],
      image: 'coingun-ipad.PNG',
      imageAlt: 'Screenshot of CoinGun trending coins',
      note: 'To see the trending cryptocurrencies, you need to click on the bullseye but the title covers some of this button.'
    },
    {
      title: 'Santa\'s Shopping List',
      what: 'A Bootcamp Friday project, React web app that allows the Bootcamp students to add things to santa\'s shopping List.',
      who: 'A team of 4. We worked closely as a team to put our fresh React skills to use.',
      link: 'https://santas-shopping-list.herokuapp.com/#/',
      github: 'https://github.com/horoeka-2021/Duck-Size-Bear/',
      tech: ['React', 'Node', 'Express', 'HTML', 'CSS', 'Webpack', 'Javascript'],
      image: 'santas-shopping-list.PNG',
      imageAlt: 'Screenshot of Santa\'s Shopping List for Tane',
      note: "The 'children' are the students and facilitators of the bootcamp!"
    },
    {
      title: 'FiatCoin',
      what: 'A Bootcamp Friday Project, server-side rendered web app with a database, that allows users to sell antique coins for dogecoins. "Trade your useless coins for dogecoins!"',
      who: 'A team of 4, I worked on the non-design aspects of the project.',
      github: 'https://github.com/horoeka-2020/week_three_dogecoin',
      tech: ['Node', 'Express', 'knex', 'sqlite3', 'PostgreSQL', 'Handlebars', 'HTML', 'CSS', 'Tailwind', 'JavaScript', 'supertest'],
      image: 'fiatcoin-ipad.PNG',
      imageAlt: 'Screenshot of the FiatCoin homepage',
      note: 'Demo currently not available'
    },
    {
      title: 'Cats vs Birds',
      what: 'A Bootcamp Friday Project, server-side rendered website that allows bird watchers to submit their sightings of birds, and responsible cat owners to register their pets, and then we identify areas where birds are in danger.',
      who: 'A team of 3, we all worked closely together to put our freshly learnt coding skills to use.',
      link: 'https://cats-vs-birds.herokuapp.com/',
      github: 'https://github.com/horoeka-2021/week_two_team_jared',
      tech: ['Node', 'Express', 'Handlebars', 'HTML', 'CSS', 'JavaScript'],
      image: 'cats-vs-birds-ipad.PNG',
      imageAlt: 'Screenshot of the Cats vs Birds homepage',
      note: 'The birds have fun facts on their profiles!'
    }
  ]

  return projects
}
