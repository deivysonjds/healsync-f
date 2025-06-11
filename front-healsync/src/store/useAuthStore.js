import {create} from 'zustand'
import Cookies from 'js-cookie'

export const useAuthStore = create((set) => ({
  token: Cookies.get('token') || null, 
  isAuthenticated: !!Cookies.get('token'),

  login: (tokenValue) => { 
    Cookies.set('token', tokenValue, { expires: 1, path: '/' })
    set({ isAuthenticated: true, token: tokenValue })
  },

  logout: () => {
    Cookies.remove('token')
    set({ isAuthenticated: false, token: null })
  },
}))
