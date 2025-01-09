"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const AuroraBackground = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"relative flex flex-col items-center justify-center w-full overflow-hidden rounded-lg",
				className
			)}
		>
			<div className="absolute inset-0 w-full h-full bg-black" />
			<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform rotate-45 blur-3xl opacity-50" />
			<div className="absolute inset-0 w-full h-full bg-gradient-to-l from-rose-500 via-violet-500 to-indigo-500 transform -rotate-45 blur-3xl opacity-50" />
			<div className="absolute inset-0 w-full h-full bg-black opacity-75" />
			<div className="relative">{children}</div>
		</div>
	);
};