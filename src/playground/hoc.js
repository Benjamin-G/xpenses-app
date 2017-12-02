import React from 'react'
import ReactDOM from 'react-dom'


const Info = (props) => (
  <div>
    <h2>Info </h2>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdmin = (WrappedComponent) => (props) => (
    <div>
      {props.isAdmin && <p>This is private info</p>}
      <WrappedComponent {...props}/>
    </div>
)

const reqAuth = (WrappedComponent) => (props) => (
  <div>
    {props.isAuth && <WrappedComponent {...props} />}
    <p>this is working</p>
  </div>
)


const AdminInfo = withAdmin(Info)
const AuthInfo = reqAuth(Info)

ReactDOM.render(<AuthInfo isAuth={true} info="esskit" />, document.getElementById("app"))
