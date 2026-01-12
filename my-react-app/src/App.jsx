import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Exam1 from "./components/Exam1.jsx";
import './App.css'
import Exam2 from './components/Exam2.jsx';
import Exam3 from './components/Exam3.jsx';
import Exam4 from './components/Exam4.jsx';
import Exam5 from './components/Exam5.jsx';
import Exam6 from './components/Exam6.jsx';
import Exam7 from './components/Exam7.jsx';
import Test from './components/Test.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  // 상태 (State)
  //const [count, setCount] = useState(0)
  const [showExam, setShowExam] = useState(true);

  return (
    // js 주석
    // <></> :fragment(조각) -> (html 역할 x)
    <>
      {/* <></> 이 안에는 jsx 이다. 밖은 js 문법 사용 가능 */}
      {/* jsx 문법 주소 */}
      {/* <h1>안녕하세요</h1> */}
    {/* <button onClick={()=>setShowExam(!showExam)}>클릭</button>
    {showExam && <Exam2 chungmo ="hello" test="world" />} */}
    {/* 조건부 렌더링 : 조건에 따라 렌더링되는 방법
      && 앞에있는 showExam이 trye 면 Exam1 렌더링됨
      false면  Exam1 렌더링되지 않음
    */}
    
      <Exam5 />
      {/* <Test /> */}
      {/* <TodoList /> */}
    </>

  )
}

export default App
