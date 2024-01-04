/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false tos use static SVG
};

const greeting = {
  username: "Kent Wong",
  title: "Nice to meet you, I'm Kent",
  subTitle: emoji(
    "A versatile and innovative Full Stack Developer 🚀 skilled in building advanced web and mobile applications, specializing in AI and automation with diverse cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1nrLr6tIMbOApUmW-F80Qd646oMMyahed/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tywong7",
  linkedin: "https://www.linkedin.com/in/kent-wong-wty/",
  gmail: "winryrb36@gmail.com",
  travel: "http://memory.cw02.us.to",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Empower machine to tackle mundane tasks, allowing humans to focus on things that require our unique abilities",
  skills: [
    emoji(
      "⚡ Expert in developing dynamic and interactive web and mobile applications using React Native, Vue.js, and ASP.NET, enhancing user engagement and experience"
    ),
    emoji(
      "⚡ Specialized in AI and machine learning, with successful projects in Cantonese NLP, data analysis, and AI-driven applications, using Python, XGBoost, and Stable Diffusion"
    ),
    emoji(
      "⚡ Proficient in integrating IoT solutions and creating PWA with offline functionality"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "react native & expo",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },

    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },

    {
      skillName: "asp .net mvc",
      fontAwesomeClassname: "fas fa-globe"
    },

    {
      skillName: "NLP/ RAG/ Stable Diffusion",
      fontAwesomeClassname: "fas fa-robot"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The Chinese University of Hong Kong",
      logo: require("./assets/images/cuhkLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2016 - November 2020",
      desc: "College Head’s List",
      descBullets: ["Final semester GPA: 4/4", "Final year project grade: A"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "63%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "63%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    },
    ,
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "FullStack Developer & Data Scientist",
      company: "The JockeyClub TourHeart Project",
      companylogo: require("./assets/images/jctourheart_logo.jpg"),
      date: "Jan 2020 – Present",
      desc: "Built multiple AI models to faciliate the online mental health service",
      descBullets: [
        "✨ XGBoost - Reduced survey question count by 50% while maintaining a 92% accuracy rate",
        "📊 Cantonese Word2Vec - Trained with 20GB of Cantonese data and used to analyze suicidal posts in an online forum",
        "📚 Cantonese to English Translation - Outperformed big tech companies like DeepL and Google in handling certain Cantonese terms",
        "🚨 Cantonese Suicidal Risk Detection model - 92% of accuracy",
        "😃 Cantonese Emotion and Topic classification (BERT-based) - Achieved 85% accuracy in classifying emotions into 9 categories and 83% accuracy in classifying topics into 10 categories",
        "🖼️ Stable Diffusion - Replaced human effort by training it to generate pictures with the platform's style",
        "📱 PWA - Revamped the Living with Heart platform with fully offline functionality as a PWA to cater to users of the Correctional Services Department",
        "🧠 RAG - Developed an intelligence coach system with GPT-4 as the backbone, aiming to replace human effort in coach replying tasks"
      ]
    },
    {
      role: "Software Engineer",
      company: "Diversity & Well-Being Lab, CUHK",
      companylogo: require("./assets/images/DWL.jpg"),
      date: "July 2019 – Dec 2019",
      desc: "Implemented 2 mental health related platforms using React Native and ASP .NET MVC framework",
      descBullets: [
        "Mindful Flourishing (available on App Store & Google Play)",
        "Living with Heart (livingwithheart.psy.cuhk.edu.hk)"
      ]
    },
    {
      role: "Software Engineer",
      company: "Gabi Education Limited",
      companylogo: require("./assets/images/gabi.png"),
      date: "Feb 2019 – June 2019",
      desc: "Implemented the proof-of-concept chinese AI learning app using Unity, received the third-class award in the Innovation and Entrepreneurship Competition, and enrolled in the CUHK pre-incubation program"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  display: true,
  title: "Side Projects",
  subtitle: "SOME PROJECTS THAT I CREATED TO MAKE PEOPLE'S LIFE EAISER",
  projects: [
    {
      image: require("./assets/images/short.jpg"),
      projectName: "Two-Character URL Shortener",
      projectDesc:
        "A personal-level URL shortener that transforms URLs into succinct two-character suffixes",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://cw02.us.to/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sms.png"),
      projectName: "SMS Reader",
      projectDesc:
        "A Kotlin-built tool that enables families to read verification SMS messages, removing the need for elderly individuals to search for SMS on their smartphones",
      footerLink: [
        {
          name: "Download APK",
          url: "https://drive.google.com/file/d/1OWAzxyLIZYd4eO45QoMKoUwIwrp5xC01/"
        }
      ]
    },
    {
      image: require("./assets/images/luna.png"),
      projectName: "Luna's Lofi - Virtual Lofi Artist",
      projectDesc:
        "Automated pipeline using MusicGEN, ChatGPT, and Stable Diffusion to create an AI music artist, generate her appearance, and compose music",
      footerLink: [
        {
          name: "YouTube Channel",
          url: "https://www.youtube.com/@lunalofi0202"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Innovation and Entrepreneurship Competition",
      subtitle: "Third-class Award",
      image: require("./assets/images/HKSTP.png"),
      imageAlt: "Innovation and Entrepreneurship Competition Logo",
      footerLink: [
        {
          name: "Press Release",
          url: "https://www.cpr.cuhk.edu.hk/en/press/cuhk-wins-the-most-awards-in-hong-kong-university-student-innovation-and-entrepreneurship-competition-2019-among-local-institutions/"
        },
        {
          name: "Awardee List",
          url: "https://www.hkchallengeplus.com/wp-content/uploads/2020/10/%E7%AC%AC5%E5%B1%86%E9%A6%99%E6%B8%AF%E5%A4%A7%E5%AD%B8%E7%94%9F%E5%89%B5%E6%96%B0%E5%8F%8A%E5%89%B5%E6%A5%AD%E5%A4%A7%E8%B3%BD_%E5%BE%97%E7%8D%8E%E7%B5%90%E6%9E%9C%E5%90%8D%E5%96%AE.pdf"
        }
      ]
    },
    {
      title: "Microsoft Azure Fundamentals",
      subtitle:
        "Obtained foundational knowledge of cloud concepts in general and Azure in particular",
      image: require("./assets/images/azure.png"),
      imageAlt: "Microsoft Azure Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://learn.microsoft.com/api/credentials/share/zh-tw/KentWong-6953/FB8B2F1993BC4748?sharingId=5DAC4E244622D5C9"
        }
      ]
    },

    {
      title: "Web Accessibility Award",
      subtitle:
        "incorporating web accessibility designs, promoting inclusivity and positive corporate image",
      image: require("./assets/images/access.png"),
      imageAlt: "Web Accesibility Logo",
      footerLink: [
        {
          name: "Awardee List",
          url: "https://www.web-accessibility.hk/en/ceremony_awardees/main/854/?year=2022"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",

  email_address: "winryrb36@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
