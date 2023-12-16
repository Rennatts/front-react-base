import { useRef, useState, useEffect } from 'react';
import Styled from '../LoginPage/LoginPage.styles';
import { jwtDecode } from "jwt-decode";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


import { auth } from './../../../firebaseConfig';
import { useUserContext } from './../../context/userContext';


const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;


function LoginForm() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { setAccessToken } = useUserContext();

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
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        if(userCredential.user !== undefined){
          const token = await userCredential.user.getIdToken();
  
          setAccessToken(token);
        }
      } catch (error) {
        if (error instanceof Error) setError(error.message)
      }
    } else {
      setError('Please fill in all fields.');
    }

  };


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
                ref={nameRef}
                onFocus={handleFocusEmail}
                onBlur={handleBlurEmail}
              />
              <Styled.EmailLabel hasemailcontent={isEmailFocused.toString()}>
                Name
              </Styled.EmailLabel>
            </Styled.InputContainer>
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
            Already have an account? <Styled.WordButton onClick={()=> navigate('/login')}>Log in</Styled.WordButton>
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
