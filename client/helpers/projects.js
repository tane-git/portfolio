export default function projectsData () {
  const projects = [
    {
      title: 'Argumentum',
      what: 'My final project for the Web Dev Bootcamp. A full stack web application built in 7 days, that allows users to select topics they are intereted in discussing, and then allows them to live chat with people that may disagree with them.',
      who: 'A team of 4. I was the Frontend Lead and Product Owner.',
      link: 'argumentum-eda.herokuapp.com'
    },
    {
      title: 'CoinGun',
      what: 'A web app that shows the currently trending cryptocurrencies on GeckoCoin.com',
      who: 'A team of 4, my pair programming partner and I did the Backend and integration into the Frontend.',
      link: 'http://coingun.herokuapp.com/#/',
      github: 'https://github.com/horoeka-2021/gecko',
      tech: ['React', 'Node', 'Express', 'HTML', 'CSS', 'Webpack', 'Javascript', 'Three.js']
    },
    {
      title: 'Santa\'s Shopping List',
      what: 'A React web app that allows the Bootcamp students to add things to santa\'s shopping List.',
      who: 'A team of 4. We worked closely as a team to put our fresh React skills to use.',
      link: 'https://santas-shopping-list.herokuapp.com/',
      github: 'https://github.com/horoeka-2021/Duck-Size-Bear/',
      tech: ['React', 'Node', 'Express', 'HTML', 'CSS', 'Webpack', 'Javascript']
    },
    {
      title: 'FiatCoin',
      what: 'A Friday project, ',
      who: 'A team of 4, ',
      note: 'Demo currently not available',
      github: 'https://github.com/horoeka-2020/week_three_dogecoin',
      tech: ['Node', 'Express', 'knex', 'sqlite3', 'PostgreSQL', 'Handlebars', 'HTML', 'CSS', 'Tailwind', 'JavaScript', 'supertest']
    },
    {
      title: 'Cats vs Birds',
      what: 'A Friday project, server-side rendered website that allows bird watchers to submit their sightings of birds, and responsible cat owners to register their pets, and then we identify areas where birds are in danger.',
      who: 'A team of 3, we all worked closely together to put our freshly learnt coding skills to use.',
      link: 'https://cats-vs-birds.herokuapp.com/',
      github: 'https://github.com/horoeka-2021/week_two_team_jared',
      tech: ['Node', 'Express', 'Handlebars', 'HTML', 'CSS', 'JavaScript'],
    }
  ]

  return projects
}
