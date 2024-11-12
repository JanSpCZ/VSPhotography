<template>
    <div class="slideshow-container">
        <TSlideshow :images="['img/slidepic1.jpg', 'img/slidepic2.jpg', 'img/slidepic3.jpg']" />
        <div class="about-me-container">
            <div class="about-me-text">
                <h2>Vítejte!</h2>
                <p>Jsem Veronika a fotím život takový, jaký je - přirozený, krásný a plný emocí. Miluji jednoduchost okamžiků, které nepotřebují být dokonalé, aby byly nezapomenutelné. Ať už hledáte párové snímky, svatební fotografie, nebo vás láká focení v přírodě, ráda vám pomůžu zachytit každý vzácný okamžik.</p>
            </div>
            <div class="about-me-photo">
                
            </div>
            <TButton label="Kontaktujte mě!" emitEvent="loadContact" @loadContact="handleLoadContact" />
        </div>
    </div>
</template>

<script>

import TButton from '@/components/TButton.vue';
import TSlideshow from '@/components/TSlideshow.vue';

export default {
    name: "HomePage",
    methods: {
        handleLoadContact() {
            this.$router.push("/kontakt")
        }
    },
    components: { TSlideshow, TButton }
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
    
    .about-me-text {
        border: 10px solid colors.$primary;
        padding: 2rem;
        background-color: rgba(0, 0, 0, 0);
        width: 20rem;
        z-index: 2;
        backdrop-filter: blur(5px);

        h2, p {
            background-color: rgba(0, 0, 0, 0);
            color: #fafafa;
        }
    }

    .about-me-photo {
        background-image: url("img/portraitpic1.png");
        background-size: cover;
        width: 25rem;
        height: 30rem;
        align-self: flex-end;
        transform: translateX(-3rem);
    }
}
</style>