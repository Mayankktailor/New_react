import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AddPost} from '../actions/formAction';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class AddForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         productName:'',
         price:''
      }
    }

onSubmit=(e)=>{
    e.preventDefault();
    const post = {
        productName: this.state.productName,
        price: this.state.price
      };
    this.props.AddPost(post);
    NotificationManager.success(`${this.state.productName}`, 'Added Successfully',3000);
    
}

onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}    
  render() {
    return (
      <Container className="App">
        <h2>Add A New Technology</h2>
        <hr/>
        <Form className="form">
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <FormGroup>
              <Label>Technology</Label>
              <Input
                type="text"
                name="productName"
                id="productName"
                placeholder="ProductName"
                value={this.state.productName}
                onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <FormGroup>
              <Label for="examplePassword">Price(Rs)</Label>
              <Input
                type="Number"
                name="price"
                id="price"
                placeholder="Rs."
                value={this.state.price}
                onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Button color="info" onClick={this.onSubmit}>Submit</Button>
        </Form>
        <NotificationContainer/> 
      </Container>
      
    );
  }
}
AddForm.propTypes={
    AddPost: PropTypes.func.isRequired
}
export default connect(null,{AddPost})(AddForm);