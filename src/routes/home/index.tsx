import Button from 'components/Button'
import { useMemo, useState } from 'react'
import { cx } from 'styles'
import { MakeRandomLocation } from 'utils'
import styles from './home.module.scss'

const Home = () => {
  const [colCount, SetColCount] = useState(Math.floor(Math.random() * 10 + 1))
  const [rowCount, SetRowCount] = useState(Math.floor(Math.random() * 10 + 1))
  const randLocation = useMemo(() => MakeRandomLocation(colCount, rowCount), [colCount, rowCount])

  const handleResetButton = () => {
    SetColCount(Math.floor(Math.random() * 10 + 1))
    SetRowCount(Math.floor(Math.random() * 10 + 1))
  }

  return (
    <div className={styles.home}>
      <div className={styles.tableContainer}>
        {new Array(rowCount).fill(1).map((row, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`col-${row}-${i}`} className={styles.tableRow}>
            {new Array(colCount).fill(1).map((col, j) => {
              const rowKey = `span-${col}-${j}`
              const curLocation = { row: i, col: j }
              const isCheck =
                randLocation.filter((item) => JSON.stringify(curLocation) === JSON.stringify(item)).length !== 0
              return (
                <div key={rowKey} className={cx(styles.tableCol, { [styles.primary]: isCheck })}>
                  {` `}
                </div>
              )
            })}
          </div>
        ))}
      </div>
      <Button onClick={handleResetButton} primary>
        Reset
      </Button>
    </div>
  )
}
export default Home
