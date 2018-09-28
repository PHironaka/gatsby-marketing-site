import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Gallery from 'components/hero';
import Module from 'components/gallery';
import Content from 'components/aboutModule';
import Head from 'components/head';
import Title from 'components/title';

export default ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <Gallery items={data.aboutJson.gallery} />
    <Box>
        <Title tag="span" size="large">
        {data.aboutJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>

    <Content items={data.aboutJson.sectionGallery} />
    <Module items={data.homeJson.gallery} />


    </Box>
  </Layout>
);

export const query = graphql`
  query AboutQuery {
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
      
    }
     aboutJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
     sectionGallery {
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
    }
  }
`;
