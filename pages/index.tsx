import type { NextPage } from "next";
import Image from "next/image";
import ai2 from "../public/undraw_robotics_kep0.svg";
import ai6 from "../public/money-svgrepo-com-2.svg";
import money2 from "../public/growth-svgrepo-com.svg";
import smart from "../public/brainstorm-svgrepo-com.svg";
import cash from "../public/cash-svgrepo-com.svg";
import compte from "../public/online-shop-svgrepo-com.svg";
import deposit from "../public/deposit.svg";
import cashout from "../public/cashout.svg";
import warning from "../public/warning.svg";
import checked from "../public/checked.svg";

import Link from "next/link";
import {
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
      title: "Aucune expertise requise",
      icon: smart,
      description:
        "Pas besoin d'être un expert en Trading ou en Finance pour profiter de cette solution. Elle est ouverte à tous !",
      className: "w-20 h-28",
    },
    {
      title: "C'est le robot qui bosse !",
      icon: ai6,
      description:
        "Inscrivez-vous, déposez vos fonds et laissez trader les robots à votre place.",
      className: "w-24 h-28",
    },
    {
      title: "Gains réguliers",
      icon: money2,
      description:
        "Récupérez vos gains quand vous le désirez, même votre capital de départ peut être récupéré à tout moment",
      className: "w-24 h-28",
    },
  ];

  const aide: { title: string; description: string; icon: any }[] = [
    {
      title: "Choisir votre robot",
      description: "Un retrait de capital de votre compte",
      icon: checked,
    },
    {
      title: "Créer votre compte",
      description: "La création d'un compte sur chaque robots",
      icon: checked,
    },
    {
      title: "Deposer votre capital",
      description: "Un depot de capital sur votre compte pour votre robots",
      icon: checked,
    },
    {
      title: "Retirer vos gains",
      description: "Un retrait de capital de votre compte",
      icon: checked,
    },
  ];
  return (
    <div className="lg:p-0 lg:pt-8 min-h-screen">
      <section className="p-4 flex-col-reverse flex bg-opacity-10 lg:flex-row max-w-7xl mx-auto">
        <div className=" lg:w-3/6 flex place-items-center flex-col max-w-7xl mx-auto lg:px-6">
          <p className="font-semibold text-4xl text-black mb-5 mt-10 text-left w-full">
            Qu'est-ce qu'un Robot de Trading ?
          </p>
          <div className="font-normal text-base text-gray-500 space-y-4">
            <p className="">
              Un Robot de Trading est algorithme informatique capable d’analyser
              le marché et d’ouvrir ou clôturer des positions de manière
              <span className="text-[#DF9622]">&nbsp;autonome&nbsp;</span>en
              fonction des tendances observées.
            </p>
            <p className="">
              Le gros avantage (pour son utilisateur) est qu'il ne faut donc
              aucune connaissance en trading pour l'utiliser et générer ainsi
              très facilement
              <span className="text-[#DF9622]">
                &nbsp;des revenus passifs&nbsp;
              </span>
              .
            </p>
            <p className="">
              C'est le Robot qui décidera du type d'ordre à passer et à quel
              moment le passer pour
              <span className="text-[#DF9622]"> maximiser vos revenus.</span>
            </p>
            <p>
              Les ordres (de type « scalping ») passés par ces robots ne durent
              que quelques minutes et offrent un rendement moyen
              particulièrement élevé.
            </p>
            <p>
              Nous avons testé différents robots de ce type pendant plusieurs
              mois et ce site propose ceux qui ont le plus retenu notre
              attention.
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
      <section className="p-4 lg:p-0 mt-5 lg:mt-20 py-10 max-w-7xl mx-auto">
        <h1 className="text-center text-4xl py-8 text-black font-bold">
          Quels sont ses avantages ?
        </h1>
        <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-3 place-content-between pt-4">
          {cards.map((card: Card, index: number) => (
            <div
              key={index}
              className="lg:w-96 lg:h-72 shadow-xl p-4 lg:p-10 lg:justify-around rounded-lg  text-center flex flex-col border border-[#DF9622] "
            >
              <div
                className={`${
                  card.className === undefined ? "w-32 h-36" : card.className
                }   flex place-content-center align-middle text-center items-center mx-auto`}
              >
                <Image src={card.icon} className="" />
              </div>
              <div className="flex-grow space-y-2 ">
                <p className="text-2xl font-bold">{card.title}</p>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="p-4 lg:p-0 bg-cover bg-center bg-no-repeat bg-hero-pattern4 mt-20 py-10">
        <div className="py-8 space-y-4">
          <h1 className="text-center text-4xl text-white font-bold">
            Comment pouvons-nous vous aider ?
          </h1>
          <p className="text-center text-gray-300 lg:text-gray-300">
            Ce site vous explique en details toutes les étapes importantes.
          </p>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col items-center lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3 place-content-between pt-4 pb-20">
          {aide.map((card: Card, index: number) => (
            <div
              key={index}
              className="w-80 h-[15rem] lg:w-80 space-y-2 bg-[#4B5563] rounded-lg text-white text-center p-4"
            >
              <div
                className={`w-24 h-36 flex place-content-center align-middle text-center items-center mx-auto`}
              >
                <Image src={card.icon} className="" />
              </div>
              <div className="flex-grow space-y-2">
                <p className="text-2xl font-bold">
                  <span className="text-lg">{index}.&nbsp;</span>
                  {card.title}
                </p>
                {/* <p className="text-gray-300">{card.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="p-4 lg:p-0 py-5 lg:py-10" id="robots">
        <h1 className="text-center text-4xl py-8 text-black font-bold">
          Choisissez votre Robot
        </h1>
        <div className="text-left lg:text-center text-lg text-gray-500 pb-8 space-y-2 font-semibold">
          <p className="">
            Chaque robot proposé sur le site a été testé depuis plusieurs moi.{" "}
          </p>
          <p className="">
            Nous ne proposons pas de robots non testés par notre équipe.{" "}
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
                    <Link href="/autotradegold">
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
      <section className="p-4 bg-gray-600 pt-10 pb-6">
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
