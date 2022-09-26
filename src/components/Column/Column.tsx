import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip } from '@fortawesome/free-solid-svg-icons';

interface Card {
  title: string
}

interface Column {
  name: string,
  list: Card[]
}

interface Props {
  columnData: Column
}

const Column = ({
  columnData
}: Props) => {
  const renderList = () => {
    return (
      <ul className="list">
        {columnData.list.map(card => {
          return (
            <li className="item">
              <button className="card-btn drag">
                <span>{card.title}</span>
                <FontAwesomeIcon icon={faGrip} />
              </button>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="column">
      <span className="name">To do</span>
      {renderList()}
      <button className="btn">Add card</button>
    </div>
  )
}

export default Column;