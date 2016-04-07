import React          from 'react';
import { Link }       from 'react-router';
import SideMenuItem   from './SideMenuItem.jsx';

const SideMenu = (props) => {
  const icon = `fa ${props.faIcon}`;
  return (
    <li className="active treeview">
      <Link to={props.linkTo}>
        <i className={icon}></i>
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
                linkTo={menuItem.linkTo}
              />
            );
          })
      }
    </li>
  );
};

SideMenu.propTypes  ={
  title:    React.PropTypes.string.isRequired,
  linkTo:   React.PropTypes.string.isRequired,
  faIcon:   React.PropTypes.string,
  subMenus: React.PropTypes.arrayOf(React.PropTypes.shape({
    title:    React.PropTypes.string.isRequired,
    linkTo:   React.PropTypes.string.isRequired
  }))
};

SideMenu.defaultProps = {
  faIcon: ''
};

export default SideMenu;
