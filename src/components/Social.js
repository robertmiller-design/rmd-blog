import React from "react"
import styled from '@emotion/styled'

import Icons from './Icons'

const SocialWrapper = styled.section`
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
    padding: 5vw;
  }
`
const SocialHeader = styled.h2`
  color: ${props => props.theme.colors.text};
  font-size: calc(4rem + 2vw);
  font-weight: 900;
  margin: 5vh 10vw;
  text-align: left;
  @media (prefers-color-scheme: dark) {
    color:  ${props => props.theme.colors.background};
  }
  @media (max-width: 768px) {
    font-size: calc(2rem + 2vw);
  }
`
const SocialNodes = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 10vh 10vw;
  @media (max-width: 768px) {
    width: 85vw;
    margin-left: 0;
    justify-content: space-between;
  }
`
const SocialNodeElement = styled.li`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: 12vw;
  :first-of-type {
    margin-left: 0;
  }
`
const SocialNodeLink = styled.a`
  position: absolute;
  width: 100%;
  min-height: 6rem;
  max-height: 8vmin;
  min-width: 6rem;
  max-width: 8vmin;
  border-radius: 80% 60% 52% 72% / 52% 48% 40% 72%;
  overflow: hidden;
  text-decoration: none;
  outline: none;
  transition: all .3s ease;
  vertical-align: baseline;
  margin: 0;
  padding: 1.75vw;
  font-size: 100%;
  background: transparent;
  outline: none;
  background-color: ${props => props.theme.colors.primary};
  color:  ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.boxShadow.primary};
  cursor: pointer;
  @media (max-width: 768px) {
    min-height: 5rem;
    max-height: 6vmin;
    min-width: 5rem;
    max-width: 6vmin;
    padding: 4vw;
    font-size: 90%;
  }
  :hover {
    transform: scale(1.125);
    background-color: ${props => props.theme.colors.secondary};
    box-shadow: ${props => props.theme.boxShadow.secondary};
    z-index: 9;
    @media (prefers-color-scheme: dark) {
      background-color: ${props => props.theme.colors.tertiary};
    }
  }
  @media (prefers-color-scheme: dark) {
    color:  ${props => props.theme.colors.text};
  }
`
const Social = props => {
  const { data, section } = props
  let heading
  let nodes

  data.map(part => (
    section === part.heading && (
      heading = part.heading,
      nodes = part.socialnodes
    )
  ))
  return (
    <SocialWrapper>
      <SocialHeader
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
        {heading}
      </SocialHeader>
      <SocialNodes>
        {nodes &&
          nodes.map(node => (
            <SocialNodeElement
              key={node.heading}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
             <SocialNodeLink href={`${node.url}`} target='_blank'>
               <Icons
                 icon={node.image}
                 style={{
                   fontSize: 64,
                   color: 'inherit'
                 }}
               />
             </SocialNodeLink>
            </SocialNodeElement>
          )
         )
        }
      </SocialNodes>
    </SocialWrapper>
  )

}

export default Social
