import React from "react"
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'
import MyImage from "./MyImage"

const AboutWrapper = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 10vw;
  position: relative;
  scroll-snap-align: start;

  @media (max-width: 1024px) {
    padding: 12vw;
  }
  @media (max-width: 768px) {
    padding: 8vw;
  }
`
const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.space[5]}px;
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
const AboutImage = styled.div`
  display: flex;
  flex-direction: column;
`
const AboutImageBlob = styled.div`
  height: 70vh;
  width: 40vw;
  margin-left: -5vw;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 60% 88% 60% 84% / 100% 84% 152% 80%;
  overflow: hidden;
  transform: rotate(-16deg);
  box-shadow: ${props => props.theme.boxShadow.primary};
  @media (max-width: 1024px) {
    height: 50vh;
    width: 50vw;
    margin-left: -5vw;
  }
  @media (max-width: 768px) {
    height: 50vh;
    width: 90vw;
    margin-left: -5vw;
    margin-top: 5vw;
    margin-bottom: 15vw;
  }
`
const AboutText = styled.div`
  display: flex;
  flex-direction: column;
`
const AboutHeading = styled.h2`
  color: ${props => props.theme.colors.text};
  font-size: calc(4rem + 2vw);
  font-weight: 900;
  text-align: right;
  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: left;
  }
  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.colors.background};
  }
`
const AboutBody = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 300;
  text-align: right;
  @media (max-width: 768px) {
    text-align: left;
  }
  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.colors.background};
  }
`
const AboutBlob = styled.div`
  height: 40vh;
  width: 40vw;
  background-color: ${props => props.theme.colors.tertiary};
  opacity: 0.24;
  border-radius: 80% 24% 40% 24% / 52% 24% 72% 40%;
  position: absolute;
  top: -10vh;
  left: -10vw;
  z-index: 1;
`
const rotateBlob = keyframes`
  10% {
    border-radius: 80% 48% 40% 64% / 132% 84% 132% 60%;
  }

  30% {
    border-radius: 80% 34% 60% 124% / 52% 44% 72% 40%;
  }

  50% {
    border-radius: 20% 44% 130% 74% / 40% 64% 80% 80%;
  }

  70% {
    border-radius: 70% 84% 80% 44% / 120% 84% 60% 60%;
  }

  90% {
    border-radius: 80% 24% 60% 124% / 52% 34% 72% 40%;
  }
`

const About = props => {
  const { data, section } = props
  let heading
  let body

  data.map(part => (
    section === part.heading &&(
      heading = part.heading,
      body = part.copy
    )
  ))

  return (
    <AboutWrapper>
      <AboutContent>
        <AboutImage
          data-aos="fade-up"
          data-aos-offset="-500"
          data-aos-delay="-50"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
          <AboutImageBlob
           css={css`
             animation: ${rotateBlob} 45s ease infinite;
           `}
         >
          <MyImage />
          </AboutImageBlob>
        </AboutImage>
        <AboutText>
          <AboutHeading
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">{heading}</AboutHeading>
          <AboutBody
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out">{body}</AboutBody>
        </AboutText>
      </AboutContent>
     <AboutBlob />
    </AboutWrapper>
  )

}

export default About
