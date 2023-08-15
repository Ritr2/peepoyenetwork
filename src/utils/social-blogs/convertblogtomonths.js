const converblogtomonth = (blog) => {
  const month = blog.split('-')[1]
  const year = blog.split('-')[0]
  switch (month) {
    case '1':
      return `January ${year}`
    case '2':
      return `February ${year}`
    case '3':
      return `March ${year}`
    case '4':
      return `April ${year}`
    case '5':
      return `May ${year}`
    case '6':
      return `June ${year}`
    case '7':
      return `July ${year}`
    case '8':
      return `August ${year}`
    case '9':
      return `September ${year}`
    case '10':
      return `October ${year}`
    case '11':
      return `November ${year}`
    case '12':
      return `December ${year}`
    default:
      return 'Invalid Month'
  }
}

export default converblogtomonth
