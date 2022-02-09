import Head from "next/head";

import artists from "../../db/artists.json";

import { NavMenu } from "../../components/NavMenu";
import { ArtistProfile } from "../../components/ArtistProfile";

export default function Artist(props) {
	return (
		<div className="flex-1 bg-main flex flex-col sm:flex-row relative overflow-auto">
			<Head>
				<title>InfoGaleria</title>
			</Head>

			<NavMenu />

			<ArtistProfile artist={props.artist} />
		</div>
	);
}

export function getStaticPaths() {
	const paths = artists.map((artist) => {
		return {
			params: {
				artist: artist.uri,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export function getStaticProps(ctx) {
	const artistUri = ctx?.params.artist;

	const data = artists.filter((artist) => artist.uri === artistUri);

	return {
		props: {
			artist: data[0],
		},
	};
}
