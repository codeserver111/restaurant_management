"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cartStore";
import { X, ShoppingCart } from "lucide-react";
import { CartItem } from "@/types/cart";


export default function Cart() {
	const [isOpen, setIsOpen] = useState(false);
	const [showPayment, setShowPayment] = useState(false);
	const [paymentMethod, setPaymentMethod] = useState<"cash" | "online" | null>(null);
	const [orderDetails, setOrderDetails] = useState({
		mobileNo: "",
		tableNo: "",
	});
	const { items, removeItem, updateQuantity, total, clearCart } = useCartStore();

	const handleCheckout = () => {
		setShowPayment(true);
	};

	const handlePayment = () => {
		if (paymentMethod === "cash") {
			const orderToken = Math.random().toString(36).substr(2, 9).toUpperCase();
			alert(`Order Booked! Your token number is: ${orderToken}`);
		} else {
			// Handle online payment
			alert("Redirecting to payment gateway...");
		}
		clearCart();
		setIsOpen(false);
		setShowPayment(false);
		setPaymentMethod(null);
	};

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="fixed bottom-4 right-4 z-50 p-3 md:p-4 bg-orange-500 rounded-full text-white shadow-lg hover:bg-orange-600 transition-colors"
			>
				<ShoppingCart className="w-6 h-6 md:w-7 md:h-7" />
				{items.length > 0 && (
					<span className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs md:text-sm">
						{items.length}
					</span>
				)}
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/50 z-50 md:flex md:items-center md:justify-end"
					>
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							className="absolute right-0 top-0 h-full w-full md:w-[400px] lg:w-[450px] bg-neutral-900 p-4 md:p-6 overflow-y-auto"
						>
							<button
								onClick={() => setIsOpen(false)}
								className="absolute top-4 right-4 text-white"
							>
								<X />
							</button>

							<h2 className="text-2xl font-bold text-white mb-6">Your Cart</h2>

							{!showPayment ? (
								<>
									<div className="space-y-4 mb-6">
										{items.map((item: CartItem) => (
											<div
												key={item.id}
												className="flex items-center justify-between bg-neutral-800 p-3 md:p-4 rounded-lg"
											>
												<div>
													<h3 className="text-white">{item.title}</h3>
													<p className="text-orange-500">${item.price}</p>
												</div>
												<div className="flex items-center space-x-2">
													<button
														onClick={() => updateQuantity(item.id, item.quantity - 1)}
														className="text-white"
													>
														-
													</button>
													<span className="text-white">{item.quantity}</span>
													<button
														onClick={() => updateQuantity(item.id, item.quantity + 1)}
														className="text-white"
													>
														+
													</button>
													<button
														onClick={() => removeItem(item.id)}
														className="text-red-500"
													>
														<X size={16} />
													</button>
												</div>
											</div>
										))}
									</div>

									<div className="mt-auto">
										<div className="flex justify-between text-white mb-4">
											<span>Total:</span>
											<span>${total().toFixed(2)}</span>
										</div>
										<button
											onClick={handleCheckout}
											className="w-full py-3 bg-orange-500 text-white rounded-lg"
										>
											Proceed to Checkout
										</button>
									</div>
								</>
							) : (
								<div className="space-y-6">
									<div className="space-y-4">
										<input
											type="tel"
											placeholder="Mobile Number"
											value={orderDetails.mobileNo}
											onChange={(e) =>
												setOrderDetails({ ...orderDetails, mobileNo: e.target.value })
											}
											className="w-full p-3 bg-neutral-800 text-white rounded-lg"
										/>
										<input
											type="text"
											placeholder="Table Number"
											value={orderDetails.tableNo}
											onChange={(e) =>
												setOrderDetails({ ...orderDetails, tableNo: e.target.value })
											}
											className="w-full p-3 bg-neutral-800 text-white rounded-lg"
										/>
									</div>

									<div className="space-y-4">
										<button
											onClick={() => setPaymentMethod("cash")}
											className={`w-full p-4 rounded-lg border ${
												paymentMethod === "cash"
													? "border-orange-500 text-orange-500"
													: "border-neutral-700 text-white"
											}`}
										>
											Pay with Cash
										</button>
										<button
											onClick={() => setPaymentMethod("online")}
											className={`w-full p-4 rounded-lg border ${
												paymentMethod === "online"
													? "border-orange-500 text-orange-500"
													: "border-neutral-700 text-white"
											}`}
										>
											Pay Online
										</button>
									</div>

									<button
										onClick={handlePayment}
										disabled={!paymentMethod || !orderDetails.mobileNo || !orderDetails.tableNo}
										className="w-full py-3 bg-orange-500 text-white rounded-lg disabled:opacity-50"
									>
										Complete Order
									</button>
								</div>
							)}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}