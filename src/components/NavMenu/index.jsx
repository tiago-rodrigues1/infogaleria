import Link from "next/link";

import { useState, useEffect } from "react";

import { Menu, X } from "react-feather";

import artists from "../../db/artists.json";

const ArtistsLinks = () => {
	const baseStyles = {
		ul: "w-full flex flex-col gap-6 items-center",
		li: "bg-main-light w-full h-14 grid place-items-center rounded-lg cursor-pointer border-2 border-transparent hover:border-secondary hover:text-secondary duration-200 text-center",
	};

	return (
		<ul className={`${baseStyles.ul}`}>
			{artists.map((artist, index) => (
				<li key={`art${index}`} className={`${baseStyles.li}`}>
					<Link href={`/artists/${artist.uri}`}>
						<a>{artist.name}</a>
					</Link>
				</li>
			))}
		</ul>
	);
};

export function NavMenu() {
	const [isMenuOptionsVisible, setIsMenuOptionsVisible] = useState(false);
	const [menuIcon, setMenuIcon] = useState(<Menu />);

	function handleClick() {
		setIsMenuOptionsVisible((prevState) => !prevState);
	}

	useEffect(() => {
		if (isMenuOptionsVisible) {
			setMenuIcon(<X />);
		} else {
			setMenuIcon(<Menu />);
		}
	}, [isMenuOptionsVisible]);

	return (
		<>
			{/* Mobile */}
			<nav className="sm:hidden w-full p-6 pt-8 flex flex-col gap-6 text-primary">
				<header className="w-full flex items-center justify-end">
					<button
						name="Abrir menu"
						type="button"
						className="grid place-items-center border-2 border-lineHighlight rounded-lg p-1"
						onClick={handleClick}
					>
						{menuIcon}
					</button>
				</header>
				<div
					className={`${
						(isMenuOptionsVisible && "flex") || "hidden"
					} flex-col gap-8 z-20 h-full w-full`}
				>
					<h2 className="font-title font-bold text-lg">Artistas</h2>
					<ArtistsLinks />
				</div>
			</nav>

			{/* Desktop */}
			<nav className="hidden sm:flex flex-col gap-8 min-h-full w-1/4 bg-main-dark p-6 pt-16 text-primary">
				<h2 className="font-title font-bold text-2xl">Artistas</h2>
				<ArtistsLinks />
			</nav>
		</>
	);
}
