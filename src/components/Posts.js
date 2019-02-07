import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts ,deleteData,updateData} from '../actions/postActions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup,Input,Label } from 'reactstrap';

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _id:'',
       firstName:'',
       lastName:''
    }

    this.onUpdate= this.onUpdate.bind(this);
    this.onDelete= this.onDelete.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
  }
  
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

onSubmit=(e)=>{
  e.preventDefault();
  console.log(this.props.posts);
  this.setState({data:this.props.posts});
  console.log(this.state.data.email);  
}

addSubmit=()=>{
  window.location.href='/PostForm'
}

onChange=(e)=>{
  this.setState({ [e.target.name]: e.target.value });
}
onUpdate =(e)=>{
  console.log("ID",e._id);
  this.setState({
    _id: e._id,
    firstName: e.firstName,
    lastName: e.lastName
  })
  this.toggle()
}
onDelete=(e)=>{
  // console.log('ID:',e);
  this.props.deleteData(e);
}
onFormUpdate=()=>{ 
  this.toggle();
  const post = {
    _id :this.state._id,
    firstName: this.state.firstName,
    lastName: this.state.lastName
  };
  this.props.updateData(post);
}
toggle() {
  this.setState({
    modal: !this.state.modal
  });
}
render() {
const postItems = this.props.posts.map(post => (
    <div key={post._id}>
      <button type="button" style={btnStyle} onClick={this.onUpdate.bind(this,post)}>Edit</button> 
        <button type="button" style={btnStyle} onClick={this.onDelete.bind(this,post._id)}>x</button> 
        <h3>{post.firstName}</h3>
        <p>{post.lastName}</p>
            <hr/>
      </div>
    ));

    return (
      <div style={getStyle}>
        <button type="button" onClick={this.addSubmit}>Want A New Post</button>
        <h1>Posts</h1>
        <hr/>
        {postItems}
        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Update Form</ModalHeader>
          <ModalBody>
          <FormGroup>
          <Label for="exampleEmail">FirstName</Label>
          <Input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.onChange} placeholder="FirstName" />
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleEmail">LastName</Label>
          <Input type="text" name="lastName" value={this.state.lastName} onChange={this.onChange} id="lastName" placeholder="LastName" />
        </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onFormUpdate}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


const btnStyle={
  background: '#ff0000',
  color:'#fff',
  border:'none',
  padding:'5px',
  borderRadius:'50%',
  cursor:'pointer',
  float:'right'
}

const getStyle={
      background:'#f4f4f4',
      padding:'10px',
      borderBottom:'1px #ccc dotted'
    }
    Posts.propTypes = {
      fetchPosts: PropTypes.func.isRequired,
      posts: PropTypes.array.isRequired,
      newPost: PropTypes.object
    };
    
    const mapStateToProps = state => ({
      posts: state.posts.items,
      newPost: state.posts.item
    });
    
    export default connect(mapStateToProps, { fetchPosts, deleteData,updateData })(Posts);
