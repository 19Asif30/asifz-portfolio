import BlogImage from "../assets/blog.png"
import ResumeImage from "../assets/resumebuilder.png"
import ForumImage from "../assets/forum.png"


export const data = [
  {
    id: 1,
    img: ForumImage,
    title: "Asif'z Forum",
    desc: "",
    link: "https://asifz-forum.netlify.app/",
    git: "",
  },
 
  {
    id: 3,
    img: BlogImage,
    title: "Blog App",
    desc: "",
    link: 'https://asifz-forum.netlify.app/',
    git: "",
  },
  {
    id: 2,
    img: ResumeImage,
    title: "Resume Builder",
    link: "https://asifz-resume-builder.vercel.app/",
    git: "",
  },
];

export const openWhatsApp = () => {
  const message = "Hello, Asif! I wanna hire you."; // Replace with your desired message

  const url = `https://wa.me/${9489732512}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export const openInstagram = () => {
  const username = "asifz_dev"; // Replace with the Instagram username
  const url = `https://www.instagram.com/${username}`;
  window.open(url, "_blank");
};

export const openTelegram = () => {
  const username = "asif1930"; // Replace with the Telegram username
  const message = "Hello, Asif! I wanna hire you."; // Replace with your desired message
  const url = `https://t.me/${username}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
