const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/tods-matchup-format-code/',

  siteMetadata: {
    title: 'TODS MatchUp Format Code',
    description:
      'parse and stringify methods for working with TODS matchUp Format Codes',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {
          showPlaygroundEditor: false,
          colors: { primary: '#000000' },
        },
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: ['Readme', { name: 'Examples' }],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: false,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          '/Users/posiwid/Explorations/node/CourtHive/devel/MatchUpFormatCode/.docz',
        base: '/tods-matchup-format-code/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '/docs',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'TODS MatchUp Format Code',
        description:
          'parse and stringify methods for working with TODS matchUp Format Codes',
        host: 'localhost',
        port: 3002,
        p: 3000,
        separator: '-',
        paths: {
          root:
            '/Users/posiwid/Explorations/node/CourtHive/devel/MatchUpFormatCode',
          templates:
            '/Users/posiwid/Explorations/node/CourtHive/devel/MatchUpFormatCode/node_modules/docz-core/dist/templates',
          docz:
            '/Users/posiwid/Explorations/node/CourtHive/devel/MatchUpFormatCode/.docz',
          cache:
            '/Users/posiwid/Explorations/node/CourtHive/devel/MatchUpFormatCode/.docz/.cache',
          app:
            '/Users/posiwid/Explorations/node/CourtHive/devel/MatchUpFormatCode/.docz/app',
          appPackageJson:
            '/Users/posiwid/Explorations/node/CourtHive/devel/MatchUpFormatCode/package.json',
          appTsConfig:
            '/Users/posiwid/Explorations/node/CourtHive/devel/MatchUpFormatCode/tsconfig.json',
          gatsbyConfig:
            '/Users/posiwid/Explorations/node/CourtHive/devel/MatchUpFormatCode/gatsby-config.js',
          gatsbyBrowser:
            '/Users/posiwid/Explorations/node/CourtHive/devel/MatchUpFormatCode/gatsby-browser.js',
          gatsbyNode:
            '/Users/posiwid/Explorations/node/CourtHive/devel/MatchUpFormatCode/gatsby-node.js',
          gatsbySSR:
            '/Users/posiwid/Explorations/node/CourtHive/devel/MatchUpFormatCode/gatsby-ssr.js',
          importsJs:
            '/Users/posiwid/Explorations/node/CourtHive/devel/MatchUpFormatCode/.docz/app/imports.js',
          rootJs:
            '/Users/posiwid/Explorations/node/CourtHive/devel/MatchUpFormatCode/.docz/app/root.jsx',
          indexJs:
            '/Users/posiwid/Explorations/node/CourtHive/devel/MatchUpFormatCode/.docz/app/index.jsx',
          indexHtml:
            '/Users/posiwid/Explorations/node/CourtHive/devel/MatchUpFormatCode/.docz/app/index.html',
          db:
            '/Users/posiwid/Explorations/node/CourtHive/devel/MatchUpFormatCode/.docz/app/db.json',
        },
        version: '1.0.6',
        hashRouter: true,
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
