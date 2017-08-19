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
            <h5 className="card-title">
              {prompt}
            </h5>
            <h5 className="card-text">
              <span
                className={this.state.reveal ? "text-shown" : "text-hidden"}>
                {answer}
              </span>
            </h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
