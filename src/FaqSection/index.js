import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import FaqData from "./faqData";

const BackgroundSvg = () => (
  <SVG data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path
      d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
      opacity=".25"
    ></path>
    <path
      d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
      opacity=".5"
    ></path>
    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
  </SVG>
);

const FaqSection = () => {
  const Data = FaqData;

  return (
    <Wrapper>
      <Container>
        <Title>Frequently asked questions</Title>
        {Data.map((data) => {
          return (
            <Question
              key={data.id}
              question={data.question}
              answer={data.answer}
            />
          );
        })}
      </Container>
      <SVGContainer>
        <BackgroundSvg />
      </SVGContainer>
    </Wrapper>
  );
};

const Question = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <QuestionContainer animate={open ? "open" : "closed"}>
      <QuestionButton onClick={() => setOpen((pv) => !pv)}>
        <QuestionText
          variants={{
            open: { color: "rgba(3, 6, 23, 0)" },
            closed: { color: "rgba(3, 6, 23, 1)" },
          }}
        >
          {question}
        </QuestionText>
        <ChevronIcon
          variants={{
            open: { rotate: "180deg", color: "rgb(124, 58, 237)" },
            closed: { rotate: "0deg", color: "#030617" },
          }}
        >
          <FiChevronDown />
        </ChevronIcon>
      </QuestionButton>
      <AnswerContainer
        initial={false}
        animate={{
          height: open ? "fit-content" : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
      >
        {answer}
      </AnswerContainer>
    </QuestionContainer>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    height: 70vh;
  
  }
`;

const Container = styled.div`
  padding: 4rem;
  max-width: 60%;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem;
    margin: 0;
  }
`;

const SVGContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  background-color: #ff9760;
  height: 50vh;
  z-index: 0;

  @media (max-width: 768px) {
    height: 30vh;
  
  }
`;

const SVG = styled.svg`
  position: relative;
  display: block;
  height: 15rem;

  path {
    fill: #fff;
  }

  @media (max-width: 768px) {
    height: 10rem;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const QuestionContainer = styled(motion.div)`
  border-bottom: 1px solid #cbd5e0;
  margin: 1rem;
`;

const QuestionButton = styled.div`
  padding: 0.8rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  cursor: pointer;
  transition: all 0.3s ease;
`;

const QuestionText = styled(motion.span)`
  font-size: 1.25rem;
  text-align: left;
  background: linear-gradient(to right, #7c3aed, #6366f1);
  /* Edit gradient colors */
  -webkit-background-clip: text;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ChevronIcon = styled(motion.span)`
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const AnswerContainer = styled(motion.div)`
  overflow: hidden;
  color: #4a5568;
`;

export default FaqSection;
