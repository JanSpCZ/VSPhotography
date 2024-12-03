<template>
    <footer>
        <h1><strong>SVATEBNÍ, RODINNÁ, PÁROVÁ A LIFESTYLE FOTOGRAFKA</strong></h1>
        <h2><strong>VERONIKA SLANINOVÁ</strong></h2>
        <div class="info-container">
            <div class="info-contact">
                <ul>
                    <li>Fotografka Veronika Slaninová</li>
                    <li><a href="mailto:Veronika.Slaninova@seznam.cz"><font-awesome-icon class="contact-icon" :icon="['fas', 'envelope']" />Veronika.Slaninova@seznam.cz</a></li>
                    <li><a href="tel:+420 604 553 995"><font-awesome-icon class="contact-icon" :icon="['fas', 'phone']" />+420 604 553 995</a></li>
                </ul>
            </div>
            <div class="info-address">
                <ul>
                    <li>ADRESA</li>
                    <li>Veronika Slaninová</li>
                    <li>500 12 Hradec Králové</li>
                    <li>Česká Republika</li>
                </ul>
            </div>
            <div class="info-services">
                <ul>
                    <li>SLUŽBY</li>
                    <li @click="onClick">Svatební focení</li>
                    <li @click="onClick">Párové focení</li>
                    <li @click="onClick">Focení v přírodě</li>
                    <li @click="onClick">Těhotenské focení</li>
                </ul>
            </div>
        </div>
        <div class="icons">
            <a href="#"><font-awesome-icon class="social-icon" :icon="['fab', 'instagram']" /></a>
            <a href="#"><font-awesome-icon class="social-icon" :icon="['fab', 'facebook']" /></a>
        </div>
        <p>&copy; Veronika Slaninová | 2024</p>
    </footer>
</template>


<script>

export default {
    name: "TFooter",
    methods: {
        onClick() {
            this.$router.push("/cenik")
        }
    }
}


</script>


<style lang="scss" scoped>
@use "src/assets/colors";
@use "src/assets/breakpoints";

footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    padding: 2rem 0 2rem 0;
    background-color: colors.$footer;
    color: colors.$bg-color;

    a {
            color: colors.$bg-color;
            background-color: colors.$footer;
        }

    h1 {
        font-size: 1.2rem;
        text-align: center;
        background-color: colors.$footer;
    }

    h2 {
        font-size: .9rem;
        text-align: center;
        background-color: colors.$footer;
        padding: 10px;
    }

    strong {
        background-color: colors.$footer;
    }

    .info-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        font-size: 14px;
        background-color: colors.$footer;

        ul {
            list-style-type: none;
            background-color: colors.$footer;

            @media screen and (max-width: breakpoints.$breakpoint-mobile) {
                text-align: center;
            }

            li {
                padding: 2px;
                background-color: colors.$footer;
            }

            li:first-child {
                font-weight: 600;
            }

            .contact-icon {
                margin-right: 5px;
                background-color: colors.$footer;
            }
        }

        .info-contact,
        .info-address,
        .info-services {
            padding: 20px 40px;
            background-color: colors.$footer;

            @media screen and (max-width: breakpoints.$breakpoint-tablet) {
                padding: 10px 30px;
            }
        }

        .info-services {
            li {
                cursor: pointer;
            }
        }

    }

    .icons {
        display: flex;
        justify-content: center;
        align-content: center;
        width: 100%;
        gap: 10px;
        background-color: colors.$footer;

        .social-icon {
            width: 30px;
            height: 30px;
            transition: opacity .2s linear;
            background-color: colors.$footer;

            &:hover {
                opacity: .7;
            }
        }
    }

    p {
        font-size: 13px;
        margin-top: 1rem;
        background-color: colors.$footer;
    }
}



</style>