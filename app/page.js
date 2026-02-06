'use client'

import { useState } from 'react'

const BLOCKED_DOMAINS = [
  'gmail.com',
  'outlook.com',
  'mail.com',
   "icloud.com",
   "yahoo.com",
   "hotmail.com"
]

export default function Home() {
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  const [emailError, setEmailError] = useState('')
  const [reasonError, setReasonError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const validateEmail = (value) => {
    setEmailError('')
    
    if (!value) {
      setEmailError('Email is required.')
      return false
    }

    //email format is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address.')
      return false
    }

    // Extract domain from email
    const domain = value.split('@')[1]?.toLowerCase()
    
    // domain is in blocked list
    if (BLOCKED_DOMAINS.includes(domain)) {
      setEmailError('Business emails only.')
      return false
    }

    return true
  }

  const validateReason = (value) => {
    setReasonError('')
    
    if (!value) {
      setReasonError('Please provide a reason.')
      return false
    }

    if (value.length < 20) {
      setReasonError(`Must be at least 20 characters. (${value.length}/20)`)
      return false
    }

    return true
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    if (emailError) {
      validateEmail(value)
    }
  }

  const handleReasonChange = (e) => {
    const value = e.target.value
    setReason(value)
    if (reasonError) {
      validateReason(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isEmailValid = validateEmail(email)
    const isReasonValid = validateReason(reason)

    if (isEmailValid && isReasonValid) {
      setSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {!submitted ? (
          <>
            <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Internal Tools Access
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Work email address"
                  className="w-full px-4 py-2 bg-white text-gray-900 placeholder-gray-500 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {emailError && (
                  <p className="mt-1 text-sm text-red-600">{emailError}</p>
                )}
              </div>

              <div>
                <textarea
                  value={reason}
                  onChange={handleReasonChange}
                  placeholder="Why do you need access?"
                  rows={4}
                 className="w-full px-4 py-2 bg-white text-gray-900 placeholder-gray-500 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
                {reasonError && (
                  <p className="mt-1 text-sm text-red-600">{reasonError}</p>
                )}
                {!reasonError && reason.length > 0 && (
                  <p className="mt-1 text-sm text-gray-500">
                    {reason.length}/20 characters
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Request Access Token
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-lg text-gray-900">
              You have been added to the queue.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}