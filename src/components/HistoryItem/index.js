import './index.css'

const HistoryItem = props => {
  const {eachItem} = props
  const {timeAccessed, logoUrl, title, domainUrl} = eachItem
  return (
    <div className="item">
      <p className="time">{timeAccessed}</p>
    </div>
  )
}

export default HistoryItem
