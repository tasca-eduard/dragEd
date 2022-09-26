import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';

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
  const dragItem = useRef<number>();
  const dragOverItem = useRef<number>();

  const [ cardList, setCardList ] = useState(columnData.list);

  const dragStart = (e: React.DragEvent<HTMLButtonElement>, position: number) => {
    dragItem.current = position;
    e.currentTarget.classList.add("dragging")
  };
 
  const dragEnter = (e: React.DragEvent<HTMLButtonElement>, position: number) => {
    dragOverItem.current = position;
  };
 
  const drag = (e: React.DragEvent<HTMLButtonElement>) => {
    console.log("dragging")
  }

  const drop = (e: React.DragEvent<HTMLButtonElement>) => {
    const tempCardList = [...cardList];
    let dragIndex = Number(dragItem.current);
    let newDragIndex = Number(dragOverItem.current);

    const dragItemContent = tempCardList[dragIndex];
    tempCardList.splice(dragIndex, 1);
    tempCardList.splice(newDragIndex, 0, dragItemContent);
    dragIndex = 0;
    newDragIndex = 0;
    
    setCardList(tempCardList);
    e.currentTarget.classList.remove("dragging")
  };

  const renderList = () => {
    return (
      <ul className="list">
        {cardList.map((card, index) => {
          return (
            <li 
              key={index}
              className="item"
            >
              <button 
                className="btn-grip"
                draggable
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDrag={drag}
                onDragEnd={drop}
              >
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