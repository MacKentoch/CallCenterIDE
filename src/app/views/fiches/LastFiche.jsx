import React      from 'react';
import {
  ViewHeader,
  ViewFooter
}         from '../../components';

class LastFiche extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="content-wrapper">
          <ViewHeader />
            <section className="invoice">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="page-header">
                    <i className="fa fa-male"></i>
                    Monsieur Martin Abcdef
                    <small className="pull-right">Date: 2/10/2014</small>
                  </h2>
                </div>
              </div>
              <div className="row invoice-info">
                <div className="col-sm-4 invoice-col">
                  Entreprise
                  <address>
                    <strong>Admin, Inc.</strong><br/>
                    795 Folsom Ave, Suite 600<br/>
                    San Francisco, CA 94107<br/>
                    Phone: (804) 123-5432<br/>
                    Email: info@almasaeedstudio.com
                  </address>
                </div>
                <div className="col-sm-4 invoice-col">
                  Etat civil
                  <address>
                    <strong>John Doe</strong><br/>
                    795 Folsom Ave, Suite 600<br/>
                    San Francisco, CA 94107<br/>
                    Phone: (555) 539-1037<br/>
                    Email: john.doe@example.com
                  </address>
                </div>
                <div className="col-sm-4 invoice-col">
                  <br/>
                  <b>ID:</b>
                   4F3S8J
                   <br/>
                  <b>Date dernière demande:</b>
                   2/22/2014
                   <br/>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 table-responsive">
                  <table className="table table-striped">
                    <thead>
                    <tr>
                      <th>ordre</th>
                      <th>Type</th>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Etat traitement</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>Demande de renseignement</td>
                      <td>04/06/2014</td>
                      <td>Demande de renseignement triatée.</td>
                      <td>terminé</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Demande de renseignement</td>
                      <td>04/06/2014</td>
                      <td>Demande de renseignement triatée.</td>
                      <td>terminé</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Demande de renseignement</td>
                      <td>04/06/2014</td>
                      <td>Demande de renseignement triatée.</td>
                      <td>terminé</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Demande de renseignement</td>
                      <td>04/06/2014</td>
                      <td>Demande de renseignement triatée.</td>
                      <td>terminé</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Demande de renseignement</td>
                      <td>04/06/2014</td>
                      <td>Demande de renseignement triatée.</td>
                      <td>terminé</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row no-print">
                <div className="col-xs-12">
                  <a href="invoice-print.html" target="_blank" className="btn btn-default">
                    <i className="fa fa-print"></i>
                     Imprimer
                  </a>
                  <button type="button" className="btn btn-primary pull-right" style={{marginRight: '5px'}}>
                    <i className="fa fa-download"></i>
                     Générer PDF
                  </button>
                </div>
              </div>
            </section>
            <div className="clearfix"></div>
        </div>
        <ViewFooter />
      </div>
    );
  }
}

export default LastFiche;
