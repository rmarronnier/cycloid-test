<template>
  <section class="brewery">
    <v-card max-width="800" class="mx-auto">
      <v-img
        src="https://o794seclxk3k88av45t66i12-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Michigan-craft-beer-brewer.jpg"
        height="300px"
        dark
      >
        <v-layout column fill-height>
          <v-card-title>
            <v-btn dark icon>
              <router-link to="/">
                <v-icon color="white">chevron_left</v-icon>
              </router-link>
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn dark icon>
              <a :href="brewery.website_url" target="blank">
                <v-icon color="white">mdi-open-in-new</v-icon>
              </a>
            </v-btn>
          </v-card-title>

          <v-spacer></v-spacer>

          <v-card-title class="white--text pl-12 pt-12">
            <div class="display-1 pl-12 pt-12">{{ brewery.name }}</div>
          </v-card-title>
        </v-layout>
      </v-img>

      <v-list two-line>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">phone</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ brewery.phone }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">mdi-beer</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ brewery.brewery_type }}</v-list-item-title>
            <v-list-item-subtitle>Type of brewery</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">location_on</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ brewery.street }}</v-list-item-title>
            <v-list-item-subtitle>{{ brewery.city }}, {{ brewery.postal_code }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ brewery.country }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">mdi-link</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <a :href="brewery.website_url">Website</a>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </section>
</template>

<script>
export default {
  name: "Brewery",
  computed: {
    brewery: function() {
      return this.$store.getters.brewery;
    }
  },
  methods: {},
  beforeMount() {
    this.$store.dispatch("getBrewery", this.$route.params.id);
  },
  components: {}
};
</script>

<style lang="scss">
.brewery {
  table {
    margin: auto;
    width: 50%;
    td {
      text-align: center;
      &:first-child {
        font-weight: bold;
      }
      &.website {
        text-align: center;
        a {
          text-decoration: none;
          font-size: 150%;
          font-weight: bold;
        }
      }
    }
  }
}
</style>