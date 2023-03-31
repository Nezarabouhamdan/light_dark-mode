import React, { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, useInView, motion } from "framer-motion";
import { useState } from "react";
import Switch from "react-switch";
import La from "../assets/desktop-wallpaper-date-palm-red-amazing-luxury-california-tumblr-iphone-aesthetic-palm-tree.jpg";

function Mode() {
  const [Primarycolor, setColor1] = useState("white");
  const [Seconderycolor, setColor2] = useState("black");
  const [checked, setchecked] = useState(false);

  const Testdiv = styled.div`
    height: 100vh;
    width: 100vw;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    background-color: ${Primarycolor};
    display: flex;
    flex-direction: column;
  `;
  const ImageLa = styled.img`
  object-fit: fill;
  width: 25%;
  height: 40vh;
  opacity: 1;
  border-radius: 2px; 
  @media screen and (max-width: 960px) {
    box-shadow:-8px -8px  2px grey;
    height: 25vh;
    width: 80vw;
`;

  const Head = styled.div`
    font-size: 30px;
    font-weight: 600;

    color: ${Seconderycolor};
  `;
  const Head2 = styled.div`
    font-size: 12px;
    font-weight: 500;
    width: 25vw;
    text-align: left;
    color: grey;
  `;
  const Divider = styled.div`
    width: 25vw;
    height: 2px;
    background-color: ${Seconderycolor};
  `;
  const Button = styled.input`
    width: 10vw;
    height: 35px;
    border-radius: 5px;
    background-color: ${Seconderycolor};
    color: ${Primarycolor};
  `;
  function Changemode() {
    if (Primarycolor == "white") {
      setColor1("black");
      setColor2("white");
      setchecked(!checked);
    } else {
      setColor1("white");
      setColor2("black");
      setchecked(!checked);
    }
  }
  useEffect(() => {
    Changemode();
  }, []);

  const initial = { opacity: 0, y: 50 };
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      console.log("sss");
      animation.start({
        opacity: 1,
        y: 1,
      });
    }
  }, [inView, animation]);
  return (
    <div>
      <Testdiv ref={ref}>
        <ImageLa
          initial={initial}
          transition={{ delay: 0.4, duration: 0.6 }}
          animate={animation}
          whileHover={{ rotate: 2, scale: 1.02 }}
          src={La}
        />
        <Head>Los Angeles</Head>
        {/* <Head2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Head2> */}
        <Divider />
        <Head2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Head2>
        <Button type={"submit"} value={"Visit Now"}></Button>
        <Switch
          onChange={Changemode}
          checked={checked}
          checkedIcon={true}
          checkedHandleIcon={""}
          uncheckedIcon={false}
        />{" "}
      </Testdiv>
    </div>
  );
}

export default Mode;
