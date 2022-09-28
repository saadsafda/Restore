import React from "react";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../utils/Modal";
import { deleteStream } from "../../redux/actions";

class StreamDelete extends React.Component {
  onDismiss = () => {
    history.push("/");
  };

  onDelete = () => {
    this.props.deleteStream(this.props.match.params.id);
    history.push("/");
  };

  render() {
    return (
      <Modal onDismiss={() => this.onDismiss()}>
        <h1 className="header">Delete Stream</h1>
        <p className="content">Are you sure you want to delete this stream?</p>
        <div className="actions">
          <button
            className="ui button negative"
            onClick={() => this.onDelete()}
          >
            Delete
          </button>
          <button
            className="ui button primary"
            onClick={() => this.onDismiss()}
          >
            Cancel
          </button>
        </div>
      </Modal>
    );
  }
}

export default connect(null, { deleteStream })(StreamDelete);
