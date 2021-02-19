import Search from "./Search";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a class="navbar-brand logo-img" href="#">
          <img src="/logo.svg" alt="Next" />
        </a>
        <Search />
        <div className="header-cart">
          <ul className="list-inline-group">
            <li className="list-inline-item">
              <a href="#">
                <i class="far fa-heart"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i class="fal fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
