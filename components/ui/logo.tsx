import Link from 'next/link'
import { useState } from 'react'

export default function Logo() {
  const [isSpinning, setIsSpinning] = useState(false)

  const handleMouseEnter = () => {
    setIsSpinning(true)
  }

  const handleMouseLeave = () => {
    setIsSpinning(false)
  }

  return (
    <Link href="/" className="block" aria-label="Cruip">
      <div
        className={`logo ${isSpinning ? 'spin' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="footer-logo">
              <stop stopColor="#FFA500" offset="0%" />
              <stop stopColor="#FF8C00" offset="25.871%" />
              <stop stopColor="#FF4500" offset="100%" />
            </radialGradient>
          </defs>
          <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero" />
        </svg>
        {isSpinning && <div className="bizai">BizAI</div>}
      </div>
    </Link>
  )
}