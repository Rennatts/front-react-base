import styled from 'styled-components';

interface LabelProps {
  hasemailcontent?: string;
  haspasswordcontent?: string;
}

const LoginContainer = styled.div`
  display: grid;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  grid-template-columns: 0.8fr 2fr;
  grid-gap: 1.5em;
  height: 100vh;
`

const LoginBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 40%;
`

const IntroContainer = styled.div`
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background: linear-gradient(to bottom, #C5D5EA 0%, #B3C5D7 33%, #759EB8 66%, #7392B7 100%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Separator = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  margin: 10% 0; 
`;

const HorizontalLine = styled.div`
  flex-grow: 1;
  height: 1px; /* Adjust the height of the horizontal line */
  background-color: #ccc; /* Adjust the color of the horizontal line */
`;

const Text = styled.p`
  margin: 0 10px; /* Adjust the spacing around the "or" text */
  background-color: white; /* Adjust the background color of the "or" text */
  z-index: 1;
`;

const InputContainer = styled.div`
  position: relative;
  margin-top: 40px;
  width: 60%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 16px;

`;

const EmailLabel = styled.label<LabelProps>`
  position: absolute;
  left: 10px;
  top: ${(props) => (props.hasemailcontent ? '-25px' : '10px')};
  font-size: ${(props) => (props.hasemailcontent ? '14px' : '16px')};
  color: ${(props) => (props.hasemailcontent ? '#333' : '#999')};
  transition: transform 0.3s, font-size 0.3s, top 0.3s;
  pointer-events: none;
`;

const PasswordLabel = styled.label<LabelProps>`
  position: absolute;
  left: 10px;
  top: ${(props) => (props.haspasswordcontent ? '-25px' : '10px')};
  font-size: ${(props) => (props.haspasswordcontent ? '14px' : '16px')};
  color: ${(props) => (props.haspasswordcontent ? '#333' : '#999')};
  transition: transform 0.3s, font-size 0.3s, top 0.3s;
  pointer-events: none;
`;

const Button = styled.button`
  border-radius: 5px;
  background-color: #7392B7;
  padding: 2%;
  color: white;
  width: 60%;
  margin-top: 10%; 

  &:hover{
    background-color: #B3C5D7;
  }
`

const LoginMessage = styled.div`
  font-size: 12px;
  margin-top: 1%;
`

const WordButton = styled.button`
  color: #7392B7;
  font-weight: 700;
  cursor: pointer;

  &:hover{
    color: #B3C5D7;
  }
`

const Title = styled.h1`
  font-size: 20px;
  color: #759EB8;
  font-weight: 700;
`

const SocialMediaLoginBox = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`
const SocialMediaButton = styled.button`

`



export default {
  LoginContainer,
  FormContainer,
  Form,
  IntroContainer,
  Separator,
  HorizontalLine,
  Text,
  PasswordLabel,
  EmailLabel,
  InputField,
  InputContainer,
  Button,
  LoginMessage,
  WordButton,
  Title,
  SocialMediaLoginBox,
  LoginBoxContainer,
  SocialMediaButton
} 
