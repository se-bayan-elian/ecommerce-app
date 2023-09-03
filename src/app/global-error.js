'use client'

import Typography from "../components/atoms/Typography"

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <Typography as="h1" className="error-status">Something went wrong!</Typography>
        <button onClick={() => reset()} className="error-btn">Try again</button>
      </body>
    </html>
  )
}

