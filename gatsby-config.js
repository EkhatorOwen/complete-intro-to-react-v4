module.exports = {
  siteMetadata: {
    title: `Complete Intro to React v4`
  },
  pathPrefix: "/complete-intro-to-react-v4",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false
            }
          }
        ]
      }
    }
    // {
    //   resolve: "gatsby-plugin-klipse",
    //   options: {
    //     klipseSettings: {
    //       selector_eval_js: ".language-javascript",
    //       selector_eval_html: ".language-html",
    //       codemirror_options_in: {
    //         lineWrapping: true,
    //         lineNumbers: true
    //       },
    //       codemirror_options_out: {
    //         lineWrapping: true,
    //         lineNumbers: true
    //       }
    //     }
    //   }
    // }
  ]
};