import {Component} from 'react'

import './index.css'
import HistoryItem from '../HistoryItem'

class History extends Component {
  constructor(props) {
    super(props)
    this.state = {searchInput: '', firstList: props.initialHistoryList}
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistoryItem = id => {
    const {firstList} = this.state
    const list = firstList.filter(eachItem => eachItem.id !== id)

    this.setState({firstList: list})
  }

  render() {
    const {searchInput, firstList} = this.state
    console.log(firstList)

    const filteredList = firstList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const listCount = filteredList.length

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
            <div className="empty-container">
              <p className="empty">There is no History to show</p>
            </div>
          ) : (
            <ul className=" container">
              {filteredList.map(eachItem => (
                <HistoryItem
                  key={eachItem.id}
                  eachItem={eachItem}
                  deleteHistoryItem={this.deleteHistoryItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default History
