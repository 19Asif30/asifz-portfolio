export const data = [
  {
    id: 1,
    img: "https://i.imgur.com/2xweqrd.png",
    title: "eCommerce App",
    desc: "",
    link: "https://asifz-ecommerce-app.vercel.app/",
    git: "",
  },
  {
    id: 2,
    img: "https://i.imgur.com/FhRMbWP.png",
    title: "Resume Builder",
    link: "https://asifz-resume-builder.vercel.app/",
    git: "",
  },
  {
    id: 3,
    img: "https://i.imgur.com/A1N2kmT.png",
    title: "Blog App",
    desc: "",
    link: "https://my-blog-sigma-gray.vercel.app/",
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
