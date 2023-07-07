import logo from './logo.svg';
import './App.css';
import React , {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

function LogicalQues() {
  const [value, setValueA] = useState();
  const [valueB, setValueB] = useState();
  const [percentValue, setPercentValue] = useState();
  const [percentValueB, setPercentValueB] = useState();
  const navigate = useNavigate();
  const arr = [3, 4, 7, 8, 9, 23, 10, 20, 60];

  const handleChangeA = (e) => {
    setValueA(e.target.value);
    checkSameValue(e.target.value, valueB);
  }

  const handleChangeB = (e) => {
    setValueB(e.target.value);
    checkSameValue(value, e.target.value);
  }

  function checkSameValue(value, valueB) {
    if(value === valueB)
      return true
    else
      return false
  }

  function checkType(value) {
    if(value) {
      console.log(typeof value);
      return typeof value;
    }
  }

  const handleChange = (e, n) => {
    const stringValue = e.target.value;
    if(stringValue.length >= n) {

      // by using predefine method
      const index = stringValue.charAt(n-1);
      console.log("indexxx",  index);

      //by not using predefine method
      for(let i=0; i<=n; i++) {
        console.log("stringValue index", stringValue[i]);
        if(i===n) {
          console.log("value of string", stringValue[i-1]);
        }
      }
      return index;
    }
  }

  const removeCharacter = (e) => {
    const removeValue = e.target.value;
    const newValue = removeValue.slice(3);
    console.log("remove", newValue);


    const newVal = removeValue.slice(0, -3);
    console.log("extracted value", newVal);
  }

  const getCharacters = (e) => {
    const value = e.target.value;
    const newValue = value.substring(0, 3);
    console.log("newValue", newValue);
  }

  const isString = (e) => {
    const value = e.target.value;
    for(let i=0; i<value.length; i++) {
      if(value[i] === 'i' && value[i+1] === 's') {
        console.log("i", i, " i plus", i+1);
      }
    }
  }

  const extractString = (e) => {
    const value = e.target.value;
    let str = [];
    let n = (value.length - 1) /2;
    for(let i=value.length -1; i>=n; i--) {
      str.push(value[i]);
    }
    const newValue = str.reverse().join('');
    console.log("newValue", newValue);
  }

  const removeLast3 = (e) => {
    const value = e.target.value;
    const remVal = value.slice(0, -3);
    console.log("rem Val", remVal);
  }

  const handlePercent = (e) => {
    setPercentValue(e.target.value);
    calculatePercent(e.target.value, percentValueB);
  }

  const handlePercentB = (e) => {
    setPercentValueB(e.target.value);
    calculatePercent(percentValue, e.target.value);
  }

  const calculatePercent = (a, b) => {
    const calculation = (a * b) / 100;
    console.log("calculation", calculation);

  }

  const orderCalculation = (a, b, c, d, e,  f) => {
    const value = ((((a+b) - c) * d)/e) ** f;
    console.log("value", value);
  }

  const concanate = (a, b) => {
    const matchValue = a.includes(b);
    if(matchValue) {
     return b.concat(" ", a);
    } else {
      return a.concat(b);
    }
  }

  const checkEven = (a) => {
    if(a%2==0) {
      console.log("true");
      return true;
    }
    else {
      return false;
    }
  }

  const checkDecimal = (a) => {
    if(a%1 != 0) {
      console.log("false it is decimal");
      return false;
    }
    else {
      console.log("true");
      return true;
    }
  }

  const aAndB = (a, b) => {
    if(a<b) {
      const c = a/b;
      console.log("c dividing a by b", c);
    } else {
      console.log("multiply", a * b);
      return a*b;
    }
  }

  const arrFun = (arr, n) => {
    if(arr.length >= n) {
      for(let i=0; i<=n; i++) {
        if(i===n) {
          console.log("array", arr[i]);
          return arr[i];
        }
      }
    }
  }

  const roundNumber = (num) => {
    let n = num.toFixed(2);
    console.log("n", n);
  }

  const occurCount = (a, b) => {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      let found = false;
      for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
          found = true;
          break;
        }
      }
      if (found) {
        count++;
      }
    }
    console.log("count ", count);
  };

  const breakString = (a, b) => {
    let count = 0;
    const arr = [];
    const arr1 = [];
    for(let i=0; i<a.length; i++) {
      const c = a.substr(i, 2);
      arr.push(c);
    }
    for(let j=0; j<b.length; j++) {
      const c = b.substr(j, 2);
      arr1.push(c);
    }
    console.log("arr", arr);
    console.log("arr 1", arr1);
    for (let i = 0; i < arr.length; i++) {
      let found = false;
      for (let j = 0; j < arr1.length; j++) {
        if (arr[i] === arr1[j]) {
          found = true;
          break;
        }
      }
      if (found) {
        count++;
      }
    }
    console.log("count from break string", count);
  }

  const goToNextPage = () => {
    navigate("./PracticeQuestions");
  }

  useEffect(() => {
    checkType(['a', 'b']);
    orderCalculation(4, 10, 20, 50, 70, 9);
    concanate('This is logical questions practice', 'is');
    checkEven(9);
    checkDecimal(18.45);
    aAndB(9, 36);
    arrFun(arr, 4);
    roundNumber(6.45678);
    occurCount('Rishika', 'ishikaRa');
    breakString('RishikaArya', 'Aaissh');
  }, [])

  return (
    <div className="App">
      React app logical questions practice
      <p>Enter Value</p>
      <input type="text" placeholder="Enter value a" onChange={handleChangeA}/>
      <input type="text" placeholder="Enter value b" onChange={handleChangeB}/>
      <p>Enter a string</p>
      <input type="text" placeholder="Enter a string" onBlur={(e) => handleChange(e, 5)} />
      <p>Enter a string B</p>
      <input type="text" placeholder="Enter a string" onBlur={(e) => removeCharacter(e)} />
      <p>Enter a string for getting three characters</p>
      <input type="text" placeholder="Enter a string" onBlur={(e) => getCharacters(e)} />
      <p>Enter a string which contain is</p>
      <input type="text" placeholder="Enter a string" onBlur={(e) => isString(e)}/>
      <p>Extracting string</p>
      <input type="text" placeholder="Enter a string" onBlur={(e) => extractString(e)}/>
      <p>Extract string 3</p>
      <input type="text" placeholder="Enter a string" onBlur={(e) => removeLast3(e)}/>
      <p>Enter values for calculating percentage</p>
      <input type="number" placeholder="Enter a number" onChange={handlePercent}/>
      <input type="number" placeholder="Enter a number b" onChange={handlePercentB} />
      <button onClick={goToNextPage}>Next Page</button>
    </div>
  );
}

export default LogicalQues;

