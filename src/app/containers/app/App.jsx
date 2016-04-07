import React  from 'react';
import {
  Header,
  Aside,
  ViewFooter
}             from '../../components';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Aside /> 
        <div className="control-sidebar-bg"></div>
        <div className="content-wrapper">
          {this.props.children}
        </div>
        <ViewFooter />
      </div>
    );
  }
}

// statics :
App.propTypes = {
  children  : React.PropTypes.node,
  history   : React.PropTypes.object,
  location  : React.PropTypes.object
};

export default App;
