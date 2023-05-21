// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    const {destinationsList} = this.props

    const searchResult = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="destination-container">
          <h1 className="heading">DestinationSearch</h1>
          <div className="search_input_container">
            <input
              type="search"
              onChange={this.onChangeInput}
              placeholder="Search"
              className="search_input"
              value={searchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="image_icon"
            />
          </div>
          <ul>
            <div className="destinations-list">
              {searchResult.map(eachDestination => (
                <DestinationItem
                  key={eachDestination.id}
                  destinationDetails={eachDestination}
                />
              ))}
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
