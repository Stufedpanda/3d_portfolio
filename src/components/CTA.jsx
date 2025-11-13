import React from 'react'
import { Link } from 'react-router-dom'
import { socialLinks } from '../constants'

const CTA = () => {
  return (
    <section className='cta'>
      {/* Wrap everything in a column container */}
      <div className="flex flex-col items-center text-center gap-4 w-full">
        <p className='cta-text'>
          Have a project in mind? Let's work together to bring it to life!
          <br className='sm:block hidden' />
        </p>

        <Link to='/contact' className='btn'>
          Get in Touch
        </Link>

        <div className="mt-6 w-full max-w-xl mx-auto border-t border-slate-200 pt-5 flex flex-col items-center gap-3">
          <p className="text-sm text-slate-600">
            You can also find me here:
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 hover:opacity-80 transition"
              >
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className="w-7 h-7 object-contain"
                />
                <span className="text-xs text-slate-600">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA