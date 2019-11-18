import React, {useState, useEffect } from "react"
import styled from '@emotion/styled'
import Icons from './Icons'
import Project from "./Project"

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
  position: relative;
  color: ${props => props.theme.colors.text};
  font-size: calc(4.5rem + 4vw);
  font-weight: 900;
  text-shadow: 0px 0px 8px ${props => props.theme.colors.text};
  margin: 5vh 10vw;
  text-align: left;
  z-index: 11;
  @media (max-width: 768px) {
    margin: 5vh 0;
    font-size: calc(2rem + 2vw);
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
  @media (max-width: 1024px) {
    transform-origin: 25vh 35vw;
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
const WorkScrollButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  z-index: 12;
  padding: 5vh 5vw;
  margin-top: -5vh;
`
const WorkScrollNext = styled.button`
  display: flex;
  background-color: transparent;
  border: 0;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;
  transition: all .3s ease;
  cursor: pointer;
  opacity: 1;
  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.colors.background};
  }
  :hover {
    color: ${props => props.theme.colors.secondary};
    @media (prefers-color-scheme: dark) {
      color: ${props => props.theme.colors.tertiary};
    }
  }
  :disabled {
    opacity: 0.5;
  }
  :focus {
    outline: 0;
  }
`
const WorkScrollNextText = styled.span`
  margin-left: 1vw;
  margin-right: 1vw;
  margin-top: .3vh;
`
const WorkBlob = styled.div`
  position: absolute;
  top: 0;
  right: -50vw;
  bottom: -10vh;
  left: -50vw;
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
    line-height: 2.25rem;
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
  position: relative;
  align-items: center;
  height: 100%;
  list-style: none;
  margin-top: -20vh;
  transition: all .8s ease;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`
const ProjectElement = styled.li`
  flex: 0 0 auto;
  :nth-of-type(even) {
    transform: translateY(-15vh);
  }
  @media (min-width: 1600px) {
    transform: translateY(5vh);
  }
`

const Work = props => {
  const { data, section, posts } = props
  let heading
  let workquote
  let quoteattribute

  const [width, setWidth] = useState(window.innerWidth)
  let isMobile = width < 768
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize, 250)
    return () => window.removeEventListener('resize', handleResize, 250)
  })

  const [ currentPost, setCurrentPost ] = useState(1)
  const newSlide = (isMobile) ? 140 : 70
  const [ slideEl, setSlideEl ] = useState(-newSlide)
  const postsSlider = document.getElementById('posts')
  const countOfPosts = posts.length

  const handleClick = direction => {
    let prevSlide = slideEl
    if (direction === 'next') {
      if (currentPost === countOfPosts) return
      setSlideEl(prevSlide + newSlide)
      setTimeout(() => {
        setCurrentPost(prevCount => prevCount + 1)
        postsSlider.style.transform = `translateX(${slideEl}%)`
      }, 300)
    } else {
      if (currentPost === 1) return
      setSlideEl(prevSlide - newSlide)
      setTimeout(() => {
        setCurrentPost(prevCount => prevCount - 1)
        postsSlider.style.transform = `translateX(${slideEl}%)`
      }, 300)
    }
  }

  data.map(part => (
    section === part.heading && (
      heading = part.heading,
      workquote = part.workquote,
      quoteattribute = part.quoteattribute
    )
  ))
  const winScroll = window.pageYOffset
  const [thePosition, setThePosition] = useState(0)

  function onClick(event, winScroll) {
    setThePosition(winScroll)
  }

  console.log(winScroll)

  return (
    <WorkWrapper id="thoughts">
      <WorkScrollArea>
        <WorkScrollContent>
           <WorkHeader
             data-aos="fade-up"
             data-aos-anchor-placement="bottom-bottom"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out">
             <Header>{heading}</Header>
           </WorkHeader>
           <WorkProjects id="posts">
             {posts.map(({ node }) => (
                 <ProjectElement id="post" key={node.id} onClick={onClick}>
                  <Project post={node} thePosition={winScroll} />
                 </ProjectElement>
               ))}
           </WorkProjects>
        </WorkScrollContent>
      </WorkScrollArea>
      <WorkScrollButtons>
        <WorkScrollNext id="prev" aria-label='previous' onClick={() => handleClick('previous')} disabled={currentPost === 1}>
          <Icons
            icon="back"
            style={{
              fontSize: 32,
              paddingRight: 8,
              color: 'inherit'
            }}
          />
          <WorkScrollNextText>Previous</WorkScrollNextText>
        </WorkScrollNext>
        <WorkScrollNext id="next" aria-label='next' onClick={() => handleClick('next')} disabled={currentPost === countOfPosts}>
          <WorkScrollNextText>Next</WorkScrollNextText>
          <Icons
            icon="back"
            style={{
              fontSize: 32,
              transform: 'rotate(180deg)',
              paddingLeft: 8,
              color: 'inherit'
            }}
          />
        </WorkScrollNext>
      </WorkScrollButtons>
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
