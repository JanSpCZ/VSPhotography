<template>
    <div class="slideshow-container">
        <TSlideshow :images="['img/slidepic1.jpg', 'img/slidepic2.jpg', 'img/slidepic3.jpg', 'img/slidepic4.jpg', 'img/slidepic5.jpg']" />
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
</template>

<script>

import TButton from '@/components/TButton.vue';
import TSlideshow from '@/components/TSlideshow.vue';
import TSlideSection from '../components/TSlideSection.vue';

export default {
    name: "HomePage",
    methods: {
        handleLoadContact() {
            this.$router.push("/kontakt")
        }
    },
    components: { TSlideshow, TButton, TSlideSection }
}


</script>


<style lang="scss" scoped>
@use "src/assets/colors";

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

    .text-btn-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(0, 0, 0, 0);
        gap: 3rem;
        
        .about-me-text {
            border: 10px solid colors.$bg-color;
            color: colors.$bg-color;
            padding: 2rem;
            background-color: rgba(0, 0, 0, 0);
            width: 20rem;
            z-index: 2;
            backdrop-filter: blur(10px);
            
            h2, p {
                background-color: rgba(0, 0, 0, 0);
                color: #fafafa;
            }
        }
    }
        
    .about-me-photo {
        background-image: url("img/portraitpic.jpg");
        background-size: cover;
        width: 25rem;
        height: 30rem;
        align-self: flex-end;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        transform: translateX(-3rem);
    }
}
</style>