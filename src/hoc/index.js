import React from "react";

export default function (Component) {
  function Auth() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return <Component />;
  }

  return Auth;
}
