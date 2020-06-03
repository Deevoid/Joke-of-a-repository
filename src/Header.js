import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <Link to="/">
      <span className="logo-div">
        <span className="logo">
          <motion.i
            animate={{
              rotate: [0, 20, 0, 20, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              loop: Infinity,
              repeatDelay: 0,
            }}
            className="far fa-grin-squint-tears"
          ></motion.i>
        </span>
        <span className="logo-text">Poor Jokes</span>
      </span>
    </Link>
  );
}
