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
          <h1>
            LastFiche
          </h1>
        </div>
        <ViewFooter />
      </div>
    );
  }
}

export default LastFiche;
