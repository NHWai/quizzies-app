import { createContext, useState, useEffect } from "react";

const Content = createContext();

export const ContentProvider = ({ children }) => {
  const dd = [
    {
      category: "Science & Nature",
      type: "multiple",
      difficulty: "medium",
      question: "Which of these stars is the largest?",
      correct_answer: "UY Scuti",
      incorrect_answers: ["VY Canis Majoris", "Betelgeuse", "RW Cephei"],
    },
    {
      category: "Entertainment: Music",
      type: "multiple",
      difficulty: "hard",
      question: "Which of these songs was released in 1996?",
      correct_answer: "The Smashing Pumpkins - &quot;1979&quot;",
      incorrect_answers: [
        "Prince - &quot;1999&quot;",
        "James Blunt - &quot;1973&quot;",
        "David Bowie - &quot;1984&quot;",
      ],
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which of these is NOT a faction included in the game Counter-Strike: Global Offensive?",
      correct_answer: "BOPE",
      incorrect_answers: ["GSG-9", "Elite Crew", "Phoenix Connexion"],
    },
    {
      category: "Entertainment: Japanese Anime & Manga",
      type: "multiple",
      difficulty: "hard",
      question: "The &quot;To Love-Ru&quot; Manga was started in what year?",
      correct_answer: "2006",
      incorrect_answers: ["2007", "2004", "2005"],
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "hard",
      question: "The Mazda 787B won the 24 Hours of Le Mans in what year?",
      correct_answer: "1991",
      incorrect_answers: ["1990", "2000", "1987"],
    },
  ];

  function parse(str) {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(
      `<!doctype html><body>${str}`,
      "text/html"
    ).body.textContent;
    return decodedString;
  }

  const dataParsed = dd.map((el) => {
    return {
      ...el,
      question: parse(el.question),
      correct_answer: parse(el.correct_answer),
      incorrect_answers: el.incorrect_answers.map((el) => parse(el)),
    };
  });
  console.log(dataParsed);

  const [data, setData] = useState(dataParsed);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // async function fetchData() {
  //   const response = await fetch(
  //     "https://opentdb.com/api.php?amount=5&type=multiple"
  //   );
  //   const data = await response.json();
  //   setData(data.results);
  // }

  return <Content.Provider value={{ data }}>{children}</Content.Provider>;
};

export default Content;
