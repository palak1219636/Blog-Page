import React from "react";
import styled from "styled-components";
export default function About({ setAboutUs }) {
  return (
    <AboutDiv>
      <AboutContainer>
        <Cross
          onClick={() => {
            setAboutUs((p) => !p);
          }}
        >
          X
        </Cross>
        <h1>About Us</h1>
        <Para>
          Hello, My Name is Palak Rukhaya. I belong to fatehabad, Haryana.
          <br /> And currently I am Pursuing my B.tech from JMIT, Radaur.
          <br /> And I completed my senior secondary education at daffodils
          public school with an aggregate gpa of 84.8. And I recently completed
          my <br />3 months internship at valyu.ai as Frontend developer Intern.
          Moreover, I am passionate about helping others learn and succeed. I
          believe in teamwork. In addition, I am dynamic because I am able to
          adapt to different kinds of situations.
        </Para>
      </AboutContainer>
    </AboutDiv>
  );
}
const AboutDiv = styled.div`
  position: fixed;
  border: 1px solid #a39f9f;
  width: 100%;
  height: 100%;

  background-color: white;
  z-index: 10000;
  min-height: 100px;
  background-color: #ece8e8;

  @media only screen and (max-width: 700px) {
    text-align: center;
    h1 {
      font-size: 10px;
    }
    overflow: auto;
  }

  h1 {
    text-align: center;
    font-size: 25px;
    padding-top: 10px;
  }
`;
const AboutContainer = styled.div`
  border: 1px solid;
  height: 38rem;
  width: 36rem;
  border-radius: 20px;
  position: relative;
  top: 0px;
  z-index: 10000;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  background: white;
  overflow: auto;
`;
const Cross = styled.button`
  font-size: 20px;
  font-weight: 700;
  background-color: transparent;
  color: #000000;
  border: none;
  float: right;
  padding: 22px;
  margin: 0;
  border-radius: 0px 20px 0px 0px;
  cursor: pointer;
  :hover {
    color: #a1a1a5;
  }
`;
const Para = styled.p`
  text-align: justify;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 0;
  margin: 15px;
  word-spacing: 0.1em;
  line-height: 3em;
  justify-content: center;
`;
