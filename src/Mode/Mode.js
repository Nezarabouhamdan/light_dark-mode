import React, { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, useInView, motion } from "framer-motion";
import { useState } from "react";
import Switch from "react-switch";
import La from "../assets/desktop-wallpaper-date-palm-red-amazing-luxury-california-tumblr-iphone-aesthetic-palm-tree.jpg";
import react from "../assets/icons8-react-native-144.png";
function Mode() {
  const [Primarycolor, setColor1] = useState("white");
  const [Seconderycolor, setColor2] = useState("black");
  const [checked, setchecked] = useState(false);
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
    height: 30vh;
    width: 60vw;
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
    @media screen and (max-width: 960px) {
      width: 60vw;
  `;
  const Divider = styled.div`
    width: 25vw;
    height: 2px;
    background-color: ${Seconderycolor};  @media screen and (max-width: 960px) {
      width: 60vw;
  `;
  const Button = styled.input`
    width: 10vw;
    height: 35px;
    border-radius: 5px;
    background-color: ${Seconderycolor};
    color: ${Primarycolor};  @media screen and (max-width: 960px) {
      width: 30vw;
  `;
  const Row = styled.div`
    width: 25%;
    display: flex;
    flex-direction: row;
    text-align: center;
    color: grey;
    align-items: center;
    justify-content: space-evenly;
    align-contnet: center;
  `;
  const Space = styled.div`
    height: 20px;
    width: 1px;
  `;
  return (
    <div>
      <Testdiv>
        <Row>
          <img src={react} width="50px" />
          <Head>Reactjs</Head>
          Og_187_dev{" "}
        </Row>
        <ImageLa src={La} />
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
        <Space />
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
