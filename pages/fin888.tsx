import React from "react";
import compte from "../public/online-shop-svgrepo-com.svg";
import deposit from "../public/deposit.svg";
import cashout from "../public/cashout.svg";
import computer from "../public/computer-svgrepo-com.svg";
import Image from "next/image";
import ai5 from "../public/BotsDeTrading-3.png";
interface tuto {
  title?: string;
  description?: string;
  icon: any;
  to: string;
}
const Fin888 = () => {
  const tuto: tuto[] = [
    {
      title: "La creation d'un compte sur chaque robots",
      description: "La creation d'un compte sur chaque robots",
      icon: computer,
      to: "compte",
    },
    {
      title: "Un depot de capital sur votre compte pour votre robots",
      description: "Un depot de capital sur votre compte pour votre robots",
      icon: deposit,
      to: "depots",
    },
    {
      title: "Un retrait de capital de votre compte",
      description: "Un retrait de capital de votre compte",
      icon: cashout,
      to: "retrait",
    },
  ];
  const infos = [
    { title: "Lincence niveau 1 pour le robots", prix: "110$" },
    { title: "Capital pour le trading", prix: "112$" },
    { title: "Couts total de l'investisement", prix: "250$" },
    { title: "Rendement moyen par mois", prix: "15%" },
  ];
  const license = [
    {
      title: "pour un capital déposé compris entre 100 et 500 $.",
      prix: "112$",
    },
    { title: "un capital  entre 100 et 5,000 $.", prix: "224$" },
    { title: "un capital entre 100 et 30,000 $.", prix: "560$" },
    { title: "un capital entre 100 et 1,000,000 $.", prix: "2800$" },
    { title: "un capital minimum de 1,000,000 $.", prix: "3920$" },
  ];
  return (
    <div className="pt-8 h-screen ">
      <div className="pb-5">
        <section className="text-center flex-col lg:flex-row max-w-7xl mx-auto">
          <div className="flex place-content-center justify-around items-center">
            <div className="flex flex-col text-left w-6/12">
              <div className="text-5xl py-8 text-black font-medium space-y-2 z-50">
                <h1 className="">AutoTrade Gold 5.0</h1>
                <h1 className="text-[#F5CD44]">Trading Robot</h1>
              </div>
              <div className="pr-24 font-normal text-gray-500">
                <p>
                  Autotrade Gold 5.0 est un robot trading axé sur l’Or. Il a été
                  dévoloppé par la societe PT.SDFI, une compagnie Indonésienne
                  situé a Jakarta. Le robot vise des profits de 0.5% a 1.5% par
                  jour de votre capital total. Le robot trade en mode{" "}
                  <span className="italic">scalpin</span>. <br /> <br /> Un
                  seule trade a la fois serra excuté et chaque trade ne peux pas
                  perde plus de 3% de votre capital, apres cella il serra fermé
                  automatiquement.
                </p>
              </div>
            </div>
            <div className="w-4/12">
              <Image src={ai5} />
            </div>
          </div>
        </section>
      </div>
      <section>
        <h1 className="text-center text-3xl py-8 text-black font-bold ">
          INFOS PRATIQUES
        </h1>
        <div className="flex place-content-evenly max-w-7xl mx-auto pb-16">
          {infos.map((info: { title: string; prix: string }, index: number) => (
            <div className="shadow-xl justify-around rounded-full p-10 text-center flex flex-col border border-[#DF9622] w-48 h-48">
              <p className="text-2xl font-bold">
                <span className="text-gray-500">+-</span> {info.prix}
              </p>
              <p className="text">{info.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="pt-20 bg-hero-pattern2 bg-left">
        <div className="">
          <div className="">
            <h1 className="text-center text-4xl py-8 text-black font-bold">
              LES LICENCE
            </h1>
            <div className="flex flex-wrap place-content-evenly max-w-7xl mx-auto pb-4 item">
              {license.map(
                (license: { title: string; prix: string }, index: number) => (
                  <div className="p-4 shadow-lg w-52 space-y-4 text-center bg-white rounded-xl">
                    <div className="flex text-left text-white place-content-start  w-20">
                      <p className="font-medium rounded-full text-center border-black bg-[#DF9622] w-full">
                        licence {index + 1}
                      </p>
                    </div>
                    <p className="text-3xl font-bold">{license.prix}</p>
                    <p className=" text-gray-500">{license.title}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="mt-20 text-center bg-opacity-10 flex-col lg:flex-row max-w-7xl mx-auto">
        <h1 className="text-center text-4xl py-8 text-black font-bold">
          LES TUTORIELS
        </h1>
        <div className="flex place-content-evenly w-full pb-5">
          {tuto.map((card: tuto, index: number) => (
            <div
              key={index}
              className="w-64 bg-[#D7D7D8]s bg-[#999999]text-white bg-white text-black shadow-xl  rounded-xl stext-white text-center p-4 space-y-2"
              id={card.title}
            >
              <div
                className={`w-12 h-20 flex place-content-center align-middle text-center items-center mx-auto`}
              >
                <Image src={card.icon} className="" />
              </div>
              <div className="flex-grow space-y-2">
                <p className="text-2xl font-normal h-28">{card.title}</p>
              </div>
              <button
                className="rounded-xl px-4 py-2 bg-[#DF9622] text-white"
                onClick={() => {
                  document.getElementById(card.to)?.scrollIntoView();
                }}
              >
                Voir
              </button>
            </div>
          ))}
        </div>
      </div>

      <section>
        <h1
          className="text-center text-4xl py-8 text-black font-bold"
          id="compte"
        >
          CREATION DU COMPTE
        </h1>
      </section>
      <section>
        <h1
          className="text-center text-4xl py-8 text-black font-bold"
          id="depots"
        >
          DEPOTS DE CAPITAL
        </h1>
      </section>
      <section>
        <h1
          className="text-center text-4xl py-8 text-black font-bold"
          id="retrait"
        >
          RETRAIT DE CAPITAL
        </h1>
      </section>
    </div>
  );
};

export default Fin888;
