<template>
  <section class="breweries">
    <v-card max-width="800" class="mx-auto">
      <v-img
      src="https://www.japan-guide.com/blog/craft-beer/g/170616_04.jpg"
      height="300px"
      dark
    >
      <v-layout
        column
        fill-height
      >
      <v-card-title class="white--text pl-12 pt-12">
          <div class="display-1 pl-12 pt-12">List of breweries</div>
        </v-card-title>
      </v-layout>
    </v-img>
      <v-list>
        <v-list-item
          v-for="brewery in breweries"
          :key="brewery.id"
          @click="breweryLink(brewery.id)"
        >
          <v-list-item-content>
            <v-list-item-title v-text="brewery.name"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-avatar>
            <v-img
              :src="`https://loremflickr.com/320/240/beer?random=${Math.floor(Math.random() * 100) + 1}`"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-card>
  </section>
</template>

<script>
export default {
  name: "BreweriesList",
  computed: {
    breweries: function() {
      return this.$store.getters.breweries;
    }
  },
  methods: {
    breweryLink: function(id) {
      this.$router.push({ name: "brewery", params: { id: id } });
    }
  },
  beforeMount() {
    this.$store.dispatch("getBreweries");
  },
  components: {}
};
</script>

<style lang="scss">
</style>

