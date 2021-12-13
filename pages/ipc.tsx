import React, { useEffect } from "react";

const ipcapital = () => {
  console.log();
  const url = [
    "https://member.iprimecapital.com/Account/IndividualRegistration?referrerNumber=IB109635&referrerLinkType=1",
    "https://member.iprimecapital.com/Account/IndividualRegistration?referrerNumber=IB108592&referrerLinkType=1",
    "https://member.iprimecapital.com/Account/IndividualRegistration?referrerNumber=IB106893&referrerLinkType=1",
    "https://member.iprimecapital.com/Account/IndividualRegistration?referrerNumber=IB110018&referrerLinkType=1",
  ];
  useEffect(() => {
    window.location.assign(`${url[Math.floor(Math.random() * url.length)]}`);
  }, []);
  return <div></div>;
};

export default ipcapital;
