import { AuroraBackground } from '@/components/ui/aurora-background';

export default function ReservationsPage() {
	return (
		<main className="min-h-screen pt-24">
			<AuroraBackground className="h-full">
				<div className="max-w-3xl mx-auto px-4">
					<h1 className="text-4xl font-bold text-center text-white mb-8">Make a Reservation</h1>
					<form className="space-y-6 bg-white/10 backdrop-blur-md p-8 rounded-xl">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<input
								type="text"
								placeholder="Name"
								className="w-full px-4 py-2 bg-black/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
							/>
							<input
								type="email"
								placeholder="Email"
								className="w-full px-4 py-2 bg-black/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
							/>
							<input
								type="date"
								className="w-full px-4 py-2 bg-black/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
							/>
							<input
								type="time"
								className="w-full px-4 py-2 bg-black/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
							/>
						</div>
						<input
							type="number"
							placeholder="Number of Guests"
							className="w-full px-4 py-2 bg-black/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
						/>
						<textarea
							placeholder="Special Requests"
							rows={4}
							className="w-full px-4 py-2 bg-black/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
						/>
						<button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-colors">
							Reserve Table
						</button>
					</form>
				</div>
			</AuroraBackground>
		</main>
	);
}