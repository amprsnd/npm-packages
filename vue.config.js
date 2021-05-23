module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/npm-packages/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
