import MenuSection from '@/components/MenuSection';
import { AuroraBackground } from '@/components/ui/aurora-background';

export default function MenuPage() {
	return (
		<main className="min-h-screen pt-24">
			<AuroraBackground className="h-full">
				<div className="max-w-7xl mx-auto px-4">
					<h1 className="text-4xl font-bold text-center text-white mb-8">Our Menu</h1>
					<MenuSection />
				</div>
			</AuroraBackground>
		</main>
	);
}