import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { setCurrentUser, clearCurrentUser } from '../actions'

class FacebookLogin extends React.Component {
  constructor(props) {
    super(props);

    this.FB = props.fb;

    this.state = {
      message: "",
      picture: {
        data: {
          url: ""
        }
      },
    };
  }

  componentDidMount() {
    this.FB.Event.subscribe('auth.logout', this.onLogout.bind(this));
    this.FB.Event.subscribe('auth.statusChange', this.onStatusChange.bind(this));
  }

  onStatusChange(response) {
    var self = this;

    if(response.status === "connected") {
      this.FB.api('/me', function(response) {
        var message = "Logged in as " + response.name;
        self.setState({
          message: message
        });
        self.props.dispatch(setCurrentUser(response));
      });

      this.FB.api('/me/picture?width=25&height=25', function(response) {
        self.setState({
          picture: response
        });
      });
    }
  }

  onLogout(response) {
    this.setState({
      message: ""
    });
    this.props.dispatch(clearCurrentUser());
  }

  render () {
    var divStyle = {
      display: 'inline-block',
      verticalAlign: 'middle'
    };

    return (
      <div>
        <div style={divStyle}><img src={this.state.picture.data.url} /> {this.state.message}</div>
        <div style={divStyle}
          className="fb-login-button"
          data-max-rows="1"
          data-size="large"
          data-show-faces="false"
          data-auto-logout-link="true"
          >
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { user } = state
  return {
    user: user
  }
}

export default connect(mapStateToProps)(FacebookLogin)
