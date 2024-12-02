<template>
<div class="location-container">
    <div class="location-left">
        <img src="/img/hk-kraj.png" alt="Kralovehradecky kraj">
    </div>
    <div class="location-right">
        <h2>Kde mě najdete?</h2>
        <p>Fotím převážně v Královéhradeckém kraji, takže se pohybuji nejvíce ve městech a přírodních lokalitách v okolí Hradce Králové, Náchoda a Trutnova, ale ráda objevuji i nová místa. Pokud tedy máte oblíbenou lokalitu o něco dál, tak nemám problém si udělat výlet. Místo focení spolu vždycky vybereme tak, aby mělo tu správnou atmosféru. Ať už jde o hory, les, park nebo útulnou kavárnu, důležité je, že to bude přesně podle Vašich představ.</p>
        <TButton color="brown" label="KONTAKTUJTE MĚ" emitEvent="loadPage" @loadPage="handleLoadPage" />
    </div>
</div>


</template>


<script>
import TButton from './TButton.vue';



export default {
    name: "TLocation",
    methods: {
        handleLoadPage () {
            this.$router.push("/kontakt")
        }
    },
    components: { TButton }
}

</script>


<style lang="scss" scoped>
@use "src/assets/colors";
@use "src/assets/breakpoints";

.location-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin-top: 6rem;
    gap: 5rem;
    flex-wrap: wrap;

    @media  screen and (max-width: breakpoints.$breakpoint-mobile) {
        gap: 2rem;
        margin-top: 3rem;
    }

    .location-right {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        order: 1;
        width: 350px;
        gap: 1rem;

        @media  screen and (max-width: breakpoints.$breakpoint-mobile) {
            padding: 1rem;
        }

        h2 {
            font-weight: 300;
            font-size: xx-large;
            color: colors.$primary;
            align-self: flex-start;
            text-transform: uppercase;

            @media  screen and (max-width: breakpoints.$breakpoint-mobile) {
                font-size: x-large;
            }
        }

        p {
            font-size: 14px;
            text-align: justify;
        }
    }

    .location-left {
        order: 0;

        img {
            width: 35rem;

            @media  screen and (max-width: breakpoints.$breakpoint-dropdown) {
                width: 75vw;
            }
        }
    }

    @media screen and (max-width: 1039px) {
        .location-right {
            order: 0; // Text se přesune nad obrázek
        }
    
        .location-left {
            order: 1; // Obrázek se přesune pod text
        }
    }
}
</style>