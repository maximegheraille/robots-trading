import type { NextPage } from "next";
import Image from "next/image";
import ai from "../public/ai.svg";
import ai2 from "../public/undraw_robotics_kep0.svg";

const Home: NextPage = () => {
  return (
    <div>
      {/* <Image src={ai} /> */}
      <section className="flex">
        <div className="w-3/6 flex place-items-center flex-col">
          <p className="font-semibold text-2xl text-black my-5">
            Robots de Trading
          </p>
          <p className="font-semibold text-lg text-gray-900">
            Un robot de trading (aussi appelé « Expert Advisor ») est un
            logiciel dédié à la pratique du trading.
            <br />
            <br /> C’est un outil automatisé permettant de passer
            automatiquement des ordres, par exemple sur le marché des options
            binaires. <br />
            <br />
            Programmé pour suivre les instructions ou la stratégie d’un
            investisseur, le robot trading est opérationnel 24h/24 et 7j/7.
          </p>
        </div>
        <div className="w-3/6">
          <Image src={ai2} className="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
