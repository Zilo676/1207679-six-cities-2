import React from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        item: null,
      };

      this._handleActiveItem = this._handleActiveItem.bind(this);
    }

    _handleActiveItem(item) {
      this.setState({
        item
      });
    }

    render() {
      return <Component
        {...this.props}
        onActiveItem={this._handleActiveItem}
      />;
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
