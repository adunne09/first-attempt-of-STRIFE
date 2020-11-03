import React from "react";

const OauthLoginForm = () => {
  return (
    <form method="get" action="/auth/google">
      <button className="google-button">Login with Google</button>
    </form>
  );
};

export default OauthLoginForm;
