import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import seedColors from './Helper-files/seedColors'
import Palette from './Palette/Palette'
import { generatePalette } from "./Helper-files/colorHelpers"
import PaletteList from './PaletteList/PaletteList'

class App extends Component{

  findPalette = (id) => {
    return seedColors.find(function(palette){
      return palette.id === id
    })
  }

  render() {
    return(
      <div className="App">
        <Switch>
          <Route exact path='/' render={(routeProps) => (<PaletteList palettes={seedColors} {...routeProps}/>)}/>
          <Route exact path="/palette/:id" render={(routeProps) => (<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />)}/>
          <Route exact path="/test" render={() => (<h1>Test Route!</h1>)}/>
        </Switch>
      </div>
    )
  }
}

export default App;