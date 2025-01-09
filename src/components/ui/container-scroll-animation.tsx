"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({
	titleComponent,
	children
}: {
	titleComponent: string | React.ReactNode;
	children?: React.ReactNode;
}) => {
	const containerRef = useRef<any>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	const scaleDimensions = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

	return (
		<div
			ref={containerRef}
			className="h-screen flex flex-col items-center justify-start relative overflow-hidden"
		>
			<div className="relative z-10 w-full mt-20">
				<motion.div
					style={{
						scale: scaleDimensions,
						opacity: opacity,
					}}
					className="div"
				>
					{titleComponent}
				</motion.div>
			</div>
			<motion.div
				style={{
					scale: scaleDimensions,
					opacity: opacity,
				}}
				className="relative z-10 w-full mt-10"
			>
				{children}
			</motion.div>
		</div>
	);
};