<template>
    <header :class="{ 'scrolled-nav': scrollPosition }"><!--TODO: vyřešit fixed header a zakrývání obsahu a zmenšení headeru při scrollu-->
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
            scrollPosition: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null
        }
    },
    created() {
        window.addEventListener("resize", this.checkScreen) //kontrola velikosti obrazovky
        this.checkScreen()
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
            const el = document.getElementById("dropdown-body") //TODO: vyřešit zavírání dropdown-body pokud kliknu nejdřív dovnitř a poté mimo
            if(el && !el.contains(e.target)) {
                this.mobileNav = false
                document.removeEventListener("click", this.clickOutside)
            }
        }
    },
    beforeUnmount () {
        document.removeEventListener("click", this.clickOutside)
        window.removeEventListener("resize", this.checkScreen)
    }
}

</script>

<style lang="scss" scoped>
@use "src/assets/colors";
@use "src/assets/fonts";


header {
    // background-color: rgba(0, 0, 0, 0.8);
    // z-index: 99;
    width: 100%;
    // position: fixed;
    transition: .5s ease all;
    // color: #fff;
    
    nav {
        position: relative;
        width: 100vw;
        display: flex;
        justify-content: space-around;
        padding: 1rem 0;
        background-color: colors.$primary;
        
        .logo {
            cursor: pointer;
        }
        h1, h1 > span { //fotografka veronika slaninová kinda shi
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            flex-wrap: nowrap;
            background-color: colors.$primary;
            font-weight: 100;
            font-size: 2.5rem;
            color: colors.$bg-color;
            font-family: fonts.$fleur;
        }
        
        .navigation { //navbar při klasickém zobrazení
            list-style-type: none;
            display: flex;
            align-items: center;
            gap: 1rem;
            background-color: colors.$primary;
            
            li {
                font-size: large;
            }
            
            a {
                background-color: colors.$primary;
                display: flex;
                align-items: center;
                gap: 2rem;
                padding: .3em .7em;
                text-decoration: none;
                color: colors.$bg-color;
                transition: color .2s linear;
                
                &:hover { color: colors.$secondary;}
            }
            
            .selected { //aktivní list item navbaru
                background-color: colors.$primary;
                display: flex;
                align-items: center;
                gap: 2rem;
                padding: .3em .7em;
                color: colors.$secondary;
            }
            
            span {
                background-color: colors.$primary;
            }
        }

        .icon {
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            right: 24px;
            height: 100%;
            background-color: colors.$primary;
            
            .bars-icon {
                background-color: colors.$primary;
                cursor: pointer;
                font-size: 24px;
                transition: .2s linear all;
                padding: .3rem;
                color: colors.$bg-color;

                &:hover {
                    color: colors.$secondary;
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


</style>