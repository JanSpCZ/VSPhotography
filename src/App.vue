<template>
  <div>
    <TNavBar :links="links" />
    
    <RouterView />

    <TFooter />
  </div>
</template>

<script>
import TNavBar from "@/components/TNavBar.vue"
import TFooter from "./components/TFooter.vue";


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
  components: { TNavBar, TFooter }
}

</script>