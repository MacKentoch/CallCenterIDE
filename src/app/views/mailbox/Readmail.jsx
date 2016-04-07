import React      from 'react';
import { Link }   from 'react-router';
import {
  ViewHeader,
  ViewFooter
}         from '../../components';

class Readmail extends React.Component {
  constructor(props) {
    super(props);
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
                    to="/compose"
                    className="btn btn-primary btn-block margin-bottom">
                    Nouveau message électronique
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
                      <h3 className="box-title">Consulation Mail</h3>
                      <div className="box-tools pull-right">
                        <a href="#" className="btn btn-box-tool" data-toggle="tooltip" title="Previous"><i className="fa fa-chevron-left"></i></a>
                        <a href="#" className="btn btn-box-tool" data-toggle="tooltip" title="Next"><i className="fa fa-chevron-right"></i></a>
                      </div>
                    </div>
                    <div className="box-body no-padding">
                      <div className="mailbox-read-info">
                        <h3>Sujet du mail ici</h3>
                        <h5>De: demo@demo.com
                          <span className="mailbox-read-time pull-right">15 février 2015 11:03</span></h5>
                      </div>
                      <div className="mailbox-controls with-border text-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Delete">
                            <i className="fa fa-trash-o"></i></button>
                          <button type="button" className="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Reply">
                            <i className="fa fa-reply"></i></button>
                          <button type="button" className="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Forward">
                            <i className="fa fa-share"></i></button>
                        </div>
                        <button type="button" className="btn btn-default btn-sm" data-toggle="tooltip" title="Print">
                          <i className="fa fa-print"></i></button>
                      </div>
                      <div className="mailbox-read-message">
                        <p>Hello John,</p>

                        <p>Keffiyeh blog actually fashion axe vegan, irony biodiesel. Cold-pressed hoodie chillwave put a bird
                          on it aesthetic, bitters brunch meggings vegan iPhone. Dreamcatcher vegan scenester mlkshk. Ethical
                          master cleanse Bushwick, occupy Thundercats banjo cliche ennui farm-to-table mlkshk fanny pack
                          gluten-free. Marfa butcher vegan quinoa, bicycle rights disrupt tofu scenester chillwave 3 wolf moon
                          asymmetrical taxidermy pour-over. Quinoa tote bag fashion axe, Godard disrupt migas church-key tofu
                          blog locavore. Thundercats cronut polaroid Neutra tousled, meh food truck selfies narwhal American
                          Apparel.</p>

                        <p>Raw denim McSweeney's bicycle rights, iPhone trust fund quinoa Neutra VHS kale chips vegan PBR&amp;B
                          literally Thundercats +1. Forage tilde four dollar toast, banjo health goth paleo butcher. Four dollar
                          toast Brooklyn pour-over American Apparel sustainable, lumbersexual listicle gluten-free health goth
                          umami hoodie. Synth Echo Park bicycle rights DIY farm-to-table, retro kogi sriracha dreamcatcher PBR&amp;B
                          flannel hashtag irony Wes Anderson. Lumbersexual Williamsburg Helvetica next level. Cold-pressed
                          slow-carb pop-up normcore Thundercats Portland, cardigan literally meditation lumbersexual crucifix.
                          Wayfarers raw denim paleo Bushwick, keytar Helvetica scenester keffiyeh 8-bit irony mumblecore
                          whatever viral Truffaut.</p>

                        <p>Post-ironic shabby chic VHS, Marfa keytar flannel lomo try-hard keffiyeh cray. Actually fap fanny
                          pack yr artisan trust fund. High Life dreamcatcher church-key gentrify. Tumblr stumptown four dollar
                          toast vinyl, cold-pressed try-hard blog authentic keffiyeh Helvetica lo-fi tilde Intelligentsia. Lomo
                          locavore salvia bespoke, twee fixie paleo cliche brunch Schlitz blog McSweeney's messenger bag swag
                          slow-carb. Odd Future photo booth pork belly, you probably haven't heard of them actually tofu ennui
                          keffiyeh lo-fi Truffaut health goth. Narwhal sustainable retro disrupt.</p>

                        <p>Skateboard artisan letterpress before they sold out High Life messenger bag. Bitters chambray
                          leggings listicle, drinking vinegar chillwave synth. Fanny pack hoodie American Apparel twee. American
                          Apparel PBR listicle, salvia aesthetic occupy sustainable Neutra kogi. Organic synth Tumblr viral
                          plaid, shabby chic single-origin coffee Etsy 3 wolf moon slow-carb Schlitz roof party tousled squid
                          vinyl. Readymade next level literally trust fund. Distillery master cleanse migas, Vice sriracha
                          flannel chambray chia cronut.</p>

                        <p>Thanks,
                          <br/>
                          Jane
                        </p>
                      </div>
                    </div>
                    <div className="box-footer">
                      <ul className="mailbox-attachments clearfix">
                        <li>
                          <span className="mailbox-attachment-icon"><i className="fa fa-file-pdf-o"></i></span>

                          <div className="mailbox-attachment-info">
                            <a href="#" className="mailbox-attachment-name"><i className="fa fa-paperclip"></i> Sep2014-report.pdf</a>
                                <span className="mailbox-attachment-size">
                                  1,245 KB
                                  <a href="#" className="btn btn-default btn-xs pull-right"><i className="fa fa-cloud-download"></i></a>
                                </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="box-footer">
                      <div className="pull-right">
                        <button type="button" className="btn btn-default"><i className="fa fa-reply"></i> Répondre</button>
                        <button type="button" className="btn btn-default"><i className="fa fa-share"></i> Transférer</button>
                      </div>
                      <button type="button" className="btn btn-default"><i className="fa fa-trash-o"></i> Supprimer</button>
                      <button type="button" className="btn btn-default"><i className="fa fa-print"></i> Imprimer</button>
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

export default Readmail;
