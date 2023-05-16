const Navbar = () => {

  return (
    <div className="navbar bg-white fixed z-10 shadow-2xl">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Jake Rasmussen</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>Projects</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
  )

}

export default Navbar;