import React from "react";
import { Fragment } from "react";
import ai3 from "../../public/robot-svgrepo-com.svg";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import ai4 from "../../public/robot-svgrepo-com-2.svg";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import ai5 from "../../public/BotsDeTrading-3.png";
import arrow from "../../public/up-arrow-svgrepo-com.svg";
import fin888 from "../../public/Fin888.png";
export interface NavigationInterface {
  name: string;
  current: boolean;
  href?: string;
  childs?: NavChild[];
}
export interface NavChild {
  title: string;
  description: string;
  icon: any;
  href: string;
  fullText: string;
  rendement: string;
}
export const navigation: NavigationInterface[] = [
  // { name: "Accueil", current: false, href: "/" },
  {
    name: "Robots de trading",
    current: true,
    childs: [
      {
        title: "Auto trade gold 5.0",
        description: "marché de l'or",
        fullText:
          "Autotrade Gold 5.0 est un robot de trading qui trade l'or (XAU/USD) avec une gestion à faible risque et une stratégie de scalping à court terme",
        // "AutoTrade Gold 5.0 est un robot de trading indonésien qui fonctionne automatiquement sur le marché des ETF (paire XAU/USD).",
        icon: ai5,
        href: "/autotradegold",
        rendement: "10%-15%",
      },
      {
        title: "Fin888",
        description: "marché du forex",
        fullText:
          "Fin888 est un robot de trading automatique qui trade le marché du forex. avec une gestion à faible risque et une stratégie de scalping à court terme",
        icon: fin888,
        href: "/Samtrade",
        rendement: "8%-10%",
      },
    ],
  },
];
const Navigation = () => {
  const { asPath } = useRouter();
  const IsCurrentPage = (item: string): boolean => {
    return asPath.toLowerCase() === item.toLowerCase();
  };
  return (
    <div>
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? <p>icon</p> : <p>icon</p>}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                    {/* <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                      alt="Workflow"
                    /> */}
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

export default Navigation;

function NextLink(props: any) {
  const { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}
