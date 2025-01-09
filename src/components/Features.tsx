"use client";
import { motion } from "framer-motion";
import { UtensilsCrossed, Clock, Award, Leaf } from "lucide-react";

const features = [
	{
		icon: <UtensilsCrossed className="h-8 w-8" />,
		title: "Authentic Cuisine",
		description: "Experience the true flavors of traditional recipes passed down through generations"
	},
	{
		icon: <Clock className="h-8 w-8" />,
		title: "Fast Service",
		description: "Quick and efficient service without compromising on quality"
	},
	{
		icon: <Award className="h-8 w-8" />,
		title: "Award Winning",
		description: "Multiple awards for excellence in food quality and service"
	},
	{
		icon: <Leaf className="h-8 w-8" />,
		title: "Fresh Ingredients",
		description: "Daily sourced fresh ingredients from local suppliers"
	}
];

export default function Features() {
	return (
		<section className="py-20 bg-black">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-4xl font-bold text-center text-white mb-12"
				>
					Why Choose Us
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							whileHover={{ scale: 1.05 }}
							className="p-6 rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-white/10"
						>
							<div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
								<div className="text-orange-500">{feature.icon}</div>
							</div>
							<h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
							<p className="text-neutral-400">{feature.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}