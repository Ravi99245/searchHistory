import './index.css'

const HistoryItem = props => {
  const {eachItem, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  const deleteItem = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="item">
      <p>{timeAccessed}</p>
      <div className="title-container">
        <div className="title">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <p className="title">{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
        <button
          className="delete-icon"
          data-testid="delete"
          onClick={deleteItem}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
