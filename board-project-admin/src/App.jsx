import './css/App.css';
import Login from'./components/Login.jsx';
import Dashboard from'./components/Dashboard.jsx';
import { AuthContext, AuthProvider } from './components/AuthContext.jsx';
import { useContext } from 'react';

// 컴포넌트를 분리하여 하위 컴포넌트에서 userContext 사용하기
function App(){
  return(
    <AuthProvider>
      <AppComponent/>
    </AuthProvider>
  )

}


function AppComponent() {
  const {user} = useContext(AuthContext);
  // 이렇게 쓴 이유 
  // 로그인을 했다면 DashBoard 렌더링
  // 로그인을 안했다면 Login 렌더링
  // -> 조건 : 로그인 여부
  //      로그인을 했는지 안했는지를 기억해줄 상태값(user)
  //      user 에는 로그인 한 사람의 대한 정보가 세팅.
  //      user는 AuthContext 안에 작성
  //      ContextAPI를 이용하여

  return (
    <>
      {user ?
      (
        <div className='body-containar'>
          <Dashboard />
        </div>
      ):
      (
        <div className='body-login'>
          <Login />
        </div>
      )}
    </>
  )
}

export default App
