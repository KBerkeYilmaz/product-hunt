"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-screen bg-red-400 flex justify-between px-4 py-6" >
      <div className="logo">
        <h1>Product Hunt</h1>
      </div>
      <div className="nav-links flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/new_topic">New Topic</Link>
      </div>
    </nav>
  );
}

export default Navbar;