import gql from "graphql-tag";

// Main query to get page-specific content

export const contentQuery = gql`
  query Pages($Page: String) {
    pages: pages(where: { Title: $Page }) {
      title
      description
      pageZone {
        ... on ComponentPagesImages {
          caption
          image {
            url
          }
        }
        ... on ComponentPagesQuote {
          quote
          quoter
        }
        ... on ComponentPagesRichText {
          richText
        }
      }
    }
  }
`
