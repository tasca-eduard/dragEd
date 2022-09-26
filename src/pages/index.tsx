import type { NextPage } from 'next'
import Column from '../components/Column/Column'
import { columnData } from '../utils/data/dummyColumnData'

const Home: NextPage = () => {
  return (
    <div className="main">
      <div className="container">
        <h2>Drag items in the same list</h2>
        <div className="board">
          <Column columnData={columnData} />
        </div>
      </div>
    </div>
  )
}

export default Home
