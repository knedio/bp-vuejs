const auth = async ({ next, store }) => {
  const auth = localStorage.getItem('_auth') ? await JSON.parse(localStorage.getItem('_auth')) : null
  if(!auth) {
    return next({ name: 'login' })
  }

  return next() 
}

export default auth