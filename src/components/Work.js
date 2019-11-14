import React, { useRef } from "react"
import styled from '@emotion/styled'
import Project from "../components/Project"

const WorkWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 5;
  scroll-snap-align: start;

  @media (max-width: 1024px) {
    padding: 12vw;
  }
  @media (max-width: 768px) {
    padding: 8vw;
  }
`
const WorkHeader = styled.h2`
  color: ${props => props.theme.colors.text};
  font-size: calc(4.5rem + 4vw);
  font-weight: 900;
  margin: 5vh 10vw;
  text-align: left;
  @media (max-width: 768px) {
    margin: 5vh 0;
    font-size: 3rem;
  }
  @media (prefers-color-scheme: dark) {
    color:  ${props => props.theme.colors.background};
  }
`
const Header = styled.div`
  transform-origin: 35vh 25vw;
  transform: rotate(-90deg);
  @media (max-width: 768px) {
    transform: rotate(0deg);
  }
`

const WorkScrollArea = styled.div`
  outline: none;
  position: relative;
  width: 100%;
  z-index: 6;
`
const WorkScrollContent = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding: 5vh 0;
`
const WorkBlob = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 80% 60% 52% 72% / 52% 48% 40% 72%;
  z-index: 0;
  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.theme.colors.primary};
    opacity: 0.2;
  }
`
const WorkQuote = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 22vh 10vw;
  color: ${props => props.theme.colors.text};
  @media (prefers-color-scheme: dark) {
    color:  ${props => props.theme.colors.background};
  }
`
const WorkQuoteQuote = styled.h4`
  font-size: 4rem;
  line-height: 5rem;
  font-style: italic;
  font-weight: 300;
  text-align: center;
  opacity: 0.2;

  @media (max-width: 768px) {
    font-size: calc(2rem + 1.25vw);
    line-height: 3rem;
  }
`
const WorkQuoteAttribute = styled.span`
  font-size: 2rem;
  line-height: 4.75rem;
  font-style: bold;
  font-weight: 600;
`
const WorkProjects = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  list-style: none;
  margin-top: -20vh;
`
const ProjectElement = styled.li`
  flex: 0 0 auto;
  :nth-of-type(even) {
    transform: translateY(-15vh);
  }
`

const Work = props => {
  const { data, section, posts } = props
  let heading
  let workquote
  let quoteattribute
  let myRef = useRef()

  data.map(part => (
    section === part.heading && (
      heading = part.heading,
      workquote = part.workquote,
      quoteattribute = part.quoteattribute
      // posts = part.posts
    )
  ))

  return (
    <WorkWrapper id="thoughts" ref={myRef}>
      <WorkScrollArea>
        <WorkScrollContent>
           <WorkHeader
             data-aos="fade-up"
             data-aos-anchor-placement="bottom-bottom"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out">
             <Header>{heading}</Header>
           </WorkHeader>
           <WorkProjects>
             {posts.map(({ node }) => (
                 <ProjectElement key={node.id}>
                  <Project post={node} />
                 </ProjectElement>
               ))}
           </WorkProjects>
        </WorkScrollContent>
      </WorkScrollArea>
      <WorkQuote>
        <WorkQuoteQuote>
          {workquote}
          <WorkQuoteAttribute>{quoteattribute}</WorkQuoteAttribute>
        </WorkQuoteQuote>
      </WorkQuote>
      <WorkBlob />
    </WorkWrapper>
  )

}

export default Work
