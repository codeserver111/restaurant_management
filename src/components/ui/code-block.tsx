"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
	code: string;
	language: string;
}

export const CodeBlock = ({ code, language }: CodeBlockProps) => {
	const [copied, setCopied] = useState(false);

	const onCopy = () => {
		navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4 }}
			className="relative group rounded-lg overflow-hidden bg-neutral-900 p-4"
		>
			<div className="flex items-center justify-between mb-4">
				<div className="flex space-x-2">
					<div className="w-3 h-3 rounded-full bg-red-500" />
					<div className="w-3 h-3 rounded-full bg-yellow-500" />
					<div className="w-3 h-3 rounded-full bg-green-500" />
				</div>
				<button
					onClick={onCopy}
					className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white"
				>
					{copied ? (
						<Check className="w-4 h-4" />
					) : (
						<Copy className="w-4 h-4" />
					)}
				</button>
			</div>
			<pre className="text-white font-mono text-sm overflow-x-auto">
				<code>{code}</code>
			</pre>
			<div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-neutral-800 text-neutral-400 text-xs">
				{language}
			</div>
		</motion.div>
	);
};