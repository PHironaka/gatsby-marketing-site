import React from 'react';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Newsletter from 'components/newsletter';
import Gallery from 'components/gallery';
import Hero from 'components/hero';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <Layout>
    <Hero items={data.homeJson.hero} />
  
    <Box>
      <Title tag="span" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>


 
    <Gallery items={data.homeJson.gallery} />
    <Newsletter> {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}< /Newsletter>
     </Box>
  </Layout>
);

export const query = graphql`
  query HomepageQuery {
    homeJson {
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
