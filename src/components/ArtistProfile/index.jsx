import Image from "next/image";

export function ArtistProfile(props) {
	return (
		<div className="h-full w-full p-6 sm:p-12 sm:pt-16 flex flex-col gap-32">
			<article className="h-full w-full flex flex-col gap-20 justify-between">
				<header className="w-full text-left">
					<h1 className="text-2xl sm:text-5xl font-title text-secondary font-bold">
						{props.artist.name}
					</h1>
				</header>
				<main className="h-full w-full flex flex-col gap-12 sm:flex-row-reverse items-center justify-center sm:justify-between">
					<Image
						src={`${props.artist.avatarSrc}`}
						alt="Marina"
						width={240}
						height={240}
						className="rounded-full object-center"
					/>
					<p className="w-full sm:w-1/2 sm:text-lg leading-relaxed text-primary text-justify">
						{props.artist.about}
					</p>
				</main>
			</article>
			<section className="w-full flex flex-col gap-20">
				<h2 className="text-primary text-2xl font-bold">
					Obras - {props.artist.name}
				</h2>
				<main className="w-full grid grid-cols-1 sm:grid-cols-2 gap-24 justify-center">
					{props.artist.works.map((work, index) => (
						<div
							key={`work${index}`}
							className="w-full flex flex-col gap-6 items-center justify-center"
						>
							<Image
								src={`${work.imgSrc}`}
								alt={work.name}
								width={320}
								height={240}
								className="object-fill object-center rounded-lg"
							/>
							<span className="text-primary">
								{work.name} - {work.year}
							</span>
						</div>
					))}
				</main>
			</section>
		</div>
	);
}
