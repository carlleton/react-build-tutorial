import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

// 模块热替换的API
if (module.hot) {
  module.hot.accept('./components/App.js', () => {
    const NextApp = require('./components/App.js').default
    render(NextApp)
  })
}