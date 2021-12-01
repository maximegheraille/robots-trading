import React from "react";
import deposit from "../public/deposit.svg";
import cashout from "../public/cashout.svg";
import computer from "../public/computer-svgrepo-com.svg";
import Image from "next/image";
import ai5 from "../public/BotsDeTrading-3.png";
import part1 from "../public/autotradegold/part1.png";
import part2 from "../public/autotradegold/part2.png";
import part3 from "../public/autotradegold/part3.png";
import part4 from "../public/autotradegold/part4.png";
import part5 from "../public/autotradegold/part5.png";
import part6 from "../public/autotradegold/part6.png";
import part7 from "../public/autotradegold/part7.png";
import part8 from "../public/autotradegold/part8.png";
import part9 from "../public/autotradegold/part9.png";
import part9_2 from "../public/autotradegold/part9_2.png";
import part10 from "../public/autotradegold/part10.png";
import part10_2 from "../public/autotradegold/part10_2.png";
import part2_2 from "../public/autotradegold/part2_2.png";
import part3_1 from "../public/autotradegold/part3_1.png";
import iphone from "../public/autotradegold/iphone.svg";
import retraits_atg from "../public/autotradegold/retraits.png";

interface tuto {
  title?: string;
  description?: string;
  icon: any;
  to: string;
}
const autotradegold = () => {
  const tuto: tuto[] = [
    {
      title: "La création d'un compte",
      icon: computer,
      to: "compte",
    },
    {
      title: "Un dépôt de capital sur votre compte",
      icon: deposit,
      to: "depots",
    },
    {
      title: "Un retrait de capital de votre compte",
      icon: cashout,
      to: "retrait",
    },
    {
      title: "Voir les trades en live via Metatrader 4",
      icon: iphone,
      to: "trades",
    },
  ];
  const infos = [
    { title: "Coût de la licence la moins chère", prix: "112$" },
    { title: "Capital minimum", prix: "100$" },
    { title: "Cout total de l'investissement minimum", prix: "212$" },
    { title: "Rendement moyen par mois", prix: "+-15%" },
  ];
  const license = [
    {
      title: "pour un capital déposé compris entre 100 et 500$.",
      prix: "112$",
    },
    { title: "un capital  entre 100 et 5,000$.", prix: "224$" },
    { title: "un capital entre 100 et 30,000$.", prix: "560$" },
    { title: "un capital entre 100 et 1,000,000$.", prix: "2800$" },
    { title: "un capital minimum de 1,000,000$.", prix: "3920$" },
  ];
  return (
    <div className="pt-8 p-2 lg:p-0 mx-auto">
      <div className="pb-5">
        <section className="text-center flex-col lg:flex-row max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row place-content-center justify-around items-center">
            <div className="flex flex-col text-left lg:w-6/12">
              <div className="text-5xl py-8 text-black font-medium space-y-2">
                <h1 className="">AutoTrade Gold 5.0</h1>
                <h1 className="text-[#F5CD44]">Trading Robot</h1>
              </div>
              <div className="lg:pr-24 font-normal text-gray-500 space-y-2">
                <p>
                  Autotrade gold 5.0 est un robot trading axé sur l’Or. Il a été
                  dévoloppé par la société PT. SDFI, une compagnie Indonésienne
                  situé à Jakarta.
                </p>
                <p>
                  Le robot vise des profits de 0.5% à 1.5% par jour de votre
                  capital total et trade en mode
                  <span className="italic">&nbsp;scalpin</span>.
                </p>
                <p>
                  Le robot ne lancera qu'un seule trade par jour, sauf si
                  celui-ci est perdant. Dans ce cas il lancera un second trade
                  pour essayer de récupérer la perte du premier.
                </p>

                <p>
                  Un trade ne pourra pas perde plus de 3% de votre capital.
                  (stop-loss à 3%)
                </p>
                <p></p>
              </div>
            </div>
            <div className="w-6/12 lg:w-4/12">
              <Image src={ai5} />
            </div>
          </div>
        </section>
      </div>
      <section>
        <h1 className="text-center text-3xl py-8 text-black font-bold font">
          LE MINIMUM REQUIS POUR DEBUTER
        </h1>
        <div
          className="flex flex-wrap lg:flex-nowrap space-y-4 lg:space-y-0
         flex-row place-content-evenly max-w-7xl mx-auto pb-16"
        >
          {infos.map((info: { title: string; prix: string }, index: number) => (
            <div className="shadow-xl justify-around rounded-full p-10 text-center flex flex-col border border-[#DF9622] w-48 h-48">
              <p className="text-2xl font-bold">
                <span className="text-gray-500"></span> {info.prix}
              </p>
              <p className="text">{info.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="pt-20 lg:bg-hero-pattern2 bg-repeat-x">
        <div className="">
          <div className="">
            <h1 className="text-center text-4xl py-8 text-black font-bold">
              LES DIFFERENTS LICENCES DISPONIBLES
            </h1>
            <div className="flex flex-wrap lg:flex-nowrap space-y-4 lg:space-y-0 place-content-evenly max-w-7xl mx-auto pb-4 item">
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
      <div className="pt-40 text-center bg-opacity-10 flex-col lg:flex-row max-w-7xl mx-auto">
        <h1 className="text-center text-4xl py-8 text-black font-bold">
          LES TUTORIELS
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap space-y-4 lg:space-y-0 place-content-evenly w-full pb-5">
          {tuto.map((card: tuto, index: number) => (
            <div
              key={index}
              className="w-64 bg-[#D7D7D8]s bg-[#999999]text-white bg-white/ border-[#DF9622] border text-black shadow-xl  rounded-xl stext-white text-center p-4 space-y-2"
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

      <section className="pt-40 max-w-7xl mx-auto">
        <h1
          className="text-center text-4xl py-8 text-black font-bold"
          id="compte"
        >
          CREATION DU COMPTE
        </h1>
        <div className="max-w-7xl mx-auto flex flex-col">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            Etape 1
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-10/12">
              <h1 className="text-xl text-black font-bold pb-4">
                CREATION DU COMPTE
              </h1>
              <p>
                Pour la création d'un compte Auto-tradegold, il vous faut
                obligatoirement un "IB référence" (parrain).
              </p>
              <p>
                Vous pouvez donc utiliser notre
                <span className="text-[#DF9622] font-semibold">
                  &nbsp;"IB Refference"
                </span>
                : IB75214800
              </p>
              <p>
                Cliquez ensuite sur le bouton "Next" et completer les infos de
                base demandées.
              </p>
              <div className="pt-4">
                <a
                  href="https://pantheratrade.live/register?r=IB75214800"
                  target="_blank"
                  rel="noopener"
                  className="rounded-lg px-4 py-2 bg-[#DF9622] text-white"
                >
                  URL d'inscription
                </a>
              </div>

              <p className="pt-4">
                Après la création de votre compte, il va falloir le
                <span className="text-[#DF9622] font-semibold">
                  &nbsp;valider&nbsp;
                </span>
                via le bouton affiché sur la page d'accueil.
              </p>
            </div>
            <div className="">
              <Image src={part1} className="rounded-lg" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            Etape 2
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-10/12">
              <h1 className="text-xl text-black font-bold pb-4">
                VALIDATION DU COMPTE
              </h1>

              <p>
                <span className="text-[#DF9622] font-semibold">Bank Name</span>:
                Sélectionnez "Other Bank" (sauf si vous habitez en Indonésie).
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Bank Account Name
                </span>
                : Indiquez le nom de votre banque.
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Bank Account Number
                </span>
                : Indiquez votre numéro de compte bancaire.
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Crypto Currency
                </span>
                : Sélectionnez&nbsp;
                <span className="text-black font-bold">"Enabled"</span>
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Crypto Account
                </span>
                : Sélectionnez USDT (USDT est une crypto stable sans fluctuation
                car adossée au dollar).
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Crypto Address
                </span>
                : Entrez votre adresse crypto USDT (avec le réseau Ethereum
                ERC-20). C'est sur ce Wallet que seront envoyés vos retraits
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">ID Card</span>:
                Télécharger une photo de votre carte d'identité sur&nbsp;
                <a rel="noopener" href="https://imglink.io/">
                  imglink.io&nbsp;
                </a>
                et poster l'URL dans le champ
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Selfie with ID Card
                </span>
                : Téléchargez une photo de votre carte d'identité sur
                <a rel="noopener" href="https://imglink.io/">
                  &nbsp;imglink.io&nbsp;
                </a>
                (en cliquant sur le lien proposé) et postez l'URL dans le champ.
              </p>
            </div>
            <div className="">
              <Image src={part2} className="rounded-lg" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            Etape 3
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-7/12">
              <h1 className="text-xl text-black font-bold pb-4">
                OUVERTURE DU COMPTE TRADING
              </h1>
              <p>
                Pendant que l'équipe de Panthera valide votre compte vous pouvez
                déjà activer votre compte trading via
                <a
                  href="https://pantheratrade.live/user/open_live_account"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="text-[#DF9622]">
                    &nbsp;Trading Account &gt; Open Live Account.
                  </span>
                </a>
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">Broker</span>:
                LegoMarket LCC
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Account Type
                </span>
                : GOLD
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">Leverage</span>:
                1:500
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Real / Demo
                </span>
                : Real
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Create MT4 Password&nbsp;
                </span>
                : Vous pouvez choisir votre mot de passe à utiliser pour le
                compte de trading.
              </p>
            </div>
            <div className="">
              <Image src={part3} className="rounded-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            Etape 4
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-6/12">
              <h1 className="text-xl text-black font-bold pb-4">
                INSCRIPTION SUR
                <span className="text-[#DF9622]">&nbsp;PANSAKA&nbsp;</span>POUR
                GERER VOTRE LICENCE AUTO TRADE GOLD 5.0
              </h1>
              <p>
                <span className="text-[#DF9622] font-semibold">Refferal</span>:
                10004621
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Select Crypto
                </span>
                : USDT (ou la crypto de votre choix)
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Crypto Address
                </span>
                : Introduisez l'adresse de votre wallet USDT (ou celui de la
                crypto de votre choix)
              </p>
              <div className="pt-4">
                <a
                  href="https://pansaka.co.id/?r=10004621"
                  target="_blank"
                  rel="noopener"
                  className="rounded-lg px-4 py-2 bg-[#DF9622] text-white"
                >
                  URL D'INSCRIPTION
                </a>
              </div>
            </div>
            <div className="">
              <Image src={part4} className="rounded-lg" />
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            Etape 5
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-9/12">
              <h1 className="text-xl text-black font-bold pb-4">
                ACHETER VOTRE LICENSE
              </h1>
              <p>
                Pour acheter votre licence (sur base du capital maximum que vous
                voulez déposer), sélectionnez dans le menu
                <a
                  href="https://pansaka.co.id/panel/upgrade-special.php"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="text-[#DF9622]">
                    &nbsp;Special Program &gt; Buy Future Package
                  </span>
                </a>
                .
              </p>
              <p>
                Pour sélection votre license mettez le bouton de la license sur
                "on" et cliquer sur "checkout"
              </p>
            </div>
            <div className="">
              <Image src={part5} className="rounded-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            Etape 6
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-7/12">
              <h1 className="text-xl text-black font-bold pb-4">
                COFIRMATION DU PAYMENT EN CRYPTO
              </h1>
              <ul className="list-decimal list-inside space-y-4">
                <li>
                  <span className="text-[#DF9622] font-semibold">
                    Cliquez sur le bouton Pilih Cara Pembayaran et sélectionez
                  </span>

                  <span className="italic">
                    &nbsp;Crypto Coin Currency&nbsp;
                  </span>
                </li>
                <li>
                  Apres cella sélectionez
                  <span className="italic">&nbsp;Proses Checkout&nbsp;</span>
                </li>
              </ul>
            </div>
            <div className="">
              <Image src={part6} className="rounded-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            Etape 7
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-7/12">
              <h1 className="text-xl text-black font-bold pb-4">
                DEMARER LE PAIEMENT
              </h1>

              <p>
                Cliquez sur le bouton&nbsp;
                <span className="italic text-[#DF9622] font-bold">
                  Pay Using CoinPayments
                </span>
              </p>
            </div>
            <div className="">
              <Image src={part7} className="rounded-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            Etape 8
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-11/12">
              <h1 className="text-xl text-black font-bold pb-4">
                GENERER LES INFOS DU PAIEMENT
              </h1>

              <p>
                <span className="italic text-[#DF9622] font-bold">
                  Select Coin:&nbsp;
                </span>
                Sélectionez
                <span className="italic">
                  &nbsp; Litecoin (LTC)&nbsp;{" "}
                </span>{" "}
                pour le faible coûts de transaction.
              </p>
              <p>
                Après avoir rempli les infos nécessaires, veuillez cliquer sur
                le bouton <span className="italic">Complete Checkout</span>.
              </p>
            </div>
            <div className="">
              <Image src={part8} className="rounded-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            Etape 9
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-full">
              <h1 className="text-xl text-black font-bold pb-4">
                ENOVYER LA CRYPTO POUR FINALISER LE PAIEMENT
              </h1>

              <p>
                Aller sur votre Exchange
                <a
                  href="https://www.binance.com/fr/my/wallet/account/main/withdrawal/crypto/LTC"
                  target="_blank"
                  rel="noopener"
                >
                  &nbsp;Binance&nbsp;
                </a>
                ou{" "}
                <a href="https://www.crypto.com" target="_blank" rel="noopener">
                  &nbsp;crypto.com&nbsp;
                </a>{" "}
                et faites un retrait/withdraw.
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Select Coin:&nbsp;
                </span>
                Sélectionez bien
                <span className="italic">&nbsp;Litecoin (LTC)&nbsp;</span>
              </p>

              <p>
                <span className="text-[#DF9622] font-semibold">
                  Withdraw to:
                </span>
                &nbsp; Indiquez l'adresse&nbsp;
                <span className="font-bold">EXACTE</span> (que vous aviez reçue
                dans l'étape précédente sur le site de CoinPayments).
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Network:&nbsp;
                </span>
                Selection Litecoin
                <span className="italic">&nbsp;Litecoin (LTC)&nbsp;</span>
              </p>
              <p>
                <span className="text-[#DF9622]">Withdraw amount:</span>&nbsp;
                Il faut bien tenir compte des frais de transaction. Si vous êtes
                sur Binance il faut par exemple prévoir{" "}
                <span className="font-bold italic">&nbsp;0,001&nbsp;</span> LTC
                en plus du montant demandé.
              </p>
              <p>Par example: requit 0.1428 LTC devient 0.1438 au final.</p>
              <p>
                Un email de confirmation de paiement vous sera envoyé à l'email
                indiqué dans l'étape précédente.
              </p>
            </div>
            <div className="pl-20">
              <Image src={part9} className="rounded-lg" />
              <Image src={part9_2} className="rounded-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            Etape 10
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-8/12">
              <h1 className="text-xl text-black font-bold pb-4">
                ASSOCIER LA LICENCE AVEC AUTO TRADE GOLD 5.0
              </h1>
              <p>
                Quelques minutes après le paiement vous allez recevoir un email
                d'atg-system.com contenant
                <span className="italic">&nbsp;Voucher Code&nbsp;</span>et
                <span className="italic">&nbsp;Voucher ID&nbsp;</span>
              </p>
              <p>
                Aller sur
                <a
                  href="https://atg-system.com/login"
                  target="_blank"
                  rel="noopener"
                  className="font-bold"
                >
                  &nbsp;Atg-system&nbsp;
                </a>
                et connectez-vous avec votre compte créé sur Pantheratrade.live
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Voucher ID:&nbsp;
                </span>
                Indiquer le
                <span className="italic">&nbsp;Voucher ID&nbsp;</span>
                reçu dans le mail de atg-system.com
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Voucher Code:&nbsp;
                </span>
                Indiquer le
                <span className="italic">&nbsp;Voucher code&nbsp;</span>
                reçu dans le mail de atg-system.com
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  MT4 Account&nbsp;
                </span>
                Sélectionnez bien
                <span className="italic">&nbsp;I have Trade Account.</span>
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Select Account:&nbsp;
                </span>
                Sélectionnez votre compte GOLD auquel vous voulez lier votre
                licence.
              </p>
              <p>
                Cliquer sur <span className="italic">Activate Now.</span>
              </p>
            </div>
            <div className="">
              <Image src={part10_2} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-40 max-w-7xl mx-auto">
        <h1
          className="text-center text-4xl py-8 text-black font-bold"
          id="depots"
        >
          DEPOT DE CAPITAL
        </h1>

        <div className="flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            Etape 1
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-8/12">
              <h1 className="text-xl text-black font-bold pb-4">
                DEPOTS DE CAPITAL SUR PANTHERATRADE.LIVE
              </h1>

              <p>
                Connectez-vous sur
                <a
                  href="https://pantheratrade.live/"
                  target="_blank"
                  rel="noopener"
                >
                  &nbsp;Pantheratrade.live&nbsp;
                </a>
                puis naviguez vers
                <span className="italic text-[#DF9622]">
                  <a
                    href="https://pantheratrade.live/user/deposit-fund"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="text-[#DF9622]">
                      &nbsp;Transaction &gt; Deposit&nbsp;
                    </span>
                  </a>
                </span>
                et sélectionnez
                <span className="italic"> &nbsp;CoinPayment&nbsp;;</span>
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Amount USD:&nbsp;
                </span>
                Iniquez le montant que vous voulez déposer sur le compte de
                trading.
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Deposit Target:&nbsp;
                </span>
                Sélectionez<span>&nbsp;Account&nbsp;</span>
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Select Account:&nbsp;
                </span>
                Sélectionnez votre compte Auto Trade Gold 5.0
              </p>
            </div>
            <div className="">
              <Image src={part2_2} className="rounded-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            Etape 2
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-10/12">
              <h1 className="text-xl text-black font-bold pb-4">
                REGLEMENT DU PAIEMENT
              </h1>

              <p>
                <span className="italic text-[#DF9622] font-bold">
                  Select Coin&nbsp;
                </span>
                Sélectionnez
                <span className="italic">Litecoin (LTC)</span> pour le faible
                coût de transaction.
              </p>
              <p>
                Après avoir rempli les infos personnelles nécessaires, veuillez
                cliquer sur le bouton
                <span className="italic">&nbsp;Complete Checkout</span>.
              </p>
            </div>
            <div className="">
              <Image src={part8} className="rounded-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            Etape 3
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-12/12">
              <h1 className="text-xl text-black font-bold pb-4">
                ENVOYER LA CRYPTO POUR FINALISER LE PAIEMENT
              </h1>

              <p>
                Aller sur votre Exchange
                <a
                  href="https://www.binance.com/fr/my/wallet/account/main/withdrawal/crypto/LTC"
                  target="_blank"
                  rel="noopener"
                >
                  &nbsp;Binance&nbsp;
                </a>
                ou{" "}
                <a
                  href="https://www.crypto.com.com/"
                  target="_blank"
                  rel="noopener"
                >
                  &nbsp;Binance&nbsp;
                </a>
                ) et faites un retrait/withdraw.
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Select Coin:&nbsp;
                </span>
                Sélectionnez
                <span className="italic">&nbsp;Litecoin (LTC)</span>
              </p>

              <p>
                <span className="text-[#DF9622] font-semibold">
                  &nbsp;Withdraw to:&nbsp;
                </span>
                Indiquez bien l'address
                <span className="font-bold">&nbsp;EXACTE&nbsp;</span> que vous
                aviez dans la dernière étape après avoir cliqué le bouton&nbsp;
                <span className="italic">Complete Checkout:</span>.
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">Network:</span>
                Sélectionez
                <span className="italic">&nbsp;Litecoin (LTC)</span>
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Withdraw amount:&nbsp;
                </span>
                Indiquez le montant exigé par CoinPayments en oubliant pas de
                tenir compte des frais (
                <span className="font-bold italic">&nbsp;0,001&nbsp;</span>à
                ajouter au prix final.
              </p>
              <p>Par example: requit 0.1428 LTC devient 0.1438 au final.</p>
              <p>
                Une fois la transaction exécutée, vous recevez un email de
                confirmation et l'argent sera disponible sur votre compte de
                Trading.
              </p>
              <p>
                Aprés votre confirmation reçu, aller sur
                <a
                  className="text-[#DF9622] font-semibold"
                  href="https://atg-system.com/user/dashboard"
                  target="_blank"
                >
                  &nbsp;atg-system.&nbsp;
                </a>
                Si votre <span className="italic">Status</span> est
                <span className="italic">&nbsp;Detached&nbsp;</span>cliquer sur
                <span className="italic">&nbsp;Refresh&nbsp;</span>jusqu'au
                moment au moment ou c'est
                <span className="italic">&nbsp;Connected</span>
              </p>
            </div>
            <div className="">
              <Image src={part9} className="rounded-lg" />
              <Image src={part9_2} className="rounded-lg" />
              <Image src={part10} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-40 max-w-7xl mx-auto">
        <h1
          className="text-center text-4xl py-8 text-black font-bold"
          id="retrait"
        >
          RETRAIT DE CAPITAL / GAINS
        </h1>
        <div className="flex flex-col pt-20">
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-9/12">
              <h1 className="text-xl text-black font-bold pb-4">
                RETRAITS DE VOS GAINS / CAPITAL
              </h1>
              <p>
                Un retrait n'est possible que sur le wallet crypto défini pour
                votre profil.
              </p>
              <p>
                Vous pouvez aller vérifier votre adresse par défaut dans la
                partie
                <a
                  href="https://pantheratrade.live/user/edit-profile"
                  target="_blank"
                  rel="noopener"
                  className="italic font-bold"
                >
                  &nbsp;Profile&nbsp;
                </a>
                du site.
              </p>
              <p>
                Les retraits sont d'un minimum de 50$ et de maximum 2000$ par
                jour pour les comptes avec un capital inférieur à 100000$.
              </p>
              <p>
                Les comptes supérieurs peuvent retirer 10% du capital déposé par
                jour.
              </p>
              <p>
                Les frais de transaction sont de 20$ ( montant fixe qui ne
                dépend pas du montant du retrait).
              </p>
              <p>
                Pour faire un retrait aller dans la section
                <a
                  href="https://pantheratrade.live/user/withdraw-request"
                  target="_blank"
                  rel="noopener"
                  className="italic"
                >
                  <span className="text-[#DF9622]">
                    &nbsp;Transaction &gt; Deposit&nbsp;
                  </span>
                </a>
                et sélectionnez votre crypto.
              </p>
              <p>
                <span className="text-[#DF9622]">Amount USD:&nbsp;</span>
                Indiquez le montant que vous voulez retirer de votre compte en
                USD.
              </p>
              <p>
                <span className="text-[#DF9622]">Sources:&nbsp;</span>
                Sélectionnez MT4 Account
              </p>
              <p>
                <span className="text-[#DF9622]">Google 2FA OTP:&nbsp;</span>
                Indiquer votre Google 2FA, si vous l'avez activé. Sinon votre
                mot de passe sera demandé
              </p>
              <p>
                <span className="text-[#DF9622]">
                  I agree with the Terms and Conditions:&nbsp;
                </span>
                pour accepter les conditions.
              </p>
            </div>
            <div className="">
              <Image src={retraits_atg} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-40 max-w-7xl mx-auto">
        <h1
          className="text-center text-4xl py-8 text-black font-bold"
          id="trades"
        >
          COMMENT SUIVRE SES GAINS
        </h1>
        <div className="flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            Etape 8
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-9/12">
              <h1 className="text-xl text-black font-bold pb-4">
                CONNECTION SUR METATRADER 4
              </h1>
              <p>
                MetaTrader 4 est une application mobile vos premetent de voir
                les trades en live et d'avoir un aperçu des voit gains
                journaliers.
              </p>
              <p>
                Vous auriez dû recvoir un email de PantheraTrad avec vos
                identifiants:
              </p>
              <ul className="space-y-2 italic">
                <li>Login</li>
                <li>Master Password</li>
                <li>Investor Password</li>
                <li>Server</li>
              </ul>
              <p>
                Aller dans l'application puis&nbsp;
                <span className="text-[#DF9622]">
                  Paramètres &gt; Nouveau &gt; Compte &gt; Se connecter avec un
                  compte existant
                </span>
              </p>

              <p>
                <span className="text-[#DF9622] font-semibold">
                  rechercher: &nbsp;
                </span>
                &nbsp; LegoMarketLCC-LIVE
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Nom d'utilisateur:&nbsp;
                </span>
                Un code de chiffre reçu dans votre email.
              </p>
              <p>
                <span className="text-[#DF9622] font-semibold">
                  Mot de passe:&nbsp;
                </span>
                Investor Password (read only)
              </p>
            </div>
            <div className="">
              <Image src={part3_1} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default autotradegold;
