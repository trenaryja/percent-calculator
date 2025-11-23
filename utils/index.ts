import { EquationProps } from '@/components'

export type RemoveIndexSignature<T> = {
	[K in keyof T as string extends K ? never : K]: T[K]
}

export const equations: Omit<EquationProps, 'numberOfDecimals'>[] = [
	{
		labels: ["What's", 'x', 'plus', 'y', '%'],
		formula: (x, y) => x + (x * y) / 100,
		resultIsPercentage: false,
	},
	{
		labels: ["What's the % change from", 'x', 'to', 'y'],
		formula: (x, y) => ((y - x) / x) * 100,
		resultIsPercentage: true,
	},
	{
		labels: ['x', 'is what % of', 'y'],
		formula: (x, y) => (x / y) * 100,
		resultIsPercentage: true,
	},
	{
		labels: ['What is', 'x', '% of', 'y'],
		formula: (x, y) => (y * x) / 100,
		resultIsPercentage: false,
	},
]
