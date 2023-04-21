import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userAction";
import Cart from "./Cart";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();
  //display responsive nav bar
  return (
    <div className="dummyDiv">
      <nav className="navbar navbar-expand-lg p-3 mb-4 navbar-light bg-primary ">
        <a className="navbar-brand text-light" href="/">
          Yati South Indian Cuisine
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (
              <div className="list-inline-item-div">
                <li className="list-inline-item nav-name text-light ">
                  Welcome {currentUser.name}!
                </li>
                {userState.currentUser.isAdmin && <a
                  className="list-inline-item text-light"
                  href="/admin"
                >
                  Admin
                </a>}
                
                <a
                  className="list-inline-item text-light"
                  href="/orders"
                >
                  Orders
                </a>
                <a
                  className="list-inline-item text-light"
                  href="/login"
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  Logout
                </a>
              </div>
            ) : (
              <li className="nav-item text-light ">
                <a className="nav-link text-light " href="/login">
                  Login
                </a>
              </li>
            )}

            {/* display no of products in cart  */}

            {localStorage.getItem("currentUser") ? <Cart /> : <div></div>}
          </ul>
        </div>
      </nav>
    </div>
  );
//   return (
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="#">Navbar</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div className="navbar-nav">
//       <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
//       <a className="nav-item nav-link" href="#">Features</a>
//       <a className="nav-item nav-link" href="#">Pricing</a>
//       <a className="nav-item nav-link disabled" href="#">Disabled</a>
//     </div>
//   </div>
// </nav>
  // )
}
