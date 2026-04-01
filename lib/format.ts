export function formatDate(dateString?: string): string {
  if (!dateString) {
    return 'No date'
  }
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) {
    return 'No date'
  }
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}