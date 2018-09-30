import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Module from 'components/press-items';
import Gallery from 'components/hero';


export default ({ data }) => (
  <Layout>
    <Gallery items={data.pressJson.hero} />
  
    <Box>

            <Title tag="span" size="large">
        {data.pressJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>

    <Module items={data.pressJson.gallery} />

    </Box>
  </Layout>
);

export const query = graphql`
  query PressQuery {
    pressJson {
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
