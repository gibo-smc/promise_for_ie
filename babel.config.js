module.exports = (api) => {

  // 設定関数をトランスパイルの度に実行させない
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '11'
        },
        useBuiltIns: 'entry',
        corejs: 2
      }
    ]
  ]

  return {
    presets
  }
}