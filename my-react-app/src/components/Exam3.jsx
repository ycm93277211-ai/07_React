// 상태 내리꽂기(Props Driling) 
// : 부모가 가진 데이터를 자식에게 전달해서
// 자식이 사용할 수 있게끔 하는 것.
// 전달게임 

import { useState } from "react"

// 부모 컴포넌트
const Exam3=()=> {
    const [name,setName] = useState("홍길동");

    // 자식 컴포넌트 (Child1에 부모의 상태인 name값과 그냥 데이터 10age를
    // userName과 age라는 Key에 세팅하여 props를 통해 전달)
    return <Childe1 userName={name} age={10} />
}

// 자식 컴포넌트
const Childe1 =(props)=>{ // props(부모에게 전달 받은 값) => {userName='홍길동' age=10} 

    return (
        <div>
            <p>나는 {props.userName}입니다.</p>
            <p>나이는 {props.age}입니다.</p>

            <Childe2 name={props.userName} /> 
        </div> // 전달 해줄 키 변수명은 바꿔도 됨

    )
}

// 자식의 자식 컴포넌트
const Childe2 =({name})=>{ 
    // props 객체 형태 대신 {Key} 로 값을 꺼내올 수 있음
    return <p>{name}</p>
}

export default Exam3;
