
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date))
}

export function getRelativeTime(date: string): string {
  const now = new Date()
  const target = new Date(date)
  const diffInHours = Math.abs(now.getTime() - target.getTime()) / (1000 * 60 * 60)
  
  if (diffInHours < 1) {
    const minutes = Math.floor(diffInHours * 60)
    return `${minutes} minutes ago`
  } else if (diffInHours < 24) {
    const hours = Math.floor(diffInHours)
    return `${hours} hours ago`
  } else {
    const days = Math.floor(diffInHours / 24)
    return `${days} days ago`
  }
}

export function getDealStageColor(stage: string): string {
  switch (stage) {
    case 'prospecting': return 'bg-gray-100 text-gray-800'
    case 'qualification': return 'bg-blue-100 text-blue-800'
    case 'proposal': return 'bg-yellow-100 text-yellow-800'
    case 'negotiation': return 'bg-orange-100 text-orange-800'
    case 'closed-won': return 'bg-green-100 text-green-800'
    case 'closed-lost': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'high': return 'bg-red-100 text-red-800'
    case 'medium': return 'bg-yellow-100 text-yellow-800'
    case 'low': return 'bg-green-100 text-green-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}
