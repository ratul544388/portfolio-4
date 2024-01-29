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

export const domain = "RocketPortfolios.com";

export const myTwitterLink = "https://twitter.com";
export const myGithubLink = "https://twitter.com";
export const MyLinkdinLink = "https://twitter.com";
export const myFacebookLink = "https://facebook.com";

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
    slug: "gym-admin-and-user-portal",
    description: "Food Delivery app description",
    images: [
      "/images/projects/gym/gym-1.png",
      "/images/projects/gym/gym-2.png",
      "/images/projects/gym/gym-3.png",
      "/images/projects/gym/gym-4.png",
      "/images/projects/gym/gym-5.png",
      "/images/projects/gym/gym-6.png",
      "/images/projects/gym/gym-7.png",
      "/images/projects/gym/gym-8.png",
      "/images/projects/gym/gym-9.png",
      "/images/projects/gym/gym-10.png",
    ],
    features: [
      "👤 Admin: Enroll new Member",
      "🔄 Admin: Update and delete members",
      "🔄 Admin: Renew members",
      "📊 Admin: Create, update, delete membership plans",
      "💰 Admin: Manage admission fee",
      "📊 Admin: Enrich datatable to manage all members",
      "📝 Admin: Create, update, delete FAQ",
      "👥 Users: Enroll by their own",
      "📖 Users: Read FAQ",
      "❓ Users: Ask a new question (Admin/Moderator reply)",
      "📊 User: View their dashboard page",
    ],
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
    slug: "twitter-clone",
    description:
      "Empower your voice with Tweets, engage through Likes, explore vibrant communities, and experience seamless discovery. Unlock Blue Badge perks for exclusive features. Switch between Dark and Light modes effortlessly.",
    images: [
      "/images/projects/twitter-clone/twitter-clone-1.png",
      "/images/projects/twitter-clone/twitter-clone-2.png",
      "/images/projects/twitter-clone/twitter-clone-3.png",
      "/images/projects/twitter-clone/twitter-clone-4.png",
      "/images/projects/twitter-clone/twitter-clone-5.png",
      "/images/projects/twitter-clone/twitter-clone-6.png",
      "/images/projects/twitter-clone/twitter-clone-7.png",
      "/images/projects/twitter-clone/twitter-clone-8.png",
      "/images/projects/twitter-clone/twitter-clone-9.png",
      "/images/projects/twitter-clone/twitter-clone-10.png",
      "/images/projects/twitter-clone/twitter-clone-11.png",
      "/images/projects/twitter-clone/twitter-clone-12.png",
    ],
    features: [
      "📝 Tweets, Retweets, Quotes, and Replies.",
      "❤️ Like and share posts.",
      "🌐 Join or create communities.",
      "📢 Post and retweet within communities.",
      "🔍 Advanced search for users, tweets, and media.",
      "🔵 Unlock exclusive features with Blue Badge subscription.",
      "🔄 Endless discovery with Infinity Loading.",
      "🌑🌕 Dark and Light mode.",
    ],
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
    deployedLink: "https://twitter-clone-next-14.vercel.app/",
  },
  {
    name: "Food Delivery App",
    slug: "food-delivery-app",
    description:
      "Quick Bite revolutionizes food delivery with its seamless platform for users and administrators. Customers enjoy effortless browsing, ordering, and reviewing, while restaurant owners manage orders and menus with ease. With Quick Bite, experience swift and satisfying culinary journeys, offering convenience at your fingertips.",
    images: [
      "/images/projects/food-delivery/food-delivery-1.png",
      "/images/projects/food-delivery/food-delivery-2.png",
      "/images/projects/food-delivery/food-delivery-3.png",
      "/images/projects/food-delivery/food-delivery-4.png",
      "/images/projects/food-delivery/food-delivery-5.png",
      "/images/projects/food-delivery/food-delivery-6.png",
      "/images/projects/food-delivery/food-delivery-7.png",
      "/images/projects/food-delivery/food-delivery-8.png",
      "/images/projects/food-delivery/food-delivery-9.png",
      "/images/projects/food-delivery/food-delivery-10.png",
    ],
    features: [
      "💼 Add multiple food items to cart for easy checkout.",
      "🍔 Order multiple food items in a single transaction for convenience.",
      "🚚 Track order status in real-time to stay updated on delivery progress.",
      "🔄 Enjoy seamless browsing with infinity scrolling for effortless food discovery.",
      "✍️ Easily provide, edit, or delete reviews and read other users' reviews for informed decisions.",
      "🔍 Explore a variety of food categories and utilize advanced search functionality for tailored food selection.",
      "🛠️ Create, update, or delete food items to manage the menu effectively.",
      "📊 Access an intuitive admin dashboard displaying total, daily, and monthly revenue for performance analysis.",
      "📋 Manage all food items efficiently using a dedicated food table.",
      "📦 View all orders and take actions such as canceling or marking orders as delivered for streamlined order management.",
    ],
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
    slug: "blog-app",
    description:
      "QuillQuest is a vibrant blog web app where users share diverse topics, fostering interactive engagement through voting and commenting. With an intuitive interface, users navigate captivating content, shaping lively discussions. It's a dynamic platform where every post is a journey of discovery, bringing words and wisdom together in a vibrant community.",
    images: [
      "/images/projects/blog-app/blog-app-1.png",
      "/images/projects/blog-app/blog-app-2.png",
      "/images/projects/blog-app/blog-app-3.png",
      "/images/projects/blog-app/blog-app-4.png",
      "/images/projects/blog-app/blog-app-5.png",
      "/images/projects/blog-app/blog-app-6.png",
      "/images/projects/blog-app/blog-app-7.png",
    ],
    features: [
      "✏️ Create, update, delete blogs",
      "📖 Read others' blogs",
      "👀 Track blog view count",
      "👍 Vote on blogs (up or down vote)",
      "💬 Comment on blogs and reply to comments",
      "🔍 Search blogs",
      "♾️ Infinity loading blogs with tanstack query",
    ],
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
    slug: "my-portfolio",
    description:
      "QuillQuest is a vibrant blog web app where users share diverse topics, fostering interactive engagement through voting and commenting. With an intuitive interface, users navigate captivating content, shaping lively discussions. It's a dynamic platform where every post is a journey of discovery, bringing words and wisdom together in a vibrant community.",
    images: [
      "/images/projects/portfolio/portfolio-1.png",
      "/images/projects/portfolio/portfolio-2.png",
      "/images/projects/portfolio/portfolio-3.png",
      "/images/projects/portfolio/portfolio-4.png",
      "/images/projects/portfolio/portfolio-5.png",
    ],
    features: [
      "Showcase all your projects beautifully",
      "Engage visitors with a stunning image slider",
      "Enable visitors to reach out by sending emails through a contact form",
    ],
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
    slug: "car-hub",
    description:
      "CarHub offers a seamless browsing experience, allowing users to explore a wide range of cars with advanced filters for year, fuel type, and manufacturer. Easily find rental options with transparent pricing, tailored to your preferences, making car rental hassle-free and efficient.",
    images: [
      "/images/projects/carhub/carhub-1.png",
      "/images/projects/carhub/carhub-2.png",
      "/images/projects/carhub/carhub-3.png",
      "/images/projects/carhub/carhub-4.png",
    ],
    features: [
      "Fetch detailed car information from APIs",
      "Generate captivating car images from another API",
      "View rental costs of cars upfront",
      "Utilize advanced filtering options for tailored searches",
    ],
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
