import certi1 from "../assets/certificate1.png";
import certi2 from "../assets/certificate2.png";
import certi3 from "../assets/certificate3.png";
import pro1 from "../assets/projects/chat4.png";
import pro2 from "../assets/projects/lottery2.png";
import pro3 from "../assets/projects/simon-says.png";
import pro4 from "../assets/projects/weather1.png";

export const HERO_CONTENT = "I am a highly motivated tech-enthusiast, with a passion for front-end and full-stack development. I have a strong foundation in HTML, CSS, JavaScript, and I am continuously enhancing my skills in React.js and Node.js. I am eager to gain hands-on experience in web development and contribute to innovative projects that help me grow as a developer. I am open to opportunities such as internships, freelance projects, or entry-level roles that allow me to apply my knowledge while learning from industry professionals.";

export const ABOUT_TEXT = "Hey! I'm a Full-Stack Developer who loves building cool, responsive web apps. I’ve learned full-stack development and DSA from Apna College, and even interned at Unified Mentor where I worked on real-world projects using tools like Socket.IO and Cloudinary. From chat apps to weather apps and games, I enjoy bringing ideas to life with clean code and smooth UI. Always up for learning something new!";

export const CERTIFICATES = [
  {
    title: "Full Stack Web Development",
    image: certi1,
    description: "Completed a comprehensive full stack development program covering React, Express , Node.js, MongoDB, CRUD operations , API handlings and much more...",
    issuedBy: "Apna College",
    year: "2024",
  },
  {
    title: "DSA with Java",
    image: certi2,
    description: "Learned Data Structures and Algorithms from basic to advanced with Java.",
    issuedBy: "Apna College",
    year: "2024",
  },
  {
    title: "Full-Stack Development Internship",
    image: certi3,
    description: "Implemented my knowledge and skills by working on 3 projects throughout my Internship and learned to use Socket.IO , Cloudinary and Postman API testing",
    issuedBy: "Unified Mentor",
    year: "2025",
  },
];

export const PROJECTS = [
  {
    title: "Yapper | (Full-Stack Chat Application)",
    image: pro1,
    description: "A real-time chat application with user authentication, group chat, typing indicators, message notifications, and more.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Cloudinary", "Toastify"], 
    github: "https://github.com/Insha30/MERN-Chat-App",
    demo: "https://your-live-demo.netlify.app",
    year: "2025",
  },
  {
    title: "Lottery Game",
    image: pro2,
    description: "A simple interactive lottery game with stylish animations and a responsive UI.",
    techStack: ["React", "CSS", "Framer Motion" , "BoxIcons"], 
    github: "https://github.com/Insha30/Lottery-Game",
    demo: "https://insha-lottery-game.netlify.app/",
    year: "2025",
  },
  {
    title: "Simon Say's Game",
    image: pro3,
    description: "A classic Simon Says memory game recreated with smooth animations and mobile responsiveness.",
    techStack: ["React", "CSS", "Framer Motion" , "TailwindCss"],
    github: "https://github.com/Insha30/Simon-Say-s",
    demo: "https://insha-simon-says.netlify.app/",
    year: "2025",
  },
  {
    title: "Weather Application",
    image: pro4,
    description: "A weather forecast app with a single-screen layout, animated UI, dropdown history, and real-time weather data.",
    techStack: ["React", "OpenWeatherMap API", "CSS", "Framer Motion"],
    github: "https://github.com/Insha30/Weather-App",
    demo: "https://weather-app-insha.netlify.app/",
    year: "2025",
  },
];

export const CONTACT = {
  address: " Amrapali Silicon City Sector-76 Noida , Uttar Pradesh ",
  phoneNo: "+91 9936****56 ",
  email: "inshaiqbal1998@gmail.com",
};