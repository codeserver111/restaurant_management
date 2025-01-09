"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<div className="flex flex-col overflow-hidden bg-black">
			<ContainerScroll
				titleComponent={
					<div className="flex flex-col items-center justify-center px-4">
						<motion.h1 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-4xl md:text-7xl font-bold text-center text-white"
						>
							Experience Culinary <br />
							<span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
								Excellence
							</span>
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-gray-400 mt-4 text-center max-w-2xl text-xl"
						>
							Where every dish tells a story and every meal becomes a memory
						</motion.p>
					</div>
				}
			>
				<div className="relative w-full max-w-6xl mx-auto mt-8 aspect-[16/9]">
					<Image
						src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
						alt="Signature Dish"
						fill
						className="rounded-2xl object-cover shadow-2xl"
						priority
						draggable={false}
					/>
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="absolute bottom-8 left-8 right-8 text-white"
					>
						<h3 className="text-2xl font-bold">Our Signature Dish</h3>
						<p className="text-gray-200 mt-2">
							Crafted with passion, served with excellence
						</p>
					</motion.div>
				</div>
			</ContainerScroll>
		</div>
	);
}

