
/**
 * We can access environment variables here via process.env.API_NAME_OR_KEY
 * This way, we can keep sensitive data outside of the commit history.
 */
// console.log(process.env.API_KEY);

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
  ],
};
