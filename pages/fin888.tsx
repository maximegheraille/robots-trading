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
import logo from "../public/Fin888.png";

interface tuto {
  title?: string;
  description?: string;
  icon: any;
  to: string;
}
const fin888 = () => {
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
    { title: "Broker Reguler", prix: "" },
    { title: "Pas de license requise", prix: "0$" },
    { title: "Capital minimum", prix: "+-1000$" },
    {
      title: "commission sur les gains",
      prix: "25/35%",
    },
    { title: "Rendement moyen par mois", prix: "+-12%" },
  ];
  const license = [
    {
      title: "Pour un capital déposé sous les 10000$",
      prix: "35%",
    },
    {
      title: "Pour un capital déposé supérieure les 10000$",
      prix: "25%",
    },
  ];
  return (
    <div className="pt-8 h-screen ">
      <div className="pb-5">
        <section className="text-center flex-col lg:flex-row max-w-7xl mx-auto">
          <div className="flex place-content-center justify-around items-center">
            <div className="flex flex-col text-left w-6/12">
              <div className="text-5xl py-8 text-black font-medium space-y-2">
                <h1 className="">Fin888</h1>
                <h1 className="text-[#DD1C50]">Trading Robot</h1>
              </div>
              <div className="pr-24 font-normal text-gray-500">
                <p>
                  Fin888 est un robot trading axé sur le marhcé du forex. Il est
                  actif depuis octobre 2019. Le robot vise des profits de 0.5% à
                  1.5% par jour de votre capital total. Le robot trade en mode
                  <span className="italic">&nbsp;scalpin</span>. <br /> <br />
                  Le trade moyen est de 4 mintues. Un seul trade à la fois serra
                  excuté et chaque trade ne peut pas perde plus de 3% de votre
                  capital, après cela il sera fermé automatiquement. Le taux de
                  reussite moyen est de trade est de 83%.
                </p>
              </div>
            </div>
            <div className="w-4/12">
              <Image src={logo} />
            </div>
          </div>
        </section>
      </div>
      <section>
        <h1 className="text-center text-3xl py-8 text-black font-bold font">
          INFOS PRATIQUES
        </h1>
        <div className="flex place-content-evenly max-w-7xl mx-auto pb-16">
          {infos.map((info: { title: string; prix: string }, index: number) => (
            <div className="shadow-xl justify-around rounded-full p-10 text-center flex flex-col border border-[#DD1C50] w-48 h-48">
              {info.prix ? (
                <>
                  <p className="text-2xl font-bold">
                    <span className="text-gray-500"></span> {info.prix}
                  </p>
                  <p className="text">{info.title}</p>
                </>
              ) : (
                <p className="text-2xl font-bold">{info.title}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="pt-20 bg-fin888-blob2 bg-no-repeat bg-lef-top">
        <div className="bg-hero-pattern5 bg-no-repeat bg-origin-content bg-right-bottom">
          <div className="">
            <h1 className="text-center text-4xl py-8 text-black font-bold">
              LES COMMISSIONS SUR LES TRADES
            </h1>
            <div className="pt-10 flex flex-wrap place-content-evenly max-w-7xl mx-auto pb-4 item">
              {license.map(
                (license: { title: string; prix: string }, index: number) => (
                  <div
                    key={index}
                    className="p-6 shadow-lg space-y-4 text-center bg-white rounded-full border-[#374BA6] border w-48 h-48"
                  >
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
        <div className="flex place-content-evenly w-full pb-5">
          {tuto.map((card: tuto, index: number) => (
            <div
              key={index}
              className="w-64 bg-[#D7D7D8]s bg-[#999999]text-white bg-white/ border-[#DD1C50] border text-black shadow-xl  rounded-xl stext-white text-center p-4 space-y-2"
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
                className="rounded-xl px-4 py-2 bg-[#DD1C50] text-white"
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
            etape 1
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-10/12">
              <h1 className="text-xl text-black font-bold pb-4">
                CREATION DU COMPTE
              </h1>
              <p>
                Pour la création d'un compte auto-tradegold, il vous faut un IB
                de référence.
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  IB Refference
                </span>
                : IB75214800
              </p>
              <p>
                Après cela, cliquez sur "Next'" et Veuillez aussi remplire les
                infos de base pour la création d'un compte.
              </p>
              <div className="pt-4">
                <a
                  href="https://pantheratrade.live/register?r=IB75214800"
                  target="_blank"
                  rel="noopener"
                  className="rounded-lg px-4 py-2 bg-[#DD1C50] text-white"
                >
                  Commencer maintenant
                </a>
              </div>
            </div>
            <div className="">
              <Image src={part1} className="rounded-lg" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            etape 2
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-10/12">
              <h1 className="text-xl text-black font-bold pb-4">
                VALIDATION DU COMPTE
              </h1>
              <p>
                Après la création de votre compte, il va falloir le&nbsp;
                <span className="text-[#DD1C50] font-semibold">valider</span>
                &nbsp; Via le bouton prévu sur la page après s'être connecté.
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">Bank Name</span>:
                Sélectionnez "Other Bank'" sauve si vous habitez en Indonésie.
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Bank Account Name
                </span>
                : Le nom de votre banque
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Bank Account Number
                </span>
                : Votre numéro de compte bancaire
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Crypto Currency
                </span>
                : Sélectionnez bien&nbsp;
                <span className="text-black font-bold">Enabled</span>
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Crypto Account
                </span>
                : Sélectionez USDT. USDT est une crypto stable sans fluctuation
                adossé au dollar.
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Crypto Address
                </span>
                : Une addresse crypto USDT (avec le reseau Ethereum ERC-20)
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">ID Card</span>:
                Télécharger une photo de votre carte d'identité sur&nbsp;
                <a rel="noopener" href="https://imglink.io/">
                  imglink.io&nbsp;
                </a>
                et poster l'URL dans le champ
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Selfie with ID Card
                </span>
                : Télécharger une photo de votre visage avec votre carte
                d'identité visible a coté sur&nbsp;
                <a rel="noopener" href="https://imglink.io/">
                  imglink.io&nbsp;
                </a>
                et poster l'URL dans le champ
              </p>
            </div>
            <div className="">
              <Image src={part2} className="rounded-lg" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            etape 3
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-7/12">
              <h1 className="text-xl text-black font-bold pb-4">
                OUVERTURE DU COMPTE TRADING
              </h1>
              <p>
                Pendats que l'équipe valide votre compte vous pouvez déjà
                activer votre compte trading via
                <a
                  href="https://pantheratrade.live/user/open_live_account"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="text-[#DD1C50]">
                    &nbsp;Trading Account &gt; Open Live Account
                  </span>
                </a>
                .
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">Broker</span>:
                LegoMarket LCC
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Account Type
                </span>
                : GOLD
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">Leverage</span>:
                1:500
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Real / Demo
                </span>
                : Real
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Create MT4 Password&nbsp;
                </span>
                : Vous pouvez choissier, mais je conseille le même mot de passe
                que votre login sur panthera.live
              </p>
            </div>
            <div className="">
              <Image src={part3} className="rounded-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            etape 4
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-6/12">
              <h1 className="text-xl text-black font-bold pb-4">
                INSCRIPTION <span className="text-[#DD1C50]">PANSAKA</span> POUR
                GERER VOTRE LICENSE AUTO TRADE GOLD 5.0
              </h1>
              <p>
                <span className="text-[#DD1C50] font-semibold">Refferal</span>:
                10004621
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Select Crypto
                </span>
                : USDT
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Crypto Address
                </span>
                : Addresse de dépôt USDT (par example: binance, crypto.com,
                coinbase)
              </p>
              <div className="pt-4">
                <a
                  href="https://pansaka.co.id/?r=10004621"
                  target="_blank"
                  rel="noopener"
                  className="rounded-lg px-4 py-2 bg-[#DD1C50] text-white"
                >
                  S'inscrire
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
            etape 5
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-9/12">
              <h1 className="text-xl text-black font-bold pb-4">
                ACHETER VOTRE LICENSE
              </h1>
              <p>
                Pour acheter votre license, selectionez dans le menu
                <a
                  href="https://pansaka.co.id/panel/upgrade-special.php"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="text-[#DD1C50]">
                    &nbsp;Special Program &gt; Buy Future Package
                  </span>
                </a>
                .
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">Refferal</span>:
                10004621
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Select Crypto
                </span>
                : USDT
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Crypto Address
                </span>
                : Addresse de dépôt USDT (par example: binance, crypto.com,
                coinbase)
              </p>
              <div className="pt-4">
                <a
                  href="https://pansaka.co.id/?r=10004621"
                  target="_blank"
                  rel="noopener"
                  className="rounded-lg px-4 py-2 bg-[#DD1C50] text-white"
                >
                  S'inscrire
                </a>
              </div>
            </div>
            <div className="">
              <Image src={part5} className="rounded-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            etape 6
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-7/12">
              <h1 className="text-xl text-black font-bold pb-4">
                COFIRMATION DU PAYMENT EN CRYPTO
              </h1>
              <ul className="list-decimal list-inside space-y-4">
                <li>
                  <span className="text-[#DD1C50] font-semibold">
                    Pilih Cara Pembayaran:
                  </span>
                  Sélectionez&nbsp;
                  <span className="italic">Crypto Coin Currency</span>
                </li>
                <li>
                  Sélectionez <span className="italic"> Proses Checkout</span>
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
            etape 7
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-7/12">
              <h1 className="text-xl text-black font-bold pb-4">
                DEMARER LE PAIEMENT
              </h1>

              <p>
                Cliquez sur le bouton&nbsp;
                <span className="italic text-[#DD1C50] font-bold">
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
            etape 8
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-11/12">
              <h1 className="text-xl text-black font-bold pb-4">
                REGLEMENT DU PAIEMENT
              </h1>

              <p>
                <span className="italic text-[#DD1C50] font-bold">
                  Select Coin:
                </span>
                &nbsp; Sélectionez{" "}
                <span className="italic">Litecoin (LTC)</span> pour le faible
                coûts de transaction.
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
            etape 9
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-full">
              <h1 className="text-xl text-black font-bold pb-4">
                ENOVYER LA CRYPTO POUR FINALISER LE PAIEMENT
              </h1>

              <p>
                Aller sur
                <a
                  href="https://www.binance.com/fr/my/wallet/account/main/withdrawal/crypto/LTC"
                  target="_blank"
                  rel="noopener"
                >
                  &nbsp;Binance&nbsp;
                </a>
                ou crypto.com et faites un retraits/withdraw.
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Select Coin:
                </span>
                &nbsp; Sélectionez bien{" "}
                <span className="italic">Litecoin (LTC)</span>
              </p>

              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Withdraw to:
                </span>
                &nbsp; Indiquez bien l'address&nbsp;
                <span className="font-bold">EXACTE</span> que vous aviez dans la
                derniere étape apres avoir clique le bouton&nbsp;
                <span className="italic">Complete Checkout:</span>.
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">Network:</span>
                &nbsp; Selectionez bien{" "}
                <span className="italic">Litecoin (LTC)</span>
              </p>
              <p>
                <span className="text-[#DD1C50]">Withdraw amount:</span>&nbsp;
                Indiquez bien le montant que montré dans l'étape d'avant.
                Rajouter bien <span className="font-bold italic"> 0,001</span>
                &nbsp; au prix final.
              </p>
              <p>Par example: requit 0.1428 LTC devient 0.1438 au final.</p>
              <p>
                Un email de confirmation de paiement vous sera envoyé à l'email
                indiqué dans l'étape d'avant.
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
            etape 10
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-8/12">
              <h1 className="text-xl text-black font-bold pb-4">
                ASSOCIER LA LICENSE AVEC AUTO TRADE GOLD 5.0
              </h1>
              <p>
                Quelques minutes après le paiement vous allez recevoir un email
                d'atg-system.com avec le&nbsp;
                <span className="italic">Voucher Code</span> et
                <span className="italic">Voucher ID</span>
              </p>
              <p>
                Aller sur
                <a
                  href="https://atg-system.com/login"
                  target="_blank"
                  rel="noopener"
                  className="font-bold"
                >
                  &nbsp;atg-system&nbsp;
                </a>
                et connectez-vous avec votre votre compte créé sur
                Pantheratrade.live
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Voucher ID:
                </span>
                &nbsp; indiquer le <span className="italic">Voucher ID</span>
                &nbsp; reçu dans le mail de atg-system.com
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Voucher Code:
                </span>
                &nbsp; indiquer le <span className="italic">Voucher code</span>
                &nbsp; reçu dans le mail de atg-system.com
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  MT4 Account
                </span>
                &nbsp; Selection bien&nbsp;
                <span className="italic">I have Trade Account.</span>
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Select Account:
                </span>
                &nbsp; Sélectionnez votre compte GOLD auquel vous voulez lier
                votre licence.
              </p>
              <p>
                Cliquer sur <span className="italic">Activate Now.</span>
              </p>
              <p>
                Si votre <span className="italic">Status</span> est
                <span className="italic">&nbsp;Detached&nbsp;</span> cliquer sur
                <span className="italic">&nbsp;Refresh&nbsp;</span> jusqu'au
                moment au moment ou c'est&nbsp;
                <span className="italic">Connected</span>
              </p>
            </div>
            <div className="">
              <Image src={part10_2} className="rounded-lg" />
              <Image src={part10} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-40 max-w-7xl mx-auto">
        <h1
          className="text-center text-4xl py-8 text-black font-bold"
          id="depots"
        >
          DEPOTS DE CAPITAL
        </h1>

        <div className="flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            etape 1
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
                <span className="italic text-[#DD1C50]">
                  <a
                    href="https://pantheratrade.live/user/deposit-fund"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="text-[#DD1C50]">
                      &nbsp;Transaction &gt; Deposit&nbsp;
                    </span>
                  </a>
                </span>
                et selectionez <span className="italic">CoinPayment</span>
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Amount USD:&nbsp;
                </span>
                Iniquer le mon temps que vous voulez déposer sur les
                robots.&nbsp;
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Deposit Target:&nbsp;
                </span>
                Sélectionez<span>&nbsp;Account&nbsp;</span>
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Select Account:&nbsp;
                </span>
                Sélectionez votre compte auto trade gold 5.0
              </p>
            </div>
            <div className="">
              <Image src={part2_2} className="rounded-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            etape 8
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-10/12">
              <h1 className="text-xl text-black font-bold pb-4">
                REGLEMENT DU PAIEMENT
              </h1>

              <p>
                <span className="italic text-[#DD1C50] font-bold">
                  Select Coin
                </span>
                &nbsp; Sélectionez{" "}
                <span className="italic">Litecoin (LTC)</span> pour le faible
                coût de transaction.
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
            etape 9
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-12/12">
              <h1 className="text-xl text-black font-bold pb-4">
                ENOVYER LA CRYPTO POUR FINALISER LE PAIEMENT
              </h1>

              <p>
                Aller sur
                <a
                  href="https://www.binance.com/fr/my/wallet/account/main/withdrawal/crypto/LTC"
                  target="_blank"
                  rel="noopener"
                >
                  &nbsp;Binance&nbsp;
                </a>
                ou crypto.com et faites un retraits/withdraw.
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Select Coin:
                </span>
                &nbsp; Selectionez bien{" "}
                <span className="italic">Litecoin (LTC)</span>
              </p>

              <p>
                <span className="text-[#DD1C50] font-semibold">
                  &nbsp;Withdraw to:&nbsp;
                </span>
                Indiquez bien l'address
                <span className="font-bold">&nbsp;EXACTE&nbsp;</span> que vous
                aviez dans la dernière étape après avoir cliqué le bouton&nbsp;
                <span className="italic">Complete Checkout:</span>.
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">Network:</span>
                &nbsp; Sélectionez bien{" "}
                <span className="italic">Litecoin (LTC)</span>
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Withdraw amount:
                </span>
                &nbsp; Indiquez bien le montant que montré dans l'étape d'avant.
                Rajouter bien&nbsp;
                <span className="font-bold italic"> 0,001</span>
                &nbsp;au prix final.
              </p>
              <p>Par example: requit 0.1428 LTC devient 0.1438 au final.</p>
              <p>
                Un email de confirmation de paiement vous sera envoyé à l'email
                indiqué dans l'étape d'avant.
              </p>
              <p>
                Une fois la transaction fini, vous recevez un email de
                confirmation et l'argent serra sur votre robot.
              </p>
            </div>
            <div className="">
              <Image src={part9} className="rounded-lg" />
              <Image src={part9_2} className="rounded-lg" />
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
                Un retrait n'est possible que dans la devise que vous avez
                utilisée pour faire votre dépôt initial.
              </p>
              <p>
                Vous pouvez aller vérifier sur votre{" "}
                <a
                  href="https://pantheratrade.live/user/edit-profile"
                  target="_blank"
                  rel="noopener"
                  className="italic font-bold"
                >
                  &nbsp;Profile&nbsp;
                </a>
                dans la selection Crypto (Crypto Address).
              </p>
              <p>
                Les retraits sont d'un minimum de 50$ et de maximum 2000$ par
                jour pour les comptes avec un capital inférieur à 100000$. Les
                comptes supérieurs peuvent retirer 10% du capital déposé par
                jour.
              </p>
              <p>
                Les frais de transaction sont de 20$ et est indepedente du
                montant indiqué.
              </p>
              <p>
                Pour faire un retrait aller dans la section
                <a
                  href="https://pantheratrade.live/user/withdraw-request"
                  target="_blank"
                  rel="noopener"
                  className="italic"
                >
                  <span className="text-[#DD1C50]">
                    &nbsp;Transaction &gt; Deposit&nbsp;
                  </span>
                </a>
                et séléctioner votre crypto.
              </p>
              <p>
                <span className="text-[#DD1C50]">Amount USD:&nbsp;</span>
                Indiquez le montant que vous voulez retirer de votre compte en
                USD.
              </p>
              <p>
                <span className="text-[#DD1C50]">Sources:&nbsp;</span>
                Selectioner MT4 Account
              </p>
              <p>
                <span className="text-[#DD1C50]">Google 2FA OTP:&nbsp;</span>
                Indiquer votre Google 2FA, si vous l'avez activé.
              </p>
              <p>
                <span className="text-[#DD1C50]">
                  I agree with the Terms and Conditions:&nbsp;
                </span>
                Accepter les conditions.
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
            etape 8
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
                <span className="text-[#DD1C50]">
                  Paramètres &gt; Nouveau &gt; Compte &gt; Se connecter avec un
                  compte existant
                </span>
              </p>

              <p>
                <span className="text-[#DD1C50] font-semibold">
                  rechercher: &nbsp;
                </span>
                &nbsp; LegoMarketLCC-LIVE
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
                  Nom d'utilisateur:&nbsp;
                </span>
                Un code de chiffre reçu dans votre email.
              </p>
              <p>
                <span className="text-[#DD1C50] font-semibold">
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

export default fin888;
