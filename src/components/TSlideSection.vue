<template>
    <div class="slide-container">
        <h2>CO VÁM MŮŽU NABÍDNOUT?</h2>
        <div class="box-container">
            <section class="box slide">
                <div class="slide-content" @click="this.$router.push('/cenik')">
                    <div class="img-container">
                        <img src="/img/wedding1.webp" alt="wedding">
                    </div>
                    <h3>Svatební focení</h3>
                    <p>Svatební den je plný emocí od lásky, smíchu, ale i nějakého toho zmatku - a já jsem tu, abych to všechno zachytila. Od dojemných okamžiků při Vašem "ANO" až po taneční kreace toho jednoho strýčka na parketu. Nechte mě vytvořit fotky, které Vám budou navždy připomínat, jak jedinečný Váš den byl.</p>
                </div>
                <TButton label="PODROBNOSTI" emitEvent="loadPage" @loadPage="handleLoadPage" />
            </section>
            <section class="box slide">
                <div class="slide-content" @click="this.$router.push('/cenik')">
                    <div class="img-container">
                        <img src="/img/couple1.webp" alt="couple">
                    </div>
                    <h3>Párové focení</h3>
                    <p>Chcete světu ukázat, že je Vám spolu krásně a zároveň si udělat vzpomínku, kterou si můžete zarámovat a pověsit do obýváku? Dejte mi vědět a udělám Vám fotky tak sladké, že se z nich Vašim přátelům budou kazit zuby.</p>
                </div>
                <TButton label="PODROBNOSTI" emitEvent="loadPage" @loadPage="handleLoadPage" />
            </section>
            <section class="box slide">
                <div class="slide-content" @click="this.$router.push('/cenik')">
                    <div class="img-container">
                        <img src="/img/nature1.webp" alt="nature">
                    </div>
                    <h3>Focení v přírodě</h3>
                    <p>Není nic lepšího než se ztratit v přírodě a nechat všechny starosti za sebou. Ať už se jedná o les, louku nebo pláž, příroda poskytuje perfektní kulisu pro přirozené, autentické fotky. Bez stresu, bez složitých póz - prostě vy, příroda a chvíle, které stojí za to zachytit. A věřte mi, slunce, stromy a trochu čerstvého vzduchu udělají své kouzlo.</p>
                </div>
                <TButton label="PODROBNOSTI" emitEvent="loadPage" @loadPage="handleLoadPage" />
            </section>
            <section class="box slide">
                <div class="slide-content" @click="this.$router.push('/cenik')">
                    <div class="img-container">
                        <img src="/img/janek1.webp" alt="pregnant">
                    </div>
                    <h3>Těhotenské focení</h3>
                    <p>Těhotenství je jedním z nejkrásnějších období v životě, a zaslouží si být zachyceno v celé své kráse. Ať už jde o jemné portréty nebo záběry, které ukážou vaši radost a očekávání, tyto okamžiky si zaslouží být navždy v paměti. Pojďme společně zachytit, jak roste nejen vaše bříško, ale i láska k vašemu malému zázraku.</p>
                </div>
                <TButton label="PODROBNOSTI" emitEvent="loadPage" @loadPage="handleLoadPage" />
            </section>
        </div>
    </div>
</template>

<script>
import TButton from './TButton.vue';

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
    methods: {
        handleLoadPage() {
            this.$router.push("/cenik")
        }
    },
    beforeDestroy() {
        if (this.observer) {
            this.observer.disconnect()
        }
    },
    components: { TButton }
}

</script>

<style lang="scss" scoped>
@use "src/assets/colors";
@use "src/assets/breakpoints";

section {
    display: flex;
    justify-content: center;
}

.slide {
    opacity: 0;
    transition: all .5s ease-out;
    will-change: opacity, transform;
    transform: translateY(100px);
    
    &.visible {
        opacity: 1;
        transform: translateX(0);
    }
}




.slide-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: colors.$primary;
    margin: 2rem 1rem;
    padding: 1rem 1rem;
    gap: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 15px 5px #00000062;

    h2 {
        background-color: colors.$primary;
        color: colors.$bg-color;
        font-weight: 300;
        font-size: xx-large;
        margin-top: 5vh;

        @media  screen and (max-width: breakpoints.$breakpoint-mobile) {
                font-size: x-large;
        }
    }

    .box-container {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        width: 100%;
        gap: 5rem 5rem;
        background-color: colors.$primary;
        margin-left: 10%;
        margin-right: 10%;
        
        .box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            width: 20rem;
            background-color: colors.$primary;
            gap: 1.5rem;
            
            .slide-content {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                background-color: colors.$primary;
                gap: 1.5rem;
                cursor: pointer;
                transition: transform .3s ease;

                &:hover {
                    transform: scale(1.05);
                }
                
                .img-container {
                    position: relative;
                    width: 250px;
                    height: 250px;
                    overflow: hidden;
                    border-radius: 50%;
                    box-shadow: 0 0 25px 5px #00000062;
                    background-color: rgba(0, 0, 0, 0);

                    img {
                        width: 100%;
                        height: auto;
                        margin-top: -100px;
                    }
                }

                h3 {
                    background-color: colors.$primary;
                    color: colors.$bg-color;
                    text-transform: uppercase;
                    font-weight: 300;
                    font-size: x-large;
                }

                p {
                    background-color: colors.$primary;
                    color: colors.$bg-color;
                    font-size: 14px;
                    text-align: justify;
                }
            }
        }
    }
}

</style>