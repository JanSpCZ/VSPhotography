<template>
    <h2>CENÍK</h2>
    <h3>Svatební focení</h3>
    <div class="type-wrapper">
        <div class="column-wrapper slide">
            <div class="pack">
                Mini balíček
            </div>
            <div class="price">
                <span>8 000</span> Kč
            </div>
            <div class="description">
                <ul>
                    <li>Focení svatebního obřadu</li>
                    <li>Max 3 hodiny focení</li>
                    <li>Focení skupinek a novomanželské focení</li>
                </ul>
            </div>
        </div>
        <div class="column-wrapper slide">
            <div class="pack">
                Celodenní balíček
            </div>
            <div class="price">
                <span>14 000</span> Kč
            </div>
            <div class="description">
                <ul>
                    <li>Focení celého svatebního dne</li>
                    <li>Budete mít ode mě minimálně 500 zpracovaných a upravených fotek + veškeré nafocené fotky (cca 2000 fotek)</li>
                    <li>První zpracované fotky (cca 30 fotek) do 3 dnů, zbytek do 10ti dnů</li>
                </ul>
            </div>
        </div>
        <div class="column-wrapper slide">
            <div class="pack">
                Celodenní balíček PLUS
            </div>
            <div class="price">
                <span>18 000</span> Kč
            </div>
            <div class="description">
                <ul>
                    <li>Focení celého svatebního dne + přípravy + příjezd nevěsty</li>
                    <li>Budete mít ode mě minimálně 500 zpracovaných a upravených fotek + veškeré nafocené fotky (cca 2000 fotek)</li>
                    <li id="parove-foceni">První zpracované fotky (cca 30 fotek) do 3 dnů, zbytek do 10ti dnů</li>
                </ul>
            </div>
        </div>
    </div>

    <h3>Párové focení</h3>
    <div class="type-wrapper">
        <div class="column-wrapper slide">
            <div class="pack">
                Standard
            </div>
            <div class="price">
                <span>2 000</span> Kč
            </div>
            <div class="description">
                <ul>
                    <li>10 fotografií</li>
                    <li>Max 1 hodina focení</li>
                    <li>Focení ve městě, v přírodě, případně u Vás doma</li>
                </ul>
            </div>
        </div>
        <div class="column-wrapper slide">
            <div class="pack">
                Extra
            </div>
            <div class="price">
                <span>3 500</span> Kč
            </div>
            <div class="description">
                <ul>
                    <li>20 fotografií</li>
                    <li>Max 2 hodiny focení</li>
                    <li id="prirodni-foceni">Focení ve městě, v přírodě, případně u Vás doma</li>
                </ul>
            </div>
        </div>
    </div> 

    <h3>Focení v přírodě</h3>
    <div class="type-wrapper">
        <div class="column-wrapper slide">
            <div class="pack">
                Standard
            </div>
            <div class="price">
                <span>1 500</span> Kč
            </div>
            <div class="description">
                <ul>
                    <li>Focení jednotlivce</li>
                    <li>10 fotografií</li>
                    <li>Max 1 hodina focení</li>
                    <li>Focení na Vámi vybrané lokalitě, případně můžu něco vymyslet já, pokud budete chtít</li>
                </ul>
            </div>
        </div>
        <div class="column-wrapper slide">
            <div class="pack">
                Extra
            </div>
            <div class="price">
                <span>2 500</span> Kč
            </div>
            <div class="description">
                <ul>
                    <li>Focení jednotlivce</li>
                    <li>20 fotografií</li>
                    <li>Max 2 hodiny focení</li>
                    <li id="tehotenske-foceni">Focení na Vámi vybrané lokalitě, případně můžu něco vymyslet já, pokud budete chtít</li>
                </ul>
            </div>
        </div>
    </div>  

    <h3>Těhotenské focení</h3>
    <div class="type-wrapper">
        <div class="column-wrapper slide">
            <div class="pack">
                Standard
            </div>
            <div class="price">
                <span>2 500</span> Kč
            </div>
            <div class="description">
                <ul>
                    <li>Focení jednotlivce</li>
                    <li>20 fotografií</li>
                    <li>Max 2 hodiny focení</li>
                    <li>Focení na Vámi vybrané lokalitě, případně můžu něco vymyslet já, pokud budete chtít</li>
                    <li>Možnost focení u Vás doma</li>
                </ul>
            </div>
        </div>
    </div>    
</template>
<script>

export default {
    name: "CenikPage",
    data() {
        return {
            observer: null
        }
    },
    mounted() {
        const observerOptions = {
            threshold: 0.1
        }

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible")
                    this.observer.unobserve(entry.target)
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
    }
}


</script>


<style lang="scss" scoped>
@use "src/assets/colors";
@use "src/assets/breakpoints";

.slide {
    opacity: 0;
    transition: all .6s ease-out;
    will-change: opacity, transform;
    transform: translateY(100px);
    
    &.visible {
        opacity: 1;
        transform: translateX(0);
    }
}


h2 {
  font-weight: 400;
  font-size: xx-large;
  color: colors.$third;
  padding: 1rem 2rem;
  text-align: center;
}

h3 {
    text-transform: uppercase;
    text-align: center;
    color: colors.$fourth;
    font-size: 26px;
    margin-bottom: 10px;
}

.type-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100vw;
    gap: 10px;
    margin-bottom: 6rem;

    .column-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 350px;

        @media screen and (max-width: breakpoints.$breakpoint-mobile) {
            width: 300px;
        }

        .pack {
            text-align: center;
            background: colors.$primary;
            width: 100%;
            border: 1px solid black;
            padding: 1rem;
            color: colors.$bg-color;
            font-size: large;
        }

        .price {
            font-size: 14px;
            border-left: 1px solid black;
            border-right: 1px solid black;
            width: 100%;
            text-align: center;

            span {
                font-size: 40px;
                color: colors.$fourth;
                font-weight: 200;
            }
        }

        .description {
            border: 1px solid black;
            width: 100%;
            padding: 1rem;
            height: 300px;
            font-size: 14px;

            ul {
                list-style-type: none;

                li {
                    margin: 10px;
                }
            }
        }

        .no-borders {
            border: none;
        }

        .no-side-borders {
            border-left: none;
            border-right: none;
        }

        .no-vertical-borders {
            border-top: none;
            border-bottom: none;
        }
    }
}

.no-border {
    border: none;
}

</style>