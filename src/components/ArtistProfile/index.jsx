import Image from "next/image";

import MarinaSrc from "../../public/images/marina_abramovic/Marina Abramovic.jpg";
import ObraSrc from "../../public/images/marina_abramovic/a artista está presente-2012.jpg";

export function ArtistProfile() {
	return (
		<div className="h-full w-full p-6 sm:p-12 sm:pt-16 flex flex-col gap-32">
			<article className="h-full w-full flex flex-col gap-20 justify-between">
				<header className="w-full text-left">
					<h1 className="text-2xl sm:text-5xl font-title text-secondary font-bold">
						Maria Abramovic
					</h1>
				</header>
				<main className="h-full w-full flex flex-col gap-12 sm:flex-row-reverse items-center justify-center sm:justify-between">
					<Image
						src={MarinaSrc}
						alt="Marina"
						width={240}
						height={240}
						className="rounded-full object-center"
					/>
					<p className="w-full sm:w-1/2 sm:text-lg leading-relaxed text-primary text-justify">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Congue mauris nullam ullamcorper ut adipiscing. Massa
						sed tempus massa est gravida. Sit sagittis rhoncus,
						suspendisse scelerisque sit dui eu. Aliquam lobortis
						morbi et mauris urna.
					</p>
				</main>
			</article>
			<section className="w-full flex flex-col gap-20">
				<h2 className="text-primary text-2xl font-bold">
					Obras - Marina Abramovic
				</h2>
				<main className="w-full grid grid-cols-1 sm:grid-cols-2 gap-24 justify-center">
					<div className="w-full flex flex-col gap-6 items-center justify-center">
						<Image
							src={ObraSrc}
							alt="obra"
							width={320}
							height={240}
							className="object-fill object-center rounded-lg"
						/>
						<span className="text-primary">Alguma Obra - 2022</span>
					</div>
					<div className="w-full flex flex-col gap-6 items-center justify-center">
						<Image
							src={ObraSrc}
							alt="obra"
							width={320}
							height={240}
							className="object-fill object-center rounded-lg"
						/>
						<span className="text-primary">Alguma Obra - 2022</span>
					</div>
					<div className="w-full flex flex-col gap-6 items-center justify-center">
						<Image
							src={ObraSrc}
							alt="obra"
							width={320}
							height={240}
							className="object-fill object-center rounded-lg"
						/>
						<span className="text-primary">Alguma Obra - 2022</span>
					</div>
					<div className="w-full flex flex-col gap-6 items-center justify-center">
						<Image
							src={ObraSrc}
							alt="obra"
							width={320}
							height={240}
							className="object-fill object-center rounded-lg"
						/>
						<span className="text-primary">Alguma Obra - 2022</span>
					</div>
				</main>
			</section>
		</div>
	);
}
