import React from 'react';

export const Header = () => {  
  return (
    <header className="main-header">
      <a href="#" className="logo">
        <span className="logo-mini"><b>CC</b></span>
        <span className="logo-lg"><b>CallCenter</b>IDE</span>
      </a>
      <nav className="navbar navbar-static-top" style={{backgroundColor:'#333333 !important'}}>
        <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span className="sr-only">Toggle navigation</span>
        </a>
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="dropdown messages-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-envelope-o"></i>
                <span className="label label-success">4</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 4 messages</li>
                <li>
                  <ul className="menu">
                    <li>
                      <a href="#">
                        <h4>
                          Client1
                          <small><i className="fa fa-clock-o"></i> 5 mins</small>
                        </h4>
                        <p>Pas reçu ma carte?</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h4>
                          Client2
                          <small><i className="fa fa-clock-o"></i> 2 hours</small>
                        </h4>
                        <p>Comment faire pour...</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h4>
                          Client4
                          <small><i className="fa fa-clock-o"></i> Today</small>
                        </h4>
                        <p>Perdu mon nuéro...</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h4>
                          Client5
                          <small><i className="fa fa-clock-o"></i> Yesterday</small>
                        </h4>
                        <p>Autre question</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h4>
                          Autre
                          <small><i className="fa fa-clock-o"></i> 2 days</small>
                        </h4>
                        <p>Autre exemple</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer"><a href="#">Voir tous les messages</a></li>
              </ul>
            </li>
            <li className="dropdown notifications-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-bell-o"></i>
                <span className="label label-warning">10</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">Vous avez 10 notifications</li>
                <li>
                  <ul className="menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-users text-aqua"></i>
                        Revoir fiche N
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-warning text-yellow"></i>
                        notification2
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-users text-red"></i>
                        Nouvelles cartes a proposer
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer"><a href="#">Tout afficher</a></li>
              </ul>
            </li>
            <li className="dropdown user user-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img src="./public/img/avatar5.png" className="user-image" alt="User Image" />
                <span className="hidden-xs">Pierre Paul</span>
              </a>
              <ul className="dropdown-menu">
                <li className="user-header">
                  <img src="./public/img/avatar5.png" className="img-circle" alt="User Image" />
                  <p>
                    <small>Service TEST</small>
                  </p>
                </li>
                <li className="user-footer">
                  <div className="pull-left">
                    <a href="#" className="btn btn-default btn-flat">Mon profile</a>
                  </div>
                  <div className="pull-right">
                    <a href="#" className="btn btn-default btn-flat">Déconnexion</a>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
