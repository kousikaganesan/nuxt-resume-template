export default {
  PORTFOLIO_SECTIONS: [
    { name: 'Home', tagLine: 'The beginning!' },
    { name: 'About', tagLine: 'Curious?' },
    { name: 'Skills', tagLine: 'I got game!' },
    { name: 'Works', tagLine: 'Only the finest!' },
    { name: 'Contact', tagLine: "Don't hesitate!" }
  ],
  SKILLS: [
    {
      name: 'Vue',
      percentage: 90
    },
    {
      name: 'React',
      percentage: 80
    },
    {
      name: 'Angular',
      percentage: 80
    },
    {
      name: 'Ionic',
      percentage: 85
    },
    {
      name: 'React Native',
      percentage: 50
    },
    {
      name: 'Nuxt',
      percentage: 90
    },
    {
      name: 'Node',
      percentage: 70
    },
    {
      name: 'Mongo DB',
      percentage: 70
    }
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
      description:
        'A real time application to track the COVID-19 cases around the world. I designed and developed this application as an open source contribution',
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
      description:
        'This is the initial version of portfolio to display my work. Developed this project in a short span of time. I have planned to add more sections and micro interactions in the future',
      isConfidential: false,
      url: 'https://github.com/kousikaganesan/nuxt-resume-template'
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
    },
    {
      title: 'Blog Site',
      techStack: ['Angular', 'Node JS', 'Mongo DB'],
      isConfidential: false,
      description: `The application was developed in a mission to develop an online publishing platform where users can post blogs, comments and like the posts with simple yet powerful UI`,
      cover: 'blog.jpg',
      url: 'https://github.com/kousikaganesan/blog-site'
    },
    {
      title: 'Company’s Saas Product',
      techStack: ['Vue', 'Vuex', 'Node JS', 'Mongo DB'],
      isConfidential: true,
      description: `Worked on setting up the initial infrastructure for the front end and backend project as well. This is a Saas app that my company is working on. The front end uses a combination of Vue + Vuex. This was a side project that I was working on top of the regular work hours and sometimes did full time as well.`,
      cover: 'saas.jpg'
    }
  ]
}
