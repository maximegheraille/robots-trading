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

interface tuto {
  title?: string;
  description?: string;
  icon: any;
  to: string;
}
const autotradegold = () => {
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
    { title: "Capital pour le trading", prix: "+-112$" },
    { title: "Couts total de l'investisement", prix: "+-250$" },
    { title: "Rendement moyen par mois", prix: "+-15%" },
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
              <div className="text-5xl py-8 text-black font-medium space-y-2">
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
                <span className="text-gray-500"></span> {info.prix}
              </p>
              <p className="text">{info.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="pt-20 bg-hero-pattern2 bg-repeat-x">
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
      <div className="pt-40 text-center bg-opacity-10 flex-col lg:flex-row max-w-7xl mx-auto">
        <h1 className="text-center text-4xl py-8 text-black font-bold">
          LES TUTORIELS
        </h1>
        <div className="flex place-content-evenly w-full pb-5">
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

      <section className="pt-40 max-w-5xl mx-auto">
        <h1
          className="text-center text-4xl py-8 text-black font-bold"
          id="compte"
        >
          CREATION DU COMPTE
        </h1>
        <div className="max-w-5xl mx-auto flex flex-col">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            etape 1
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-10/12">
              <h1 className="text-xl text-black font-bold pb-4">
                CREATION DU COMPTE
              </h1>
              <p>
                Pour la creation d'un compte autotradegold, il vous faut un IB
                de référence
              </p>
              <p>
                <span className="text-[#DF9622]">IB Refference</span>:
                IB75214800
              </p>
              <p>
                Apres cella, cliquez sur 'Next' et Veuillez aussi remplire les
                infos de base pour la creation d'un compte.
              </p>
              <div className="pt-4">
                <a
                  href="https://pantheratrade.live/register?r=IB75214800"
                  target="_blank"
                  rel="noopener"
                  className="rounded-lg px-4 py-2 bg-[#DF9622] text-white"
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

        <div className="max-w-5xl mx-auto flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            etape 2
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-10/12">
              <h1 className="text-xl text-black font-bold pb-4">
                VALIDATION DU COMPTE
              </h1>
              <p>
                Apres la creation de votre compte, il va falloir le{" "}
                <span className="text-[#DF9622]">valider</span> via le boutont
                prevu sur la page apres s'etre connecté.
              </p>
              <p>
                <span className="text-[#DF9622]">Bank Name</span>: selectionnez
                'Other Bank' sauve si vous habiter en Indonésie
              </p>
              <p>
                <span className="text-[#DF9622]">Bank Account Name</span>: Le
                nom de votre banque
              </p>
              <p>
                <span className="text-[#DF9622]">Bank Account Number</span>:
                Votre numero de compte bancaire
              </p>
              <p>
                <span className="text-[#DF9622]">Crypto Currency</span>:
                selectionnez bien{" "}
                <span className="text-black font-bold">Enabled</span>
              </p>
              <p>
                <span className="text-[#DF9622]">Crypto Account</span>:
                Selectionez USDT. USDT est une crypto stable sans fluctuation
                adossé au dollar.
              </p>
              <p>
                <span className="text-[#DF9622]">Crypto Address</span>: Une
                addresse crypto USDT (avec le reseau Ethereum ERC-20)
              </p>
              <p>
                <span className="text-[#DF9622]">ID Card</span>: Télécharger une
                photo de votre carte d'identité sur{" "}
                <a rel="noopener" href="https://imglink.io/">
                  imglink.io
                </a>
                et poster l'URL dans le champ
              </p>
              <p>
                <span className="text-[#DF9622]">Selfie with ID Card</span>:
                Télécharger une photo de votre visage avec votre carte
                d'identité visible a coté sur{" "}
                <a rel="noopener" href="https://imglink.io/">
                  imglink.io
                </a>
                et poster l'URL dans le champ
              </p>
            </div>
            <div className="">
              <Image src={part2} className="rounded-lg" />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col pt-20">
          <p className="font-medium rounded-full text-center text-white bg-gray-500 w-20">
            etape 3
          </p>
          <div className="flex place-content-between pt-5 space-x-10 font-normal text-gray-500">
            <div className="text-lg space-y-3 flex flex-col w-7/12">
              <h1 className="text-xl text-black font-bold pb-4">
                OUVERTURE DU COMPTE TRADING
              </h1>
              <p>
                Pendats que l'equipe valide votre compte vous pouvez déja
                activer votre comptre trading via
                <span className="text-[#DF9622]">
                  {" "}
                  Trading Account &gt; Open Live Account
                </span>
                .
              </p>
              <p>
                <span className="text-[#DF9622]">Broker</span>: LegoMarket LCC
              </p>
              <p>
                <span className="text-[#DF9622]">Account Type</span>: GOLD
              </p>
              <p>
                <span className="text-[#DF9622]">Leverage</span>: 1:500
              </p>
              <p>
                <span className="text-[#DF9622]">Real / Demo</span>: Real
              </p>
              <p>
                <span className="text-[#DF9622]">Create MT4 Password </span>:
                Vous pouvez choissier, mais je conseille le même mot de passe
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
                INSCRIPTION <span className="text-[#DF9622]">PANSAKA</span> POUR
                GERER VOTRE LICENSE AUTO TRADE GOLD 5.0
              </h1>
              <p>
                <span className="text-[#DF9622]">Refferal</span>: 10004621
              </p>
              <p>
                <span className="text-[#DF9622]">Select Crypto</span>: USDT
              </p>
              <p>
                <span className="text-[#DF9622]">Crypto Address</span>: Addresse
                de dépôt USDT (par example: binance, crypto.com, coinbase)
              </p>
              <div className="pt-4">
                <a
                  href="https://pansaka.co.id/?r=10004621"
                  target="_blank"
                  rel="noopener"
                  className="rounded-lg px-4 py-2 bg-[#DF9622] text-white"
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
                <span className="text-[#DF9622]">
                  {" "}
                  Special Program &gt; Buy Future Package
                </span>
                .
              </p>
              <p>
                <span className="text-[#DF9622]">Refferal</span>: 10004621
              </p>
              <p>
                <span className="text-[#DF9622]">Select Crypto</span>: USDT
              </p>
              <p>
                <span className="text-[#DF9622]">Crypto Address</span>: Addresse
                de dépôt USDT (par example: binance, crypto.com, coinbase)
              </p>
              <div className="pt-4">
                <a
                  href="https://pansaka.co.id/?r=10004621"
                  target="_blank"
                  rel="noopener"
                  className="rounded-lg px-4 py-2 bg-[#DF9622] text-white"
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
                  <span className="text-[#DF9622]">Pilih Cara Pembayaran</span>:
                  Selectionez{" "}
                  <span className="italic">Crypto Coin Currency</span>
                </li>
                <li>
                  Selectionez <span className="italic"> Proses Checkout</span>
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
                Cliquez sur le bouton{" "}
                <span className="italic text-[#DF9622]">
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
                <span className="italic text-[#DF9622]">Select Coin</span>{" "}
                selectionez <span className="italic">Litecoin (LTC)</span> pour
                le faible coûts de transaction.
              </p>
              <p>
                Apres avoir rempli les infos necesaires, veuillez cliquer sur le
                bouton <span className="italic">Complete Checkout</span>.
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
                <span className="text-[#DF9622]">Select Coin:</span> Selectionez
                bien <span className="italic">Litecoin (LTC)</span>
              </p>

              <p>
                <span className="text-[#DF9622]">Withdraw to:</span> Indiquez
                bien l'address <span className="font-bold">EXACTE</span> que
                vous aviez dans la derniere étape apres avoir clique le
                bouton&nbsp;
                <span className="italic">Complete Checkout:</span>.
              </p>
              <p>
                <span className="text-[#DF9622]">Network:</span> Selectionez
                bien <span className="italic">Litecoin (LTC)</span>
              </p>
              <p>
                <span className="text-[#DF9622]">Withdraw amount:</span>&nbsp;
                Indiquez bien le montemps que montré dans l'etape d'avant.
                Rajouter bien <span className="font-bold italic"> 0,001</span>
                &nbsp; au prix final.
              </p>
              <p>Par example: requit 0.1428 LTC devient 0.1438 au final.</p>
              <p>
                Un email de confirmation de paiment vous serra unvoyé a l'email
                indique dans l'étape d'avant
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
                Quelques minutes apres le paiement vous allez recevoir un email
                de atg-system.com avec le&nbsp;
                <span className="italic">Voucher Code</span> et
                <span className="italic">Voucher ID</span>
              </p>
              <p>
                Aller sur
                <a
                  href="https://atg-system.com/login"
                  target="_blank"
                  rel="noopener"
                >
                  &nbsp;atg-system&nbsp;
                </a>
                et connecter vous avec vos votre compte créée sur
                Pantheratrade.live
              </p>
              <p>
                <span className="text-[#DF9622]">Voucher ID:</span>&nbsp;
                Rajouter bien <span className="font-bold italic"> 0,001</span>
                &nbsp; au prix final.
              </p>
              <p>
                <span className="text-[#DF9622]">Voucher Code:</span>&nbsp;
                indiquer le <span className="italic">Voucher code</span> reçu
                dans le mail de atg-system.com
              </p>
              <p>
                <span className="text-[#DF9622]">MT4 Account</span>&nbsp;
                Selection bien{" "}
                <span className="italic">I have Trade Account.</span>
              </p>
              <p>
                <span className="text-[#DF9622]">Select Account:</span>&nbsp;
                Selectionez votre compte GOLD au quel vous voulez lier votre
                license.
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
      <section className="pt-40 max-w-5xl mx-auto">
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
                puis navigez vers
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
                et selectionez <span className="italic">CoinPayment</span>
              </p>
              <p>
                <span className="text-[#DF9622]">Amount USD:&nbsp;</span>
                Iniquer le montemps que vous voulez deposer sur le robots.
              </p>
              <p>
                <span className="text-[#DF9622]">Deposit Target:&nbsp;</span>
                Selectionez<span>&nbsp;Account&nbsp;</span>
              </p>
              <p>
                <span className="text-[#DF9622]">Select Account:&nbsp;</span>
                Selectionez votre compte auto trade gold 5.0
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
                <span className="italic text-[#DF9622]">Select Coin</span>{" "}
                selectionez <span className="italic">Litecoin (LTC)</span> pour
                le faible coûts de transaction.
              </p>
              <p>
                Apres avoir rempli les infos necesaires, veuillez cliquer sur le
                bouton <span className="italic">Complete Checkout</span>.
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
                <span className="text-[#DF9622]">Select Coin:</span> Selectionez
                bien <span className="italic">Litecoin (LTC)</span>
              </p>

              <p>
                <span className="text-[#DF9622]">Withdraw to:</span> Indiquez
                bien l'address <span className="font-bold">EXACTE</span> que
                vous aviez dans la derniere étape apres avoir clique le
                bouton&nbsp;
                <span className="italic">Complete Checkout:</span>.
              </p>
              <p>
                <span className="text-[#DF9622]">Network:</span> Selectionez
                bien <span className="italic">Litecoin (LTC)</span>
              </p>
              <p>
                <span className="text-[#DF9622]">Withdraw amount:</span>&nbsp;
                Indiquez bien le montemps que montré dans l'etape d'avant.
                Rajouter bien <span className="font-bold italic"> 0,001</span>
                &nbsp;au prix final.
              </p>
              <p>Par example: requit 0.1428 LTC devient 0.1438 au final.</p>
              <p>
                Un email de confirmation de paiment vous serra unvoyé a l'email
                indique dans l'étape d'avant.
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
      <section className="pt-40 max-w-5xl mx-auto">
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
                MetaTrader 4 est une application mobile vous premetent de voir
                les trades en live et d'avoir un appercu des vois gains
                journalier
              </p>
              <p>
                Vous auriez du recvoir un email de PantheraTrad avec vos
                indentifiants:
              </p>
              <ul className="space-y-2 italic">
                <li>Login</li>
                <li>Master Password</li>
                <li>Investor Password</li>
                <li>Server</li>
              </ul>
              <p>
                Aller dans l'application puis{" "}
                <span className="text-[#DF9622]">
                  Paramètres &gt; Nouveau &gt; Compte &gt; Se connecter avec un
                  compte existant
                </span>
              </p>

              <p>
                <span className="text-[#DF9622]">rechercher: &nbsp;</span>{" "}
                LegoMarketLCC-LIVE
              </p>
              <p>
                <span className="text-[#DF9622]">Nom d'utilisateur:&nbsp;</span>
                Un code de chiffre recu dan votre email.
              </p>
              <p>
                <span className="text-[#DF9622]">Mot de passe:&nbsp;</span>
                Investor Password (read only)
              </p>
            </div>
            <div className="">
              <Image src={part3_1} className="rounded-lg" />
            </div>
          </div>
        </div>
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

export default autotradegold;
