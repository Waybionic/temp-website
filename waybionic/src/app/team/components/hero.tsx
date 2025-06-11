"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const teams = [
	{
		name: "ELECTRICAL",
		icon: "⚡", // Lightning bolt emoji
		image: "/images/elect.png", // Replace with your actual image path
		lead: "ZAYD",
		members: [
			{ name: "MEMBER1", image: "/images/robot.png" },
			{ name: "MEMBER2", image: "/images/robot.png" },
			{ name: "MEMBER3", image: "/images/robot.png" },
		],
	},
	{
		name: "SOFTWARE",
		icon: "💻", // Laptop emoji
		image: "/images/soft.png", // Replace with your actual image path
		lead: "YASSIN",
		members: [
			{ name: "DEV1", image: "/images/laptop.png" },
			{ name: "DEV2", image: "/images/laptop.png" },
			{ name: "DEV3", image: "/images/laptop.png" },
		],
	},
  	{
		name: "MECHANICAL",
    icon: "⚙️", // Gear emoji
		image: "/images/mech.png", // Replace with your actual image path
		lead: "YASSIN",
		members: [
			{ name: "DEV1", image: "/images/laptop.png" },
			{ name: "DEV2", image: "/images/laptop.png" },
			{ name: "DEV3", image: "/images/laptop.png" },
		],
	},
  	{
		name: "FINANCE",
    icon: "💰", // Money bag emoji
		image: "/images/finance.png", // Replace with your actual image path
		lead: "YAHYA",
		members: [
			{ name: "DEV1", image: "/images/laptop.png" },
			{ name: "DEV2", image: "/images/laptop.png" },
			{ name: "DEV3", image: "/images/laptop.png" },
		],
	},
  	{
		name: "MARKETING",
    icon: "📈", // Chart increasing emoji
		image: "/images/marketing.png", // Replace with your actual image path
		lead: "TAYLOR",
		members: [
			{ name: "DEV1", image: "/images/laptop.png" },
			{ name: "DEV2", image: "/images/laptop.png" },
			{ name: "DEV3", image: "/images/laptop.png" },
		],
	},
  	{
		name: "BIOMEDICAL",
    icon: "🩺", // Stethoscope emoji
		image: "/images/bio.png", // Replace with your actual image path
		lead: "ABDUL KAREEM",
		members: [
			{ name: "DEV1", image: "/images/laptop.png" },
			{ name: "DEV2", image: "/images/laptop.png" },
			{ name: "DEV3", image: "/images/laptop.png" },
		],
	},
];

export default function TeamCarousel() {
	return (
		<section
			className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden"
			style={{
				backgroundImage: "url('/images/team_bg.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div
				className="relative z-10 w-full max-w-xl px-4"
				style={{
					background: "linear-gradient(to bottom, #443B75, transparent)",
				}}
			>
				<Carousel
					showThumbs={false}
					showStatus={false}
					infiniteLoop
					autoPlay={false}
					emulateTouch
					swipeable
					className="text-center"
					renderArrowPrev={(onClickHandler, hasPrev, label) =>
						hasPrev && (
							<button
								type="button"
								onClick={onClickHandler}
								title={label}
								className="absolute left-0 top-1/3 -translate-y-1/2 bg-transparent text-white w-20 h-20 z-20 flex items-center justify-center hover:text-purple-400"
								style={{ boxShadow: "none" }}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="48"
									height="48"
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
									/>
								</svg>
							</button>
						)
					}
					renderArrowNext={(onClickHandler, hasNext, label) =>
						hasNext && (
							<button
								type="button"
								onClick={onClickHandler}
								title={label}
								className="absolute right-0 top-1/3 -translate-y-1/2 bg-transparent text-white w-20 h-20 z-20 flex items-center justify-center hover:text-purple-400"
								style={{ boxShadow: "none" }}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="48"
									height="48"
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
									/>
								</svg>
							</button>
						)
					}
				>
					{teams.map((team, index) => (
						<div key={index} className="space-y-8">
							{/* Team Name with Icon */}
							<div className="flex justify-center items-center gap-4">
								<h2 className="text-5xl font-bold tracking-wider">
									{team.name}
								</h2>
								<span className="text-4xl lightning-animate">{team.icon}</span>
							</div>

							{/* Team Image */}
							<div className="w-full h-96 bg-gray-800 rounded-xl flex items-center justify-center my-8 mx-auto border-2 border-gray-700 overflow-hidden">
								<img
									src={team.image}
									className="w-full h-full object-cover"
									alt={team.name}
									onError={(e) => {
										(e.target as HTMLImageElement).style.display = "none";
									}}
								/>
							</div>

							{/* Team Lead */}
							<div className="space-y-2">
								<div className="w-32 h-32 bg-gray-700 rounded-full mx-auto flex items-center justify-center text-2xl font-bold">
									{team.lead.charAt(0)}
								</div>
								<p className="text-lg font-mono">LEAD: {team.lead}</p>
							</div>

							{/* Members */}
							<div className="flex justify-center gap-4 my-8 flex-wrap">
								{team.members.map((member, i) => (
									<div
										key={i}
										className="w-20 h-20 bg-gray-800 rounded-full flex flex-col items-center justify-center text-base font-mono border border-gray-600 overflow-hidden"
									>
										<img
											src={member.image}
											alt={member.name}
											className="w-full h-full object-cover rounded-full mb-1"
											onError={e => {
												const target = e.target as HTMLImageElement;
												target.style.display = 'none';
											}}
										/>
										<span className="text-xs mt-1">{member.name}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</Carousel>
			</div>
		</section>
	);
}