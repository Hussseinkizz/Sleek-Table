import Link from "next/link";
import React, { useState } from "react";
import * as Icons from "react-icons/hi";
import NotificationPopup from "./NotificationPopup";
import { useStore } from "react-hands-v2";

interface Props {}

const Notification = (props: Props) => {
  const [messages, setMessages] = useState([{ v: 1 }]);

  const [state, dispatch] = useStore();

  return (
    <section className="relative mx-4 flex">
      <button
        className="_hover-settings group relative flex"
        onClick={() => dispatch({ type: "toggleNotifications" })}
      >
        {/* The Desktop Notification Icon */}
        <span className="absolute -right-1 -top-2 hidden rounded-full bg-red-400 px-1 text-sm text-slate-50 md:flex">
          {messages.length > 0 && messages.length}
        </span>
        {/* The Notification Icon */}
        <span
          className={`absolute -right-0 -top-[1.5px] flex rounded-full ${
            messages.length > 0 ? "bg-red-400" : "bg-transparent"
          } p-1 text-sm text-slate-50 md:hidden`}
        ></span>
        <Icons.HiBell className="h-5 w-5 group-hover:text-indigo-100 md:h-6 md:w-6" />
      </button>
      {/* The Notifications Content */}
      <NotificationPopup isOpen={state.notificationsOpen}>
        <div className="flex w-full rounded-lg bg-gray-50 py-2 px-2">
          sample notification!
        </div>
      </NotificationPopup>
    </section>
  );
};

export default Notification;
