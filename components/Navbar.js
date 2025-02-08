"use client";

import { Navbar } from "flowbite-react";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <Navbar fluid rounded className="bg-white border-b border-gray-200 shadow-sm px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* الشعار */}
        <Navbar.Brand href="/">
          <img src="https://flowbite.s3.amazonaws.com/logo.svg" className="mr-3 h-8" alt="FlowBite Logo" />
          <span className="self-center text-xl font-semibold text-gray-800">
            My Website
          </span>
        </Navbar.Brand>

        {/* القائمة */}
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/login" className="text-gray-600 hover:text-blue-600 font-medium">
              Login
            </Link>
          </nav>

          {/* زر التسجيل */}
          <Link
            href="/register"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </Navbar>
  );
}
