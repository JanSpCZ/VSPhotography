<template>
    <section>
        <div class="slide">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus tempore eligendi dolore magnam, officia assumenda! Asperiores eligendi ipsum veritatis magnam quasi, saepe vitae perferendis magni atque laudantium cum, eaque, pariatur aliquam nesciunt! Doloribus alias, corporis, molestiae officia iure fuga ducimus dolorem delectus facere officiis reiciendis consequuntur asperiores, maiores fugit id?
        </div>
    </section>
    <section>
        <div class="slide">prvek sekce 2</div>
    </section>
    <section>
        <div class="slide">prvek sekce 3</div>
    </section>
    <section>
        <div class="slide">prvek sekce 4</div>
    </section>
    <section>
        <div class="slide">prvek sekce 5</div>
    </section>
</template>

<script>

export default {
    name: "TSlideSection",
    data() {
        return {
            observer: null
        }
    },
    mounted() {
        const observerOptions = {
            threshold: 0.1 //animace se spustí, když je vidět 10% prvku
        }

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible")
                    this.observer.unobserve(entry.target) //přestane prvek sledovat po zobrazení
                }
            })
        }, observerOptions)

        const slides = document.querySelectorAll(".slide")
        slides.forEach(slide => this.observer.observe(slide))
    },
    beforeDestroy() {
        if (this.observer) {
            this.observer.disconnect()
        }
    },
    methods: {
        
    }
}

</script>

<style lang="scss" scoped>

section {
    display: flex;
    justify-content: center;
}

.slide {
    opacity: 0;
    transition: all .6s ease-out;
    transform: translateY(100px);
}

.slide.visible {
    opacity: 1;
    transform: translateX(0);
}

</style>