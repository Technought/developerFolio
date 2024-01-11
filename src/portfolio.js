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
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Technought",
  title: "Hi all, I'm Nandan",
  subTitle: emoji(
    "A passionate Software Engineer🚀 exploring tech from zero. Interested in anything related to cloud, devops and automation."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Technought",
  linkedin: "https://www.linkedin.com/in/nandan-m-352035132/",
  gmail: "nandan@technought.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  credly: "https://www.credly.com/users/nandan-m.708f12b0",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop Containerized Applications using docker and kubernetes"
    ),
    emoji("⚡ Automate daily tasks with python"),
    emoji(
      "⚡ Architect applications using cloud such as AWS"
    ),
    emoji("⚡ Create CI/CD piplines for applications"),
    emoji("⚡ Automate infrastructure deployment and configuration")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://icon-sets.iconify.design/cib/docker/ */

  softwareSkills: [
    {
      skillName: "terraform",
      iconifyIcon: "cib:terraform"
    },
    {
      skillName: "ansible",
      iconifyIcon: "cib:ansible"
    },
    {
      skillName: "jenkins",
      iconifyIcon: "cib:jenkins"
    },
    {
      skillName: "kubernetes",
      iconifyIcon: "cib:kubernetes"
    },
    {
      skillName: "docker",
      iconifyIcon: "cib:docker"
    },
    {
      skillName: "aws",
      iconifyIcon: "la:aws"
    },
    {
      skillName: "azure",
      iconifyIcon: "devicon-plain:azure"
    },
    {
      skillName: "kafka",
      iconifyIcon: "mdi:apache-kafka"
    },
    {
      skillName: "rabbit mq",
      iconifyIcon: "simple-icons:rabbitmq"
    },
    {
      skillName: "twilio",
      iconifyIcon: "cib:twilio"
    },
    {
      skillName: "spring boot",
      iconifyIcon: "simple-icons:springboot"
    },
    {
      skillName: "spring",
      iconifyIcon: "cib:spring"
    },
    {
      skillName: "python",
      iconifyIcon: "cib:python"
    },
    {
      skillName: "java",
      iconifyIcon: "cib:java"
    },
    {
      skillName: "Git",
      iconifyIcon: "cib:git"
    },
    {
      skillName: "JavaScript",
      iconifyIcon: "cib:javascript"
    },
    {
      skillName: "reactjs",
      iconifyIcon: "grommet-icons:reactjs"
    },
    {
      skillName: "nodejs",
      iconifyIcon: "devicon-plain:nodejs"
    },
    {
      skillName: "npm",
      iconifyIcon: "iconoir:npm"
    },
    {
      skillName: "postgresql",
      iconifyIcon: "cib:postgresql"
    },
    {
      skillName: "selenium",
      iconifyIcon: "simple-icons:selenium"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Institute of Technology Rourkela",
      logo: require("./assets/images/NITR.png"),
      subHeader: "M.Tech in Software Engineering",
      duration: "August 2021 - June 2023",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Dayananda Sagar College of Engineering",
      logo: require("./assets/images/DSCE.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "July 2016 - August 2020",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  url:"https://www.credly.com/users/nandan-m.708f12b0",
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle:
        "",
      image: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
      imageAlt: "AWS Certified Solutions Architect – Associate",
      footerLink: [
        {
          name: "Credly Badge",
          url: "https://www.credly.com/badges/1df21a81-fe36-4899-9531-6fc106c01e9f"
        }
      ]
    },
    {
      title: "AZ-900: Azure Fundamentals",
      subtitle:
        "",
      image: "https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
      imageAlt: "Azure Fundamentals",
      footerLink: [
        {
          name: "Credly Badge",
          url: "https://www.credly.com/earner/earned/badge/d55c6908-d3e4-4316-a42a-f3a2982a4017"
        }
      ]
    },

    {
      title: "AI-900: Azure AI Fundamentals",
      subtitle: "",
      image: "https://images.credly.com/size/340x340/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png",
      imageAlt: "Azure AI Fundamentals",
      footerLink: [
        {name: "Credly Badge", url: "https://www.credly.com/earner/earned/badge/984a4a7c-6a69-415b-952e-b700428a651f"}
      ]
    },
    {
      title: "Applied Data Science I: Scientific Computing & Python",
      subtitle:
        "",
      image: "https://images.credly.com/size/340x340/images/3a298084-44e8-4036-b82b-b92d0eca2491/WQU_Credly_DataScience1_WithHonors.png",
      imageAlt: "Applied Data Science I",
      footerLink: [
        {
          name: "Credly Badge",
          url: "https://www.credly.com/earner/earned/badge/484b2138-4450-4e9e-a490-b3d36ff4675e"
        }
      ]
    },
    {
      title: "Applied Data Science II: Machine Learning & Statistical Analysis",
      subtitle:
        "",
      image: "https://images.credly.com/size/340x340/images/1ac74178-8974-426a-9f84-3b973bc5dc09/WQU_Credly_DataScience2_WithHonors.png",
      imageAlt: "Applied Data Science II",
      footerLink: [
        {
          name: "Credly Badge",
          url: "https://www.credly.com/earner/earned/badge/71cbce60-cbac-4d11-8a5c-61dfe027e637"
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
  number: "",
  email_address: "info@technought.com"
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
