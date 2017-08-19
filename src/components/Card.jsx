import React, { Component } from 'react';


class Card extends Component {
  constructor() {
    super();

    this.state = { reveal: false };
  }

  render() {
    const { prompt, answer} = this.props.card;

    return (
      <div>
        <div
          className="card"
          onClick={
            () => this.setState({ reveal: true })
          }>
          <div className="card-block">
            <h4 className="card-title">
              {prompt}
            </h4>
            <h4 className="card-text">
              <span
                className={this.state.reveal ? "text-shown" : "text-hidden"}>
                {answer}
              </span>
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
