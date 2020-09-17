
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./tods-matchup-format-code.cjs.production.min.js')
} else {
  module.exports = require('./tods-matchup-format-code.cjs.development.js')
}
