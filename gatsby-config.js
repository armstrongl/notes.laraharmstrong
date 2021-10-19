module.exports = {
  siteMetadata: {
    title: `@laraharmstrong's notes`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-andy`,
      options: {
        hideDoubleBrackets: true,
        mdxOtherwiseConfigured: true,
        // rootPath: "content",
        rootNote: "index",
        // notesDirectory: "content",
        // noteTemplate: "./src/gatsby-theme-andy/components/BrainNote.js",
        // additionalNoteTypes: {},
        // linkifyHashtags: true,
        // mappedExternalBrains: {},
        // timerReloadDelay: 0,
        // generateRSS: false,
        // exclude: [],
        // notesFileExtensions: [".md", ".mdx"],



      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [`gatsby-remark-embedder`],
      },
    },
  ],
};
