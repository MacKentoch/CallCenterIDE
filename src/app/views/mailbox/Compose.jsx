import React      from 'react';
import {
  ViewHeader,
  ViewFooter
}         from '../../components';

class Compose extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="content-wrapper">
          <ViewHeader />
          <h1>
            Compose
          </h1>
        </div>
        <ViewFooter />
      </div>
    );
  }
}

export default Compose;
