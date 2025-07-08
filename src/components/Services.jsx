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

import Generating from "./Generating";

const Services = () => {
  const { videoUrl } = useContext(VideoContext);
  const videoRef = useRef();
  const { AnimeName0, TimeStamp0, Episode0, AniList0 } = useContext(VideoContext);
  const { signature } = useContext(VideoContext);
  useEffect(() => {
    let blobUrl;
  
    fetch(videoUrl)
      .then(response => response.blob())
      .then(blob => {
        blobUrl = URL.createObjectURL(blob);
        videoRef.current.src = blobUrl;
      })
      .catch(console.error);
  
    return () => {
      // Clean up the blob URL
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    };
  }, [videoUrl]);
  // useEffect(() => {
  //   if (videoUrl) {
  //     let container = document.getElementById('main_player');
  //     let video = document.createElement('video');
  //     video.src = videoUrl;
  //     video.loop = true;
  //     container.appendChild(video);
  //     // video.play();
  //   }
  // }, [videoUrl]); 
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="We Found Your Anime !!!"
          text="AnimeLens go brrrr "
        />

          <Heading
          title={`Anime Name: ${AnimeName0}`}
          text={`TimeStamp: ${TimeStamp0} sec, Episode: ${Episode0} , AniList: ${AniList0}`} 
          
        />

        <div className="relative">
          <div id="main_player" className="relative z-1 flex items-center h-[20rem] mb-5 p-4 border border-n-1/10 rounded-3xl overflow-hidden lg:p-10 xl:h-[30rem]">
              <div className="absolute top-0 left-0 w-full h-full md:w-3/5 xl:w-auto">
              <video
                ref={videoRef}
                className="w-full h-full object-cover md:object-right"
                controls
                loop
                autoPlay
                muted
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Clip </h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Found Your Favorite Anime with AnimeLens!!
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
                  
          </div>
          <br>
          </br>
          <Heading
          title="Successful Transaction!!!, Track the Transaction Below"
          text={<a href={`https://explorer.solana.com/tx/${signature}?cluster=devnet`} target="_blank" rel="noopener noreferrer">Track here on Solana Devnet</a>}
        />

          <Heading
          title="Like the result?? Share it with your friends!!"
          text="SPEND THAT MONEY ON ANILENS COIN, ITS AN ORDER FROM THE DEVELOPER!!!"
        />
        <Heading
        title = "Unable to locate the desired content? "
        text = "We recommend not to use an art image and try again with a snippet which actually appeared in the anime to get better results!!!"
        />
          {/* <div className="relative z-1 grid gap-5 lg:grid-cols-2"> */}
            {/* <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden"> */}
              {/* <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div> */}
              
              {/* <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div> */}

              {/* <PhotoChatMessage /> */}
            {/* </div> */}
            
            {/* <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
              </div>
            </div> */}

          {/* </div> */}

          <Gradient />
        </div>
      </div>
    </Section>
  );



};

export default Services;
