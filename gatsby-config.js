module.exports = {
  siteMetadata: {
    title: "João Antônio Bezerra Rodrigues",
    author: "João Antônio Bezerra Rodrigues",
    description: "About me"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'joaorodrigues.dev',
        short_name: 'jaber',
        start_url: '/',
        background_color: '#837E87',
        theme_color: '#000000',
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
