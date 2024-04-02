import './index.css'

const UserInfo = props => {
  return (
    <div className="user-profile">
      <img
        alt="profile"
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
      />
      <div className="user-profile">
        <h1>Wade Warren</h1>
        <p>Software devloper at UK</p>
      </div>
    </div>
  )
}
export default UserInfo
