import { PropsWithChildren } from "react";

export function Button({ children }: PropsWithChildren) {
  return <button onClick={() => alert("Hello!")}>{children}</button>;
}
