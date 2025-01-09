"use client";

import { CodeBlock } from "./ui/code-block";

const pythonCode = `def fibonacci(n):
	"""Generate Fibonacci sequence up to n"""
	sequence = [0, 1]
	while len(sequence) < n:
		sequence.append(sequence[-1] + sequence[-2])
	return sequence

# Generate first 10 Fibonacci numbers
fib_sequence = fibonacci(10)
print(f"First 10 Fibonacci numbers: {fib_sequence}")

# Using list comprehension
squares = [x**2 for x in range(10)]
print(f"Squares of first 10 numbers: {squares}")

# Example of a class
class Calculator:
	def __init__(self):
		self.result = 0
	
	def add(self, x):
		self.result += x
		return self

	def subtract(self, x):
		self.result -= x
		return self

# Using the calculator
calc = Calculator()
final_result = calc.add(10).subtract(5).result
print(f"Calculator result: {final_result}")`;

export default function CodeExample() {
  return (
	<div className="max-w-4xl mx-auto p-4 space-y-4">
	  <h2 className="text-2xl font-bold mb-4 text-center">
		Python Code Example
	  </h2>
	  <CodeBlock code={pythonCode} language="python" />
	</div>
  );
}