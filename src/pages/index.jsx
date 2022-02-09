import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import IndexImg from "../../public/images/index-img.png";

export default function Home() {
	return (
		<div className="min-h-screen h-full w-screen bg-main text-primary p-6 sm:p-12 flex flex-col justify-center">
			<Head>
				<title>InfoGaleria</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex-1 flex flex-col sm:flex-row items-center justify-between gap-8">
				<div className="flex flex-col flex-1 gap-8">
					<h1 className="text-2xl sm:text-5xl font-title font-bold pb-4">
						InfoGaleria
					</h1>
					<span className="h-auto w-auto sm:hidden flex justify-center items-center">
						<Image
							src={IndexImg}
							alt="InfoGaleria"
							width={240}
							height={240}
							className="object-center object-fill"
						/>
					</span>
					<p className="text-justify sm:w-3/4 sm:text-lg">
						Bem vindos a I Mostra Virtual de Performance Art, que é
						composta por obras de renomados artistas que trabalham
						com arte performática. Esperamos que gostem e possam
						conhecer um pouco desse estilo de arte ousado.
					</p>

					<Link href="/artists/marina-abramovic">
						<a className="mt-8 hidden sm:grid place-items-center h-14 w-1/2 bg-secondary font-bold rounded-lg duration-200 hover:brightness-90">
							Explorar
						</a>
					</Link>
				</div>
				<span className="h-auto w-auto hidden sm:block">
					<Image
						src="/images/index-img.png"
						alt="InfoGaleria"
						width={400}
						height={400}
						className="object-center object-fill"
					/>
				</span>
				<Link href="/artists/marina-abramovic">
					<a className="sm:hidden h-14 w-full bg-secondary font-bold rounded-lg grid place-items-center duration-200 hover:brightness-90">
						Explorar
					</a>
				</Link>
			</div>
		</div>
	);
}
