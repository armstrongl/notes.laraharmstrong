const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/larah/repos/blogs/notes.laraharmstrong/.cache/dev-404-page.js"))),
  "component---node-modules-gatsby-theme-andy-src-templates-note-js": hot(preferDefault(require("/home/larah/repos/blogs/notes.laraharmstrong/node_modules/gatsby-theme-andy/src/templates/note.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/larah/repos/blogs/notes.laraharmstrong/src/pages/404.js")))
}

