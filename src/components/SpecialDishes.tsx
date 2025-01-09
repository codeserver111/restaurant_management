"use client";
import { Spotlight } from "./ui/spotlight";
import { motion } from "framer-motion";
import Image from "next/image";

const specialDishes = [
	{
		name: "Chef's Special Biryani",
		description: "Aromatic basmati rice cooked with tender meat and special spices",
		price: "$24.99",
		image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
	},
	{
		name: "Butter Chicken",
		description: "Creamy tomato curry with tender chicken pieces",
		price: "$18.99",
		image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
	},
	{
		name: "Tandoori Platter",
		description: "Assortment of grilled delicacies from our tandoor",
		price: "$29.99",
		image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
	},
];

export default function SpecialDishes() {
	return (
		<section className="py-20 bg-black">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-4xl font-bold text-center text-white mb-12"
				>
					Chef's Special Selection
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{specialDishes.map((dish, idx) => (
						<Spotlight key={idx}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: idx * 0.2 }}
								className="group relative overflow-hidden rounded-2xl bg-neutral-900"
							>
								<div className="h-64 relative">
									<Image
										src={dish.image}
										alt={dish.name}
										fill
										className="object-cover transition-transform group-hover:scale-105"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-white">{dish.name}</h3>
									<p className="mt-2 text-neutral-300">{dish.description}</p>
									<div className="mt-4 flex items-center justify-between">
										<span className="text-orange-500 font-bold">{dish.price}</span>
										<button className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
											Order Now
										</button>
									</div>
								</div>
							</motion.div>
						</Spotlight>
					))}
				</div>
			</div>
		</section>
	);
}