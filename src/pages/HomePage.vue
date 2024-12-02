<template>
    <div class="slideshow-container">
        <TSlideshow :images="['img/slidepic1.webp', 'img/slidepic2.webp', 'img/slidepic3.webp', 'img/slidepic4.webp', 'img/slidepic5.webp', 'img/slidepic6.webp']" />
        <div class="about-me-container">
            <div class="text-btn-container">
                <div class="about-me-text">
                    <h2>Vítejte!</h2>
                    <p>Jsem Veronika a fotím život takový, jaký je - přirozený, krásný a plný emocí. Miluji jednoduchost okamžiků, které nepotřebují být dokonalé, aby byly nezapomenutelné. Ať už hledáte párové snímky, svatební fotografie, nebo vás láká focení v přírodě, ráda vám pomůžu zachytit každý vzácný okamžik.</p>
                </div>
                <TButton label="Napište mi" emitEvent="loadContact" @loadContact="handleLoadContact" />
            </div>
            <div class="about-me-photo">
                
            </div>
        </div>
    </div>

    <TSlideSection />

    <TLocation />
</template>

<script>

import TButton from '@/components/TButton.vue';
import TSlideshow from '@/components/TSlideshow.vue';
import TSlideSection from '../components/TSlideSection.vue';
import TLocation from '@/components/TLocation.vue';

export default {
    name: "HomePage",
    methods: {
        handleLoadContact() {
            this.$router.push("/kontakt")
        }
    },
    components: { TSlideshow, TButton, TSlideSection, TLocation }
}


</script>


<style lang="scss" scoped>
@use "src/assets/colors";
@use "src/assets/breakpoints";

.slideshow-container {
    position: relative;
}

.about-me-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;

    @media  screen and (max-width: breakpoints.$breakpoint-tablet) {
            flex-direction: column;
            padding-top: 5rem;
        }

    .text-btn-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(0, 0, 0, 0);
        gap: 3rem;

        @media  screen and (max-width: breakpoints.$breakpoint-tablet) {
            gap: 2rem;
        }

        .about-me-text {
            border: 10px solid colors.$bg-color;
            color: colors.$bg-color;
            padding: 2rem;
            background-color: rgba(0, 0, 0, 0);
            width: 20rem;
            z-index: 2;
            backdrop-filter: blur(10px);
            font-size: 17px;
            border-radius: 5px;

            @media  screen and (max-width: breakpoints.$breakpoint-tablet) {
            font-size: 14px;
            padding: 1rem;
            border: 6px solid colors.$bg-color;
            }
            
            h2, p {
                background-color: rgba(0, 0, 0, 0);
                color: #fafafa;
            }
        }
    }
        
    .about-me-photo {
        background-image: url("img/portraitpic.webp");
        background-size: cover;
        background-position-y: bottom;
        width: 23rem;
        height: 28rem;
        align-self: flex-end;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        transform: translate(-3rem, -3rem);
        border-radius: 5px;

        @media  screen and (max-width: breakpoints.$breakpoint-tablet) {
            transform: translate(0);
            width: 15rem;
            height: 20rem;
            align-self: center;
            margin: 2rem;
        }
    }
}
</style>