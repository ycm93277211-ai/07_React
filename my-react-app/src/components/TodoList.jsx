import { useState } from "react";

// React 만을 위한 TodoList 예제
const TodoList =()=>{
    // 작성한 Todo를 기억할 List(배열) 상태 
    const [todoList,setTodoList] = useState([{title : '123',isDone :false},
                                             {title : '4444',isDone : false}]);
     
    // 새로운 할 일 제목 작성 input의 value 상태
    const [inputValue,setInputValue]=useState("");

    // Add Todo 버튼 클릭 시 todoList 상태에 새로운 할 일을 업데이트 이벤트 핸들러 함수
    const handleAddTodo = ()=>{
        // Javascript spread(전개) 연산자 (...)
        // : 배열이나 객체같이 여러 데이터가 모여있는 형태를 낱개 형태로 뿌려주는 기능
        /*
        const 과일 = ["사과","바나나"];
        const 새로운 배열 = [...과일,"딸기"];
        console.log(새로운 배열); -> ["사과","바나나","딸기"];
        */ 

        // 기존상태에 추가
        setTodoList([...todoList,{title : inputValue,isDone : false}]);
        // 기존 todoList가 가진 배열의 요소를 낱개로 펼치고 뒤에 새로운 요소를 추가
        // -> 새로운 배열이 생성됨. 이 새로운 배열을 사태인 todoList 전달하여 셋팅
        // -> React 불변성의 법칙 지킴!
        
        setInputValue(""); // input창 값 비우기
        
    }

    //완료 / 미완료 상태 업데이트 이벤트 핸들러 함수
    const handleToggleTodo = (index)=>{

        const newTodoList = todoList.map((todo,i)=> 
            i === index ? {...todo ,isDone: !todo.isDone}:todo
        );
        setTodoList(newTodoList);
        // 현재 배열의 i와 매개변수 index가 같으면 
        // isDone값을 반대값으로 변경한 내용으로 사용,
        // 같지 않으면 기존 todo를 그대로 적용하여
        // 새로운 배열을 만들어 반환(map 사용)
    }
    

    // todoList에 있는 요소를 삭제하는 이벤트 핸들러 함수
    const handleDeleteTodo =(index)=>{
        // filter 함수 :  배열의 요소 중 특정 조건을 만족하는 요소들만 걸러내어
        // 새로운 배열을 반환하는 함수
        // -> filter는 원본 유지됨(불변성을 지키는 함수)
        const newTodoList = todoList.filter((todo,i)=> i !== index);
        // i와 index값이 일치하지 않는 요소들만 모아 새로운 배열로 반환함.
        // 즉, 현재 클릭한 todo를 제외한 요소가 모인 새 배열이 생성됨 ( == 삭제 기능처럼 작동함)

        // 위 새로 생성된 배열을 상태에 세팅(불변성 지킴)
        setTodoList(newTodoList);
    }

    return (
        <div>
            <h1>나의 TodoList</h1>
            <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
            <button onClick={handleAddTodo}>Add Todo</button>

        {/* 기억하기!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
            <ul>
                {/* 여러줄 일 때 {}중괄호 사용 시 retrun 구문 반드시 필요!!!!!!*/}
                {/* {todoList.map((todo,index)=>{
                    return(
                        <></>
                    )
                })} */}

                {/*() 소괄화 이용 시 return 필요 없음 암시적으로 반환할꺼야가 들어있음  */}

                {/* 한줄일때 */}
                {/* {todoList.map((todo,index)=>())}  */}

                {/* 여러줄 일 때 / 한줄일때 */}
                {todoList.map((todo,index)=>(
                    <li key={index}>
                        <span style={{textDecoration : todo.isDone ? "line-through" : "none" }}>{todo.title} </span>
                        <button onClick={()=>handleToggleTodo(index)}>{todo.isDone ?'미완료' : '완료'}</button>
                        <button onClick={()=>handleDeleteTodo(index)}>삭제</button>
                        {/* ()=>handleDeleteTodo(index) 왜 handleDeleteTodo(index) 이렇게 안 쓸까?
                            전달해줄 인자가 있으면  버튼을 누르기 전에 실행이 되어버림 
                            그래서 화살표 함수 ()=> 이걸 사용하면 클릭 시에만 가능 하게 만들어줌 

                            인자가 없을 때: onClick={handleDeleteTodo} (함수 이름만 써도 OK)
                            인자가 있을 때: onClick={() => handleDeleteTodo(index)} (화살표 함수 필수!)
                        */}
                    </li> 
                ))}
            </ul>
        </div>
    )
}

export default TodoList;