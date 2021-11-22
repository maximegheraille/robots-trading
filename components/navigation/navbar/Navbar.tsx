import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { NavChild, NavigationInterface, NextLink } from "../Navigation";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import arrow from "../../../public/up-arrow-svgrepo-com.svg";
import Bars from "../../../public/side_navigation.svg";
interface NavigationProps {
  navigation: NavigationInterface[];
  openSideNav: boolean;
  setOpenSideNav: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Navbar = ({
  navigation,
  openSideNav,
  setOpenSideNav,
}: NavigationProps) => {
  const { asPath } = useRouter();
  const IsCurrentPage = (item: string): boolean => {
    return asPath.toLowerCase() === item.toLowerCase();
  };
  return (
    <div className="h-10 lg:h-auto">
      <div className="pt-2 pl-4 lg:hidden flex items-center place-items-center">
        <button
          onClick={() => {
            setOpenSideNav(!openSideNav);
          }}
          aria-label="Ouvrir le menu"
        >
          <Image src={Bars} className="" alt="navigation button" />
        </button>
      </div>
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <NextLink href="/">
                      <div className="hidden lg:align-middle place-content-center lg:flex h-8 w-auto ">
                        <img src={"/robot-svgrepo-com.svg"} alt="Workflow" />

                        <div className="text-center flex items-center font-bold">
                          <p className="pl-2">Robots trading</p>
                        </div>
                      </div>
                    </NextLink>
                  </div>

                  <div className="hidden sm:block sm:ml-6 lg:ml-12 lg:flex space-x-4 t">
                    {navigation.map(
                      (item: NavigationInterface, index: number) => (
                        <React.Fragment key={index}>
                          {!item.childs ? (
                            <>
                              <Menu>
                                <Link
                                  href={
                                    item.href?.toLowerCase()
                                      ? item.href.toLocaleLowerCase()
                                      : ""
                                  }
                                >
                                  <a
                                    className={`${
                                      IsCurrentPage(
                                        item.href !== undefined ? item.href : ""
                                      )
                                        ? "border-b text-black"
                                        : "text-gray-300"
                                    } mx-0.5 hover:bg-[#39374E] text-sm lg:text-lg hover:text-white px-3 py-2 rounded-lg font-medium`}
                                    aria-current={
                                      asPath.toLowerCase() === item.name
                                        ? "page"
                                        : undefined
                                    }
                                  >
                                    {item.name}
                                  </a>
                                </Link>
                              </Menu>
                            </>
                          ) : (
                            <Menu as="div" className="relativeext-left">
                              <div>
                                <Menu.Button className="group mx-0.5 hover:bg-[#39374E] lg:text-lg hover:text-white px-3 py-2 rounded-lg text-sm font-medium inline-flex justify-center w-full text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                  {({ open }) => (
                                    <div className="flex place-items-center place-content-center h-full">
                                      {item.name}
                                      <div className="w-4 h-full ml-2 pt-1 flex place-items-center duration-150">
                                        <Image
                                          src={arrow}
                                          className={`${
                                            open
                                              ? "rotate-180 transition-all"
                                              : "rotate-0 transition-all "
                                          }`}
                                        />
                                      </div>
                                    </div>
                                  )}
                                </Menu.Button>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute w-60 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-2">
                                      {item.childs &&
                                        item.childs.map(
                                          (child: NavChild, index: number) => (
                                            <Menu.Item key={index}>
                                              {({ active }) => (
                                                <NextLink
                                                  href={child.href}
                                                  className={`${
                                                    active
                                                      ? "text-gray-400 transition-all duration-300 ease-in-out translate-x-2"
                                                      : "text-black transition-all duration-300 ease-in-out translate-x-0"
                                                  }  ${
                                                    asPath.toLowerCase() ===
                                                    item.href?.toLowerCase()
                                                      ? "bg-gray-100 text-white"
                                                      : ""
                                                  } p-3 flex items-start rounded-lg`}
                                                >
                                                  <div className="flex">
                                                    <div className="w-10 h-10 mr-3">
                                                      <Image src={child.icon} />
                                                    </div>
                                                    <div className="flex flex-col text-left ">
                                                      <p className="font-semibold">
                                                        {child.title}
                                                      </p>
                                                      <p className="text-gray-500 text-xs">
                                                        {child.description}
                                                      </p>
                                                    </div>
                                                  </div>
                                                </NextLink>
                                              )}
                                            </Menu.Item>
                                          )
                                        )}
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </div>
                            </Menu>
                          )}
                        </React.Fragment>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
