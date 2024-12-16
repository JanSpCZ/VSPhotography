<template>
    <h2 :class="{'animate-slide-in' : animate}">KONTAKT</h2>
</template>

<script>

export default {
    name: "KontaktPage",
    data() {
        return {
            animate: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.animate = true
        }, 100);
    }
}


</script>

<style lang="scss" scoped>
@use "src/assets/colors";
@use "src/assets/breakpoints";

@keyframes slide-in {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slide-in 1s ease-out forwards;
}

h2 {
  font-weight: 400;
  font-size: xx-large;
  color: colors.$third;
  padding: 1rem 2rem;
  text-align: center;
}
</style>