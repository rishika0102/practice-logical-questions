import logo from './logo.svg';
import './App.css';
import React , {useEffect, useState} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LogicalQues from './LogicalQues';
import PracticeQuestions from './PracticeQuestions';
import Todos  from './Todos';
import Counter from './Counter';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LogicalQues/>}/>
          <Route path="/PracticeQuestions" element={<PracticeQuestions/>} />
          <Route path="/PracticeQuestions/Counters" element={<Counter/>} />
          <Route path="/Todos" element={<Todos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

