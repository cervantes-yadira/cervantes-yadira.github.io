import NavList from "./NavList";
import navLinks from "../assets/navLinks";

export default function Navbar() {
  return (
    <div class="navbar flex flex-btwn mx-lg">
      <div>
        <h2 className="logo">Yadira C.</h2>
      </div>
      <NavList links={navLinks} />
    </div>
  );
}
