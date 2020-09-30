import React from "react";

export default function EventDelete(doubleClick) {
  if (
    window.confirm(
      `Are you sure you want to delete '${doubleClick.event.title}' event  ? `
    )
  ) {
    doubleClick.event.remove();
  }
}
