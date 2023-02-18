import React,{useEffect} from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import classes from './Login.module.css'

const Login = () => {
  const navigate = useNavigate()
  const signin =()=>{
    
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        localStorage.setItem("email", user.email)
        localStorage.setItem("username", user.displayName)
        // navigate('/home')
        
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  useEffect(() => {
   
  }, [])
  
  return (
    <div>
        <Navbar/>
        
    <button onClick={signin} className={classes.loginContainer}><img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' />Login</button>
        
    </div>
  )
}

export default Login