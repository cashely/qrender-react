import React from 'react'
import ReactDOM from 'react-dom'

import QRender from './src/index.jsx'

function App(props) {
  return (
    <div>
      <QRender text="1212" background="yellow"/>
    </div>
  )
}
ReactDOM.render(<App/>, document.querySelector('#app'))
