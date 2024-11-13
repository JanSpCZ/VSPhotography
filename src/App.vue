<template>
  <div>
    <TNavBar :links="links" />
    
    <RouterView />
  </div>
</template>

<script>
import TNavBar from "@/components/TNavBar.vue"


export default {
  name: "App",
  data () {
    return {
      links: [
        { path: "/", label: "Domů" },
        { path: "/portfolio", label: "Portfolio" },
        { path: "/cenik", label: "Ceník" },
        { path: "/faq", label: "Časté dotazy" },
        { path: "/kontakt", label: "Kontakt" },
      ]
    }
  },
  components: { TNavBar }
}

</script>