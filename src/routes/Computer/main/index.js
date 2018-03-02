import React, {Component} from 'react';
import { connect } from 'dva';

class Computer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const _this = this;
  }

  render() {
    return (
      <div className="Computer">
        <a>关于</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isFirst: state.load.isFirst,
  loadData: state.load.value
})

export default connect(mapStateToProps)(Computer);
