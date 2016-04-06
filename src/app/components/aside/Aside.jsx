import React from 'react';

export const Aside = () => {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img src="./public/img/avatar5.png" className="img-circle" alt="User Image" />
          </div>
          <div className="pull-left info">
            <p>Pierre Paul</p>
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
          <li className="header">NAVIGATION PRINCIPALE</li>
          <li className="active treeview">
            <a href="#">
              <i className="fa fa-dashboard"></i> <span>Tableau de bord</span> <i className="fa fa-angle-left pull-right"></i>
            </a>
            <ul className="treeview-menu">
              <li className="active"><a href="index.html"><i className="fa fa-circle-o"></i> Accueil</a></li>
            </ul>
          </li>

          <li>
            <a href="pages/mailbox/mailbox.html">
              <i className="fa fa-envelope"></i> <span>Boîte Mail</span>
              <small className="label pull-right bg-yellow">12</small>
            </a>
          </li>
          <li className="header">ACCES RAPIDE</li>
          <li>
            <a href="pages/examples/invoice.html">
              <i className="fa fa-circle-o"></i>
                <span>
                  dernière fiche traîtée
                </span>  
            </a>
          </li>
        </ul>
      </section>
    </aside>
  );
};
