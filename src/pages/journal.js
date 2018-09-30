import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Module from 'components/gallery';
import Gallery from 'components/hero';


export default ({ data }) => (
  <Layout>
    <Gallery items={data.journalJson.hero} />
  
    <Box>

            <Title tag="span" size="large">
        {data.journalJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>

    <Module items={data.journalJson.gallery} />

    </Box>
  </Layout>
);

export const query = graphql`
  query JournalQuery {
    journalJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      hero {
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
