import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { handleError, handlesuccess } from '../util'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [focusedField, setFocusedField] = useState(null)
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const { name, email, password } = formData;
    
    if (!name || !email || !password) {
      return handleError('ALL FIELDS ARE REQUIRED')
    }

    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      const result = await response.json();
      const { success, message, error } = result;
      
      if (success) {
        handlesuccess(message)
        setTimeout(() => {
          navigate('/login')
        }, 1000)
      }
      // Handle validation error from backend
      else if (error) {
        handleError(error)
      }
      else if (!success) {
        handleError(message)
      }
    }
    catch (err) {
      handleError(err.message || 'Something went wrong!')
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-white to-cyan-50 flex items-center justify-center px-4 py-12 ">
      

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 ">
          {/* Header */}
          <div className="bg-linear-to-br from-rose-900 to-cyan-900 p-8 text-center">
            
            <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
            
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Full Name */}
            <div className="relative">
              <label 
                htmlFor="name" 
                className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                  focusedField === 'name' || formData.name
                    ? '-top-2 text-xs bg-white px-2 text-rose-500 font-semibold'
                    : 'top-3.5 text-gray-500'
                }`}
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:outline-none transition-all duration-300 hover:border-gray-300"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label 
                htmlFor="email" 
                className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                  focusedField === 'email' || formData.email
                    ? '-top-2 text-xs bg-white px-2 text-cyan-500 font-semibold'
                    : 'top-3.5 text-gray-500'
                }`}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-all duration-300 hover:border-gray-300"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label 
                htmlFor="password" 
                className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                  focusedField === 'password' || formData.password
                    ? '-top-2 text-xs bg-white px-2 text-rose-500 font-semibold'
                    : 'top-3.5 text-gray-500'
                }`}
              >
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3.5 pr-12 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:outline-none transition-all duration-300 hover:border-gray-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-rose-500 transition-colors duration-200"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                )}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-cyan-900 text-white py-3.5 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform  transition-all duration-300 cursor-pointer"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <div className="px-8 pb-8 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-cyan-500 font-semibold hover:from-rose-600 hover:to-cyan-600 transition-all duration-300 underline-offset-4 hover:underline"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <p className="text-center text-gray-500 text-xs mt-6">
          By Airec
        </p>
      </div>

      <ToastContainer />

      
    </div>
  )
}

export default Signup