<template>
    <div class="background-wrapper">
        <img src="/img/faq.webp" alt="faqpic">
        <div class="header-wrapper">
            <h3>časté dotazy</h3>
            <div class="header-text">
                Zde najdete často kladené dotazy k celému průběhu focení
            </div>
        </div>
    </div>

    <div class="faq-container">
        <ul>
            <li v-for="(faq, index) in faqs" :key="index" class="faq-item">
                <div class="question" @click="toggleAnswer(index)">
                    {{ faq.question }}
                    <span class="arrow" :class="{ open: faq.open }"><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
                </div>
                <transition name="fade">
                    <div v-if="faq.open" class="answer">
                        {{ faq.answer }}
                    </div>
                </transition>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "FaQPage",
    data() {
        return {
            faqs: [
                {
                    question: "Za jak dlouho dodáváte upravené fotografie?",
                    answer: "Prvních několik fotografií obvykle dodávám do 3 dnů, zbytek pak do 10ti dnů v závislosti na množství fotografií.",
                    open: false
                },
                {
                    question: "Jak dlouho trvá focení?",
                    answer: "Detailní popis každého druhu focení je popsaný v sekci Ceník.",
                    open: false
                },
                {
                    question: "Jak probíhá platba za focení?",
                    answer: "Svůj termín focení si závazně rezervujete 50% zálohou z celkové ceny. Přijímám platby jak v hotovosti, tak převodem na účet.",
                    open: false
                },
                {
                    question: "Jak se na focení objednám?",
                    answer: "Pro získání informací o volných termínech na focení a následnou rezervaci prosím využijte kontaktní formulář v sekci Kontakt.",
                    open: false
                }
            ]
        }
    },
    methods: {
        toggleAnswer(index) {
            this.faqs[index].open = !this.faqs[index].open
        }
    }
}


</script>

<style lang="scss" scoped>
@use "src/assets/colors";
@use "src/assets/breakpoints";

.fade-enter-active,
.fade-leave-active {
    transition: all .2s linear;
    transform-origin: top;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transform: scale(0);
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    max-height: 200px;
    overflow: hidden;
    transform: scale(1);
}

.background-wrapper {
    position: relative;
    width: 100vw;
    height: 600px;
    overflow: hidden;
    display: flex;
    justify-content: center;

    @media screen and (max-width: breakpoints.$breakpoint-mobile) {
        height: 400px;
    }
    
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .header-wrapper {
        position: absolute;
        bottom: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 2rem;
        font-weight: 200;
        background-color: rgba(255, 255, 255, 0.5);

        @media screen and (max-width: breakpoints.$breakpoint-mobile) {
            padding: .8rem;
        }
        
        h3 {
            background-color: rgba(255, 255, 255, 0);
            text-transform: uppercase;
            font-size: 30px;
            font-weight: 200;

            @media screen and (max-width: breakpoints.$breakpoint-mobile) {
                font-size: 18px;
            }
        }
        
        .header-text {
            background-color: rgba(255, 255, 255, 0);
            text-align: center;

            @media screen and (max-width: breakpoints.$breakpoint-mobile) {
                font-size: 12px;
            }
        }
    }
}

.faq-container {
    max-width: 600px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 10px;

    ul {
        list-style-type: none;
    }

    .faq-item {
        border-bottom: 1px solid black;

        .question {
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;

            .arrow {
                transition: transform .2s ease;
            }

            .arrow.open {
                transform: rotate(180deg);
            }
        }

        .answer {
            margin: 10px 0;
            background-color: colors.$primary;
            color: colors.$bg-color;
            padding: .7rem .3rem;
            font-weight: 200;
        }
    }
}

</style>