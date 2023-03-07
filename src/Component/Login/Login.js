import React,{useEffect} from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import classes from './Login.module.css'
import { useDispatch } from 'react-redux';
import { loggedInAction } from '../../store/loggedIn';

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const signin =()=>{
    
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(loggedInAction.loggedIn())

        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        localStorage.setItem("email", user.email)
        localStorage.setItem("username", user.displayName)
        navigate('/')
        
      }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  useEffect(() => {
     if(localStorage.getItem("email")){
        dispatch(loggedInAction.loggedIn())
        navigate('/')
     }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className={classes.loginMain}>
        <Navbar/>
        <div className={classes.loginContainer}>
            <div className={classes.loginCard}>
                <img height="160px" width="400px" src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg' alt=''/>
                <div className={classes.loginDetails}>
                    <p><b>Login with Gmail</b></p>
                    <button onClick={signin} className={classes.loginBtn}><img width="20px" src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt='' />Login</button>
                </div>                
            </div>            
        </div>        
    </div>
  )
}

export default Login