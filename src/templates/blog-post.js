import React from "react"
import styled from '@emotion/styled'
import Layout from "../components/layout"
import Icons from '../components/Icons'
import SEO from "../components/seo"
import { graphql } from "gatsby"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from "gatsby-image"
import "../components/blogpost.css"

const ProjectPopupArticle = styled.div`
  width: 100vw;
  background-color: ${props => props.theme.colors.background};
  transition: all .5s;
  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.theme.colors.text};
  }
`
const ProjectPopupArticleContent = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text};
  width: 100vw;
  padding: 8vh 8vw;
  font-size: 1.4rem;
  transition: color .3s;
  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.colors.background};
  }
`
const ProjectPopupClose = styled(AniLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;
  transition: all .3s;
  cursor: pointer;
  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.colors.background};
  }
  :hover {
    color: ${props => props.theme.colors.secondary};
    @media (prefers-color-scheme: dark) {
      color: ${props => props.theme.colors.tertiary};
    }
  }
`
const ProjectPopupCloseText = styled.span`
  margin-left: 1vw;
  margin-top: .3vh;
`
const ProjectPopupArticleTitle = styled.h2`
  max-width: 75vw;
  margin-top: 4vh;
  margin-bottom: 4vh;
  text-align: center;
  font-size: calc(4rem + 2vw);
  @media (max-width: 768px) {
    max-width: 100vw;
    font-size: calc(2rem + 2vw);
  }
`
const ProjectPopupArticleDate = styled.span`
  text-align: center;
  font-size: calc(.5rem + 1vw);
  margin-bottom: 8vh;
  line-height: 1.5;
  border-bottom: .1rem solid;
`
const ProjectPopupArticleCopy = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  max-width: 75vw;
  margin: auto 0;
`
const BlogBlob = styled.div`
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
const BlogBlobOther = styled.div`
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

export default ({ data, transitionStatus, entry, exit }) => {
  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout
      className={transitionStatus}
      pageMeta={{
        title: "Blog",
        keywords: ["design", "internet", "academia"],
        description: "Hi, I am Robert Miller. Dabbling in academia and design in an effort to make the web an exciting place for others."
      }}>
    <SEO title={post.frontmatter.title} description={post.excerpt} />
    <ProjectPopupArticle>
      <ProjectPopupArticleContent id="blogpost">
      <ProjectPopupClose to="/">
        <Icons
          icon="back"
          style={{
            fontSize: 32,
            color: 'inherit'
          }}
        />
        <ProjectPopupCloseText>Back</ProjectPopupCloseText>
      </ProjectPopupClose>
       <ProjectPopupArticleTitle>{post.frontmatter.title}</ProjectPopupArticleTitle>
       <ProjectPopupArticleDate>{post.frontmatter.date}</ProjectPopupArticleDate>
         <ProjectPopupArticleCopy dangerouslySetInnerHTML={{ __html: post.html }} />
         <Img fluid={featuredImgFluid} />
       </ProjectPopupArticleContent>
     </ProjectPopupArticle>
     <BlogBlob />
     <BlogBlobOther />
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt
    }
  }
`
