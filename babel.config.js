module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '~',
            rootPathSuffix: 'src/',
          },{
            rootPathPrefix: '_assets',
            rootPathSuffix: 'src/_assets',
          },{
            rootPathPrefix: '_components',
            rootPathSuffix: 'src/_components',
          },{
            rootPathPrefix: '_pages',
            rootPathSuffix: 'src/_pages',
          },{
            rootPathPrefix: '_store',
            rootPathSuffix: 'src/_store',
          },
        ],
      },
    ],
  ],
}
