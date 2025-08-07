"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";

type Lead = { name: string; image: string };
type Member = { name: string };

const mascotImg = "/images/mascot.png"; // Use the attached image for all leads and members

const teams: {
	name: string;
	icon: string;
	image: string;
	leads: Lead[];
	members: Member[];
	header?: string;
}[] = [
	{
		name: "EXECUTIVE TEAM",
		icon: "⭐",
		image: "/images/president header.jpg",
		leads: [
			{ name: "Lina", image: mascotImg },
		],
		members: [
			{ name: "Arwa" },
			{ name: "Ariel" },
			{ name: "Taylor" },
			{ name: "Yahya" },
		],
		header: undefined,
	},
	{
		name: "FINANCE",
		icon: "💰",
		image: "/images/finance.png",
		leads: [
			{ name: "YAHYA", image: mascotImg },
		],
		members: [
			{ name: "Fatima" },
			{ name: "Aryaan" },
		],
		// header: "/images/finance_header.png"
	},
	{
		name: "ELECTRICAL",
		icon: "⚡",
		image: "/images/elect.png",
		leads: [
			{ name: "YASH", image: mascotImg },
			{ name: "SAMIPYA", image: mascotImg },
		],
		members: [
			{ name: "Arjun" },
			{ name: "Aryaan" },
			{ name: "Conrad" },
			{ name: "Daljit" },
			{ name: "Ghassan" },
			{ name: "Julia" },
		],
	},
	{
		name: "SOFTWARE",
		icon: "💻",
		image: "/images/soft.png",
		leads: [
			{ name: "YASSIN", image: mascotImg },
			{ name: "MUJTABA", image: mascotImg },
		],
		members: [
			{ name: "Alan" },
			{ name: "Richard" },
			{ name: "Farha" },
			{ name: "Korede" },
			{ name: "Harold" },
			{ name: "Hamza" },
		],
	},
	{
		name: "MECHANICAL",
		icon: "⚙️",
		image: "/images/mech.png",
		leads: [
			{ name: "PHILLIP", image: mascotImg },
			{ name: "ZAYD", image: mascotImg },
		],
		members: [
			{ name: "Hailey" },
			{ name: "Kristina" },
			{ name: "Abdul Qadeer" },
		],
	},
	{
		name: "MARKETING",
		icon: "📈",
		image: "/images/marketing.png",
		leads: [
			{ name: "TAYLOR", image: mascotImg },
			{ name: "ARIEL", image: mascotImg },
		],
		members: [
			{ name: "Mariyah" },
		],
	},
	{
		name: "BIOMEDICAL",
		icon: "🩺",
		image: "/images/bio.png",
		leads: [
			{ name: "ABDUL KAREEM", image: mascotImg },
		],
		members: [
			{ name: "Ahmeel" },
			{ name: "Bridget" },
			{ name: "Harvir" },
			{ name: "Mutaz" },
			{ name: "Sana" },
		],
	},
];

// Helper to get color for each team name and labels
const teamColors: { [key: string]: string } = {
	"FINANCE": "#B6F0E6",
	"ELECTRICAL": "#C3B6F0",
	"SOFTWARE": "#B6F0D6",
	"MECHANICAL": "#F0D6B6",
	"MARKETING": "#F0B6D6",
	"BIOMEDICAL": "#D6F0B6",
};

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
			<img
				src="/images/team_header.PNG"
				alt="Team Header"
				className="mx-auto w-full max-w-[500px] h-auto mb-8 mt-8"
			/>


			{/* Team */}
			<div className="relative z-10 w-full h-full flex items-center justify-center px-8 mb-16">
				<div className="relative flex flex-col items-center justify-center">
					<p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed max-w-sm sm:max-w-lg md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 text-center"
					   style={{color: '#F5F7FD', fontFamily: 'Arimo, sans-serif'}}>

						Since 2024, <strong>WayBionic</strong> has been driven by passionate innovators pushing boundaries in technology and medicine.
						We're always looking for curious, driven individuals ready to make an impact. Explore our teams -- we're confident
						there's a place for you here!
					</p>
				</div>
			</div>


			<div
				className="relative z-10 w-full max-w-2xl px-4"
				style={{
					background: "linear-gradient(to bottom, #564b89, transparent)",
					marginBottom: '48px',
				}}
			>
				<Carousel
					showThumbs={false}
					showStatus={false}
					infiniteLoop
					autoPlay={false}
					emulateTouch
					swipeable
					swipeScrollTolerance={30}
					preventMovementUntilSwipeScrollTolerance={true}
					className="text-center"
					renderArrowPrev={(onClickHandler, hasPrev, label) =>
						hasPrev && (
							<button
								type="button"
								onClick={onClickHandler}
								title={label}
								className="absolute left-0 top-1/3 -translate-y-1/2 bg-transparent text-white w-20 h-20 z-20 flex items-center justify-center hover:text-purple-400"
								style={{boxShadow: "none"}}
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
								style={{boxShadow: "none"}}
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
							<div className="flex justify-center items-center gap-4 mt-12 max-w-full overflow-hidden">
								<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider text-center whitespace-nowrap"
									style={{
										fontFamily: 'LemonMilk, sans-serif',
										color: teamColors[team.name] || '#fff'
									}}>
									{team.name === "EXECUTIVE TEAM" ? (
										<>
											executive team <span className="lightning-animate">⭐</span>
										</>
									) : team.name.toLowerCase() + " team"}
								</h2>
								{team.name !== "EXECUTIVE TEAM" && (
									<span
										className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl lightning-animate flex items-center">{team.icon}</span>
								)}
							</div>
							{/* Executive team header image for Executive team only */}
							{team.name === "EXECUTIVE TEAM" && (
								<div
									className="w-full h-96 bg-gray-800 rounded-xl flex flex-col items-center justify-center my-8 mx-auto overflow-hidden relative"
									style={{
										border: '2px solid #3c346c',
										outline: 'none'
									}}
								>
									<img
										src={team.image}
										className="w-full h-full object-cover absolute top-0 left-0 z-0"
										alt="Executive Team Header"
										style={{objectFit: 'cover', objectPosition: 'center'}}
									/>
									<div
										className="relative z-10 flex flex-col items-center justify-center w-full h-full">
										<div className="flex flex-col items-center mb-12 mt-36 sm:mt-[90px]">
											<div
												className="w-20 h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center mb-2 overflow-hidden">
												<span className="text-4xl font-bold text-gray-900"
													  style={{fontFamily: 'LemonMilk, sans-serif'}}>L</span>
											</div>
											<span className="text-white text-base font-bold"
												  style={{textShadow: '0 2px 8px #443B75'}}>Lina</span>
										</div>
									</div>
								</div>
							)}
							{/* Team Image with Leads inside */}
							{team.name !== "EXECUTIVE TEAM" && (
								<div
									className="w-full h-96 bg-gray-800 rounded-xl flex flex-col items-center justify-center my-8 mx-auto overflow-hidden relative"
									style={{
										border: '2px solid #3c346c',
										outline: 'none'
									}}
								>
									<img
										src={team.image}
										className="w-full h-full object-cover absolute top-0 left-0 z-0"
										alt={team.name}
										style={{objectFit: 'cover', objectPosition: 'center'}}
									/>
									<div
										className="relative z-10 flex flex-col items-center justify-center w-full h-full">
										<span className="block font-bold mt-36 sm:mt-[90px]" style={{
											fontFamily: 'LemonMilk, sans-serif',
											fontSize: '2rem',
											marginBottom: '24px',
											color: teamColors[team.name] || '#fff',
											textShadow: '0 2px 8px #443B75'
										}}>{team.leads.length === 1 ? 'lead:' : 'leads:'}</span>
										<div className="flex flex-wrap justify-center items-center gap-6 mb-12">
											{team.leads && team.leads.map((lead, i) => (
												<div key={i} className="flex flex-col items-center">
													<div
														className="w-20 h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center mb-2 overflow-hidden">
														<span className="text-4xl font-bold text-gray-900"
															  style={{fontFamily: 'LemonMilk, sans-serif'}}>{lead.name.charAt(0)}</span>
													</div>
													<span className="text-white text-base font-bold"
														  style={{textShadow: '0 2px 8px #443B75'}}>{lead.name}</span>
												</div>
											))}
										</div>
									</div>
								</div>
							)}
							{/* Vice Presidents label for Executive team, Members for others */}
							<span className="block font-bold mb-6" style={{
								fontFamily: 'LemonMilk, sans-serif',
								fontSize: '1.5rem',
								color: teamColors[team.name] || '#fff',
								textShadow: '0 2px 8px #443B75'
							}}>{team.name === "EXECUTIVE TEAM" ? 'Vice Presidents:' : 'Members:'}</span>
							{/* Vice Presidents or Members */}
							<div className="flex justify-center gap-4 my-8 flex-wrap">
								{team.members && team.members.map((member, i) => (
									<div
										key={i}
										className="flex flex-col items-center"
									>
										<div
											className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center text-base font-mono border border-gray-600 overflow-hidden">
											<img
												src={mascotImg}
												alt={member.name}
												className="w-full h-full object-cover rounded-full"
											/>
										</div>
										<span className="block text-base mt-2 font-bold" style={{
											color: '#fff',
											textShadow: '0 2px 8px #443B75',
											fontFamily: 'LemonMilk, sans-serif'
										}}>{member.name}</span>
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