import React, { Component } from "react"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import planets from "./planets.json"
import "./App.css"

class App extends Component {


  state = {
    planets,
    picked: [],
    counter: 0,
    max: 0,
    guessMessage: null
  }

  // Is called when clicked on pictures and run through the game.
  game = x => {

    const isIt = this.state.picked
    // Checks if id of pick is in already picked array...
    if (isIt.includes(x)) {
      
      const guessMessage = false
      const counter = 0
      const picked = []

      this.setState({ picked })
      this.setState({ counter })
      this.setState({ guessMessage })
      this.shuffelPlanets()
    }

    //...if not shuffles and pushes id of pick to array.
    else {
      const guessMessage = true

      this.setState({ guessMessage })

      this.score(x)
      this.shuffelPlanets()
    }
  }

  // Keeps track of the scores.
  score = x => {
    const counter = this.state.counter + 1
    let max = this.state.max

    if (counter > max) {

      max = counter
      this.setState({ max })
    }

    const picked = this.state.picked
    picked.push(x)

    this.setState({ picked })
    this.setState({ counter })
  }

  // Shuffels the planets.
  shuffelPlanets = () => {
    const planets = shuffle(this.state.planets)

    this.setState({ planets })

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array
    }
  }



  render() {
    return (
      <div>
        <Nav guessMessage={this.state.guessMessage}counter={this.state.counter} max={this.state.max}></Nav>
        <Header>Planets List {this.state.counter}{this.state.max}</Header>
        <main className='container'> 
          {this.state.planets.map(planet => (
            <Main
              game={this.game}
              id={planet.id}
              key={planet.id}
              name={planet.name}
              image={planet.image}
              guessMessage={this.state.guessMessage}
            />
          ))}
          <img src="./assets/images/sky.jpg" alt="background" className="background"/>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
