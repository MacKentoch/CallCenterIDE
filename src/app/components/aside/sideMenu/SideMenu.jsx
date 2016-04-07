import React          from 'react';
import { Link }       from 'react-router';
import SideMenuItem   from './SideMenuItem.jsx';

const SideMenu = (props) => {
  return (
    <li className={`treeview ${props.isActive ? 'active' : ''}`}>
      <Link to={props.linkTo}>
        <i className={`fa ${props.faIcon}`}></i>
          <span>
            {props.title}
          </span>
          <i className="fa fa-angle-left pull-right"></i>
      </Link>
      {
        props.subMenus.map(
          (menuItem, index) => {
            return (
              <SideMenuItem
                key={index}
                title={menuItem.title}
                faIcon={menuItem.faIcon}
                linkTo={menuItem.linkTo}
              />
            );
          })
      }
    </li>
  );
};

SideMenu.propTypes = {
  title:    React.PropTypes.string.isRequired,
  linkTo:   React.PropTypes.string.isRequired,
  faIcon:   React.PropTypes.string,
  isActive: React.PropTypes.bool,
  subMenus: React.PropTypes.arrayOf(React.PropTypes.shape({
    title:    React.PropTypes.string.isRequired,
    linkTo:   React.PropTypes.string.isRequired,
    faIcon:   React.PropTypes.string.isRequired
  }))
};

SideMenu.defaultProps = {
  faIcon:   '',
  isActive: true
};

export default SideMenu;
