import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../redux/actions/index";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderEditAndDeleteBTN(stream) {
    return (
      <div className="flex justify-between items-center">
        <Link
          to={`/streams/edit/${stream.id}`}
          className="bg-indigo-500 hover:bg-indigo-600 focus:border-2 focus:border-indigo-300 text-white text-sm py-2 px-4 mx-2 rounded"
        >
          Edit
        </Link>
        <Link
          to={`/streams/delete/${stream.id}`}
          className="bg-red-500 hover:bg-red-600 focus:border-2 focus:border-red-300 text-white text-sm py-2 px-4 mx-2 rounded"
        >
          Delete
        </Link>
      </div>
    );
  }

  renderCreateStream() {
    return (
      <div className="flex justify-end items-center">
        <Link
          to={"/streams/new"}
          className="bg-indigo-500 hover:bg-indigo-600 focus:border-2 focus:border-indigo-300 text-white text-sm py-2 px-4 mx-2 rounded"
        >
          Create Stream
        </Link>
      </div>
    );
  }

  render() {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto">
          <div>
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Streams
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug.
              </p>
            </div>
            {this.props.streams.map((stream) => {
              return (
                <div
                  key={stream.id}
                  className="flex flex-wrap lg:w-full sm:mx-auto sm:mb-2 -mx-2"
                >
                  <div className="p-2 w-full">
                    <div className="bg-gray-100 rounded flex justify-between p-4 h-full items-center">
                      <Link
                        to={`/streams/${stream.id}`}
                        className="flex items-center text-left header"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                          <path d="M22 4L12 14.01l-3-3" />
                        </svg>
                        <span>
                          <h2 className="text-lg title-font font-medium">
                            {stream.title}
                          </h2>
                          <p className="leading-relaxed text-base">
                            {stream.description}
                          </p>
                        </span>
                      </Link>
                      <div className="hello">
                        {this.renderEditAndDeleteBTN(stream)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {this.renderCreateStream()}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
