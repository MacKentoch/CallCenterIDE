import React      from 'react';
import { Link }   from 'react-router';
import {
  ViewHeader,
  ViewFooter
}         from '../../components';

class Compose extends React.Component {
  constructor(props) {
    super(props);
  }

  demoMailValue() {
    const textValue = `
    <h1><u>Heading Of Message</u></h1>
    <h4>Subheading</h4>
    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
      was born and I will give you a complete account of the system, and expound the actual teachings
      of the great explorer of the truth, the master-builder of human happiness. No one rejects,
      dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
      how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again
      is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
      but because occasionally circumstances occur in which toil and pain can procure him some great
      pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,
      except to obtain some advantage from it? But who has any right to find fault with a man who
      chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that
      produces no resultant pleasure? On the other hand, we denounce with righteous indignation and
      dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so
      blinded by desire, that they cannot foresee</p>
    <ul>
      <li>List item one</li>
      <li>List item two</li>
      <li>List item three</li>
      <li>List item four</li>
    </ul>
    <p>Thank you,</p>
    <p>John Doe</p>
    `;
    return textValue;
  }

  render() {
    return(
      <div>
        <div>
          <ViewHeader />
            <section className="content">
              <div className="row">
                <div className="col-md-3">
                  <Link
                    to="/mailbox"
                    className="btn btn-primary btn-block margin-bottom" >
                    Retour à la boîte mail
                  </Link>
                  <div className="box box-solid">
                    <div className="box-header with-border">
                      <h3 className="box-title">Répertoires</h3>
                      <div className="box-tools">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="box-body no-padding">
                      <ul className="nav nav-pills nav-stacked">
                        <li className="active">
                          <Link
                            to="/mailbox">
                            <i className="fa fa-inbox"></i>
                             Reçus
                             <span className="label label-primary pull-right">12</span>
                          </Link>
                        </li>
                        <li><a href="#"><i className="fa fa-envelope-o"></i> Envoyés</a></li>
                        <li><a href="#"><i className="fa fa-file-text-o"></i> Brouillons</a></li>
                        <li><a href="#"><i className="fa fa-trash-o"></i> Corbeille</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="box box-primary">
                    <div className="box-header with-border">
                      <h3 className="box-title">Composer un nouveau message</h3>
                    </div>
                    <div className="box-body">
                      <div className="form-group">
                        <input className="form-control" placeholder="à:" />
                      </div>
                      <div className="form-group">
                        <input className="form-control" placeholder="Objet:" />
                      </div>
                      <div className="form-group">
                        <span
                          id="compose-textarea"
                          className="form-control"
                          style={{height: '600px'}}>
                          <h1><u>Heading Of Message</u></h1>
                          <h4>Subheading</h4>
                          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                            was born and I will give you a complete account of the system, and expound the actual teachings
                            of the great explorer of the truth, the master-builder of human happiness. No one rejects,
                            dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
                            how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again
                            is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                            but because occasionally circumstances occur in which toil and pain can procure him some great
                            pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,
                            except to obtain some advantage from it? But who has any right to find fault with a man who
                            chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that
                            produces no resultant pleasure? On the other hand, we denounce with righteous indignation and
                            dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so
                            blinded by desire, that they cannot foresee</p>
                          <ul>
                            <li>List item one</li>
                            <li>List item two</li>
                            <li>List item three</li>
                            <li>List item four</li>
                          </ul>
                          <p>Thank you,</p>
                          <p>John Doe</p>
                        </span>
                      </div>
                      <div className="form-group">
                        <div className="btn btn-default btn-file">
                          <i className="fa fa-paperclip"></i>
                           Pièces jointes
                          <input type="file" name="attachment" />
                        </div>
                        <p className="help-block">Max. 4MB</p>
                      </div>
                    </div>
                    <div className="box-footer">
                      <div className="pull-right">
                        <button type="submit" className="btn btn-primary"><i className="fa fa-envelope-o"></i> Envoyer</button>
                      </div>
                      <button type="reset" className="btn btn-default"><i className="fa fa-times"></i> Annuler</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
      </div>
    );
  }
}

export default Compose;
