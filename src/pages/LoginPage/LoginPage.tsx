import { useRef, FormEvent, useState, useEffect } from 'react';
import Styled from './LoginPage.styles';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';


import { auth } from './../../../firebaseConfig';
import { signInWithEmailAndPassword } from '@firebase/auth';


const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;


function LoginForm() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const handleFocusEmail = () => {
    setIsEmailFocused(true);
  };

  const handleBlurEmail = () => {
    if (!emailRef.current?.value) {
      setIsEmailFocused(false);
    }
  };

  const handleFocusPassword = () => {
    setIsPasswordFocused(true);
  };

  const handleBlurPassword = () => {
    if (!passwordRef.current?.value) {
      setIsPasswordFocused(false);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
  
    if (email && password) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("-----", userCredential, "-----")
        // Handle successful login
        // userCredential will have user information
      } catch (error) {
        // Handle login errors
      }
    } else {
      // Handle case where email or password is missing
    }
  };


  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
    
  //   // Ensure that the refs are current and have values
  //   const email = emailRef.current?.value;
  //   const password = passwordRef.current?.value;

  //   if (email && password) {
  //     signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
  //       .then((result) => {
  //         console.log("result", result);
  //       })
  //       .catch((error) => {
  //         console.log("error", error);
  //         alert("Error: " + error.message); // Using standard web alert
  //       });
  //   } else {
  //     alert("Email and password must be provided");
  //   }
  // };

  function handleCallbackResponse(response: any){
    var userObject = jwtDecode(response.credential);
  }


  useEffect(() => {
    const checkGoogleScript = setInterval(() => {
      console.log("===", window.google, "=====")
      if (window.google) {
        initializeGoogleSignIn();
        clearInterval(checkGoogleScript);
      }
    }, 100);

    return () => clearInterval(checkGoogleScript);
  }, []);

  function initializeGoogleSignIn() {
    if (window.google && googleClientId) {
      google.accounts.id.initialize({
        client_id: googleClientId,
        callback: handleCallbackResponse
      });

      google.accounts.id.renderButton(
        document.getElementById('signInDivGoogle'),
        { theme: "outline", size: "large" }
      );
    } else {
      console.error('Google object not available or Google Client ID is not set.');
    }
  }


  return (
    <Styled.LoginContainer>
      <Styled.IntroContainer>
        <h1>hello world</h1>
      </Styled.IntroContainer>
      <Styled.LoginBoxContainer>
        <Styled.FormContainer>
          <Styled.Form onSubmit={handleSubmit}>
            <div>
              <Styled.Title>Welcome back</Styled.Title>
            </div>
            <Styled.InputContainer>
              <Styled.InputField
                type="text"
                ref={emailRef}
                onFocus={handleFocusEmail}
                onBlur={handleBlurEmail}
              />
              <Styled.EmailLabel hasemailcontent={isEmailFocused.toString()}>
                Email
              </Styled.EmailLabel>
            </Styled.InputContainer>
            <Styled.InputContainer>
              <Styled.InputField
                type="password"
                ref={passwordRef}
                onFocus={handleFocusPassword}
                onBlur={handleBlurPassword}
              />
              <Styled.PasswordLabel haspasswordcontent={isPasswordFocused.toString()}>
                Password
              </Styled.PasswordLabel>
            </Styled.InputContainer>
            <Styled.Button type="submit">Continue</Styled.Button>
          </Styled.Form>
          <Styled.LoginMessage>
            Don't have an account? <Styled.WordButton onClick={()=> navigate('/signup')}>Sign up</Styled.WordButton>
          </Styled.LoginMessage>
        </Styled.FormContainer>
        <Styled.Separator>
          <Styled.HorizontalLine />
          <Styled.Text>or</Styled.Text>
          <Styled.HorizontalLine />
        </Styled.Separator>
        <Styled.SocialMediaLoginBox>
          <Styled.SocialMediaButton id="signInDivGoogle"/>
        </Styled.SocialMediaLoginBox>
      </Styled.LoginBoxContainer>
    </Styled.LoginContainer>
  );
}

export default LoginForm;
