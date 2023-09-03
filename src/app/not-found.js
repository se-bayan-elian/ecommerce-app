import Link from 'next/link'
import Typography from '../components/atoms/Typography'

export default function NotFound() {
  return (
    <div className='notFoundPage'>
      <Typography as="h1" align='center' className="error-status">404</Typography>
      <Typography as="p" align='center' className="error-desc">Could not find requested resource</Typography>
      <Link href="/" className="error-btn">Return Home</Link>

    </div>
  )
}