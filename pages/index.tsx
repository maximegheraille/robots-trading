import type { NextPage } from "next";
import Image from "next/image";
import ai from "../public/circle-scatter-haikei.svg";
import ai2 from "../public/undraw_robotics_kep0.svg";
import ai3 from "../public/blob-scene-haikei.svg";
import ai4 from "../public/test.svg";
import ai5 from "../public/smart-money-svgrepo-com.svg";
import ai6 from "../public/money-svgrepo-com-2.svg";
import money from "../public/money-svgrepo-com.svg";
import money2 from "../public/growth-svgrepo-com.svg";
import smart from "../public/brainstorm-svgrepo-com.svg";
import cash from "../public/cash-svgrepo-com.svg";
import compte from "../public/online-shop-svgrepo-com.svg";
import deposit from "../public/deposit.svg";
import cashout from "../public/cashout.svg";
import warning from "../public/duotone-user-warning-svgrepo-com.svg";
import Link from "next/link";
import Navigation, {
  NavChild,
  navigation,
  NavigationInterface,
} from "../components/navigation/Navigation";
import React from "react";
interface Card {
  title: string;
  icon: any;
  description: string;
  className?: string;
}
const Home: NextPage = () => {
  const cards: Card[] = [
    {
      title: "Pas de connaissance requise",
      icon: smart,
      description:
        "Déposez votre capital, le robot fera le reste de façon prudente.",
    },
    {
      title: "Gains réguliers",
      icon: money2,
      description:
        "Récupérez vos gains régulièrement et l'ensemble de vos fonds à tout moment.",
    },
    {
      title: "Presque rien à faire !",
      icon: ai6,
      description:
        "Inscrivez-vous, déposez vos fonds et laissez trader les robots à votre place.",
      className: "w-24",
    },
  ];

  const aide: { title: string; description: string; icon: any }[] = [
    {
      title: "Compte",
      description: "La creation d'un compte sur chaque robots",
      icon: compte,
    },
    {
      title: "Depots",
      description: "Un depot de capital sur votre compte pour votre robots",
      icon: deposit,
    },
    {
      title: "Retraits",
      description: "Un retrait de capital de votre compte",
      icon: cashout,
    },
  ];
  return (
    <div className="lg:p-0 pt-8 min-h-screen">
      <section className="p-4 flex-col-reverse flex bg-opacity-10 lg:flex-row max-w-7xl mx-auto">
        <div className=" lg:w-3/6 flex place-items-center flex-col max-w-7xl mx-auto lg:px-8">
          <p className="font-semibold text-4xl text-black mb-5 mt-10 text-left w-full">
            Robots de Trading
          </p>
          <div className="font-normal text-base text-gray-500 space-y-4">
            <p className="">
              Un robot de trading (aussi appelé « Expert Advisor ») est un
              logiciel dédié à la
              <span className="text-[#DF9622]"> pratique du trading.</span>
            </p>
            <p className="">
              C’est un outil automatisé permettant de passer automatiquement des
              ordres, par exemple sur le marché des options binaires, pour
              percevoir un
              <span className="text-[#DF9622]"> revenu passif.</span>
            </p>
            <p className="">
              Système propulsé par l'intelligence artificielle pour profiter du
              <span className="text-[#DF9622]"> trading automatisé </span>de
              manière passive, sécurisée.
            </p>
            <p>
              Nous sommes la pour vous monter comment créee votre compte,
              deposer de l'argent et faire des retraits. N'investissez que le
              montant que vous êtes prêt à perdre.
            </p>
            <div className="pt-4">
              <a
                href="#robots"
                className="rounded-lg px-4 py-2 bg-[#DF9622] text-white"
              >
                Commencer maintenant
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-3/6">
          <Image src={ai2} className="" />
        </div>
      </section>
      <section className="p-4 mt-5 lg:mt-20 py-10 max-w-7xl mx-auto">
        <h1 className="text-center text-4xl py-8 text-black font-bold">
          LES AVANTAGES ?
        </h1>
        <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-3 place-content-between pt-4">
          {cards.map((card: Card, index: number) => (
            <div
              key={index}
              className="lg:w-96 lg:h-72 shadow-xl p-4 lg:p-10 lg:justify-around rounded-lg  text-center flex flex-col border border-[#DF9622] "
              //className="w-96 bg-gray-600 rounded-lg text-white text-center p-4 space-y-2"
            >
              <div
                className={`${
                  card.className === undefined ? "w-32" : card.className
                }  h-36 flex place-content-center align-middle text-center items-center mx-auto`}
              >
                <Image src={card.icon} className="" />
              </div>
              <div className="flex-grow space-y-2">
                <p className="text-2xl font-bold">{card.title}</p>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="p-4 py-5 lg:py-10" id="robots">
        <h1 className="text-center text-4xl py-8 text-black font-bold">
          LES ROBOTS
        </h1>
        <div className="text-left lg:text-center text-lg text-gray-500 pb-8 space-y-2 font-semibold">
          <p className="">
            Chaque robot proposés sur le site à été testé depuis plusieurs moi.
          </p>
          <p className="">
            Nous ne proposong pas de robots non testé par notre équipe.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-3 lg:space-y-0 lg:flex-row lg:space-x-8 mx-auto place-content-center">
          {navigation.map((nav: NavigationInterface, index: number) => (
            <React.Fragment key={index}>
              {nav.childs?.map((nav: NavChild, index: number) => (
                <div
                  className="rounded-lg w-64 lg:w-64 p-4 h-[34rem] flex flex-col bg-[#1F2937] hover:-translate-y-3 hover:shadow-lg transition-all -translate-y-0"
                  key={index}
                >
                  <div className="flex items-center w-3/6 space-x-2 bg-[#ad1a3d] rounded-2xl place-content-center text-white px-2 py-1 font-bold">
                    <div className="w-1/6 flex items-center ">
                      <Image src={cash} />
                    </div>
                    <p className="">{nav.rendement}</p>
                  </div>
                  <div className="flex w-15 mx-auto h-3/6">
                    <Image src={nav.icon} />
                  </div>
                  <div className="text-center h-3/6 flex place-content-around flex-col">
                    <p className="text-2xl font-bold text-white">{nav.title}</p>
                    <p className="text-gray-300">{nav.fullText}</p>
                    <Link href="/fin888">
                      <a className="rounded-lg px-4 py-2 bg-[#DF9622] text-white">
                        création du compte
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>
      <section className="p-4 bg-cover bg-center bg-no-repeat bg-hero-pattern4 mt-20 py-10">
        <div className="py-8 space-y-4">
          <h1 className="text-center text-4xl text-white font-bold">
            NOUS VOUS AIDONS
          </h1>
          <p className="text-center text-gray-300 lg:text-gray-400">
            nous vous montrons comment faire toutes les etapes d'un rotob, ceci
            vous permetera de savoir tout faire et de n'etre jamais bloqué
          </p>
        </div>
        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3 place-content-center pt-4 pb-20">
          {aide.map((card: Card, index: number) => (
            <div
              key={index}
              //  className="shadow-xl justify-around rounded-full p-10 text-center flex flex-col border border-black w-72 h-72"
              className="w-80 lg:w-96 space-y-2 bg-[#4B5563] rounded-lg text-white text-center p-4"
            >
              <div
                className={`w-32 h-36 flex place-content-center align-middle text-center items-center mx-auto`}
              >
                <Image src={card.icon} className="" />
              </div>
              <div className="flex-grow space-y-2">
                <p className="text-2xl font-bold">{card.title}</p>
                <p className="text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="p-4 bg-gray-600 pb-4 pt-10">
        <div className="flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-7 max-w-7xl mx-auto flex place-content-center items-center">
          <div className="">
            <div
              className={`w-20 flex place-content-center align-middle text-center items-center mx-auto`}
            >
              <Image src={warning} className="" />
            </div>
          </div>
          <p className="text-center text-white">
            Nous avons pour objectif de vous offrir des tutoriels d'inscription,
            de dépôts et retraits de capital pour différents robots de trading.
            Nous ne sommes pas un conseiller financier. Il vous est fort
            recommandé de faire vos propres vérifications avant d'investir sur
            un des robots. Le site robot-trading.club ne serra en aucun cas
            responsabilité pour toutes pertes liées à l'investissement.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
