module.exports = {
  siteMetadata: {
    title: 'To-do List Web App',
    description: "Who's up for a simple CRUD web app?",
    author: 'Cheng Mun Mun',
    siteUrl: 'https://geeknabe.com',
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-sharp',
    },
    {
      resolve: 'gatsby-plugin-sharp',
    },
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rules: [
          {
            test: /\.svg$/,
            include: /assets\/.*/,
          },
        ],
      },
    },
  ],
};
