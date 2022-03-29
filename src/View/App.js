import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '../component/HomePage/HomePage'
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Fragment>
    )
  }
}
