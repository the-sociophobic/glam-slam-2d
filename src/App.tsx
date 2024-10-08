import React from 'react'

import Div100vh from 'react-div-100vh'

import Char from './units/Char'
import Grid from './units/Grid'
import Background from './units/Background'
import Header from './components/Header'
import Content from './components/Content'
import Score from './components/Score'


const App = () =>
  <Div100vh>
    <div className='App'>
      <Header />
      <Content>
        {/* <Background /> */}
        <div className='Road'>
          <div className='container position-relative h-100'>
            <Grid />
            <Char />
          </div>
        </div>
        <Score />
      </Content>
    </div>
  </Div100vh>


export default App
