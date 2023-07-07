import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const PracticeQuestions = () => {
   const [value, setValueA] = useState("");
   const [valueB, setValueB] = useState("");
   const [result, setResult] = useState("");
   const [val, setValA] = useState("");
   const [valB, setValB] = useState("");
   const [examName, setExamName] = useState({});
   const [studName, setStudName] = useState("");
   const [examName1, setExamName1] = useState({});
   const [examName2, setExamName2] = useState({});
   const navigate = useNavigate();
   const date = new Date();
   const arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
   const median = () => {
    const time = date.getHours();
    if(time < 12) {
      return 'AM';
    } else {
      return 'PM';
    }
   }
    const showTime = date.getHours() + " " + median()
        + ':' + date.getMinutes()
        + ":" + date.getSeconds();
   const day = date.getDay();
   const dayDetails = arr.find((element, index) => index === day);

   const dateInFormat = () => {
    const showDate = date.getMonth() + '-' + date.getDate() + '-' + date.getFullYear();
    console.log("showDate", showDate);
   }

   const areaOfTriangle = () => {
    const a = 5;
    const b = 6;
    const c = 7;
    console.log("area of triangle", a*b*c);
   }

   const rotateString = () => {
    let value = "w3resource";
    let rotateValue = ""
    for(let i=0; i<value.length; i++) {
     rotateValue = rotateValue + value[value.length - (i+1)] ;
    }
    console.log("value", value);
    console.log("rotateValue", rotateValue);
   }

   const leapYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    if(year%4==0) {
      console.log("This year is leap year");
    }
   }

   const getSunday = () => {
    const date = new Date();
    const year = date.getFullYear();
    let d = new Date(year, 0, 1);
    if(d.getDay() === 0) {
      console.log("d", d);
    }
   }

   const randomInteger = (e) => {
      const rndInt = Math.floor(Math.random() * 10) + 1;
      const userInput = e.target.value;
      console.log("random Integer", rndInt);
      if(rndInt === userInput) {
        console.log("Good Work");
      } else {
        console.log("Sorry U didn't match");
      }
   }

   const daysLeftToChristmas = () => {
    const date = new Date();
    const year = date.getFullYear();
    let d = new Date(year, 11, 25);
    // const daysCount = (date - d)
    // console.log("daysCount", daysCount);
   }

   const multiply = (e) => {
    e.preventDefault();
    setResult(value * valueB);
   }

   const division = (e) => {
    e.preventDefault();
    if(value > valueB) {
      setResult(value/valueB)
    } else {
      setResult(valueB/value);
    }
   }

   const goToCounterPage = () => {
    navigate("./Counter");
   }

   const convertTemp = (cs, fh) => {
    const resultInfh = (cs/5)*9+32;
    const resultInCs = ((fh-32)/9)*5;
    console.log("resultInfh...", resultInfh);
    console.log("resultInCs...", resultInCs);
    console.log("document", document.URL);
   }

   const absoluteDiff = (e) => {
    const n = e.target.value;
    let result;
    if(n>13) {
      result = 13 - n*2;
      console.log("res", result);
    } else {
      result = 13 - n;
      console.log("res", result);
    }
   }

   const totalSum = (e) => {
    e.preventDefault();
    debugger
    const a = parseInt(val);
    const b = parseInt(valB);
    let c;
    if(a === b) {
      const c = (a + b)*3;
      console.log("value are same", c);
    } else {
      c = a + b;
      console.log("total sum is equal to", c);
    }

    if(a === 50 || b === 50 || c === 50) {
      console.log("true");
    } else {
      console.log("false");
    }
   }

   const specificNumber = (e) => {
    const newValue = e.target.value;
    if(newValue > 19) {
      const res = (newValue - 19) * 3;
      console.log("res", res);
    } else {
      const res = 19 - newValue;
      console.log("res", res);
    }
   }

   const checkNumber = (a, b) => {
    if(a || b) {
      if(a > 0) {
        console.log("a is positive");
      } else {
        console.log("a is navigate");
      }
      if(b > 0) {
        console.log("b is positive");
      } else {
        console.log(" b is navigate");
      }
    }
   }

   const checkString = (e) => {
      const stringValue = e.target.value;
      debugger
      if((stringValue.charAt(0) === 'P' || stringValue.charAt(0) === 'p') && stringValue.charAt(1) === 'y' ) {
        console.log("stringValue", stringValue);
      } else {
        console.log("concanating", "Py"+stringValue);
      }
    }

    const checkMultiples = (n) => {
      if(n%3===0 || n%7===0) {
        if(n%3==0 && n%7==0) {
          console.log("number is multiple of 3 and 7", n);
        } else if(n%3==0) {
          console.log("number is multiple of 3", n);
        } else {
          console.log("number is multiple of 7");
        }
      } else {
        console.log("not a multiple of 3 and 7");
      }
    }

    const modifyString = (s) => {
      const stringValue = [];
      if(s.length >= 3) {
        for(let i=0; i<3; i++) {
          stringValue.push(s[i]);
        }
      }
      const newString = stringValue.join("") + s + stringValue.join("");
      console.log("stringValue", newString);
    }

   const isStringJava = (s) => {
    if((s.charAt(0) === 'J' || s.charAt(0) === 'j') && s.charAt(1) === 'a' && s.charAt(2) === 'v' && s.charAt(3) === 'a') {
      console.log("true string has java");
    } else {
      console.log("false");
    }
   }

   const checkRange = (x, y) => {
    if(x<50 && x>99 && y<50 && y>99) {
      console.log("true number are in range `TRUE`");
    } else {
      console.log("false");
    }
   }

   const characterFind = (n) => {
    const arr = [];
    if(n.length >= 2){
      for(let i=1; i<4; i++) {
        arr.push(n[i]);
      }
      console.log("array..", arr.join(""));
    }
   }

   const checkPositiveNumber = (n) => {
    const checkLen = n.toString().length;
    const arr = [];
    for(let i=checkLen-1; i>checkLen-4; i--) {
      arr.push(n.toString()[i]);
    }
    console.log("arr", arr.join(""));
   }

   // const adjacentLen = (n) => {
   //  const checkLen = n.toString().length;
   //  const arr = [];
   //  if(checkLen%2==0) {
   //    for(let i=0; i<checkLen-1; i+2) {
   //      for(let j=i; j<=i+1; j++) {
   //        arr.push(n.toString()[j]);
   //      }
   //    }
   //    console.log("arr from adjacentLen..", arr);
   //  }
   // }

   const charLowerCase = (n) => {
    const arr = [];
    const arr1 = [];
    if(n.length > 3) {
      for(let i=0; i<3; i++) {
        arr.push(n[i]);
      }
      for(let i=3; i<n.length; i++) {
        arr1.push(n[i]);
      }
      const newString = arr.join("").toLowerCase() + arr1.join("");
      console.log("new string", newString);
    } else {
      console.log("upper case", n.toUpperCase());
    }
   }

   const studentForm = (e) => {
    e.preventDefault();
    console.log("studentForm details", studName, examName, examName1, examName2);
    if(examName.name == "Final-exam" && examName.marks >= 90) {
      console.log("true", examName.name);
      return true;
    }
    if(examName1.name == "Final-exam" && examName1.marks >= 90) {
      console.log("true", examName1.name);
      return true;
    }
    if(examName2.name == "Final-exam" && examName2.marks >= 90) {
      console.log("true", examName2.name);
      return true;
    }
   }

   useEffect(() => {
    dateInFormat();
    areaOfTriangle();
    rotateString();
    leapYear();
    getSunday();
    daysLeftToChristmas();
    convertTemp(60, 45);
    checkNumber(6, -3);
    checkMultiples(21);
    modifyString("rishika");
    isStringJava("javascript");
    checkRange(87, 90);
    characterFind("testing");
    checkPositiveNumber(98345976);
    // adjacentLen(4567);
    charLowerCase("testing");
   }, [])

   return(
    <>
      <p>Today is {dayDetails}</p>
      <p>Current Time is {showTime}</p>
      <input type="number" placeholder="Enter a number" onChange={randomInteger}/>
      <form>
        <input type="number" placeholder="Enter a number" onChange={(e) => setValueA(e.target.value)}/>
        <input type="number" placeholder="Enter a second number" onChange={(e) => setValueB(e.target.value)} />
        <button type="submit" onClick={multiply}>Multiply {result}</button>
        <button type="submit" onClick={division}>Division {result}</button>
      </form>
      <br/>
      <button onClick={goToCounterPage}>Counter Page</button>
      <input type="number" placeholder="Enter a number" onChange={absoluteDiff}/>
      <form>
        <input type="number" placeholder="Enter a number" onChange={(e) => setValA(e.target.value)}/>
        <input type="number" placeholder="Enter a second number" onChange={(e) => setValB(e.target.value)} />
        <button type="submit" onClick={totalSum}>Total</button>
      </form>
      <input type="number" placeholder="Enter specific number" onChange={specificNumber}/>
      <input type="text" placeholder="Enter a string" onChange={checkString} />
      <form>
        <p>Student Form</p>
        <input type="text" placeholder="Enter name of student" onChange={(e) => setStudName(e.target.value)}/>
        <br/>
        <input type="text" placeholder="Enter name of exam" onChange={(e) => {const examDetails = {
            ...examName,
            name: e.target.value
          }; setExamName(examDetails);
        }}/>
        <input type="number" placeholder="Enter marks of exam" onChange={(e) => {const examDetails = {
            ...examName,
            marks: e.target.value
          }; setExamName(examDetails);
        }}/>
        <br/>
        <input type="text" placeholder="Enter name of exam" onChange={(e) => {const examDetails = {
            ...examName1,
            name: e.target.value
          }; setExamName1(examDetails);
        }}/>
        <input type="number" placeholder="Enter marks of exam" onChange={(e) => {const examDetails = {
            ...examName1,
            marks: e.target.value
          }; setExamName1(examDetails);
        }}/>
        <br/>
        <input type="text" placeholder="Enter name of exam" onChange={(e) => {const examDetails = {
            ...examName2,
            name: e.target.value
          }; setExamName2(examDetails);
        }}/>
        <input type="number" placeholder="Enter marks of exam" onChange={(e) => {const examDetails = {
            ...examName2,
            marks: e.target.value
          }; setExamName2(examDetails);
        }}/>
        <br/>
        <button onClick={studentForm}>Submit</button>
      </form>
    </>
  )
}

export default PracticeQuestions;

