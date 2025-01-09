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
			<ContainerScroll users={users} />
		</div>
	);
}