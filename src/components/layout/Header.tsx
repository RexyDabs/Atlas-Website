'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    subItems: [
      { name: 'Our Story', href: '/about' },
      { name: 'Team', href: '/about/team' },
      { name: 'Values', href: '/about/values' },
    ],
  },
  {
    name: 'Services',
    subItems: [
      { name: 'Lighting', href: '/services/lighting' },
      { name: 'Power', href: '/services/power' },
      { name: 'Air Conditioning', href: '/services/air-conditioning' },
      { name: 'Repairs', href: '/services/repairs' },
    ],
  },
  {
    name: 'Solutions',
    subItems: [
      { name: 'Airbnb Fitouts', href: '/solutions/airbnb' },
      { name: 'Renovators', href: '/solutions/renovators' },
    ],
  },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <header className="bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
          Atlas Power
        </Link>

        {/* Nav Items */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.subItems ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-1 text-gray-700 dark:text-gray-100 hover:text-blue-500 transition"
                  >
                    <span>{item.name}</span>
                    <ChevronDownIcon className="w-4 h-4" />
                  </button>

                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-10 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-md shadow-lg"
                      >
                        <div className="py-2">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-700 dark:text-white hover:text-blue-500 transition"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile hamburger (placeholder) */}
        <div className="md:hidden">
          {/* TODO: Add mobile menu logic */}
          <span className="text-sm text-gray-500">Menu</span>
        </div>
      </div>
    </header>
  )
}
