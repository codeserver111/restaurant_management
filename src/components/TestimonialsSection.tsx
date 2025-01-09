"use client";

import { AnimatedTestimonials } from "./ui/animated-testimonials";

const testimonials = [
	{
		quote: "The flavors were absolutely incredible! Every dish was a masterpiece. The attention to detail in presentation and taste is remarkable.",
		name: "Sarah Chen",
		designation: "Food Critic",
		src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
	},
	{
		quote: "Best fine dining experience in the city. The wine pairing suggestions were perfect, and the service was impeccable.",
		name: "Michael Rodriguez",
		designation: "Wine Enthusiast",
		src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
	},
	{
		quote: "The ambiance and the culinary experience were beyond expectations. Each course told a unique story of flavors.",
		name: "Emily Watson",
		designation: "Regular Guest",
		src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
	},
];

export default function TestimonialsSection() {
	return <AnimatedTestimonials testimonials={testimonials} />;
}