"use client";
import { motion } from "framer-motion";

const stats = [
	{
		number: "15+",
		text: "Years of Excellence",
	},
	{
		number: "50+",
		text: "Signature Dishes",
	},
	{
		number: "200K+",
		text: "Happy Customers",
	},
	{
		number: "4.9",
		text: "Customer Rating",
	},
];

export default function Stats() {
	return (
		<section className="py-20 bg-neutral-950">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{stats.map((stat, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							className="text-center"
						>
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 blur-xl opacity-20" />
								<h3 className="text-4xl md:text-5xl font-bold text-white relative">
									{stat.number}
								</h3>
							</div>
							<p className="mt-2 text-neutral-400">{stat.text}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}