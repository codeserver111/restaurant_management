"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Testimonial = {
	quote: string;
	name: string;
	designation: string;
	src: string;
};

export const AnimatedTestimonials = ({
	testimonials,
}: {
	testimonials: Testimonial[];
}) => {
	return (
		<div className="bg-neutral-950 py-20">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
					What Our Guests Say
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: idx * 0.2 }}
							viewport={{ once: true }}
							className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
						>
							<div className="flex items-center gap-4 mb-4">
								<div className="relative h-12 w-12 rounded-full overflow-hidden">
									<Image
										src={testimonial.src}
										alt={testimonial.name}
										fill
										className="object-cover"
									/>
								</div>
								<div>
									<h3 className="text-white font-semibold">{testimonial.name}</h3>
									<p className="text-orange-400 text-sm">{testimonial.designation}</p>
								</div>
							</div>
							<blockquote className="text-gray-300 italic">
								"{testimonial.quote}"
							</blockquote>
							<div className="mt-4 flex text-orange-500">
								{[...Array(5)].map((_, i) => (
									<svg
										key={i}
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};