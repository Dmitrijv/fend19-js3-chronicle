import React from "react";

export default function SidebarNav({ sidebarContent }) {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">{sidebarContent}</div>
    </nav>
  );
}
