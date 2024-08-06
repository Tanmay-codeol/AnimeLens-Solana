import Section from "./Section";
import Heading from "./Heading";
import { useRef, useState } from "react";
import { useContext, useEffect } from "react";
import VideoContext from "./design/videoContext";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import {TestImage1, TestImage2, TestImage3 } from "../assets"
import Footer from "./Footer";


import Generating from "./Generating";

const TestImages = () => {
 
  
  return (
      <Section id="how-to-use">
        <div className="container relative z-10">
            <Gradient/>
      <div className="container">
        <div className="container relative z-10"></div>
        <Heading
          title="Here are some random snaps !"
          text="Right click on the image and save it to your device to use it for testing"
        />
            <div className="relative z-2 grid gap-5 lg:grid-cols-2">
  <div className="relative h-[20rem] border border-n-1/10 rounded-3xl overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={TestImage1}
        className="h-full w-full object-cover"
        
        alt="Kimetsu no yaiba -- screenshot"
      />
    </div>
        </div>
  <div className="relative h-[20rem] border border-n-1/10 rounded-3xl overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={TestImage2}
        className="h-full w-full object-cover"
        
        alt="Chunibyou -- screenshot"
        />
    </div>
   </div>


    
    
              
   

    
  </div>
            
 
        </div>
</div>
          

        

          

          <Gradient />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

     <Footer />
    </Section>
  );



};

export default TestImages;
