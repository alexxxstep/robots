import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import CardList from '../components/CardList'
import ErrorBoundry from '../components/ErrorBoundry'
import {Scroll} from '../components/Scroll'
import {SearchBox} from '../components/SearchBox'

import {requestRobots, setSearchField} from '../actions'

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  }
}

const App = (props) => {
  const {
    searchField,
    onSearchChange,
    onRequestRobots,
    robots,
    isPending,
  } = props

  useEffect(() => onRequestRobots(), [onRequestRobots])

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  if (isPending) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="tc">
      <h2 className="f1">RoboFriends</h2>

      <SearchBox searchChange={onSearchChange} />

      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
