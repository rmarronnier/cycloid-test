<template>
  <section class="brewery">
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>{{ brewery.name }}</td>
        </tr>
        <tr>
          <td>Type of brewery</td>
          <td>{{ brewery.brewery_type }}</td>
        </tr>
        <tr>
          <td>Street address</td>
          <td>{{ brewery.street }}</td>
        </tr>
        <tr>
          <td>City</td>
          <td>{{ brewery.city }}</td>
        </tr>
        <tr>
          <td>Postal code</td>
          <td>{{ brewery.postal_code }}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>{{ brewery.country }}</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>{{ brewery.phone }}</td>
        </tr>
        <tr>
          <td>Longitude</td>
          <td>{{ brewery.longitude }}</td>
        </tr>
        <tr>
          <td>Latitude</td>
          <td>{{ brewery.latitude }}</td>
        </tr>
        <tr>
          <td class="website" colspan="2">
            <a :href="brewery.website_url">Website</a>
          </td>
        </tr>
      </tbody>
    </table>

    <router-link to="/breweries">Back to the list of breweries</router-link>
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