const MakeRandomLocation = (randCol: number, randRow: number) => {
  const result = []
  const count = Math.floor(Math.random() * randCol + 1)

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < count; i++) {
    const col = Math.floor(Math.random() * randCol)
    const row = Math.floor(Math.random() * randRow)

    result.push({ row, col })
  }
  return result
}

export { MakeRandomLocation }
