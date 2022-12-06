import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("0");

  const data = [
    {
      id: 1,
      question: "What are the core API provided in the Kafka platform?",
      answers: [
        {
          text: "Producer API",
          correct: false,
        },
        {
          text: "Connect API",
          correct: false,
        },
        {
          text: "Both 1 And 2",
          correct: true,
        },
        {
          text: "None Of The Above",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which file is used to define dependancy in mavan?",
      answers: [
        {
          text: "build.xml",
          correct: false,
        },
        {
          text: "version.xml",
          correct: false,
        },
        {
          text: "pom.xml",
          correct: true,
        },
        {
          text: "dependency.xml",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Can we override method by changing return type in java?",
      answers: [
        {
          text: "Yes",
          correct: true,
        },
        {
          text: "No",
          correct: false,
        },
        
      ],
    },
    {
      id: 4,
      question: "When an array is passed to a method, what does the method receive?",
      answers: [
        {
          text: "The refference of the array",
          correct: true,
        },
        {
          text: "A copy of the array",
          correct: false,
        },
        {
          text: "Length of the array",
          correct: false,
        },
        {
          text: "Copy of first element",
          correct: false,
        },
      ],
    },

    {
      id: 5,
      question: "Identify the keyword among the following that makes a variable belong to a class,rather than being defined for each instance of the class.",
      
      answers: [
        {
          text: "final",
          correct: false,
        },
        {
          text: "static",
          correct: true,
        },
        {
          text: "volatile",
          correct: false,
        },
        {
          text: "abstract",
          correct: false,
        },
      ],
    },

    {
      id: 6,
      question: "In which of the following is toString() method defined?",

      answers: [
        {
          text: "java.lang.Object",
          correct: true,
        },
        {
          text: "java.lang.String",
          correct: false,
        },
        {
          text: "java.lang.util",
          correct: false,
        },
        {
          text: "None",
          correct: false,
        },
      ],
    },

    {
      id: 7,
      question: "Where does the system stores parameters and local variables whenever a method is invoked?",
      
      answers: [
        {
          text: "Heap",
          correct: false,
        },
        {
          text: "Array",
          correct: false,
        },
        {
          text: "Stack",
          correct: true,
        },
        {
          text: "Tree",
          correct: false,
        },
      ],
    },

    {
      id: 8,
      question: "What is the variables declared in a class for the use of all methods of the class called?",
      
      answers: [
        {
          text: "Object",
          correct: false,
        },
        {
          text: "Refference Variable",
          correct: false,
        },
        {
          text: "Instance Variable",
          correct: true,
        },
        {
          text: "None",
          correct: false,
        },
      ],
    },

    {
      id: 9,
      question: "Which of the following is the billing and account management service?",
      answers: [
        {
          text: "Amazon Mechanical Turk",
          correct: false,
        },
        {
          text: "Amazon Elastic MapReduce",
          correct: false,
        },
        {
          text: "Amazon DevPay",
          correct: true,
        },
        {
          text: "None",
          correct: false,
        },
      ],
    },

    {
      id: 10,
      question: "Identify the one which is used to pass data to components from outside",

      answers: [
        {
          text: "Render With Arguments",
          correct: false,
        },
        {
          text: "setState",
          correct: false,
        },
        {
          text: "PropTypes",
          correct: false,
        },
        {
          text: "Prop",
          correct: true,
        },
      ],
    },

    {
      id: 11,
      question: "A state in React.js is also known as?",
      answers: [
        {
          text: "The internal storage of the component",
          correct: true,
        },
        {
          text: "External storage of the component",
          correct: false,
        },
        {
          text: "Permanant storage",
          correct: false,
        },
        {
          text: "All of the above",
          correct: false,
        },
      ],
    },

    {
      id: 12,
      question: "What are the worst case and average case complexities of a binary search tree?",
      answers: [
        {
          text: "O(n), O(n)",
          correct: false,
        },
        {
          text: "O(log n), O(log n)",
          correct: false,
        },
        {
          text: "O(logn), O(n)",
          correct: false,
        },
        {
          text: "O(n), O(log n)",
          correct: true,
        },
      ],
    },

    {
      id: 13,
      question: "What can you deploy on kubernates",
      answers: [
        {
          text: "virtual machine",
          correct: false,
        },
        {
          text: "container",
          correct: true,
        },
        {
          text: "system processes",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },

    {
      id: 14,
      question: "Docker registry is place to store and distribute Docker...",
      answers: [
        {
          text: "Codes",
          correct: false,
        },
        {
          text: "Images",
          correct: true,
        },
        {
          text: "Files",
          correct: false,
        },
        {
          text: "All the above",
          correct: false,
        },
      ],
    },

    {
      id: 15,
      question: "Which of the following is true about @Id annotation?",
      answers: [
        {
          text: " Hibernate detects that the @Id annotation is on a field",
          correct: false,
        },
        {
          text: "Hibernate assumes that it should access properties on an object directly through fields at runtime",
          correct: false,
        },
        {
          text: "Both A and B",
          correct: true,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },

    {
      id: 16,
      question: "Kafka can be used for which kind of applications?",
      answers: [
        {
          text: "Building real-time streaming data pipelines that reliably get data between systems or applications",
          correct: false,
        },
        {
          text: "Building real-time streaming applications that transform or react to the streams of data",
          correct: false,
        },
        {
          text: "Both A and B",
          correct: true,
        },
        {
          text: "None",
          correct: false,
        },
      ],
    }


  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "1000" },
        { id: 2, amount: "2000" },
        { id: 3, amount: "3000" },
        { id: 4, amount: "4000" },
        { id: 5, amount: "5000" },
        { id: 6, amount: "10,000" },
        { id: 7, amount: "20,000" },
        { id: 8, amount: "40,000" },
        { id: 9, amount: "80,000" },
        { id: 10, amount: "1,60,000" },
        { id: 11, amount: "3,20,000" },
        { id: 12, amount: "6,40,000" },
        { id: 13, amount: "12,50,000" },
        { id: 14, amount: "25,00,000" },
        { id: 15, amount: "1 Crore" },
        { id: 16, amount: "7 Crore" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You Win : Rs {earned}  </h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
