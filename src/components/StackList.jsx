import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import stacks from '../data/stacks.json';
import { setStack } from '../actions';

class StackList extends Component {
  render() {
    return (
      <div>
        {
          stacks.map(stack => {
            return (
              <Link
                key={stack.id}
                to="/stack"
                onClick={() => this.props.setStack(stack)}>
                <h4>{stack.title}</h4>
              </Link>
            )
          })
        }
      </div>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ setStack }, dispatch);
// }
// const connectComponent = connect(null, mapDispatchToProps);
// export default connectComponent(StackList);

// NOTE 1st refactor: condensed export to one line
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ setStack }, dispatch);
// }
// export default connect(null, mapDispatchToProps)(StackList);

// NOTE 2nd refactor: used react-redux shortcut to directly pass in bound object action creators as 2nd parameter to connect function and bind them right away
export default connect(null, { setStack })(StackList);
