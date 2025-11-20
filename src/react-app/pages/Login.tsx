import { useState } from 'react';
import Link from 'next/link';
import { User, Lock, Mail } from 'lucide-react';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/">
            <img
              src="https://mocha-cdn.com/019a9d77-3fdf-7e66-a0da-52236f85cde9/image.png_9354.png"
              alt="Fiend BMX"
              className="h-16 w-auto object-contain mx-auto mb-4 hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-gray-600 mt-2">
            {isSignUp
              ? 'Join the Fiend BMX family'
              : 'Sign in to your account'}
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <form className="space-y-6">
            {isSignUp && (
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={isSignUp ? 'new-password' : 'current-password'}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-red-600 focus:ring-red-600 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm font-semibold text-red-600 hover:text-red-700">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm text-gray-600"
            >
              {isSignUp ? (
                <>
                  Already have an account?{' '}
                  <span className="font-semibold text-red-600 hover:text-red-700">
                    Sign in
                  </span>
                </>
              ) : (
                <>
                  Don't have an account?{' '}
                  <span className="font-semibold text-red-600 hover:text-red-700">
                    Sign up
                  </span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Back to Shop */}
        <div className="mt-6 text-center">
          <Link
            href="/shop"
            className="text-sm font-semibold text-gray-600 hover:text-red-600 transition-colors"
          >
            ← Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
}
