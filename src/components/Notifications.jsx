import React from "react";
import ActionCable from "actioncable-client-react";

const Notifications = () => {
  const incomingMessage = (message) => {
    debugger;
  };
  return (
    <ActionCable
      channel={"web_notifications_channel"}
      onReceived={incomingMessage}
    ></ActionCable>
  );
};

export default Notifications;
