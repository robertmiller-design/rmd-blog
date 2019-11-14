import React from "react"
import Helmet from "react-helmet"
import { ThemeProvider } from "theme-ui"
import theme from "../utils/theme"
import styled from '@emotion/styled'
import "./layout.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const LayoutFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};

  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.background};
  }
`

export default ({ pageMeta, children }) => (
  <>
    <Helmet>
      <title>{`Rob Miller | ${pageMeta}`}</title>

      {/* The charset, viewport and author meta tags will always have the same value, so we hard code them! */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Rob Miller" />

      {/* The rest we set dynamically with props */}
      <meta name="description" content={pageMeta} />

      {/* We pass an array of keywords, and then we use the Array.join method to convert them to a string where each keyword is separated by a comma */}
      <meta name="keywords" content={pageMeta} />

      <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": " ",
          "address": {
          "@type": "PostalAddress",
          "addressLocality": "Melbourne",
          "addressRegion": "VIC",
          "postalCode":"3011",
          "streetAddress": "987 Happy Avenue"
          },
          "description": "Hi, I am Robert Miller. Dabbling in academia and design in an effort to make the web an exciting place for others.",
          "name": "Robert Miller Design",
          "geo": {
          "@type": "GeoCoordinates",
          "latitude": "37.8136",
          "longitude": "144.9631"
          },
          "sameAs" : ["http://www.facebook.com/your-profile",
          "http://www.twitter.com/designrobmiller"]
        }
        `}</script>
    </Helmet>
    <ThemeProvider theme={theme}>
      {children}
      <LayoutFooter>{`${new Date().getFullYear()} No Rights Whatsoever Reserved`}</LayoutFooter>
    </ThemeProvider>
  </>
)
