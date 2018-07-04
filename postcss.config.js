module.exports = ({ file }) => ({
  plugins: [
    require('postcss-import')({ root: file.dirname }),
    require('postcss-each')(),
    require('postcss-mixins')(),
    require('postcss-preset-env')({
      stage: 0
    })
  ]
})
