const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Shop By Brand
            </a>
          </li>
          <li class="nav-item top-bar-center">
            <a class="nav-link" href="#">
              Track Your Order
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Register Or Sign in
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
