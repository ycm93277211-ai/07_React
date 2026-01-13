import { useState } from "react"


// 부모
const Test =()=>{

    
    // 초기값 설정
    const [score,setScore] = useState(0);
    
    // 버튼 누를때마다 +1
    const plusScore = ()=>{
        setScore(score+1);
    }
    // 버튼 누를때마다 +1
    const minusScore = ()=>{
        setScore(score-1);
    }

    return(
        <div>
            
            <h1>점수:{score}</h1>
           <Test1 plusScore={plusScore} minusScore={minusScore} />
 
            {score>=10 && <h2>10점 돌파</h2>}
            {score<=-10 && <h2>-10점 돌파</h2>}
        </div>
    )

}

// 자식
const Test1 =(props)=>{
    return(
        <>
        <button onClick={props.plusScore}>증가버튼</button>
        
        <button onClick={props.minusScore}>감소버튼</button>
        </>
    
    )
}


export default Test;