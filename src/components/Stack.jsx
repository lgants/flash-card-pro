import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';

// NOTE added export here so the class can be imported in the test without the entire context of react/redux 
export class Stack extends Component {
  render() {
    const { title, cards } = this.props.stack;

    return (
      <div>
        <h3>{title}</h3>
        <br />
        {
          cards.map(card => {
            return (
              <Card key={card.id} card={card} />
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { stack: state.stack }
}

export default connect(mapStateToProps, null)(Stack);
