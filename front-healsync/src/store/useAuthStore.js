import {create} from 'zustand'
import Cookies from 'js-cookie'

export const useAuthStore = create((set) => ({
  isAuthenticated: !!Cookies.get('token'),

  login: (token) => {
    Cookies.set('token', token, { expires: 1, path: '/' })
    set({ isAuthenticated: true })
  },

  logout: () => {
    Cookies.remove('token')
    set({ isAuthenticated: false })
  },
}))
