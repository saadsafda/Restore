import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../redux/actions";

class GoogleAuth extends Component {
  componentDidMount() {
    if (
      localStorage.getItem("isSignedIn") === false ||
      localStorage.getItem("isSignedIn") === null
    ) {
      localStorage.setItem("isSignedIn", false);
    }
    // this.setState({ isSignedIn: false });

    // window.gapi.load("client:auth2", () => {
    //   window.gapi.client
    //     .init({
    //       clientId:
    //         "204156226-fcev1jbi2k86db88beq6fpnp7b5mbv97.apps.googleusercontent.com",
    //       scope: "email",
    //     })
    //     .then(() => {
    //       this.auth = window.gapi.auth2.getAuthInstance();
    //       this.onAuthChange();
    //       this.auth.isSignedIn.listen(this.onAuthChange);
    //     });
    // });
    this.onAuthChange(localStorage.getItem("isSignedIn"));
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignoutClick = () => {
    // this.auth.signOut();
    localStorage.setItem("isSignedIn", false);
    this.onAuthChange(localStorage.getItem("isSignedIn"));
  };

  onSigninClick = () => {
    // this.auth.signIn();
    localStorage.setItem("isSignedIn", true);
    this.onAuthChange(localStorage.getItem("isSignedIn"));
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div>Loading...</div>;
    } else if (this.props.isSignedIn === true) {
      return (
        <button
          onClick={() => this.onSignoutClick()}
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Sign Out
        </button>
      );
    } else if (this.props.isSignedIn === false) {
      return (
        <button
          onClick={() => this.onSigninClick()}
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Sign In
        </button>
      );
    }
  }
  render() {
    return (
      // <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      //   Login
      // </button>
      this.renderAuthButton()
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
