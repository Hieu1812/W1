import {NavLink} from "@remix-run/react";

export default function MainNav() {
    return (
            <nav id="main-navigation">
      <ul>
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}