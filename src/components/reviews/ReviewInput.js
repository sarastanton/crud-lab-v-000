import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview({
      text: this.state.text,
      restaurantId: this.props.restaurantId
    })
    this.setState({
      text: '',
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
  };

export default ReviewInput;
