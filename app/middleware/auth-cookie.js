import Cookies from 'universal-cookie'

export default ({ route }) => {
  if (route.name !== "users-id") {
    return
  }

  if (route.params.id === null) {
    return
  }

  //ToDo
  //公開鍵か否かの判定が必要

  console.log(route)
  const cookies = new Cookies()
  cookies.set('pub_key',JSON.stringify(route.params.id))
  console.log(cookies)
}
