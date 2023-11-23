<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search term - {{ search }}</p>
    <div v-for='name in matchingNames' :key='name'>{{ name }}</div>
    <button @click='handleClick'>Stop Watching</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue'


export default {
  name: 'Home',
  setup() {
    const search = ref('')
    const names = ref(['kate', 'igor', 'bella'])

    const stopWatching = watch(search, () => {
      console.log('I watch the search')
    })
    const stopWatchingEffect = watchEffect(() => {
      console.log('watchEffect function runs', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value))
  })
    //returning watch and watchEffect functions to stop them working
    const handleClick = () => {
      stopWatching()
      stopWatchingEffect()
    }
    return {names, search, matchingNames, handleClick}
  }
}
</script>
