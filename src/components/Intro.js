import React from "react"
import styled from '@emotion/styled'

const IntroWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 4vh 8vw;
  position: relative;
  display: flex;
  scroll-snap-align: start;
  @media (max-width: 1024px) {
    padding: 10vw;
  }

  @media (max-width: 768px) {
    padding: 8vw;
  }
`
const IntroHeader = styled.h1`
  color: ${props => props.theme.colors.text};
  font-size: 6rem;
  font-weight: 900;
  position: relative;
  z-index: 2;
  @media (min-width: 1600px) {
    font-size: calc(6rem + 1.5vw);
  }
  @media (max-width: 1024px) {
    font-size: calc(4rem + 2vw);
  }
  @media (max-width: 768px) {
    font-size: calc(2rem + 2vw);
    line-height: 3.5rem;
  }

  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.colors.background};
  }
`
const IntroName = styled.span`
  position: relative;
  font-weight: bolder;
  transition:all 2s ease;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 1;
  :hover {
     z-index: 2;
     background-color: ${props => props.theme.colors.tertiary};
  }
`
const IntroNameBackground = styled.span`
  position: absolute;
  left: 0;
  width: 110%;
  height: 110%;
  transition: all 2s ease;
  z-index: -2;
`
const IntroBlob = styled.div`
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
const IntroBlobOther = styled.div`
  height: 40vh;
  width: 40vw;
  background-color: ${props => props.theme.colors.primary};
  opacity: 0.20;
  border-radius: 80% 40% 24% 24% / 52% 24% 40% 72%;
  position: absolute;
  bottom: 10vh;
  right: -10vw;
  transform: rotate(-16deg);
  z-index: 1;
`
const Intro = props => {
  const { data, section } = props
  let header

  data.map(part => (
    section === part.heading &&(
      header = part.copy
    )
  ))

  const Term = ({ children }) => (
    <IntroName>
      {children}
      <IntroNameBackground/>
    </IntroName>
  )

  const Paragraph = ({ paragraph, keywords }) => {
    let keyCount = 0
    console.time("Measure paragraph")

    let myregex = keywords.join('\\b|\\b');
    let splits = paragraph.split(new RegExp(`\\b${myregex}\\b`, 'ig'))
    let matches = paragraph.match(new RegExp(`\\b${myregex}\\b`, 'ig'))
    let result = []

    for (let i = 0; i < splits.length; ++i) {
      result.push(splits[i]);
      if (i < splits.length - 1)
        result.push(<Term key={++keyCount}>{matches[i]}</Term>)
    }

    console.timeEnd("Measure paragraph")

    return (
      <p>{result}</p>
    )
  }
  const FormattedText = ({ paragraphs, keywords }) => {
      console.time("Measure")

      const result = paragraphs.map((paragraph, index) =>
        <Paragraph key={index} paragraph={paragraph} keywords={keywords} /> )

      console.timeEnd("Measure")
      return (
        <div>
          {result}
        </div>
      )
  }

  const paragraphs = [header]
  const keywords = ["design", "development", "academia"]

  return (
    <IntroWrapper>
     <IntroHeader>
      <FormattedText paragraphs={paragraphs.slice(0, 1)} keywords={keywords} />
     </IntroHeader>
     <IntroBlob />
     <IntroBlobOther />
    </IntroWrapper>
  )

}

export default Intro
