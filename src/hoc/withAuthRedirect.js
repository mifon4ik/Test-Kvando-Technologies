import { Redirect } from "react-router-dom"

export const withAuthRedirect = Component => {
  return props => {
    if (props.isAuth) {
      return <Redirect to='/groups' />
    } else {
      return <Component {...props} />
    }
  }
}