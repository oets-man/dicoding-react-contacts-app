import PropTypes from 'prop-types';
import { FiHome, FiLogOut, FiPlusCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { LocaleConsumer } from '../contexts/LocaleContext';

function Navigation({ logout, name }) {
  return (
    <LocaleConsumer>
      {(state) => {
        return (
          <nav className="navigation">
            <ul>
              <li>
                <button onClick={state.toggleLocale}>
                  {state.locale === 'id' ? 'en' : 'id'}
                </button>
              </li>
              <li>
                <Link to="/">
                  <FiHome />
                </Link>
              </li>
              <li>
                <Link to="/add">
                  <FiPlusCircle />
                </Link>
              </li>
              <li>
                <button onClick={logout}>
                  {name} <FiLogOut />
                </button>
              </li>
            </ul>
          </nav>
        );
      }}
    </LocaleConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export default Navigation;
