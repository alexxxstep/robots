import React, {Component} from 'react'

import CardList from '../components/CardList'
import ErrorBoundry from '../components/ErrorBoundry'
import {Scroll} from '../components/Scroll'
import {SearchBox} from '../components/SearchBox'

export class App extends Component {
  state = {
    robots: [],
    seachfield: '',
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((users) =>
        this.setState({
          robots: users,
        })
      )
  }

  onSearchChange = (event) => {
    this.setState({
      seachfield: event.target.value,
    })
  }

  render() {
    const {robots, seachfield} = this.state
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(seachfield.toLowerCase())
    })

    if (!robots.length) {
      return <h1>Loading...</h1>
    }

    return (
      <div className="tc">
        <h2 className="f1">RoboFriends</h2>
        <SearchBox searchChange={this.onSearchChange} />

        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}
