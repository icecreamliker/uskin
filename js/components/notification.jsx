import React from 'react';

class Notification extends React.Component {

  constructor(props) {
    super(props);

    this.TYPES = ['info', 'success', 'warning', 'danger'];
  }

  render() {
    var props = this.props,
      className = props.type && (this.TYPES.indexOf(props.type) > -1) ?
      `notification notification-${props.type}` : 'notification',
      style = props.width ? {
        'width': props.width
      } : {},
      contents = props.title ? <div><strong>{props.title}</strong>{props.content}</div> : props.content;

    return (
      <div className={className} style={style}>
        { contents }
      </div>
    );
  }
}

export default Notification;
