import React from 'react';

import './footer.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <h2>{this.props.footerText}</h2>
      </footer>
    );
  }
}

export default Footer;