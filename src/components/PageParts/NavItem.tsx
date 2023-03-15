import Link from "next/link";

const NavItem = ({ text, href, active }) => {
  return (
      <a
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {text}
      </a>
  );
};

export default NavItem;