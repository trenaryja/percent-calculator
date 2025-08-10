import { EquationProps } from '@/components'
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export type RemoveIndexSignature<T> = {
	[K in keyof T as string extends K ? never : K]: T[K]
}

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const equations: Omit<EquationProps, 'numberOfDecimals'>[] = [
	{
		labels: ['x', 'is what % of', 'y'],
		formula: (x, y) => (x / y) * 100,
		resultIsPercentage: true,
	},
	{
		labels: ["What's the % change from", 'x', 'to', 'y'],
		formula: (x, y) => ((y - x) / x) * 100,
		resultIsPercentage: true,
	},
	{
		labels: ['What is', 'x', '% of', 'y'],
		formula: (x, y) => (y * x) / 100,
		resultIsPercentage: true,
	},
]
