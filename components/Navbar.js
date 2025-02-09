"use client";

import { useState } from "react";
import Link from "next/link";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">My Website</span>
            <img
              src="https://flowbite.s3.amazonaws.com/logo.svg"
              className="h-8 w-auto"
              alt="Website Logo"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 hover:text-blue-600">
              Services
              <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute top-full z-10 mt-3 w-48 rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4 space-y-2">
                  <Link href="/web-development" className="block text-sm font-semibold text-gray-900 hover:text-blue-600">
                    Web Development
                  </Link>
                  <Link href="/seo" className="block text-sm font-semibold text-gray-900 hover:text-blue-600">
                    SEO Optimization
                  </Link>
                  <Link href="/marketing" className="block text-sm font-semibold text-gray-900 hover:text-blue-600">
                    Digital Marketing
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link href="/features" className="text-sm font-semibold text-gray-900 hover:text-blue-600">
            Features
          </Link>
          <Link href="/marketplace" className="text-sm font-semibold text-gray-900 hover:text-blue-600">
            Marketplace
          </Link>
          <Link href="/company" className="text-sm font-semibold text-gray-900 hover:text-blue-600">
            Company
          </Link>
        </div>

        {/* Register Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/register"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 bg-black bg-opacity-25" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full max-w-sm bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">My Website</span>
              <img src="https://flowbite.s3.amazonaws.com/logo.svg" className="h-8 w-auto" alt="Website Logo" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6">
            <div className="space-y-4">
              <Link href="/services" className="block text-base font-semibold text-gray-900 hover:text-blue-600">
                Services
              </Link>
              <Link href="/features" className="block text-base font-semibold text-gray-900 hover:text-blue-600">
                Features
              </Link>
              <Link href="/marketplace" className="block text-base font-semibold text-gray-900 hover:text-blue-600">
                Marketplace
              </Link>
              <Link href="/company" className="block text-base font-semibold text-gray-900 hover:text-blue-600">
                Company
              </Link>
            </div>

            <div className="mt-6">
              <Link
                href="/register"
                className="block text-center w-full py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Register
              </Link>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
