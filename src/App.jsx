
import styled from 'styled-components'
import './App.css'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from 'react';


function App() {

  const [showPassword, setShowPassword] = useState();
  console.log(showPassword)

  const ParentDiv = styled.div`
  max-width: 1280px;
  margin: 100px auto;

  padding: 10px;
  @media (min-width: 1024px) {
    display: flex;
    justify-items: center;
    border: 2px solid #1575a7;
    gap: 60px;
  }
`

  const InnerDiv1 = styled.div`
  width: 100%;
  padding: 20px;
  @media (min-width: 1024px) {
    width: 40%;
  }
   
`
  const Img = styled.img`
  width: 100%;
`
  // right Side
  const InnerDiv2 = styled.div`
  width: 100%;
  margin: auto 10px;
  @media (min-width: 1024px) {
    width: 60%;
  }
   
`
  const FormDetails = styled.div`
  width: 90%;
  margin: 0 auto;
`

  const Text = styled.h3`
color: #04072F;
font-size: 48px;
text-align: center;
`
  const InputDiv = styled.div`
  margin-top: 20px;
  position: relative;
`
  const Label = styled.label`
  font-weight: bold;
`

  const Input1 = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 3px;
  margin-top: 5px;
`

  const CheckboxPassword = styled.div`
  margin-top: 2px;
    display: flex;
    justify-content: space-between;
`;

  const CheckBoxDiv = styled.div`
  display: flex;
  align-items: center;
`;

  const CheckBox = styled.input`
margin-right: 5px;
`;

  const ChangePassword = styled.p`
color: #f89c41;
cursor: pointer;
`;

  const TermsAndConditionDiv = styled.div`
    display: flex;
    align-items: center;
  
`;
  const Agree = styled.span`
    color: black;
  `;
  const TermsConditionsLabel = styled.label`
color: #f89c41;
text-decoration: underline;
cursor: pointer;
`;

  const ButtonDiv = styled.div`
display: flex;
justify-content: center;
`
  const Button = styled.button`
  background-color: 
  #1575A7;
  color: #FFFFFF;
  border-radius: 3px;
  width: 60%;
  padding: 10px;
  margin-top: 30px;
  border: none;
  cursor:pointer;
`

  const SignupDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

  const SignupMessage = styled.p`
font-weight: bold;
`
  const SignupText = styled.p`
font-weight: bold;
color: #f89c41;
cursor: pointer;
text-decoration: underline;
`
  const IconDiv = styled.div`
position: absolute;
right: 0px;
bottom: 2.5px;
cursor: pointer;
`

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }



  return (
    <>

      <ParentDiv>
        {/* left side */}
        <InnerDiv1>
          <Img src="https://i.ibb.co/Tvws9QX/undraw-authentication-re-svpt-1.png" alt="" />
        </InnerDiv1>

        {/* right side */}
        <InnerDiv2>
          <FormDetails>
            <Text>Login</Text>
            {/* input id */}
            <InputDiv>
              <Label >Login ID:</Label>
              <Input1 type="text" name="email" placeholder="Enter Login Id" required />
            </InputDiv>
            {/* input password */}
            <InputDiv>
              <Label >Password:</Label>
              <Input1 type="password" name="" id="" placeholder='Password' />
              <IconDiv onClick={handleShowPassword}>
                {showPassword ? <AiOutlineEye /> : <  AiOutlineEyeInvisible />}
              </IconDiv>
            </InputDiv>
            {/* check password */}
            <CheckboxPassword>
              <CheckBoxDiv>
                <CheckBox type="checkbox" name="" id="" />
                <Label htmlFor="rememberMe">Remember Me</Label>
              </CheckBoxDiv>
              <ChangePassword>Change Password</ChangePassword>
            </CheckboxPassword>
            {/* Terms and Condition */}
            <TermsAndConditionDiv>
              <CheckBox type="checkbox" name="" id="" />
              <Agree >Agree to</Agree>
              <TermsConditionsLabel>
                Terms and Conditions
              </TermsConditionsLabel>
            </TermsAndConditionDiv>
            {/* Login Button */}
            <ButtonDiv>
              <Button>Login</Button>
            </ButtonDiv>
            {/* SignUp */}
            <SignupDiv>
              <SignupMessage>Don't have any account?</SignupMessage>
              <SignupText>Register Here</SignupText>
            </SignupDiv>
          </FormDetails>
        </InnerDiv2>
      </ParentDiv>

    </>
  )
}

export default App
