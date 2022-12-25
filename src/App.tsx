import React from 'react'

import Char from './components/Char'
import Header from './components/Header'
import Content from './components/Content'


const App = () =>
  <div className='App'>
    <Header />
    <Content>
      <div className='container'>
        <Char />
      </div>
    </Content>
  </div>


export default App
