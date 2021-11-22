import { useRouter } from "next/dist/client/router";
import React from "react";
import { NavigationInterface } from "../Navigation";
import Link from "next/link";
import logo from "../../../public/BotsDeTrading-3.png";
import Image from "next/image";
import arrow from "../../../public/up-arrow-svgrepo-com.svg";
import { Disclosure, Transition } from "@headlessui/react";

interface side_nav_props {
  navigation: NavigationInterface[];
  openSideNav: boolean;
  setOpenSideNav: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
const Sidenav = ({
  navigation,
  openSideNav,
  setOpenSideNav,
}: side_nav_props) => {
  const { asPath } = useRouter();

  return (
    <>
      <div
        onClick={() => {
          setOpenSideNav(!openSideNav);
        }}
        className={`${
          openSideNav ? "block w-screen" : "hidden"
        } fixed inset-0 z-10 bg-transparent`}
      ></div>

      <section
        className={`w-60 bg-[#2d2180] ${
          openSideNav ? "-translate-x-0" : "-translate-x-full "
        } overflow-x-hidden min-h-screen h-auto transition-all duration-300 transform fixed inset-y-0 left-0 z-20 shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none`}
      >
        <div className="w-full left-0">
          <div className="w-full">
            <div className={`flex flex-col text-center bg-white`}>
              <Link href="/">
                <a
                  className={`w-20 mx-auto`}
                  onClick={() => setOpenSideNav(!openSideNav)}
                >
                  <Image src={logo} className="" alt="logo" />
                </a>
              </Link>
              <div className="w-full text-center font-bold">
                <p className="">Robots-trading.club</p>
              </div>
            </div>
            <div className={`w-full pt-7 pb-2`}>
              {navigation.map((item, index: number) => (
                <React.Fragment key={index}>
                  {!item.childs && item.href ? (
                    <Link href={item.href.toLowerCase()}>
                      <a onClick={() => setOpenSideNav(!openSideNav)}>
                        <div
                          className={`pt-2 flex items-center pb-2 content-center h-full ${
                            asPath.toLowerCase().toLocaleLowerCase() ===
                            item.href.toLowerCase()
                              ? "bg-[#10045f] text-white"
                              : "text-gray-300"
                          }`}
                        >
                          <span aria-hidden="true" className="ml-4 mr-2"></span>
                          <span className="ml-1 text-white text-sm group">
                            {item.name}
                          </span>
                        </div>
                      </a>
                    </Link>
                  ) : (
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="mt-2 flex items-center w-full pb-2">
                            <span
                              aria-hidden="true"
                              className="ml-4 mr-2"
                            ></span>
                            <span className="ml text-white text-sm">
                              {item.name}
                            </span>
                            <span
                              className="ml-4 flex align-middle w-5"
                              aria-hidden="true"
                            >
                              <Image
                                src={arrow}
                                className={`text-white ${
                                  open
                                    ? "rotate-180 transition-all"
                                    : "rotate-0 transition-all "
                                }`}
                              />
                            </span>
                          </Disclosure.Button>
                          <Transition
                            enter="transition-all duration-300 ease-in-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition-all duration-300 ease-in-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Disclosure.Panel
                              as="div"
                              className={`overflow-hidden transition-all duration-300 ease-in-out w-full space-y-1`}
                              style={{ backgroundColor: "rgb(38 28 109)" }}
                              static={true}
                            >
                              {item.childs?.map((item, index: number) => (
                                <Link
                                  href={item.href.toLowerCase()}
                                  key={index}
                                >
                                  <a className={` w-full`}>
                                    <div
                                      className={`${
                                        asPath.toLowerCase() ===
                                        item.href.toLowerCase()
                                          ? "bg-[#10045f] text-white"
                                          : "text-gray-300"
                                      } block p-2 text-sm text-white px-7`}
                                      onClick={() =>
                                        setOpenSideNav(!openSideNav)
                                      }
                                    >
                                      {item.title}
                                    </div>
                                  </a>
                                </Link>
                              ))}
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidenav;
