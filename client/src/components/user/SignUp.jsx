import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/Login.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    
  }

}

export default SignUp;