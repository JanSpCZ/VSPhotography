<template>
    <section>
        <div ref="leftElements1" class="from-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus tempore eligendi dolore magnam, officia assumenda! Asperiores eligendi ipsum veritatis magnam quasi, saepe vitae perferendis magni atque laudantium cum, eaque, pariatur aliquam nesciunt! Doloribus alias, corporis, molestiae officia iure fuga ducimus dolorem delectus facere officiis reiciendis consequuntur asperiores, maiores fugit id?
        </div>
        <div ref="rightElements1" class="from-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque voluptatem deleniti dolore! Nam error itaque autem, corporis, quibusdam vitae saepe, modi cumque hic dicta iusto. Distinctio, voluptatem dolore. Nesciunt ex, sed reiciendis amet rem temporibus neque, autem nostrum esse cum ullam fugiat eius. Explicabo officia tempora modi cupiditate deserunt!
        </div>
    </section>
    <section>
        <div ref="leftElements2" class="from-left">Levý prvek sekce 2</div>
        <div ref="rightElements2" class="from-right">Pravý prvek sekce 2</div>
    </section>
    <section>
        <div ref="leftElements3" class="from-left">Levý prvek sekce 3</div>
        <div ref="rightElements3" class="from-right">Pravý prvek sekce 3</div>
    </section>
    <section>
        <div ref="leftElements" class="from-left">Levý prvek sekce 4</div>
        <div ref="rightElements" class="from-right">Pravý prvek sekce 4</div>
    </section>
    <section>
        <div ref="leftElements" class="from-left">Levý prvek sekce 5</div>
        <div ref="rightElements" class="from-right">Pravý prvek sekce 5</div>
    </section>
</template>

<script>

export default {
    name: "TSlideSection",
    data() {
        return {
            leftElements: [],
            rightElements: [],
            observer: null
        }
    },
    mounted() {
        this.setRefs()

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

        //přidání prvků s třídami .from-left a .from-right do pozorování
        this.leftElements.forEach(el => this.observer.observe(el))
        this.rightElements.forEach(el => this.observer.observe(el))
    },
    beforeDestroy() {
        if (this.observer) {
            this.observer.disconnect()
        }
    },
    methods: {
        //po připojení všech prvků s refy uloží jejich elementy do dat
        setRefs() {
            this.leftElements = Array.from(this.$el.querySelectorAll('.from-left'))
            this.rightElements = Array.from(this.$el.querySelectorAll('.from-right'))
        }
    }
}

</script>

<style lang="scss" scoped>

section {
    display: flex;
    justify-content: center;
}

.from-left, .from-right {
    opacity: 0;
    transition: all .6s ease-out;
}

.from-left {
    transform: translateX(-100px);
}

.from-right {
    transform: translateX(100px);
}

.from-left.visible,
.from-right.visible {
    opacity: 1;
    transform: translateX(0);
}

</style>