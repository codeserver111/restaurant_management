'use client'
import { AuroraBackground } from '@/components/ui/aurora-background';
import { motion } from 'framer-motion';

const events = [
	{
		title: "Wine Tasting Evening",
		date: "Every Friday",
		description: "Join us for an evening of fine wines and perfectly paired appetizers.",
		image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3"
	},
	{
		title: "Chef's Special Dinner",
		date: "Last Saturday of Month",
		description: "Experience our chef's exclusive 7-course tasting menu.",
		image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
	}
];

export default function EventsPage() {
	return (
		<main className="min-h-screen pt-24">
			<AuroraBackground className="h-full">
				<div className="max-w-7xl mx-auto px-4">
					<h1 className="text-4xl font-bold text-center text-white mb-12">Special Events</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{events.map((event, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2 }}
								className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden"
							>
								<div className="relative h-48">
									<img
										src={event.image}
										alt={event.title}
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold text-white">{event.title}</h3>
									<p className="text-orange-400 mt-1">{event.date}</p>
									<p className="text-gray-300 mt-2">{event.description}</p>
									<button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
										Learn More
									</button>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</AuroraBackground>
		</main>
	);
}