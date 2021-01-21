import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"

import CategoriesList from "./CategoriesList"
import CategoryShow from "./CategoryShow"
import EventShow from "./EventShow"

const App = props => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/categories" component={CategoriesList} />
        <Route exact path="/categories/:id" component={CategoryShow} />
        <Route exact path="/events/:id" component={EventShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
