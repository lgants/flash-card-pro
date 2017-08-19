import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import stacks from '../data/stacks.json';
import { setStack, loadStacks } from '../actions';

class StackList extends Component {
  componentDidMount() {
    if (this.props.stacks.length == 0) {
      this.props.loadStacks(stacks)
    }
  }

  render() {
    return (
      <div>
        {
          this.props.stacks.map(stack => {
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
// export default connect(null, { setStack })(StackList);

// NOTE 3rd refactor: connected component to state
function mapStateToProps(state) {
  return {
    stacks: state.stacks
  }
}

export default connect(mapStateToProps, { setStack, loadStacks })(StackList);
