"use client";
import { AnimatedTabs } from "./ui/animated-tabs";
import { ImageTrailEffect } from "./ui/image-lens";

const menuTabs = [
	{
		title: "Starters",
		value: "starters",
		content: [
			{
				id: "starter-1",
				title: "Paneer Tikka",
				description: "Marinated cottage cheese cubes grilled to perfection with Indian spices",
				price: "12.99",
				image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
				ImageComponent: () => (
					<ImageTrailEffect
						src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0"
						alt="Paneer Tikka"
						width={400}
						height={300}
						className="w-full h-48"
					/>
				)
			},
			{
				id: "starter-2",
				title: "Samosa",
				description: "Crispy pastry filled with spiced potatoes and green peas",
				price: "8.99",
				image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
				ImageComponent: () => (
					<ImageTrailEffect
						src="https://images.unsplash.com/photo-1601050690597-df0568f70950"
						alt="Samosa"
						width={400}
						height={300}
						className="w-full h-48"
					/>
				)
			},
			{
				id: "starter-3",
				title: "Onion Bhaji",
				description: "Crispy onion fritters with Indian spices and gram flour",
				price: "7.99",
				image: "https://images.unsplash.com/photo-1626132647523-66f3bf15f8d3",
				ImageComponent: () => (
					<ImageTrailEffect
						src="https://images.unsplash.com/photo-1626132647523-66f3bf15f8d3"
						alt="Onion Bhaji"
						width={400}
						height={300}
						className="w-full h-48"
					/>
				)
			}
		]
	},
	{
		title: "Main Course",
		value: "mains",
		content: [
			{
				id: "main-1",
				title: "Butter Chicken",
				description: "Tender chicken in rich tomato and butter gravy",
				price: "18.99",
				image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
				ImageComponent: () => (
					<ImageTrailEffect
						src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
						alt="Butter Chicken"
						width={400}
						height={300}
						className="w-full h-48"
					/>
				)
			},
			{
				id: "main-2",
				title: "Palak Paneer",
				description: "Cottage cheese cubes in creamy spinach gravy",
				price: "16.99",
				image: "https://images.unsplash.com/photo-1596797038530-2c107229654b",
				ImageComponent: () => (
					<ImageTrailEffect
						src="https://images.unsplash.com/photo-1596797038530-2c107229654b"
						alt="Palak Paneer"
						width={400}
						height={300}
						className="w-full h-48"
					/>
				)
			},
			{
				id: "main-3",
				title: "Dal Makhani",
				description: "Black lentils slow-cooked with butter and cream",
				price: "14.99",
				image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
				ImageComponent: () => (
					<ImageTrailEffect
						src="https://images.unsplash.com/photo-1585937421612-70a008356fbe"
						alt="Dal Makhani"
						width={400}
						height={300}
						className="w-full h-48"
					/>
				)
			}
		]
	},
	{
		title: "Tandoor",
		value: "tandoor",
		content: [
			{
				id: "tandoor-1",
				title: "Chicken Tikka",
				description: "Marinated chicken pieces grilled in clay oven",
				price: "17.99",
				image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
				ImageComponent: () => (
					<ImageTrailEffect
						src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0"
						alt="Chicken Tikka"
						width={400}
						height={300}
						className="w-full h-48"
					/>
				)
			},
			{
				id: "tandoor-2",
				title: "Seekh Kebab",
				description: "Minced lamb with herbs and spices grilled on skewers",
				price: "19.99",
				image: "https://images.unsplash.com/photo-1628294895950-9805252327bc",
				ImageComponent: () => (
					<ImageTrailEffect
						src="https://images.unsplash.com/photo-1628294895950-9805252327bc"
						alt="Seekh Kebab"
						width={400}
						height={300}
						className="w-full h-48"
					/>
				)
			}
		]
	},
	{
		title: "Breads",
		value: "breads",
		content: [
			{
				id: "bread-1",
				title: "Butter Naan",
				description: "Soft leavened bread brushed with butter",
				price: "3.99",
				image: "https://images.unsplash.com/photo-1584767221236-9d8e55f2c3e7",
				ImageComponent: () => (
					<ImageTrailEffect
						src="https://images.unsplash.com/photo-1584767221236-9d8e55f2c3e7"
						alt="Butter Naan"
						width={400}
						height={300}
						className="w-full h-48"
					/>
				)
			},
			{
				id: "bread-2",
				title: "Garlic Roti",
				description: "Whole wheat bread with garlic and butter",
				price: "3.49",
				image: "https://images.unsplash.com/photo-1619531038896-dedb6561a572",
				ImageComponent: () => (
					<ImageTrailEffect
						src="https://images.unsplash.com/photo-1619531038896-dedb6561a572"
						alt="Garlic Roti"
						width={400}
						height={300}
						className="w-full h-48"
					/>
				)
			}
		]
	},
	{
		title: "Desserts",
		value: "desserts",
		content: [
			{
				id: "dessert-1",
				title: "Gulab Jamun",
				description: "Deep-fried milk solids soaked in sugar syrup",
				price: "6.99",
				image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848",
				ImageComponent: () => (
					<ImageTrailEffect
						src="https://images.unsplash.com/photo-1589119908995-c6837fa14848"
						alt="Gulab Jamun"
						width={400}
						height={300}
						className="w-full h-48"
					/>
				)
			},
			{
				id: "dessert-2",
				title: "Rasmalai",
				description: "Soft cottage cheese dumplings in saffron milk",
				price: "7.99",
				image: "https://images.unsplash.com/photo-1624374053855-39a5a1a41402",
				ImageComponent: () => (
					<ImageTrailEffect
						src="https://images.unsplash.com/photo-1624374053855-39a5a1a41402"
						alt="Rasmalai"
						width={400}
						height={300}
						className="w-full h-48"
					/>
				)
			}
		]
	}
];

export default function MenuSection() {
	return (
		<div className="bg-neutral-950">
			<div className="max-w-7xl mx-auto">
				{/* <h2 className="text-3xl md:text-4xl font-bold text-center text-white pt-16 pb-8">
					Our Menu
				</h2> */}
				<div className="px-4">
					<AnimatedTabs tabs={menuTabs} />
				</div>
			</div>
		</div>
	);
}