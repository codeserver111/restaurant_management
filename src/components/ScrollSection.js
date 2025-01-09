"use client";

import { ContainerScroll } from "./ui/container-scroll-animation";

const users = [
	{
		name: "John Doe",
		designation: "Software Engineer",
		image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
		badge: "Developer"
	},
	{
		name: "Jane Smith",
		designation: "Product Designer",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
		badge: "Designer"
	},
	{
		name: "Mike Johnson",
		designation: "Marketing Manager",
		image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
		badge: "Marketing"
	}
];

export default function ScrollSection() {
	return (
		<div className="bg-neutral-950">
			<ContainerScroll
				titleComponent={
					<div className="flex flex-col items-center justify-center">
						<h1 className="text-4xl font-bold text-center mb-4">Our Team</h1>
						<div className="flex flex-col space-y-4">
							{users.map((user, idx) => (
								<div
									key={idx}
									className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg"
								>
									<img
										src={user.image}
										alt={user.name}
										className="w-12 h-12 rounded-full"
									/>
									<div>
										<h3 className="text-white font-semibold">{user.name}</h3>
										<p className="text-gray-400">{user.designation}</p>
									</div>
									<span className="ml-auto text-orange-500">{user.badge}</span>
								</div>
							))}
						</div>
					</div>
				}
			/>
		</div>
	);
}