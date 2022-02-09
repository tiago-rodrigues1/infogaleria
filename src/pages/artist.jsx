import Head from "next/head";
import Image from "next/image";

import { NavMenu } from "../components/NavMenu";
import { ArtistProfile } from "../components/ArtistProfile";

export default function Artist() {
	return (
		<div className="flex-1 bg-main flex flex-col sm:flex-row relative overflow-auto">
			<Head>
				<title>InfoGaleria</title>
			</Head>

			<NavMenu />

			<ArtistProfile />
		</div>
	);
}
