// format date to mm.dd.yyyy
export const formatDate = date => {
  const d = new Date(date)
  const month = d.getMonth() + 1
  const day = d.getDate()
  const year = d.getFullYear()
  return `${month}.${day}.${year}`
}
