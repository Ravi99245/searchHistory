import {Component} from 'react'

import './index.css'
import HistoryItem from '../HistoryItem'

class History extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    console.log(searchInput)

    const {initialHistoryList} = this.props
    console.log(initialHistoryList)

    const listCount = initialHistoryList.length
    console.log(listCount)

    const filteredList = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            className="history-logo"
            alt="app logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png "
              className="search"
              alt="search"
            />
            <input
              className="input"
              type="search"
              placeholder="Search History"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <div className="history-container">
          {listCount === 0 ? (
            <div className="container">There is no History to show</div>
          ) : (
            <div className=" container">
              {filteredList.map(eachItem => (
                <HistoryItem key={eachItem.id} eachItem={eachItem} />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default History
