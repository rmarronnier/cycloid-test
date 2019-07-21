import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from "@/api"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breweries: Array,
    brewery: {},
  },
  mutations: {
    updateBreweries(state, breweries) {
      state.breweries = breweries
    },
    updateBrewery(state, brewery) {
      state.brewery = brewery
    },

  },
  actions: {
    getBreweries({ commit }) {
      return new Promise((resolve, reject) => {
        ApiService("getbreweries")
          .then(resp => resp.json())
          .then(breweries => {
            commit('updateBreweries', breweries)
            resolve(breweries)
          })
          .catch(err => {
            // TODO: Notify the user of the error
            reject(err)
          })
      })
    },
    getBrewery({ commit }, id) {
      return new Promise((resolve, reject) => {
        ApiService("getbrewerybyid", id)
          .then(resp => resp.json())
          .then(brewery => {
            commit('updateBrewery', brewery)
            resolve(brewery)
          })
          .catch(err => {
            // TODO: Notify the user of the error
            reject(err)
          })
      })
    },
  },
  getters: {
    breweries: state => state.breweries,
    brewery: state => state.brewery,
  },
})
