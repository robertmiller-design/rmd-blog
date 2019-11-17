import React from "react"
import styled from '@emotion/styled'
import Icons from './Icons'

const ProjectPopupArticle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${props => props.theme.colors.background};
  transition: all .5s;
  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.theme.colors.text};
  }
`
const ProjectPopupArticleContent = styled.div`
  color: ${props => props.theme.colors.text};
  width: 100vw;
  height: 100vh;
  padding: 24vh 8vw 8vh 8vw;
  font-size: 1.4rem;
  transition: color .3s;
  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.colors.background};
  }
`
const ProjectPopupClose = styled.a`
  position: absolute;
  top: 12vh;
  right: 6vw;
  font-size: 1rem;
  transition: all .3s;
  color: ${props => props.theme.colors.background};
  cursor: pointer;
  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.colors.background};
  }
  :hover {
    transform: scale(0.75);
    color: ${props => props.theme.colors.secondary};
  }
`
const ProjectPopupArticleTitle = styled.h2`
  color: ${props => props.theme.colors.text};
  white-space: nowrap;
  font-size: calc(2rem + 2vw);
  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.colors.background};
  }
`
const ProjectPopupArticleCopy = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.colors.background};
  }
`

const ProjectPopup = props => {
  const { post, onClick } = props

  const { heading, copy } = post

  console.log(post)

  return (
      <ProjectPopupArticle data-aos="fade-zoom-in">
        <ProjectPopupClose onClick={onClick}>
          <Icons
            icon="close"
            style={{
              fontSize: 64,
              color: 'inherit'
            }}
          />
        </ProjectPopupClose>
         <ProjectPopupArticleContent>
           <ProjectPopupArticleTitle>{heading}</ProjectPopupArticleTitle>
           <ProjectPopupArticleCopy>{copy}</ProjectPopupArticleCopy>
         </ProjectPopupArticleContent>
      </ProjectPopupArticle>
  )

}

export default ProjectPopup
