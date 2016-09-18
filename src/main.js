import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  data: {
    combatants: [],
    newCombatant: {},
    errors: [],
    round: 0,
    activeCombatant: null
  },
  methods: {
    addCombatant: function () {
      var name = this.newCombatant.name.trim()
      var init = parseInt(this.newCombatant.init, 10)
      if (name && Number.isInteger(init)) {
        this.combatants.push({
          name: name,
          init: init,
          edit: false,
          turnOver: false
        })
      }
    },
    removeCombatant: function (object) {
      var index = this.combatants.indexOf(object)
      this.combatants.splice(index, 1)
    },
    editCombatant: function (combatant) {
      combatant.origName = combatant.name
      combatant.origInit = combatant.init
      combatant.edit = true
      console.log(combatant)
    },
    newRound: function () {
      this.sortCombatants()
      this.setAllActive()
      this.round++
    },
    sortCombatants: function () {
      this.combatants.sort(function (a, b) {
        if (a.init > b.init) {
          return -1
        }
        if (a.init < b.init) {
          return 1
        }
        return 0
      })
    },
    setAllActive: function () {
      for (var each of this.combatants) {
        each.turnOver = false
      }
    },
    endCombat: function () {
      this.round = 0
    }
  },
  computed: {
    activeCombatant: function () {
      var activeCombatant = null
      var highestInit = -999
      for (var combatant of this.combatants) {
        if (combatant.init > highestInit && !combatant.turnOver) {
          activeCombatant = combatant
          highestInit = combatant.init
        }
      }
      return activeCombatant
    }
  }
}
)
