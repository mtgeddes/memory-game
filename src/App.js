import React, { Component } from "react"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import friends from "./friends.json"
import "./App.css"

class App extends Component {
  // Setting this.state.friends to the friends json array

  state = {
    friends,
    picked: [],
    counter: 0,
    max: 0,
    guessMessage: null
  }

  game = x => {

    const isIt = this.state.picked
    if (isIt.includes(x)) {
      
      const guessMessage = false
      const counter = 0
      const picked = []

      this.setState({ picked })
      this.setState({ counter })
      this.setState({ guessMessage })
      this.shuffleFriends()
    }

    else {
      const guessMessage = true

      this.setState({ guessMessage })

      this.functionExample(x)
      this.shuffleFriends()
    }
  }

  functionExample = x => {
    const counter = this.state.counter + 1
    let max = this.state.max

    if (counter > max) {

      max = counter
      this.setState({ max })
    }
    // execute function
    const picked = this.state.picked
    picked.push(x)

    this.setState({ picked })
    this.setState({ counter })
  }

  shuffleFriends = () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = shuffle(this.state.friends)

    // Set this.state.friends equal to the new friends array
    this.setState({ friends })

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array
    }

  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Nav guessMessage={this.state.guessMessage}counter={this.state.counter} max={this.state.max}></Nav>
        <Header>Friends List {this.state.counter}{this.state.max}</Header>
        <main className='container'> 
          {this.state.friends.map(friend => (
            <Main
              game={this.game}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
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
