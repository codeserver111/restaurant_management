"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

export const ImageTrailEffect = ({
	src,
	alt,
	width,
	height,
	className,
}: {
	src: string;
	alt: string;
	width: number;
	height: number;
	className?: string;
}) => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [showLens, setShowLens] = useState(false);
	const imageRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (imageRef.current) {
			const { left, top } = imageRef.current.getBoundingClientRect();
			const x = e.clientX - left;
			const y = e.clientY - top;
			setPosition({ x, y });
		}
	};

	return (
		<div
			ref={imageRef}
			className={`relative overflow-hidden ${className}`}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setShowLens(true)}
			onMouseLeave={() => setShowLens(false)}
		>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className="object-cover"
			/>
			{showLens && (
				<div
					className="pointer-events-none absolute w-32 h-32 rounded-full bg-white/10 backdrop-blur-xl"
					style={{
						transform: `translate(${position.x - 64}px, ${position.y - 64}px)`,
						boxShadow: "0 0 20px rgba(0,0,0,0.3)",
					}}
				/>
			)}
		</div>
	);
};