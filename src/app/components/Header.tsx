"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import BurgerMenu from "./ui/BurgerMenu";

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
