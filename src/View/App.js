import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import HomePage from '../component/HomePage/HomePage'
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Fragment>
    )
  }
}
