import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <>
    
    <nav>
    <h2 className="logo">React Training</h2>
      <ul>
        <li><NavLink className={(navData)=> navData.isActive?"active":""} to="/">Home</NavLink></li>
        <li><NavLink className={(navData)=> navData.isActive?"active":""} to="/about">About</NavLink></li>
        <li><NavLink className={(navData)=> navData.isActive?"active":""} to="/contact">Contact</NavLink></li>
      </ul>
  </nav>

    </>
  )
}

export default Navbar