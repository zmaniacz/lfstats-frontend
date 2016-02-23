import React, { PropTypes } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FacebookLogin from './FacebookLogin';

var LFStatsNavbar = React.createClass({
  render () {
    return (
      <Navbar fixedTop={true} fluid={true}>
        <Navbar.Header>
          <Navbar.Brand>
            LFStats
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/nightly"><NavItem>Nightly Stats</NavItem></LinkContainer>
            <LinkContainer to="/players"><NavItem>Top Players</NavItem></LinkContainer>
            <LinkContainer to="/games"><NavItem>Game List</NavItem></LinkContainer>
            <LinkContainer to="/leaderboards"><NavItem>Leader(Loser)boards</NavItem></LinkContainer>
            <LinkContainer to="/centers"><NavItem>Center Stats</NavItem></LinkContainer>
            <LinkContainer to="/allcenter"><NavItem>All-Center Teams</NavItem></LinkContainer>
            <LinkContainer to="/penalties"><NavItem>Penalties</NavItem></LinkContainer>
            <LinkContainer to="/about"><NavItem>About SM5</NavItem></LinkContainer>
            <LinkContainer to="/twitch"><NavItem>Twitch</NavItem></LinkContainer>
          </Nav>
          <Nav pullRight><FacebookLogin fb={FB} /></Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

export default LFStatsNavbar;
