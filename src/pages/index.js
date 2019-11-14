import React from "react"
import styled from '@emotion/styled'
import { graphql } from "gatsby"
import Intro from "../components/Intro"
import About from "../components/About"
import Thoughts from "../components/Work"
import Social from "../components/Social"
import Layout from "../components/layout"

const Wrapper = styled.div`
  width: 100vw;
  background-color: ${props => props.theme.colors.background};
  overflow: hidden;
  scroll-snap-type: y mandatory;

  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.theme.colors.text};
  }
`
export default ({ data }) => (
  <Layout pageMeta={{
      title: "Home",
      keywords: ["design", "internet", "academia"],
      description: "Hi, I am Robert Miller. Dabbling in academia and design in an effort to make the web an exciting place for others."
    }}>
    <Wrapper>
      <Intro section="Intro" data={data.dataJson.sections} />
      <About section="About" data={data.dataJson.sections} />
      <Thoughts section="Thoughts" data={data.dataJson.sections} posts={data.allMarkdownRemark.edges} />
      <Social section="Connect" data={data.dataJson.sections} />
    </Wrapper>
  </Layout>
)

  export const SectionsQuery = graphql`
    query SectionsQuery {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              featuredImage {
                childImageSharp {
                  fluid(duotone: { highlight: "#4ac0ee", shadow: "#00466B" }, maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
      dataJson(sections: {}) {
        sections {
          id
          heading
          copy
          quoteattribute
          workquote
          posts {
            id
            heading
            copy
            image
          }
          socialnodes {
            id
            heading
            copy
            image
            url
          }
        }
      }
    }
  `
