"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram } from "lucide-react";

const instagramPosts = [
	{
		id: 1,
		image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
		likes: "2.5k",
		caption: "Perfect Margherita Pizza fresh from our wood-fired oven 🍕"
	},
	{
		id: 2,
		image: "https://images.unsplash.com/photo-1544025162-d76694265947",
		likes: "1.8k",
		caption: "Start your day with our signature breakfast platter ☀️"
	},
	{
		id: 3,
		image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
		likes: "3.2k",
		caption: "Homemade pasta made fresh daily 🍝"
	},
	{
		id: 4,
		image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
		likes: "2.1k",
		caption: "Our award-winning dessert selection 🍰"
	},
	{
		id: 5,
		image: "https://images.unsplash.com/photo-1607532941433-304659e8198a",
		likes: "1.9k",
		caption: "Special of the day: Grilled Sea Bass 🐟"
	},
	{
		id: 6,
		image: "https://images.unsplash.com/photo-1546039907-7fa05f864c02",
		likes: "2.7k",
		caption: "Weekend vibes at our restaurant 🎉"
	}
];

export default function InstagramFeed() {
	return (
		<section className="py-20 bg-black">
			<div className="max-w-7xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl font-bold text-white mb-4">
						Follow Us on Instagram
					</h2>
					<a
						href="https://instagram.com/yourrestaurant"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center text-orange-500 hover:text-orange-400"
					>
						<Instagram className="w-5 h-5 mr-2" />
						@yourrestaurant
					</a>
				</motion.div>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
					{instagramPosts.map((post, idx) => (
						<motion.div
							key={post.id}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							className="group relative aspect-square overflow-hidden rounded-xl bg-neutral-900"
						>
							<Image
								src={post.image}
								alt={post.caption}
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
								<span className="text-white font-semibold mb-2">❤️ {post.likes}</span>
								<p className="text-white text-sm text-center">{post.caption}</p>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="text-center mt-8"
				>
					<a
						href="https://instagram.com/yourrestaurant"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:from-orange-600 hover:to-red-600 transition-colors"
					>
						View More on Instagram
					</a>
				</motion.div>
			</div>
		</section>
	);
}