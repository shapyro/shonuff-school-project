import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import * as UserActions from '../../actions/users';
import './CreateProfile.css';

console.log(UserActions)
class CreateProfile extends Component {

  // componentWillMount() {
  //   this.setState({ profile: {} });
  //   const { userProfile, getProfile } = this.props.auth;
  //   if (!userProfile) {
  //     getProfile((err, profile) => {
  //       this.setState({ profile });
  //     });
  //   } else {
  //     this.setState({ profile: userProfile });
  //   }
  // }
  render() {
    window.UserActions = UserActions;
    window.actions = this.props.actions;

    // const { profile } = this.state;
    return (
      <div>
      {this.props.users.fetching && <h1>Storing</h1>}
      {this.props.users.data && <h1>{JSON.stringify(this.props.users.data )}</h1>}

      </div>
      // <div className="container">
      //   <div className="profile-area">
      //     <h1>{profile.name}</h1>
      //     <Panel header="Profile">
      //       <img src={profile.picture} alt="profile" />
      //       <div>
      //         <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
      //         <h3>{profile.nickname}</h3>
      //       </div>
      //       <pre>{JSON.stringify(profile, null, 2)}</pre>
      //     </Panel>
      //   </div>
      // </div>
    );
  }
}

function mapStateToProps(state){
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps )(CreateProfile)
// export default CreateProfile;
