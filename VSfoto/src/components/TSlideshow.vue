<template>
    <div class="slideshow">
        <div 
        v-for="(image, index) in images"
        :key="index"
        class="slide"
        :class="{ active: index === currentIndex} "
        :style="{ backgroundImage: `url(${image})` }"
        >

        </div>
    </div>

</template>


<script>

export default {
    name: "TSlideshow",
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            currentIndex: 0,
            slideInterval: 5000,
            intervalId: null
        }
    },
    methods: {
        showNextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length //Posun na další obrázek s cyklením zpět na začátek
        }
    },
    mounted() {
        this.intervalId = setInterval(this.showNextSlide, this.slideInterval)
    },
    beforeUnmount() {
        clearInterval(this.intervalId)
    }
}

</script>


<style lang="scss" scoped>

.slideshow {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
}

.slide {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.slide.active {
    opacity: 1;
}

</style>