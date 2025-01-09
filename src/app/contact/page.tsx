"use client";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
	return (
		<main className="min-h-screen pt-24">
			<AuroraBackground className="h-full py-12">
				<div className="max-w-6xl mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-center mb-12"
					>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
							Contact Us
						</h1>
						<p className="text-xl text-gray-300">
							We'd Love to Hear From You
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="space-y-8"
						>
							<div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
								<h2 className="text-2xl font-semibold text-white mb-6">
									Get in Touch
								</h2>
								<form className="space-y-4">
									<input
										type="text"
										placeholder="Your Name"
										className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
									/>
									<input
										type="email"
										placeholder="Your Email"
										className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
									/>
									<textarea
										placeholder="Your Message"
										rows={4}
										className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
									/>
									<button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-colors">
										Send Message
									</button>
								</form>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="space-y-6"
						>
							<div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
								<h2 className="text-2xl font-semibold text-white mb-6">
									Information
								</h2>
								<div className="space-y-4">
									{[
										{
											icon: <MapPin className="h-5 w-5" />,
											title: "Address",
											content: "123 Gourmet Street, Foodie City, FC 12345",
										},
										{
											icon: <Phone className="h-5 w-5" />,
											title: "Phone",
											content: "+1 (234) 567-8900",
										},
										{
											icon: <Mail className="h-5 w-5" />,
											title: "Email",
											content: "info@restaurant.com",
										},
										{
											icon: <Clock className="h-5 w-5" />,
											title: "Hours",
											content: "Mon-Sun: 11:00 AM - 11:00 PM",
										},
									].map((item, index) => (
										<div key={index} className="flex items-start space-x-4">
											<div className="text-orange-500">{item.icon}</div>
											<div>
												<h3 className="text-white font-medium">{item.title}</h3>
												<p className="text-gray-300">{item.content}</p>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
								<h2 className="text-2xl font-semibold text-white mb-4">
									Follow Us
								</h2>
								<div className="flex space-x-4">
									{["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
										(social, index) => (
											<button
												key={index}
												className="p-2 bg-black/20 rounded-lg text-white hover:bg-black/30 transition-colors"
											>
												{social}
											</button>
										)
									)}
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</AuroraBackground>
		</main>
	);
}