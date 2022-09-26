import React,{useState,useEffect} from 'react'
import Header from '../Header/header'
import Login from '../Login/login'





const Home = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const storedUserLoggedInInformation=localStorage.getItem("isLoggedIn");

  useEffect(()=>{

   if( storedUserLoggedInInformation ==="1"){
    setIsLoggedIn(true);
   }

  },[])

  const loginHandler = (email, password) => {
  
    localStorage.setItem("isLoggedIn","1")
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false);
  
  };

  return (
    <>
      <Header  isLoggedIn={isLoggedIn} onLogout={logoutHandler}/>

      <main>
      {!isLoggedIn && <Login onLogin={loginHandler}  />}
      
      </main>
    </>
  )
}

export default Home