import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = () => (
  <div>
    <Link to="/">React SSR</Link>
  </div>
);

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
