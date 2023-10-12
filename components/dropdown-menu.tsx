import React, { useState } from "react";

function DropdownMenu({
  signOut,
  toggleMenu,
  isOpen,
}: {
  signOut: () => void;
  toggleMenu: () => void;
  isOpen: boolean;
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
    >
      <a
        onClick={() => signOut()}
        className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
        role="menuitem"
        id="user-menu-item-2"
      >
        Sign out
      </a>
    </div>
  );
}

export default DropdownMenu;
