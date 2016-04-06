import React      from 'react';
import { Link }   from 'react-router';
import {
  ViewHeader,
  ViewFooter
}         from '../../components';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="content-wrapper">
          <ViewHeader />
          <section className="content">
            <div className="row">
              <div className="col-md-8">
                <div className="box box-info">
                  <div className="box-header with-border">
                    <h3 className="box-title">Fiches récemment traitées</h3>
                    <div className="box-tools pull-right">
                      <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                      </button>
                      <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                    </div>
                  </div>
                  <div className="box-body">
                    <div className="table-responsive">
                      <table className="table no-margin">
                        <thead>
                        <tr>
                          <th>ID</th>
                          <th>Nom Prénom</th>
                          <th>Etat</th>
                          <th>Commentaire</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              9842
                            </a>
                          </td>
                          <td>
                            Nom Prénom 1
                          </td>
                          <td>
                            <span className="label label-success">
                            Terminé
                            </span>
                          </td>
                          <td>
                            <div className="sparkbar" data-color="#00a65a" data-height="20">
                              demande traitée.
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#">
                              1848
                            </a>
                          </td>
                          <td>
                            Nom Prénom 2
                          </td>
                          <td>
                            <span className="label label-warning">
                              En cours
                            </span>
                          </td>
                          <td>
                            <div className="sparkbar" data-color="#f39c12" data-height="20">
                              Manque information...
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#">
                            7429
                            </a>
                          </td>
                          <td>
                            Entreprise 1
                          </td>
                          <td>
                            <span className="label label-danger">
                            Bloqué
                            </span>
                          </td>
                          <td>
                            <div className="sparkbar" data-color="#f56954" data-height="20">
                              Non reçu ....
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#">
                              9842
                            </a>
                          </td>
                          <td>
                            Nom Prénom 3
                          </td>
                          <td>
                            <span className="label label-success">
                            Terminé
                            </span>
                          </td>
                          <td>
                            <div className="sparkbar" data-color="#00a65a" data-height="20">
                              demande traitée.
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#">
                              1848
                            </a>
                          </td>
                          <td>
                            Nom Prénom 2
                          </td>
                          <td>
                            <span className="label label-warning">
                              En cours
                            </span>
                          </td>
                          <td>
                            <div className="sparkbar" data-color="#f39c12" data-height="20">
                              Manque information...
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#">
                              1848
                            </a>
                          </td>
                          <td>
                            Nom Prénom 2
                          </td>
                          <td>
                            <span className="label label-warning">
                              En cours
                            </span>
                          </td>
                          <td>
                            <div className="sparkbar" data-color="#f39c12" data-height="20">
                              Manque information...
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#">
                              1848
                            </a>
                          </td>
                          <td>
                            Nom Prénom 2
                          </td>
                          <td>
                            <span className="label label-warning">
                              En cours
                            </span>
                          </td>
                          <td>
                            <div className="sparkbar" data-color="#f39c12" data-height="20">
                              Manque information...
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <a href="#">
                              1848
                            </a>
                          </td>
                          <td>
                            Nom Prénom 2
                          </td>
                          <td>
                            <span className="label label-warning">
                              En cours
                            </span>
                          </td>
                          <td>
                            <div className="sparkbar" data-color="#f39c12" data-height="20">
                              Manque information...
                            </div>
                          </td>
                        </tr>


                        <tr>
                          <td>
                            <a href="#">
                              1848
                            </a>
                          </td>
                          <td>
                            Nom Prénom 2
                          </td>
                          <td>
                            <span className="label label-warning">
                              En cours
                            </span>
                          </td>
                          <td>
                            <div className="sparkbar" data-color="#f39c12" data-height="20">
                              Manque information...
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <a href="#">
                              1848
                            </a>
                          </td>
                          <td>
                            Nom Prénom 2
                          </td>
                          <td>
                            <span className="label label-warning">
                              En cours
                            </span>
                          </td>
                          <td>
                            <div className="sparkbar" data-color="#f39c12" data-height="20">
                              Manque information...
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <a href="#">
                              1848
                            </a>
                          </td>
                          <td>
                            Nom Prénom 2
                          </td>
                          <td>
                            <span className="label label-warning">
                              En cours
                            </span>
                          </td>
                          <td>
                            <div className="sparkbar" data-color="#f39c12" data-height="20">
                              Manque information...
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="box-footer clearfix">
                    <a href="#" className="btn btn-sm btn-info btn-flat pull-right">Historique</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-box bg-aqua">
                  <span className="info-box-icon"><i className="ion-ios-chatbubble-outline"></i></span>

                  <div className="info-box-content">
                    <span className="info-box-text">Fiches traitées</span>
                    <span className="info-box-number">163,921</span>

                    <div className="progress">
                      <div className="progress-bar" style={{width: '40%'}}></div>
                    </div>
                        <span className="progress-description">
                          40% de plus en 30 jours
                        </span>
                  </div>
                </div>
                <div className="box box-primary">
                  <div className="box-header with-border">
                    <h3 className="box-title">
                      Fiches à traiter
                    </h3>
                    <div className="box-tools pull-right">
                      <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                      </button>
                      <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                    </div>
                  </div>
                  <div className="box-body">
                    <ul className="products-list product-list-in-box">
                      <li className="item">
                        <div className="product-info">
                          <a href="#" className="product-title">
                            Appel redirigé
                            <span className="label label-warning pull-right">moyen terme</span></a>
                              <span className="product-description">
                                besoin informations complémentaires
                              </span>
                        </div>
                      </li>
                      <li className="item">
                        <div className="product-info">
                          <a href="#" className="product-title">
                            Email
                            <span className="label label-info pull-right">long terme</span></a>
                              <span className="product-description">
                                besoin informations complémentaires
                              </span>
                        </div>
                      </li>
                      <li className="item">
                        <div className="product-info">
                          <a href="#" className="product-title">
                            Appel
                            <span className="label label-danger pull-right">court terme</span></a>
                              <span className="product-description">
                                besoin informations complémentaires
                              </span>
                        </div>
                      </li>
                      <li className="item">
                        <div className="product-info">
                          <a href="#      <ViewFooter />" className="product-title">
                            Email
                            <span className="label label-success pull-right">à cloturer</span></a>
                              <span className="product-description">
                                besoin informations complémentaires
                              </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="box-footer text-center">
                    <a href="#" className="uppercase">tout voir</a>
                  </div>

                </div>

              </div>

            </div>


          </section>
        </div>
        <ViewFooter />
      </div>
    );
  }
}

export default Dashboard;
