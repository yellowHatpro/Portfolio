import {
  codes_practiceDP,
  flowerDP,
  gridcoinDP,
  knowledge_representationDP, listenbrainz_androidDP,
  loanerDP, moviedroidDP,
  my_webDP,
  qnaDP, sampoornaDP, studyAdda
} from "../assets/index.js";

export const projects = [
  {
    type: "web",
    data: [
      {
        name: "Codes-Practice",
        link: 'https://codes-practice.vercel.app/',
        img: codes_practiceDP
      },
      {
        name: "knowledge-representation",
        link: "https://knowledge-representation.vercel.app/",
        img: knowledge_representationDP
      },
      {
        name: "my-web",
        link: "https://yellowhatpro.github.io/My-web/",
        img: my_webDP
      },
      {
        name: "loaner",
        link: "https://github.com/yellowHatpro/loaner",
        img: loanerDP
      },
      {
        name: "qna",
        link: "https://github.com/yellowHatpro/qna",
        img: qnaDP
      },
      {
        name: "study adda",
        link:"https://studyadda.vercel.app/",
        img: studyAdda
      }
      ],
  },
  {
    type: "blockchain",
    data: [
      {
        name: "Flower",
        link: "https://github.com/yellowHatpro/flower",
        img: flowerDP
      },
      {
        name: "GridCoin",
        link: "https://github.com/yellowHatpro/gridcoin",
        img: gridcoinDP
      }
    ]
  },
  {
    type: "android",
    data: [
      {
        name: "listenbrainz-android",
        link: "https://github.com/yellowHatpro/listenbrainz-android",
        img: listenbrainz_androidDP
      },
      {
        name: "Sampoorna",
        link: "https://github.com/yellowHatpro/sampoorna",
        img: sampoornaDP
      },
      {
        name: "MovieDroid",
        link: "https://github.com/yellowHatpro/MovieDroid",
        img: moviedroidDP
      }
    ]
  }
]
