<template>
  <section class="breweries">

<ul id="breweries-list" class="demo">
  <li v-for="brewery in breweries" :key="brewery.id">
   <router-link :to="{ name: 'brewery', params: { id: brewery.id }}"> {{ brewery.name }}</router-link>
  </li>
</ul>

  </section>
</template>

<script>

export default {
  name: "BreweriesList",
  computed: {
    breweries: function() {
      return this.$store.getters.breweries
    }
  },
        methods: {
    },
    beforeMount(){
    this.$store.dispatch('getBreweries')
 },
  components: {

  }
}
</script>

<style lang="scss">
</style>

