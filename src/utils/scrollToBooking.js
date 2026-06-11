export function scrollToBookingSection() {
  requestAnimationFrame(() => {
    document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })
  })
}
