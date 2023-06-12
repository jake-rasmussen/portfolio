const Navbar = () => {
  return (
    <div className="navbar fixed z-10 bg-white shadow-2xl">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">Jake Rasmussen</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
