import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveStack } from '../actions';

export class StackForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      cards: []
    }
  }

  addCard() {
    const { cards } = this.state;

    cards.push({ id: cards.length, prompt: '', answer: '' })

    this.setState({ cards });
  }

  updateCardPart(event, index, part) {
    const { cards } = this.state;

    cards[index][part] = event.target.value;

    this.setState({ cards });
  }

  saveStack(stack) {
    this.props.saveStack(this.state)
  }

  render() {
    return (
      <div>
        <h4>New Stack Form</h4>
        <form action="">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter title"
              onChange={event => {
                this.setState({ title: event.target.value })
              }}
              />
          </div>

          {
            this.state.cards.map((card, index) => {
              return (
                <div key={card.id}>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Prompt</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter prompt"
                          onChange={event => {
                            this.updateCardPart(event, index, 'prompt')
                          }} />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Answer</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter answer"
                          onChange={event => {
                            this.updateCardPart(event, index, 'answer')
                          }} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          <div className="row">
            <div className="col-sm-6">
              <button
                type="button"
                className="btn btn-secondary btn-block"
                onClick={() => this.addCard()}>
                Add Card
              </button>
            </div>
            <div className="col-sm-6">
              <button
                type="button"
                className="btn btn-secondary btn-block"
                onClick={() => this.saveStack()}>
                Save Stack
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { saveStack })(StackForm);
