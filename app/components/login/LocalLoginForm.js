import React from "react";

const LocalLoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="local-login">
        <div className="login-email">
          <input
            type="email"
            name="email"
            className="input"
            placeholder="email"
          />
        </div>
        <div className="login-password">
          <input
            type="password"
            name="password"
            className="input"
            placeholder="password"
          />
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
