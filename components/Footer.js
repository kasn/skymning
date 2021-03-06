import Twitter from "../svg/twitter.svg";

const Footer = () => (
  <div className="bg-gray-100 pt-2 ">
    <div
      className="flex pb-5 px-3 m-auto pt-5 text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl"
    >
      <div className="mt-2">
        © Copyright 2020. All Rights Reserved.
        <br />
        Bungie Content © Bungie, Inc. All rights reserved. Destiny, the Destiny
        Logo, Bungie and the Bungie logo are among the trademarks of Bungie,
        Inc.
        <br />
        Destiny Icons provided by{" "}
        <a
          href="https://github.com/justrealmilk/destiny-icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          justrealmilk/destiny-icons
        </a>
      </div>
      <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
        <a href="https://twitter.com/skymning_d2" className="w-12 mx-1">
          Twitter
        </a>
        <a
          href="https://discord.gg/SuXxaUb"
          className="w-12 mx-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>
        <a
          href="https://github.com/kasn/skymning"
          className="w-12 mx-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
