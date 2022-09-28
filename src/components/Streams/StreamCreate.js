import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../redux/actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (values) => {
    this.props.createStream(values);
  };

  render() {
    return <StreamForm onSubmit={this.onSubmit} />;
  }
}

export default connect(null, { createStream })(StreamCreate);
