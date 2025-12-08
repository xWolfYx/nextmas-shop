"use client";

import { useState } from "react";
import BurgerMenu from "../ui/BurgerMenu";
import Navbar from "./Navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function onBurgerOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <Navbar isOpen={isOpen} onBurgerOpen={onBurgerOpen} />
      <BurgerMenu isOpen={isOpen} onBurgerOpen={onBurgerOpen} />
    </>
  );
}
