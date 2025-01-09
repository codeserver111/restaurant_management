"use client";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";

export default function AboutPage() {
	return (
		<main className="min-h-screen pt-24">
			<AuroraBackground className="h-full py-12">
				<div className="max-w-6xl mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-center mb-12"
					>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
							Our Story
						</h1>
						<p className="text-xl text-gray-300">
							A Journey of Flavors and Passion
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<div className="relative h-[400px] rounded-2xl overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
									alt="Restaurant Interior"
									fill
									className="object-cover"
								/>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="space-y-6"
						>
							<h2 className="text-3xl font-semibold text-white">
								Culinary Excellence Since 1995
							</h2>
							<p className="text-gray-300">
								Founded by Chef Michael Laurent, our restaurant has been serving
								exceptional cuisine for over two decades. What started as a small
								family restaurant has grown into one of the city's most beloved
								culinary destinations.
							</p>
							<p className="text-gray-300">
								We believe in using only the finest ingredients, sourced from local
								farmers and suppliers who share our commitment to quality and
								sustainability.
							</p>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
					>
						{[
							{
								title: "Fresh Ingredients",
								value: "100%",
								description: "Local & Organic",
							},
							{
								title: "Expert Chefs",
								value: "25+",
								description: "Years Combined Experience",
							},
							{
								title: "Happy Customers",
								value: "50K+",
								description: "Served & Satisfied",
							},
						].map((stat, index) => (
							<div
								key={index}
								className="bg-white/10 backdrop-blur-md rounded-xl p-6"
							>
								<h3 className="text-4xl font-bold text-orange-500">
									{stat.value}
								</h3>
								<p className="text-xl font-semibold text-white mt-2">
									{stat.title}
								</p>
								<p className="text-gray-400 mt-1">{stat.description}</p>
							</div>
						))}
					</motion.div>
				</div>
			</AuroraBackground>
		</main>
	);
}