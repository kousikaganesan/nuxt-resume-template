export default {
  PORTFOLIO_SECTIONS: [
    { name: 'Home', tagLine: 'The beginning!' },
    { name: 'About', tagLine: 'Curious?' },
    { name: 'Skills', tagLine: 'I got game!' },
    { name: 'Works', tagLine: 'Only the finest!' },
    { name: 'Contact', tagLine: "Don't hesitate!" }
  ],
  SOCIAL_LINKS: [
    { name: 'Linkedin', link: 'https://in.linkedin.com/in/kousika-ganesan' },
    {
      name: 'Stackoverflow',
      link: 'https://stackoverflow.com/users/5622324/kousika-ganesan'
    },
    { name: 'Medium', link: 'https://medium.com/@kousika' },
    { name: 'GitHub', link: 'https://github.com/kousikaganesan' },
    { name: 'Twitter', link: 'https://twitter.com/kousika13' },
    { name: 'Email', link: 'mailto:g.kousika@gmail.com' }
  ],
  HIRE_ME: 'mailto:g.kousika@gmail.com',
  CONNECT_VIA_LINKEDIN: 'https://in.linkedin.com/in/kousika-ganesan',
  GITHUB_LINK: 'https://github.com/kousikaganesan',
  PROJECTS: [
    {
      title: 'COVID-19 Tracker',
      isConfidential: false,
      techStack: ['React JS', 'Redux'],
      cover: 'covid.png',
      url: 'https://github.com/kousikaganesan/covid-19-tracker'
    },
    {
      title: 'Women Safety App',
      techStack: ['React Native', 'Redux', 'Node JS', 'Mongo DB'],
      isConfidential: true,
      description: `It is a React native app where I worked on designing 
      auth and navigation screens. Also, worked on the complete state 
      management of the auth flow and third party integrations to provide 
      real time live updates to the user.`,
      cover: 'women-safety.jpeg'
    },
    {
      title: 'My Portfolio',
      techStack: ['Nuxt JS'],
      cover: 'portfolio.png',
      isConfidential: false,
      url: 'https://github.com/kousikaganesan/kousikaganesan.github.io'
    },
    {
      title: 'A Productive App',
      techStack: ['React Native', 'Redux', 'Node JS', 'Mongo DB'],
      isConfidential: true,
      description: `It is a web application built on React webpack which 
      syncs the Google and Microsoft calendar events. I worked on several parts 
      of the app including setting up the initial infrastructure to enable the 
      integration with third-party apps like MS Outlook
      calendar, Google calendar, Google Drive, Gmail.etc. Also, worked on implementing 
      complex timeline-like feature on the react app. Handled all the integration 
      with the Redux store.`,
      cover: 'notes.jpeg'
    }
  ]
}
