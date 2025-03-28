import {
  betterFocus,
  codes_practiceDP,
  flowerDP,
  gridcoinDP,
  iremember,
  khanakhazana,
  knowledge_representationDP,
  listenbrainz_androidDP,
  nginx_webDP,
  moviedroidDP,
  my_webDP,
  prastuti,
  qnaDP,
  reciboi,
  sampoornaDP,
  studyAdda,
  w3smartwallet,
  yada,
} from "../assets";

export const projects = [
  {
    type: "web",
    data: [
      {
        name: "Codes Practice",
        link: "https://codes-practice.vercel.app/",
        img: codes_practiceDP,
        about:
          "A directory of my coding solutions to a lot of coding and algorithmic problems.",
      },
      {
        name: "Khana Khazana",
        link: "https://khanakhazana.vercel.app/",
        img: khanakhazana,
        about:
          "A simple frontend for dish catalog. I made this to practice my frontend skills.",
      },
      {
        name: "Prastuti.ai",
        link: "https://prastuti-ai.vercel.app/",
        img: prastuti,
        about: "Mmm just write prompt and see a PPT being generated.",
      },
      {
        name: "Nginx-Web",
        link: "https://github.com/yellowHatpro/nginx-web",
        img: nginx_webDP,
        about:
          "[WIP] An application to monitor my nginx service, and see logs, and nginx config.",
      },
      {
        name: "qna",
        link: "https://github.com/yellowHatpro/qna",
        img: qnaDP,
        about:
          "A simple full stack app for a question and answer platform. Wanted to learn SpringBoot and NextJS App router that's it.",
      },
      {
        name: "Study Adda",
        link: "https://studyadda.vercel.app/",
        img: studyAdda,
        about:
          "Full stack app for collaborations. Wanted to learn drizzle, ts-node, postgres with this.",
      },
      {
        name: "My Web",
        link: "https://yellowhatpro.github.io/My-web/",
        img: my_webDP,
        about:
          "LOL joke project. JK, first frontend project I made while learning HTML CSS.",
      },
      {
        name: "Knowledge Representation",
        link: "https://knowledge-representation.vercel.app/",
        img: knowledge_representationDP,
        about:
          "IDK why its on the list, but this was my first Next JS Typescript project. I made it coz I was frustrated with Knowledge Graphs.",
      },
    ],
  },
  {
    type: "blockchain",
    data: [
      {
        name: "Flower",
        link: "https://github.com/yellowHatpro/flower",
        img: flowerDP,
        about:
          "Blog app made on top of Flow Blockchain. Was learning Cadence, the language used in Flow Blockchain.",
      },
      {
        name: "GridCoin",
        link: "https://github.com/yellowHatpro/gridcoin",
        img: gridcoinDP,
        about:
          "A web3 marketplace, apparently I was learning Solidity at that time.",
      },
      {
        name: "w3 Smart Wallet",
        link: "https://w3-smart-wallet.vercel.app/",
        img: w3smartwallet,
        about:
          "Account Abstract 101, Made this to learn about account abstraction. Used ThirdWeb and NextJs.",
      },
    ],
  },
  {
    type: "android",
    data: [
      {
        name: "Listenbrainz",
        link: "https://github.com/yellowHatpro/listenbrainz-android",
        img: listenbrainz_androidDP,
        about:
          "MetaBrainz's Listenbrainz Android App. Made open source contributions here during and after GSoC 2022",
      },
      {
        name: "Sampoorna",
        link: "https://github.com/yellowHatpro/sampoorna",
        img: sampoornaDP,
        about:
          "A women empowerment app. Got selected to work on this and maintained this during FOSS Overflow open source program.",
      },
      {
        name: "MovieDroid",
        link: "https://github.com/yellowHatpro/MovieDroid",
        img: moviedroidDP,
        about:
          "College Coding club's app, shows info about movies and TV series. Which I and ken1000minus7 started, and later it got many contributions from other students.",
      },
      {
        name: "YADA",
        link: "https://github.com/yellowHatpro/YADA",
        img: yada,
        about:
          "Travel App, made during Ideathon, college event with Ken1000minus7. This is where things started getting serious for me, programming wise.",
      },
      {
        name: "Better Focus",
        link: "https://github.com/yellowHatpro/Better-Focus",
        img: betterFocus,
        about:
          "Hackathon project, tried accessing Android's System Services to track user's app usage and do something about it.",
      },
      {
        name: "ReciBoi",
        link: "https://github.com/yellowHatpro/ReciBoi",
        img: reciboi,
        about:
          "Hackathon project, did along with Ken1000minus7. Recipe app, uses API for different recipes. Had text-to-speech feature.",
      },
    ],
  },
  {
    type: "rust",
    data: [
      {
        name: "i-remember",
        link: "https://github.com/yellowHatpro/i-remember",
        img: iremember,
        about: "CLI tool to remember commands.",
      },
      {
        name: "Melba",
        link: "https://github.com/metabrainz/melba",
        img: "https://blog.metabrainz.org/wp-content/uploads/2024/10/image.png",
        about:
          "Backend service that interacts with MusicBrainz database. Did during GSoC 2024.",
      },
    ],
  },
];
