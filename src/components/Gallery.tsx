"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
	{
		src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
		alt: "Restaurant Interior"
	},
	{
		src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
		alt: "Fine Dining"
	},
	{
		src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
		alt: "Restaurant Ambiance"
	},
	{
		src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b",
		alt: "Private Dining"
	}
];

export default function Gallery() {
	return (
		<section className="py-20 bg-black">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-4xl font-bold text-center text-white mb-12"
				>
					Our Ambiance
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{images.map((image, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							whileHover={{ scale: 1.05 }}
							className="relative h-64 overflow-hidden rounded-2xl"
						>
							<Image
								src={image.src}
								alt={image.alt}
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
								<p className="text-white text-lg font-medium">{image.alt}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}