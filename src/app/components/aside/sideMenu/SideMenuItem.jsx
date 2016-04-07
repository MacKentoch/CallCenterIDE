import React    from 'react';
import { Link } from 'react-router';

const SideMenuItem = (props) => {
  return (
    <ul className="treeview-menu">
      <li className="active">
        <Link to={props.linkTo}>
          <i className="fa fa-circle-o"></i>
           {props.title}
        </Link>
      </li>
    </ul>
  );
};

SideMenuItem.propTypes  = {
  title:    React.PropTypes.string.isRequired,
  linkTo:   React.PropTypes.string.isRequired
};

export default SideMenuItem;
