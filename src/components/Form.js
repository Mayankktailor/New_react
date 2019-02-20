import React, { Component } from 'react';
import { getOrder } from '../actions/formAction';
import {connect} from 'react-redux';
import { Button } from 'reactstrap';
export class Form extends Component {
constructor(props) {
  super(props)

  this.state = {
    data:[],
     total: 0
  }
}
componentWillMount(){
  this.props.getOrder();
}
onSubmit=(e)=>{
  e.preventDefault();
  window.location.href="/addForm"
}
onChange=(e)=>{
this.setState({
  order:this.props.order.map(todo=>{
    if (todo._id === e._id) {
      todo.completed = !todo.completed
    }
    return todo;
  })
})

if (e.completed=== true) {
  return this.setState({total:this.state.total+e.price})  
  }else{
    return this.setState({total:this.state.total-e.price})  
  }
        }
        render() {
          const OrderItems = this.props.order;
          return (
      <div>
          <table className="table booksTable">
      <thead>
      <tr><th>Sr.No</th><th>Technology</th><th className="textCenter">Price</th><th className="textCenter">Add to cart</th></tr>
      </thead>
      <tbody>
        {OrderItems.map((data,i) => <tr key={i}>
        <td>{++i}</td>
        <td>{data.productName}</td>
        <td>Rs.{data.price}/. Only</td>
         <td className="textCenter"><input type="checkbox" onChange={this.onChange.bind(this,data)}></input></td>
         </tr> )
      }
      </tbody>
      </table>
      <h1>Total</h1>
      <h3>Rs.{this.state.total}</h3>
      <Button color='info' onClick={this.onSubmit}>Add New Technology</Button>
      </div>
    )
  }
}

Form.propTypes = {
    getOrder: PropTypes.func.isRequired,
    order:  PropTypes.array.isRequired
  };

const mapStateToProps = state => ({
    order: state.order.products
  });

export default connect(mapStateToProps, {getOrder})(Form);
