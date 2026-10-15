import { Link } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'

function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found-page">
        <div className="not-found-shell">
          <section className="not-found-content" aria-labelledby="not-found-heading">
            <p className="not-found-code">404</p>
            <h1 id="not-found-heading">We couldn't find that page</h1>
            <p className="not-found-lead">
              The link may be out of date, or the page may have moved.<br />
              Here are the places most people are looking for.
            </p>

            <div className="not-found-actions">
              <Link to="/" className="not-found-button not-found-button-primary">Home</Link>
              <Link to="/booking" className="not-found-button not-found-button-secondary">Book a consultation</Link>
            </div>

            <p className="not-found-help">
              Looking for something specific? <a href="https://wa.me/447344193804" target="_blank" rel="noopener noreferrer">Message us on WhatsApp.</a>
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

export default NotFound
