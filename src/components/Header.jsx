import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect,useContext } from "react";
import { Connection, PublicKey } from '@solana/web3.js';
import VideoContext from "./design/videoContext";

const Header = () => {
  const [user, setUser] = useState(null);
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const { setPublicKeyID } = useContext(VideoContext);
  const { SETPUBLICKEY } = useContext(VideoContext);

  useEffect(() => {
    // Clean-up function if needed
    return () => {};
  }, []);

  const handleSignUp = async () => {
    try {
      if (window.solana && window.solana.isPhantom) {
        // Connect to the Phantom Wallet
        const response = await window.solana.connect();
        
        // Get the user's public key
        const userPublicKey = new PublicKey(response.publicKey.toString());
        console.log('User Public Key:', userPublicKey.toString());
  
        // Optionally, you can also check user's balance or other details
        const connection = new Connection('https://api.devnet.solana.com');
        const balance = await connection.getBalance(userPublicKey);
        console.log('User Balance:', balance);

        // Optionally, sign a message to authenticate
        const message = 'Welcome to AnimeLens, Sign this message to sign up!!!';
        const encodedMessage = new TextEncoder().encode(message);
        const signedMessage = await window.solana.signMessage(encodedMessage, 'utf8');
        console.log('Signed Message:', signedMessage);
        
        
        // Set user info (You might want to store this in state or context)
        setUser({ publicKey: userPublicKey, balance });
        setPublicKeyID(userPublicKey.toString());
        SETPUBLICKEY(userPublicKey)
  
        // Proceed with authentication (e.g., send public key and signed message to backend)
      } else {
        alert('Phantom Wallet is not installed. Please install Phantom Wallet to use this feature.');
      }
    } catch (error) {
      console.error('Error connecting to Phantom Wallet:', error);
    }
  };

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={110} height={40} alt="AnimeLens" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        {user ? (
          <Button className="ml-auto" onClick={() => alert('Wallet already connected')}>
            {user.publicKey.toString().slice(0, 7)}...
          </Button>
        ) : (
          <>
            {/* <a
              href="#"
              className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
              onClick={handleSignUp}
            >
              Connect Wallet
            </a> */}
            
            <Button className="hidden lg:flex" onClick={handleSignUp}>
              Connect Wallet
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
