import React, { useState } from "react"
import styled from '@emotion/styled'
import MyImage from "./MyImage"
import ProjectPopup from "./ProjectPopup"
import { Link, graphql } from "gatsby"
import TransitionLink, { TransitionPortal, TransitionState } from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from "gatsby-image/withIEPolyfill"

const ProjectArticle = styled.article`
  position: relative;
  z-index: 9;
  width: 100%;
  min-width: 30rem;
  max-width: 55vmin;
  margin-left: 30vw;
  background-color: ${props => props.theme.colors.background};
  border-radius: 80% 60% 52% 72% / 52% 48% 40% 72%;
  box-shadow: ${props => props.theme.boxShadow.primary};
  cursor: pointer;
  transition: all .3s;

  @media (max-width: 1024px) {
    padding: 12vw;
  }
  @media (max-width: 768px) {
    padding: 8vw;
  }
  :hover {
    box-shadow: ${props => props.theme.boxShadow.secondary};
    transform: scale(1.125);
  }
  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.theme.colors.text};
  }
`
const ProjectArticleLink = styled(AniLink)`
  text-decoration: none;
  outline: none;
  transition: all .3s;
  vertical-align: baseline;
  margin: 0;
  padding: 0;
  font-size: 100%;
  color: inherit;
  background: transparent;
  outline: none;
  :hover {
    transform: scale(1.25);
    box-shadow: ${props => props.theme.boxShadow.secondary};
    z-index: 9;
  }
`

const ProjectArticleFig = styled.figure`
  position: relative;
  width: 100%;
  min-height: 30rem;
  min-width: 30rem;
  max-width: 55vmin;
  border-radius: 80% 60% 52% 72% / 52% 48% 40% 72%;
  overflow: hidden;
`
const ProjectArticleImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 30rem;
  object-fit: cover;
  object-position: center;
`

const ProjectArticleContent = styled.div`
  color: ${props => props.theme.colors.text};
  position: absolute;
  bottom: 3.6rem;
  left: 0;
  width: 100%;
  font-size: 1.4rem;
  transition: color .3s;
  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.colors.background};
  }
`
const ProjectArticleTitle = styled.h2`
  color: ${props => props.theme.colors.text};
  margin-left: -10%;
  font-size: calc(2rem + 2vw);
  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.colors.background};
  }
`
const ProjectArticleDate = styled.p`
  color: ${props => props.theme.colors.text};
  margin-left: -10%;
  margin-bottom: 0.5rem;
  font-size: calc(.75rem + 1vw);
  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.colors.background};
  }
`
const ProjectArticleCTA = styled.div`
  display: block;
  font-size: 1rem;
  margin-top: 2rem;
  margin-left: -10%;
  line-height: 1.5;
`
const ProjectArticleBtnInline = styled.span`
  display: inline-block;
  line-height: 1.5;
  border-bottom: .1rem solid;
`
const Project = props => {
  const { post, myRef } = props

  return (
      <ProjectArticle>
          <ProjectArticleLink
            aria-controls={post.frontmatter.title}
            to={post.fields.slug}
            paintDrip
            hex="#00466B"
            duration={1}
            exit={{ length: 0.5 }}
            entry={{ delay: 0.5 }}
          >
          <ProjectArticleFig>
            <ProjectArticleImg
              fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={post.frontmatter.title}
            />
          </ProjectArticleFig>
           <ProjectArticleContent>
             <ProjectArticleDate>{post.frontmatter.date}</ProjectArticleDate>
             <ProjectArticleTitle>{post.frontmatter.title}</ProjectArticleTitle>
             <ProjectArticleCTA>
              <ProjectArticleBtnInline>Read more</ProjectArticleBtnInline>
             </ProjectArticleCTA>
           </ProjectArticleContent>
          </ProjectArticleLink>
      </ProjectArticle>
  )

}

export default Project
