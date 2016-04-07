import React    from 'react';
import { Link } from 'react-router';
import SideMenu from './sideMenu/SideMenu.jsx';

const DASHBOARD_MENU = {
  title:  'Tableau de bord',
  linkTo: '/',
  faIcon: 'fa-dashboard',
  subMenus: [
    {
      title:  'Accueil',
      linkTo: '/',
      faIcon: 'fa-dashboard',
    }
  ]
};

const CONTACTS_MENU = {
  title:  'Contacts',
  linkTo: '/contacts',
  faIcon: 'fa-user',
  subMenus: [
    {
      title:  'Contacts',
      linkTo: '/constacts',
      faIcon: 'fa-user'
    },
    {
      title:  'recherche',
      linkTo: '/rechcontact',
      faIcon: 'fa-search'
    }
  ]
};


export const Aside = () => {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img src="./public/img/avatar5.png" className="img-circle" alt="User Image" />
          </div>
          <div className="pull-left info">
            <p>
              Pierre Paul
            </p>
          </div>
        </div>
        <form action="#" method="get" className="sidebar-form">
          <div className="input-group">
            <input type="text" name="q" className="form-control" placeholder="Rechercher ..." />
                <span className="input-group-btn">
                  <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                  </button>
                </span>
          </div>
        </form>
        <ul className="sidebar-menu">
          <li className="header">
            NAVIGATION PRINCIPALE
          </li>
          {
            <SideMenu
              title={DASHBOARD_MENU.title}
              faIcon={DASHBOARD_MENU.faIcon}
              linkTo={DASHBOARD_MENU.linkTo}
              subMenus={DASHBOARD_MENU.subMenus}
            />
          }
          {
            <SideMenu
              title={CONTACTS_MENU.title}
              faIcon={CONTACTS_MENU.faIcon}
              linkTo={CONTACTS_MENU.linkTo}
              subMenus={CONTACTS_MENU.subMenus}
            />
          }
          <li>
            <Link to="/mailbox">
              <i className="fa fa-envelope"></i>
               <span>
                 Boîte Mail
               </span>
              <small className="label pull-right bg-yellow">12</small>
            </Link>
          </li>
          <li className="header">
            ACCES RAPIDE
          </li>
          <li>
            <Link to="/lastfiche">
              <i className="fa fa-circle-o"></i>
                <span>
                  dernière fiche traîtée
                </span>
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  );
};
