export const technoloties = [
  {
    label: "React",
    value: "react",
  },
  {
    label: "JavaScript",
    value: "javascript",
  },
  {
    label: "TypeScript",
    value: "typescript",
  },
  {
    label: "TailwindCSS",
    value: "tailwindcss",
  },
  {
    label: "Next.Js",
    value: "nextjs",
  },
  {
    label: "MongoDB",
    value: "react",
  },
  {
    label: "Neon",
    value: "neon",
  },
  {
    label: "Prisma",
    value: "prisma",
  },
  {
    label: "ShadcnUI",
    value: "shadcnui",
  },
  {
    label: "Stripe",
    value: "stripe",
  },
  {
    label: "NextAuth",
    value: "nextauth",
  },
  {
    label: "Clerk",
    value: "clerk",
  },
  {
    label: "ShadcnUI",
    value: "shadcnui",
  },
] as const;

import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export const myTwitterLink = "https://twitter.com/Ratul2582";
export const myGithubLink = "https://github.com/ratul544388";
export const MyLinkdinLink =
  "https://www.linkedin.com/in/ratul-islam-a0774521a";
export const myFacebookLink = "https://www.facebook.com/ratul544388";

export const myEmail = "ratulislam544388@gmail.com";
export const myAddress = "Keranigonj Dhaka 1310, Bangladesh";
export const myPhone = "+8801815555105";

export const icons = [
  {
    name: AiOutlineTwitter,
    href: myTwitterLink,
  },
  {
    name: FaFacebookSquare,
    href: myFacebookLink,
  },
  {
    name: FaGithubSquare,
    href: myGithubLink,
  },
  {
    name: FaLinkedin,
    href: MyLinkdinLink,
  },
];

export const projects = [
  {
    name: "Full Stack Gym, Admin & User Portal",
    description:
      "Specializing in Efficient Gym Administration: Seamlessly Manage Member Enrollment, Renewals, and Membership Plans. Utilize User Tables with Versatile Filters for Member Management. Enhance User Experience with a Dynamic FAQ Page. Experience Elevated Gym Management on Our Full Stack Website.",
    image: "/images/projects/gym.png",
    technologies: [
      "React",
      "Next.Js",
      "TypeScript",
      "TailwindCSS",
      "ShadcnUI",
      "MongoDB",
      "Prisma",
      "Clerk",
      "Tanstack Query",
      "Stripe",
    ],
    githubLink: "https://github.com/ratul544388/gym",
    deployedLink: "https://gym-phi-one.vercel.app/",
  },
  {
    name: "Twitter Clone",
    description:
      "Empower your voice with Tweets, engage through Likes, explore vibrant communities, and experience seamless discovery. Unlock Blue Badge perks for exclusive features. Switch between Dark and Light modes effortlessly.",
    image: "/images/projects/twitter-clone.png",
    technologies: [
      "React",
      "Next.Js",
      "TypeScript",
      "TailwindCSS",
      "ShadcnUI",
      "MongoDB",
      "Prisma",
      "Clerk",
      "Tanstack Query",
      "Stripe",
    ],
    githubLink: "https://github.com/ratul544388/Twitter-clone-next-14",
    deployedLink: "https://twitter-clone-next-14.vercel.app",
  },
  {
    name: "Food Delivery App",
    description:
      "Quick Bite revolutionizes food delivery with its seamless platform for users and administrators. Customers enjoy effortless browsing, ordering, and reviewing, while restaurant owners manage orders and menus with ease. With Quick Bite, experience swift and satisfying culinary journeys, offering convenience at your fingertips.",
    image: "/images/projects/food-app.png",
    technologies: [
      "React",
      "Next.Js",
      "TypeScript",
      "TailwindCSS",
      "ShadcnUI",
      "MongoDB",
      "Prisma",
      "Clerk",
      "Framer Motion",
    ],
    githubLink: "https://github.com/ratul544388/quick-bite",
    deployedLink: "https://quick-bite-eosin.vercel.app/",
  },
  {
    name: "Blog App",
    description:
      "QuillQuest is a vibrant blog web app where users share diverse topics, fostering interactive engagement through voting and commenting. With an intuitive interface, users navigate captivating content, shaping lively discussions. It's a dynamic platform where every post is a journey of discovery, bringing words and wisdom together in a vibrant community.",
    image: "/images/projects/blog-app.png",
    technologies: [
      "React",
      "Next.Js",
      "TypeScript",
      "TailwindCSS",
      "ShadcnUI",
      "MongoDB",
      "Prisma",
      "Clerk",
    ],
    githubLink: "https://github.com/ratul544388/blog-app",
    deployedLink: "https://blog-app-chi-drab.vercel.app/",
  },
  {
    name: "My Portfolio",
    description:
      "QuillQuest is a vibrant blog web app where users share diverse topics, fostering interactive engagement through voting and commenting. With an intuitive interface, users navigate captivating content, shaping lively discussions. It's a dynamic platform where every post is a journey of discovery, bringing words and wisdom together in a vibrant community.",
    image: "/images/projects/portfolio.png",
    technologies: [
      "React",
      "Next.Js",
      "TypeScript",
      "TailwindCSS",
      "ShadcnUI",
      "Framer Motion",
    ],
    githubLink: "https://github.com/ratul544388/portfolio",
    deployedLink: "https://portfolio-two-sepia-49.vercel.app/",
  },
  {
    name: "Car Hub",
    description:
      "CarHub offers a seamless browsing experience, allowing users to explore a wide range of cars with advanced filters for year, fuel type, and manufacturer. Easily find rental options with transparent pricing, tailored to your preferences, making car rental hassle-free and efficient.",
    image: "/images/projects/carhub.png",
    technologies: ["React", "Next.Js", "TypeScript", "TailwindCSS", "ShadcnUI"],
    githubLink: "https://github.com/ratul544388/car-hub",
    deployedLink:
      "https://portfolio-two-sepia-49.vercel.app/https://car-hub-dusky-eta.vercel.app",
  },
];

export const reviews = [
  {
    image: "/images/reviews/user-1.jpg",
    name: "Christian Buehner",
    username: "beuhner",
    review:
      "Astonishing portfolio! Impressive design and functionality. Truly stands out in the digital space.",
  },
  {
    image: "/images/reviews/user-2.jpg",
    name: "Emily Rodriguez",
    username: "emilyrodr",
    review:
      "Exceptional work! The attention to detail and user experience is remarkable. Highly recommend!",
  },
  {
    image: "/images/reviews/user-3.jpg",
    name: "Alex Carter",
    username: "alex_carter",
    review:
      "Incredible portfolio website! The creativity and innovation shine through. Great job!",
  },
];
