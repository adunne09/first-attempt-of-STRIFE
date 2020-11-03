import React from "react";

const LocalLoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="local-login">
        <div className="login-email">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="input" />
        </div>
        <div className="login-password">
          <label htmlFor="email">Password</label>
          <input type="password" name="password" className="input" />
        </div>
        <div className="login-submit">
          <button type="submit" className="local-login-submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default LocalLoginForm;
