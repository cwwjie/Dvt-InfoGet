import React, {Component} from 'react';
import { connect } from 'dva';

class ItemContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="ItemContent">
        {this.props.itemTitle}
      </div>
    )
  }
}


export default ItemContent;
