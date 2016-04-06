import React      from 'react';
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
        <div className="content-wrapper">
          <ViewHeader />
          <h1>
            Readmail
          </h1>
        </div>
        <ViewFooter />
      </div>
    );
  }
}

export default Readmail;
