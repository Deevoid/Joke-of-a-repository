import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react-web";
import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";

import animation from "./loading.json";
import Card from "./Card";
import Header from "./Header";

export default function Joke() {
  const [isJoke, setIsJoke] = useState(null);
  const [next, setNext] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        setIsJoke(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [next]);

  return (
    <React.Fragment>
      <SweetAlert
        show={login}
        success
        title="This was a joke! "
        btnSize="lg"
        onConfirm={() => {
          setLogin(false);
        }}
      >
        Honestly, There's no point in that.
      </SweetAlert>
      <div className="header">
        <Header />
        <div className="login-div">
          <button
            onClick={() => {
              setLogin(true);
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div className="card-div">
        <Card
          cardBody={
            isJoke != null ? (
              <div>{isJoke.joke} </div>
            ) : (
              <div className="lottie">
                <Lottie
                  options={{
                    autoplay: true,
                    loop: true,
                    animationData: animation,
                  }}
                  height={100}
                  width={100}
                  speed={1}
                />
              </div>
            )
          }
          cardFooter={
            <button
              onClick={() => {
                setNext(!next);
                setIsJoke(null);
              }}
            >
              One more joke
              <motion.i
                animate={{
                  x: [0, 10, 0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  loop: Infinity,
                  repeatDelay: 0,
                }}
                className="fas fa-chevron-right"
              ></motion.i>
            </button>
          }
        ></Card>
      </div>
    </React.Fragment>
  );
}
