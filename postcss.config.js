import postcssPxToRem from 'postcss-pxtorem'

//Получаем Css файл , прогоняем его через плагин postcss-pxtorem . Плагины изменяют код

export default ({env}) => {
  const isProd = env === 'production'
  const plugins = []
  if (isProd) {
    plugins.push(
      postcssPxToRem({
        propList: ['*'],
        mediaQuery: true,
      })
    )
  }
  return {
    plugins,
  }
}