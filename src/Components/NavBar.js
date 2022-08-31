import React from "react";
import "../Styles/Navbar.css";

function NavBar(props) {
  const searchKeyword = (ele) => {
    ele.preventDefault();
    let inpt = document.getElementById("search");
    props.setKeyword(inpt.value);
    props.setSearch(true);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <form className="d-flex search-box rounded-pill" role="search">
          <input
            className="form-control rounded-pill me-2"
            type="search"
            id="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-custom-transparent rounded-circle"
            type="submit"
            onClick={searchKeyword}
          >
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            .todayNews
          </a>

          <button type="button" className="btn btn-custom-signin">
            Sign IN
          </button>
          <button
            type="button"
            className="btn btn-custom-subscribe rounded-pill"
          >
            Subscribe Now
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
