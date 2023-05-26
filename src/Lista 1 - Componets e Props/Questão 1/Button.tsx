import React from "react";

export function Button({ children }) {
  return <button onClick={() => alert("Hello!")}>{children}</button>;
}
