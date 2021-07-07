import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import Logo from "../assets/logo.png";
import HeroImage from "../assets/lion-coin.png";
import CommunityImage from "../assets/community-lion.png";
import parse from "html-react-parser";
import MrRastaImage from "../assets/lion-mr-rasta.jpg";
import MrsRastaImage from "../assets/lion-mrs-rasta.jpg";
import BinanceLogo from "../assets/Binance-Icon-Logo.svg";

export default {
  navbar: {
    logo: Logo,
    menu: [
      {
        label: "Home",
        path: "/",
        icon: <FaIcons.FaHome className="inline-block" />,
        parent: false,
        child: [],
      },
      {
        label: "About",
        path: "#",
        icon: <RiIcons.RiErrorWarningFill className="inline-block" />,
        parent: false,
        child: [],
      },
      {
        label: "Trade",
        path: "#",
        icon: <IoIcons.IoIosSwap className="inline-block" />,
        parent: false,
        child: [],
      },
      {
        label: "Rasino",
        path: "#",
        icon: <AiIcons.AiFillDollarCircle className="inline-block" />,
        parent: true,
        child: [],
      },
      {
        label: "Farms",
        path: "#",
        icon: <RiIcons.RiCoinLine className="inline-block" />,
        parent: true,
        child: [
          {
            path: "/farms/mr-rasta",
            label: "Mr. Rasta",
          },
          {
            path: "/farms/mrs-rasta",
            label: "Mrs. Rasta",
          },
        ],
      },
      {
        label: "Pools",
        path: "#",
        icon: <GiIcons.GiTwoCoins className="inline-block" />,
        parent: true,
        child: [
          {
            path: "#",
            label: "Mr. Rasta",
          },
          {
            path: "#",
            label: "Mrs. Rasta",
          },
        ],
      },
      {
        label: "Top Launch Pad",
        path: "#",
        icon: <AiIcons.AiFillStar className="inline-block" />,
        parent: false,
        child: [],
      },
      {
        label: "Community",
        path: "#",
        icon: <Io5Icons.IoChatboxEllipsesOutline className="inline-block" />,
        parent: true,
        child: [
          {
            path: "#",
            label: "Telegram",
          },
          {
            path: "#",
            label: "Coin Market Cap",
          },
          {
            path: "#",
            label: "Whitepaper",
          },
          {
            path: "#",
            label: "Medium",
          },
          {
            path: "#",
            label: "Dapp Radar",
          },
          {
            path: "#",
            label: "Chart",
          },
        ],
      },
      {
        label: "Contact",
        path: "#",
        icon: <FaIcons.FaPhone className="inline-block transform rotate-90" />,
        parent: false,
        child: [],
      },
    ],
    myProfileMenu: [],
  },
  homepage: {
    path: "/",
    heroSection: {
      image: HeroImage,
      title: parse(
        "<span class='text-yellow-rasta'>Pride and Joy</span><br> of the Binance Smart Chain"
      ),
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostdeserunt",
      counter: [
        { label: "Counter", numbers: "3256" },
        { label: "Holders", numbers: "56879" },
        { label: "Transfers", numbers: "$235.008+" },
        { label: "Continents", numbers: "6" },
      ],
    },
    community: {
      image: CommunityImage,
      title: "Join The Community That Cares",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostdeserunt`,
    },
    favCreator: {
      title: parse(`Interact with Your Favorite Creators.<br>
      <span class="text-yellow-rasta">Completely Decentralized.</span>`),
    },
  },
  farms: {
    child: {
      mr_rasta: {
        name: "mr-rasta",
        page: {
          header_img: MrRastaImage,
          title: "Mr. Rasta Farms",
          subtitle: parse("Stake Liquidity Pool Tokens"),
          desc: parse("Earn Brand New Rasta Tokens"),
          card: {
            pages: 3,
            content: [
              {
                name: "M - RASTA 1",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "/",
                  unlockWalletLink: "/",
                  stake: "Total Liquidity",
                  value: "47,581",
                  bscLink : "/",

                },
              },
              {
                name: "M - RASTA 2",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 3",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 4",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 5",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 6",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
            ],
          },
        },
      },
     
      mrs_rasta: {
        name: "mr-rasta",
        page: {
          header_img: MrsRastaImage,
          title: "Mrs. Rasta Farms",
          subtitle: parse("Stake Liquidity Pool Tokens"),
          desc: parse("Earn Brand New Rasta Tokens"),
          card: {
            pages: 3,
            content: [
              {
                name: "M - RASTA 1",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "/",
                  unlockWalletLink: "/",
                  stake: "Total Liquidity",
                  value: "47,581",
                  bscLink : "/",

                },
              },
              {
                name: "M - RASTA 2",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 3",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 4",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 5",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 6",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 6",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 6",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 6",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
            ],
          },
        },
      },
    },
  },
  footer: {
    logo: Logo,
    textUnderLogo: ["@rastafinance", "www.rasta.finance"],
    navigation: [
      {
        title: "Useful Links",
        item: [
          { label: "Rasino", path: "#" },
          { label: "Zion", path: "#" },
          { label: "Farms", path: "#" },
        ],
      },
      {
        title: "Lorem Ipsum",
        item: [
          { label: "Rasino", path: "#" },
          { label: "Zion", path: "#" },
          { label: "Farms", path: "#" },
        ],
      },
    ],
    copyRight: parse(
      '<a href="#" class="text-yellow-rasta">Rasta Finance</a> 2021 // All Right Reserved'
    ),
  },
  socialMedia: [
    { name: "Twitter", icon: <FaIcons.FaTwitter />, link: "#" },
    { name: "Tik Tok", icon: <Io5Icons.IoLogoTiktok />, link: "#" },
    { name: "Instagram", icon: <FaIcons.FaInstagram />, link: "#" },
    { name: "Telegram", icon: <FaIcons.FaTelegramPlane />, link: "#" },
    { name: "Reddit", icon: <FaIcons.FaReddit />, link: "#" },
    { name: "Medium", icon: <FaIcons.FaMediumM />, link: "#" },
    { name: "Youtube", icon: <FaIcons.FaYoutube />, link: "#" },
  ],
};
