import { AdresseStyles, NavListStyles } from './NavList.styled';

const { NavLink } = require('react-router-dom');

const NavList = ({ closeMenu }) => {
  const onShowMenu = () => {
    if (closeMenu) {
      closeMenu(false);
    }
  };
  return (
    <>
      <NavListStyles>
        <ul>
          <li>
            <NavLink to="/" onClick={onShowMenu}>
              {' '}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" onClick={onShowMenu}>
              {' '}
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" onClick={onShowMenu}>
              {' '}
              Favorites
            </NavLink>
          </li>
        </ul>
      </NavListStyles>
      <AdresseStyles>
        <ul>
          <li>
            <a href="mailto:car@rent.com">car@rent.com</a>
          </li>
          <li>
            <a href="tel:+380730000000">+38(073)00 00 000</a>
          </li>
        </ul>
      </AdresseStyles>
    </>
  );
};
export default NavList;
