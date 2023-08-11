import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ description, lang, title, location }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
      sitePage {
        path
      }
    }
  `);
  const metaDescription = description || siteMetadata.description;

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${siteMetadata.title}`}
        meta={[
          {
            name: 'description',
            content: metaDescription,
          },
          {
            property: 'og:title',
            content: title,
          },
          {
            property: 'og:description',
            content: metaDescription,
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            property: 'og:url',
            content: location.origin + location.pathname,
          },
          {
            name: 'viewport',
            content:
              'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
          },
        ]}
      />
    </>
  );
};

Seo.defaultProps = {
  lang: 'en',
  description: '',
  location: {},
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  location: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object])
  ),
};

export default Seo;
