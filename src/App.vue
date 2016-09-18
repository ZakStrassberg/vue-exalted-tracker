<template>
  <div id="app">
    <button @click="newRound">Next Round (start combat)</button>
    <p v-if="round != 0">Round {{round}}</p>
    <p v-if="activeCombatant">{{activeCombatant.name}} is active</p>

    <ol>
      <li class="combatant"
        v-for="combatant in combatants"
        :class="{activeCombatant: combatant == activeCombatant, turnOver: combatant.turnOver}">

        <!-- Turn over checkbox -->
        <input type="checkbox" v-model="combatant.turnOver">

        <!-- Displayed info -->
        <span>{{combatant.name}}</span>
        <span v-show="!combatant.edit">{{combatant.init}}</span>
        <input class="edit" type="text"
        v-show="combatant.edit"
        v-model="combatant.init"
        @blur="combatant.edit = false"
        @keyup.enter="combatant.edit = false"
        @keyup.esc="cancelEdit(combatant)">

        <!-- Buttons -->
        <button type="submit" v-on:click="editCombatant(combatant)">edit</button>
        <button type="submit" v-on:click="removeCombatant(combatant)">X</button>
      </li>
    </ol>

    <form v-on:submit.prevent>
      <h2>Add Combatant</h2>
      Name: <input type="text" v-model="newCombatant.name">
      Init: <input type="text" v-model="newCombatant.init">
      <button type="submit" v-on:click="addCombatant">Add</button>
    </form>
      <button v-on:click="sortCombatants">Sort</button>
  </div>
</template>

<script>
// import Hello from './components/Hello'
//
// export default {
//   components: {
//     Hello
//   }
// }
</script>

<style>

</style>
