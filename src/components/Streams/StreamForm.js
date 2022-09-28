import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderInput({ input, label, meta }) {
    return (
      <div className="p-2 w-full">
        <div className="relative">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            {label}
          </label>
          <input
            {...input}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          {meta.error && meta.touched && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
          {meta.error && meta.touched && (
            <div className="text-red-500 text-sm mt-2">{meta.error}</div>
          )}
        </div>
      </div>
    );
  }

  onSubmit = (values) => {
    this.props.onSubmit(values);
  };

  render() {
    return (
      <section className="text-gray-600 body-font relative">
        <form
          className="container px-5 py-24 mx-auto"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <Field name="title" component={this.renderInput} label="title" />
            <Field
              name="description"
              component={this.renderInput}
              label="description"
            />
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

const validate = (values) => {
  const error = {};

  if (!values.title) {
    error.title = "You must enter a title";
  }

  if (!values.description) {
    error.description = "You must enter a description";
  }

  return error;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);
