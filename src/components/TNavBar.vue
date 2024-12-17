<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav>
            <div class="logo" @click="$router.push('/')">
                <h1><span>Fotografka</span>Veronika Slaninová</h1>
            </div>
            <ul v-show="!mobile" class="navigation"> <!--navbar při zobrazení > 850px-->
                <li v-for="link in links" :key="link.id">
                    <div v-if="$route.path === link.path" class="selected">
                        <span>{{ link.label }}</span>
                    </div>
                    
                    <RouterLink v-else :to="link.path"> <!--aktivní list item navbaru-->
                        <span>{{ link.label }}</span>
                    </RouterLink>
                </li>
            </ul>

            <div class="icon"> <!--hamburger ikona-->
                <font-awesome-icon :icon="['fas','bars']" @click="toggleMobileNav" v-show="mobile" class="bars-icon" />
            </div>

            <transition name="mobile-nav"> <!--navbar při mobilním zobrazení-->
                <ul v-show="mobileNav" class="dropdown-nav" id="dropdown-body">
                    <li v-for="link in links" :key="link.id">
                        <div v-if="$route.path === link.path" class="selected">
                            <span>{{ link.label }}</span>
                        </div>
                    
                        <RouterLink v-else :to="link.path">
                            <span @click="mobileNav = false">{{ link.label }}</span>
                        </RouterLink>
                    </li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>


export default {
    name: "TNavBar",
    props: {
        links: Array
    },
    data () {
        return {
            scrolledNav: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null
        }
    },
    created() {
        window.addEventListener("resize", this.checkScreen) //kontrola velikosti obrazovky
        this.checkScreen()
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll)
    },
    methods: {
        toggleMobileNav () {
            this.mobileNav = !this.mobileNav //přepínání mobilního navbaru (hamburger)
            if (this.mobileNav) {
               setTimeout(() => {
                document.addEventListener("click", this.clickOutside) 
               }, 0)
            } else
                document.removeEventListener("click", this.clickOutside)  
        },

        checkScreen () { //určení, kdy se navbar přepne do mobilního zobrazení
            this.windowWidth = window.innerWidth
            if (this.windowWidth <= 850) {
                this.mobile = true
                return
            }
            this.mobile = false
            this.mobileNav = false
        },
        
        clickOutside (e) {
            const el = document.getElementById("dropdown-body")
            if(el && !el.contains(e.target)) {
                this.mobileNav = false
                document.removeEventListener("click", this.clickOutside)
            }
        },

        updateScroll() {
            this.scrolledNav = window.scrollY > 50
        }
    },
    watch: {
        $route() {
            this.mobileNav = false
            document.removeEventListener("click", this.clickOutside)
        }
    },
    beforeUnmount () {
        window.removeEventListener("scroll", this.updateScroll)
        document.removeEventListener("click", this.clickOutside)
    }
}

</script>

<style lang="scss" scoped>
@use "src/assets/colors";
@use "src/assets/fonts";
@use "src/assets/breakpoints";


header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    overflow: hidden;
    
    nav {
        position: relative;
        width: 100vw;
        height: 130px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1rem 0;
        transition: all .3s ease;
        background-color: colors.$bg-color;
        
        .logo {
            cursor: pointer;
        }
        h1, h1 > span { //fotografka veronika slaninová kinda shi
            transition: all .3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            flex-wrap: nowrap;
            background-color: rgba(0, 0, 0, 0);
            font-weight: 100;
            font-size: 2.5rem;
            color: colors.$third;
            font-family: fonts.$fleur;
            line-height: 1.2;

            @media  screen and (max-width: breakpoints.$breakpoint-mobile) {
                font-size: 2.1rem;
            }
        }
        
        .navigation { //navbar při klasickém zobrazení
            list-style-type: none;
            display: flex;
            align-items: center;
            gap: 1rem;
            background-color: colors.$bg-color;
            
            li {
                font-size: large;
            }
            
            a {
                background-color: colors.$bg-color;
                display: flex;
                align-items: center;
                gap: 2rem;
                padding: .3em .7em;
                text-decoration: none;
                color: colors.$third;
                transition: color .2s linear;
                
                &:hover { 
                    color: colors.$primary;
                    border-bottom: 2px solid colors.$primary;
                }
            }
            
            .selected { //aktivní list item navbaru
                background-color: colors.$bg-color;
                display: flex;
                align-items: center;
                gap: 2rem;
                padding: .3em .7em;
                color: colors.$third;
                border-bottom: 2px solid colors.$primary;
                cursor: default;
            }
            
            span {
                background-color: colors.$bg-color;
            }
        }

        .icon {
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            right: 24px;
            height: 100%;
            background-color: colors.$bg-color;
            
            .bars-icon {
                background-color: colors.$bg-color;
                cursor: pointer;
                font-size: 24px;
                transition: .2s linear all;
                padding: .3rem;
                color: colors.$third;

                &:hover {
                    color: colors.$primary;
                }
            }
        }

        .dropdown-nav { //navbar při mobilním zobrazení
            display: flex;
            flex-direction: column;
            position: fixed;
            width: 100%;
            max-width: 250px;
            height: 100%;
            background-color: #202020;
            top: 0;
            left: 0;
            z-index: 999;

            a, div, span {
                text-decoration: none;
                color: #fff;
                padding: 0 .5rem;
                background-color: #202020;
                transition: all .3s ease;

                &:hover { color: colors.$secondary}
            }

            div > span { //aktivní list item mobilního navbaru
                color: colors.$secondary;
            }

            li {
                padding: 1rem;
                background-color: #202020;
            }
        }

        .mobile-nav-enter-active,
        .mobile-nav-leave-active {
            transition: 1s ease all;
        }

        .mobile-nav-enter-from,
        .mobile-nav-leave-to {
            transform: translateX(-250px);
        }

        .mobile-nav-enter-to {
            transform: translateX(0);
        }
    }
}

.scrolled-nav {

    nav {
        height: 100px;
    }

    h1, h1 > span {
        font-size: 1.8rem;
    }
}

</style>