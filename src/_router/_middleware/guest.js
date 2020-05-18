const guest = async ({ next, store }) => {
  const auth = localStorage.getItem('_auth') ? await JSON.parse(localStorage.getItem('_auth')) : null
  if(store.getters.AUTH_USER.isAuth || auth?.isAuth) {
    return next({ name: 'home' })
  }

  return next() 
}

export default guest