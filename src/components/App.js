import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Exercices from './Exercices'

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercices />
        <Footer />
      </Fragment>
    )
  }
}
