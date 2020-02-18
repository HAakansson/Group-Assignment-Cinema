import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import AllMovies from '@/components/AllMovies'
import Contact from '@/components/Contact'
import Login from '@/components/Login'
import Movie from '@/components/Movie'
import CreateScreenings from '@/components/CreateScreenings'
import Secure from '@/components/Secure'
import Booking from '@/components/Booking/Booking'
import SelectTickets from '@/components/Booking/SelectTickets'
import SelectSeats from '@/components/Booking/SelectSeats'
import ConfirmDetails from '@/components/Booking/ConfirmDetails'
import BookingComplete from '@/components/Booking/BookingComplete'
import Register from '@/components/Register'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home
  },
  {
    path: '/allMovies',
    name: 'allMovies',
    props: true,
    component: AllMovies
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
  ,
  {
    path: '/allMovies/:movieTitle',
    name: 'movie',
    props: true,
    component: Movie
  },
  {
    path: '/create',
    name: 'createScreenings',
    component: CreateScreenings
  },
  {
    path: '/secure',
    name: 'secure',
    component: Secure
  },

  {
    path: '/booking',
    name: 'booking',
    component: Booking,
    children: [
      {
        path: 'selectTickets/:screeningId',
        name: 'SelectTickets',
        component: SelectTickets
      },
      {
        path: 'selectSeats/:screeningId',
        name: 'SelectSeats',
        props: true,
        component: SelectSeats
      },
      {
        path: 'confirmDetails/:screeningId', 
        name: 'ConfirmDetails',
        props: true,
        component: ConfirmDetails
      },
      {
        path: 'bookingComplete/:screeningId',
        name: 'BookingComplete',
        props: true,
        component: BookingComplete
      },
    ]
    }
  ]
   

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
