import React from "react"
// import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'

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
    padding: 8vw;
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
`
const SocialNodes = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 10vh 10vw;
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
  transition: all .3s;
  vertical-align: baseline;
  margin: 0;
  padding: 1.75vw;
  font-size: 100%;
  background: transparent;
  outline: none;
  background-color: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.boxShadow.primary};
  cursor: pointer;
  :hover {
    transform: scale(1.25);
    background-color: ${props => props.theme.colors.secondary};
    animation: ${props => props.rotateBlob} 45s ease infinite;
    box-shadow: ${props => props.theme.boxShadow.secondary};
    z-index: 9;
  }
  color:  ${props => props.theme.colors.background};
  @media (prefers-color-scheme: dark) {
    color:  ${props => props.theme.colors.text};
  }
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
