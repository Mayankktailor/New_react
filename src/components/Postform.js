import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import 'react-notifications/lib/notifications.css';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };
if (this.state.email === 'admin'&& this.state.password) {
  NotificationManager.success('Success message', 'You Are Logged in',3000);
  console.log("Done..");
}
    this.props.createPost(post);
    window.location.href='/'
  }
  addSubmit=()=>{
    window.location.href='/'
  }
  render() {
    return (
      <div>
        <button type="button" onClick={this.addSubmit}>Back To Post</button>
        <MDBContainer className="align-middle">
      <MDBRow >
        <MDBCol>
          <form>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                name="firstName"
                onChange={this.onChange}
                value={this.state.email}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="text"
                name="lastName"
                onChange={this.onChange}
                value={this.state.password}
              />
            </div>
            <div className="text-center">
              <MDBBtn color="primary" onClick={this.onSubmit}>Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        <NotificationContainer/> 
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);