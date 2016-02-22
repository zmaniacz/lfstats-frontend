import React, { PropTypes } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import FacebookLogin from './FacebookLogin'

var LFStatsNavbar = React.createClass({
  render () {
    return (
      <Navbar fixedTop={true} fluid={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">LFStats</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>Nightly Stats</NavItem>
            <NavItem>Top Players</NavItem>
            <NavItem>Game List</NavItem>
            <NavItem>Leader(Loser)boards</NavItem>
            <NavItem>Center Stats</NavItem>
            <NavItem>All-Center Teams</NavItem>
            <NavItem>Penalties</NavItem>
            <NavItem>About SM5</NavItem>
            <NavItem>Twitch</NavItem>
          </Nav>
          <Nav pullRight><FacebookLogin fb={FB} /></Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
})

export default LFStatsNavbar;
