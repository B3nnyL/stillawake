import React, { PureComponent } from "react";

const WithPure = Comp => {
  return class WithPure extends PureComponent {
    render() {
      return <Comp {...this.props} />;
    }
  };
};

export default WithPure;
