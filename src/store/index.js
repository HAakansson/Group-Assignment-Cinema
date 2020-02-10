import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '@/firebase/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auditoriums: [],
    movies: [],
    screenings: [],
    bookingObject: {
      adultTickets: 0,
      seniorTickets: 0,
      childTickets: 0,
      screeningId: null
    },
    navTexts: [
      'Hem',
      'Välj biljetter',
      'Välj platser',
      'Bekräfta',
      'Genomför bokning'
    ]
  },
  mutations: {
    setMovies(state, data) {
      state.movies = data
    }, 
    setScreenings(state, data) {
      state.screenings = data
    },

    setAuditoriums(state, data) {
      state.auditoriums = data
    },

    setBookingObject(state, data) {
      state.bookingObject = data
    }
  },
  actions: {
    async getAuditoriums({ commit }) {
      let snapshot = await db.collection('auditoriums').get()
      let auditoriums = []
      snapshot.forEach(auditorium => {
        let data = auditorium.data(); // alla egenskaper utom id:t
        data.id = auditorium.id; // lägg till id
        auditoriums.push(data)
      })
      commit('setAuditoriums', auditoriums)
    },
    async getMovies({ commit }) {
      let snapshot = await db.collection('movies').get()
      let movies = []
      snapshot.forEach(movie => {
        let data = movie.data(); // alla egenskaper utom id:t
        data.id = movie.id; // lägg till id
        movies.push(data)
      })
      commit('setMovies', movies)
    },
    async getScreenings({ commit }) {
      let snapshot = await db.collection('screenings').get()
      let screenings = []
      snapshot.forEach(screening => {
        let data = screening.data(); // alla egenskaper utom id:t
        data.id = screening.id; // lägg till id
        screenings.push(data)
      })
      commit('setScreenings', screenings)
    },
    
  },
  modules: {
  }
})
