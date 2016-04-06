import React      from 'react';
import {
  ViewHeader,
  ViewFooter
}         from '../../components';

class Mailbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="content-wrapper">
          <ViewHeader />
          <h1>
            Mailbox
          </h1>
        </div>
        <ViewFooter />
      </div>
    );
  }
}

export default Mailbox;
