"use client";
import { motion } from "framer-motion";
import { JSX, useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

type Tab = {
	title: string;
	value: string;
	content: {
		id: string;
		title: string;
		description: string;
		price: string;
		image: string;
		ImageComponent: () => JSX.Element;
	}[];
};

export const AnimatedTabs = ({ tabs }: { tabs: Tab[] }) => {
	const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
	const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
	const { addItem } = useCartStore();

	const updateQuantity = (itemId: string, delta: number) => {
		setQuantities((prev) => ({
			...prev,
			[itemId]: Math.max(0, (prev[itemId] || 0) + delta),
		}));
	};

	const handleAddToCart = (item: any) => {
		if (quantities[item.id] > 0) {
			addItem({
				id: item.id,
				title: item.title,
				price: item.price,
				quantity: quantities[item.id],
			});
			setQuantities((prev) => ({ ...prev, [item.id]: 0 }));
		}
	};

	return (
		<div className="flex flex-col items-center justify-center py-8 md:py-16 px-2 md:px-8">
			{/* Make tabs scrollable on mobile */}
			<div className="w-full overflow-x-auto pb-2 md:pb-0 no-scrollbar">
				<div className="flex space-x-1 bg-neutral-900/20 p-1 rounded-full min-w-max mx-auto">
				{tabs.map((tab) => (
					<button
						key={tab.value}
						onClick={() => setActiveTab(tab)}
						className={`${
							activeTab.value === tab.value
								? "text-white"
								: "text-neutral-400 hover:text-neutral-200"
						} relative rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium transition-colors whitespace-nowrap`}
					>
						{activeTab.value === tab.value && (
							<motion.div
								layoutId="active-pill"
								className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
								transition={{ type: "spring", duration: 0.6 }}
							/>
						)}
						<span className="relative z-10">{tab.title}</span>
					</button>
				))}
			   </div>

			<div className="mt-6 md:mt-8 w-full max-w-6xl px-2 md:px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
				>
					{activeTab.content.map((item, idx) => (
						<motion.div
							key={item.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							className="bg-neutral-900/50 backdrop-blur-md rounded-xl overflow-hidden"
						>
							<div className="relative h-48 sm:h-40 lg:h-48">
								<item.ImageComponent />
							</div>
							<div className="p-3 md:p-4">
								<div className="flex justify-between items-start">
									<h3 className="text-base md:text-lg font-semibold text-white">{item.title}</h3>
									<span className="text-orange-500 font-bold text-sm md:text-base">{item.price}</span>
								</div>
								<p className="mt-1 md:mt-2 text-neutral-300 text-xs md:text-sm line-clamp-2">{item.description}</p>
								
								<div className="mt-4 flex items-center justify-between">
									<div className="flex items-center space-x-2">
										<button
											onClick={() => updateQuantity(item.id, -1)}
											className="p-1 rounded-full bg-neutral-800 text-white hover:bg-neutral-700"
										>
											<Minus className="w-4 h-4" />
										</button>
										<span className="text-white w-8 text-center">
											{quantities[item.id] || 0}
										</span>
										<button
											onClick={() => updateQuantity(item.id, 1)}
											className="p-1 rounded-full bg-neutral-800 text-white hover:bg-neutral-700"
										>
											<Plus className="w-4 h-4" />
										</button>
									</div>
									<button
										onClick={() => handleAddToCart(item)}
										disabled={!quantities[item.id]}
										className={`px-4 py-2 rounded-full transition-colors ${
											quantities[item.id]
												? "bg-orange-500 hover:bg-orange-600 text-white"
												: "bg-neutral-800 text-neutral-400 cursor-not-allowed"
										}`}
									>
										Add to Cart
									</button>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
		</div>
		</div>
		</div>
	);
};