import {create} from 'zustand'
import Cookies from 'js-cookie'

export const useAuthStore = create((set) => ({
  token: Cookies.get('token') || null, // Initialize token from cookies
  isAuthenticated: !!Cookies.get('token'),

  login: (tokenValue) => { // Renamed parameter to avoid confusion
    Cookies.set('token', tokenValue, { expires: 1, path: '/' })
    set({ isAuthenticated: true, token: tokenValue }) // Store the token value
  },

  logout: () => {
    Cookies.remove('token')
    set({ isAuthenticated: false, token: null }) // Clear the token value
  },
}))
