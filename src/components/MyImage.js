import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const Image = styled.div`
  width: 110%;
  height: auto;
  margin-top: -4vh;
  margin-left: -2vw;
  transform: rotate(16deg);
  mix-blend-mode: multiply;
  @media (max-width: 1024px) {
    margin-top: -12vw;
  }
  @media (max-width: 768px) {
    margin-top: -10vw;
  }

  @media (prefers-color-scheme: dark) {
  img {
    filter: grayscale(30%);
  }
}
`

const MyImage = props => (
  <StaticQuery
  query={graphql`
    query {
      portraitImage: file(relativePath: { eq: "portrait.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
    render={data => {
      return (
        <Image>
          <Img fluid={data.portraitImage.childImageSharp.fluid} alt="" />
        </Image>
      )
    }}
  />
)

export default MyImage
