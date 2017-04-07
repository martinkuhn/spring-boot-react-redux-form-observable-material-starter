import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";

class PostForm extends Component {
  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="post">Post</label>
          <Field name="post" component="input" type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'post'
})(PostForm);
