import { create } from 'zustand';
import { CartItem } from '@/types/cart';

interface CartStore {
	items: CartItem[];
	addItem: (item: CartItem) => void;
	removeItem: (id: string) => void;
	updateQuantity: (id: string, quantity: number) => void;
	clearCart: () => void;
	total: () => number;
}

export const useCartStore = create<CartStore>((set: any, get: any) => ({
	items: [],
	addItem: (item: CartItem) => {
		const items = get().items;
		const existingItem = items.find((i: CartItem) => i.id === item.id);
		if (existingItem) {
			set({
				items: items.map((i: CartItem) =>
					i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
				),
			});
		} else {
			set({ items: [...items, { ...item, quantity: 1 }] });
		}
	},
	removeItem: (id: string) => {
		set({ items: get().items.filter((item: CartItem) => item.id !== id) });
	},
	updateQuantity: (id: string, quantity: number) => {
		set({
			items: get().items.map((item: CartItem) =>
				item.id === id ? { ...item, quantity } : item
			),
		});
	},
	clearCart: () => set({ items: [] }),
	total: () => {
		return get().items.reduce(
			(total: number, item: CartItem) => total + parseFloat(item.price) * item.quantity,
			0
		);
	},
}));
