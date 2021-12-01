import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from '../pages/About'
import App from '../pages/_app'

const R: React.FC = () => {
  const urlTransform = () => {
    const url = window.location.pathname.replace('/', '')
    let nameUrl = App
    switch (url) {
      case 'about':
        nameUrl = () => <About />
        break
      default:
        return nameUrl
    }
    return nameUrl
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:page" component={urlTransform()} />
      </Switch>
    </BrowserRouter>
  )
}

export default R
