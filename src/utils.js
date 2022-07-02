export const getData = () => {
  const check = localStorage.getItem('list')
  if (check) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}
