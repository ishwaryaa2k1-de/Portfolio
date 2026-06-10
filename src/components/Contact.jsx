export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container container--narrow">
        <p className="contact__eyebrow mono accent">06. What&apos;s Next?</p>
        <h2 className="contact__title">Get In Touch</h2>
        <p className="contact__body">
          I&apos;m currently open to new opportunities. Whether you have a Salesforce
          project, want to discuss Agentforce AI strategy, or just want to connect —
          my inbox is always open.
        </p>

        <a href="mailto:ashwariya487@gmail.com" className="btn btn--primary btn--lg">
          Say Hello
        </a>

        <div className="contact__links">
          <a
            href="https://www.linkedin.com/in/aishwarya-naidu-golla-730302287"
            target="_blank"
            rel="noreferrer"
            className="contact__link"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href="mailto:ashwariya487@gmail.com" className="contact__link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            ashwariya487@gmail.com
          </a>
          <a href="tel:+919015863990" className="contact__link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 18l.42-1.08z"/>
            </svg>
            +91 9015863990
          </a>
        </div>
      </div>
    </section>
  )
}
