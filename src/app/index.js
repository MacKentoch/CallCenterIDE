import React                from 'react';
import ReactDOM             from 'react-dom';
import injectTpEventPlugin  from 'react-tap-event-plugin';
import { Routes }           from './routes/Routes.jsx';

import 'babel-polyfill';
import 'animate.css';
import 'jquery';
import '../adminLTE/app.min.js';
import '../adminLTE/plugins/slimScroll/jquery.slimscroll.js';
import 'font-awesome/css/font-awesome.min.css';
import './style/demoSource/bootstrap/css/bootstrap.css';

import 'bootstrap/dist/js/bootstrap.min.js';
// import './style/demoSource/jquery-jvectormap-1.2.2.css';
import './style/demoSource/AdminLTE.css';
import './style/demoSource/_all-skins.css';


const ELEMENT_TO_BOOTSTRAP  = 'root';
const BootstrapedElement    = document.getElementById(ELEMENT_TO_BOOTSTRAP);

injectTpEventPlugin();

ReactDOM.render(<Routes />, BootstrapedElement);
