import { graphql } from 'gatsby'

export const heroImage = graphql`
    fragment heroImage on File {
        childImageSharp {
            gatsbyImageData(
                formats: [AUTO, AVIF, WEBP]
                layout: FULL_WIDTH
                breakpoints: [360, 1440]
                placeholder: DOMINANT_COLOR
            )
        }
    }
`

export const fadeIn = graphql`
    fragment fadeIn on File {
        childImageSharp {
            gatsbyImageData(
                formats: [AUTO, AVIF, WEBP]
                layout: CONSTRAINED
                breakpoints: [360, 992]
                placeholder: DOMINANT_COLOR
            )
        }
    }
`
