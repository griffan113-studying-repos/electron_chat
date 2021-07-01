import { Fragment } from "react";

const sendNotification = () => {
  window.Bridge.sendNotification("Notification");
}

export function App () {
  return (
    <Fragment>
      <h1>Hello Electron!</h1>

      <button onClick={sendNotification}>Click to notify</button>
    </Fragment>
  );
}
