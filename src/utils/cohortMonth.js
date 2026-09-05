export const getCohortMonth = () => new Intl.DateTimeFormat('en-GB', {
  month: 'long',
  timeZone: 'Europe/London',
}).format(new Date())

export const getMsUntilNextLocalMonth = () => {
  const now = new Date()
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1)
  return nextMonth.getTime() - now.getTime() + 1000
}
