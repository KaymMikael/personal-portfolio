const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg container-lg">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">
          My Portfolio
        </a>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav justify-content-end flex-grow-1">
            <li className="nav-item">
              <a className="nav-link active text-white" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
