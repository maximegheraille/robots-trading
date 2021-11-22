import React, { useState } from "react";
import Link from "next/link";
import ai5 from "../../public/BotsDeTrading-3.png";
import fin888 from "../../public/Fin888.png";
import Navbar from "./navbar/Navbar";
import Sidenav from "./sidenav/Sidenav";
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
        href: "/fin888",
        rendement: "8%-10%",
      },
    ],
  },
];
const Navigation = () => {
  const [openSideNav, setOpenSideNav] = useState<boolean>(false);
  return (
    <div>
      <div className="w-full">
        <Navbar
          navigation={navigation}
          openSideNav={openSideNav}
          setOpenSideNav={setOpenSideNav}
        />
        <div className="lg:hidden"></div>
        <Sidenav
          navigation={navigation}
          openSideNav={openSideNav}
          setOpenSideNav={setOpenSideNav}
        />
      </div>
    </div>
  );
};

export default Navigation;

export function NextLink(props: any) {
  const { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}
