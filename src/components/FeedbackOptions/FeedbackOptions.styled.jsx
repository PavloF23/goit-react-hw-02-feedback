import styled from '@emotion/styled';

const ButtonContainer = styled.div`
width: 550px;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
  }
`;

const Button = styled.button`
position: relative;
width: 150px;
color: #8d75e2;
cursor: pointer;
padding: 15px 20px;
border: 3px solid #8d75e2;
border-radius: 10px;
background: none;

font-family: "Raleway", sans-serif;
font-size: 26px;
font-weight: 900;

-webkit-box-shadow: inset 0px 0px 10px 0px #8d75e2,
  0px 0px 10px 0px #8d75e2;
-moz-box-shadow: inset 0px 0px 10px 0px #8d75e2,
  0px 0px 10px 0px #8d75e2;
box-shadow: inset 0px 0px 10px 0px #8d75e2,
  0px 0px 10px 0px #8d75e2;
animation: border-flicker 2s linear infinite;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
    background-color: #8d75e2;
    box-shadow: 0 0 3px 0.3px #8d75e2;
    transition: opacity 100ms linear;
  }
  
  &:hover{
    color: #f0f0f0;
    text-shadow: none;
    animation: none;
  }
  
  &:hover:after{
    opacity: 1;
  }

  @keyframes border-flicker{
    0%{
      opacity: 0.1;
    }
    2%{
      opacity: 1;
    }
    4%{
      opacity: 0.1;
    }
  
    8%{
      opacity: 1;
    }
    70%{
      opacity: 0.7;
    }
    100%{
      opacity: 1;
    }
  } 
`;

export { ButtonContainer, Button };