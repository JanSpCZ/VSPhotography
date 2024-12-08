<template>
  <h2 :class="{'animate-slide-in' : animate}">MÉ PORTFOLIO</h2>
  <div class="wrapper">
    <div class="gallery">
      <div v-for="(image, index) in gallery" :key="index" class="gallery__image" @click="showPreview(index)">
        <img :src="image" alt="Portfolio" />
      </div>
    </div>
    <TButton label="VÍCE FOTOGRAFIÍ ZDE" emitEvent="redirectToLink" @redirectToLink="openNewTab()"/>
  </div>
  
  <!-- Preview Box -->
  <div v-if="isPreviewVisible" class="preview-box-wrapper">
    <div class="preview-box preview-box--visible">
      <div class="preview-box__details">
        <div class="preview-box__icon" @click="closePreview">✖</div>
      </div>
      <div class="preview-box__image-box">
        <button class="preview-box__slide btn-prev" @click="prevImage" v-if="currentIndex > 0">
          <font-awesome-icon class="fa-icon" :icon="['fas', 'angles-left']" />
        </button>
        <img :src="currentImage" alt="Portfolio current" />
        <button class="preview-box__slide btn-next" @click="nextImage" v-if="currentIndex < gallery.length - 1">
          <font-awesome-icon class="fa-icon" :icon="['fas', 'angles-right']" />
        </button>
      </div>
    </div>
    <!-- Shadow Overlay -->
    <div class="shadow" @click="closePreview"></div>
  </div>
</template>

<script>
import TButton from '@/components/TButton.vue';


export default {
  name: "Portfolio",
  data() {
      return {
      gallery: [
        "/img/slidepic1.webp",
        "/img/mountains.webp",
        "/img/nature1.webp",
        "/img/wedding1.webp",
        "/img/janek1.webp",
        "/img/couple1.webp",
        "/img/terka1.webp",
        "/img/city1.webp"
      ],
      currentIndex: 0,
      isPreviewVisible: false,
      animate: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.animate = true
    }, 200)
  },
  computed: {
    currentImage() {
      return this.gallery[this.currentIndex]
    },
  },
  methods: {
    showPreview(index) {
      this.currentIndex = index
      this.isPreviewVisible = true
      document.body.style.overflow = "hidden"
    },
    
    closePreview() {
      this.isPreviewVisible = false
      document.body.style.overflow = "scroll"
    },
    
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    
    nextImage() {
      if (this.currentIndex < this.gallery.length - 1) {
        this.currentIndex++
      }
    },

    openNewTab() {
      window.open("https://www.seznam.cz", "_blank")
    }
  },
  components: { TButton }
}

    
</script>

<style lang="scss" scoped>
@use "src/assets/colors";
@use "src/assets/breakpoints";

@keyframes slide-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slide-in 1s ease-out forwards;
}

h2 {
  font-weight: 400;
  font-size: xx-large;
  color: colors.$primary;
  padding: 1rem 2rem;
  text-align: center;
  opacity: 0;
  transform: translateX(-100%);
}
  
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: colors.$primary;
  margin: 2rem;
  padding: 3rem 1rem;
  border-radius: 10px;
  box-shadow: 0 0 15px 5px #00000062;

  @media  screen and (max-width: breakpoints.$breakpoint-dropdown) {
    margin: 1rem;
  }
  
  .gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 1rem;
    margin-left: 10%;
    margin-right: 10%;
    background-color: colors.$primary;
    flex-wrap: wrap;
    gap: 10px;

    @media screen and (max-width: 1170px) {
      margin-left: 0;
      margin-right: 0;
    }

    @media screen and (max-width: 522px) {
      padding: 1rem;
    }

    &__image {
      display: flex;
      width: 300px;
      height: 400px;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      cursor: pointer;

      @media screen and (max-width: 1170px) {
        width: 200px;
        height: 260px;
      }

      @media screen and (max-width: 522px) {
        width: 100%;
        height: auto;
      }
      
      img {
        width: 100%;
        height: auto;
        transition: all .2s linear;
        
        &:hover {
          transform: scale(1.1);
          filter: brightness(75%);
        }
      }
    }
  }
}

.preview-box-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.1);

  .preview-box {
    max-width: 500px;
    width: 100%;
    opacity: 0;
    transition: all 0.3s ease;

    @media screen and (max-width: 522px) {
      max-width: 90%;
    }
    
    &--visible {
      opacity: 1;
      pointer-events: auto;
    }
    
    &__details {
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 1rem;
    }

    &__icon {
      font-size: 20px;
      cursor: pointer;
      padding: .3rem;
    }

    &__image-box {
      display: flex;
      justify-content: center;
      gap: 1rem;
      width: 100%;
      position: relative;

      button {
        position: absolute;
        top: 50%;
        font-size: 50px;
        padding: 20px;
        cursor: pointer;
        border: none;
        background: rgba(0, 0, 0, 0);
        color: colors.$bg-color;

        .fa-icon {
          background: rgba(0, 0, 0, 0);
        }
      }

      .btn-prev {
        transform: translateX(-300px);

        @media screen and (max-width: breakpoints.$breakpoint-tablet) {
          transform: translateX(-200px);
          z-index: 1010;
        }

        @media screen and (max-width: breakpoints.$breakpoint-mobile) {
          transform: translateX(-140px);
          z-index: 1010;
        }
      }

      .btn-next {
        transform: translateX(300px);

        @media screen and (max-width: breakpoints.$breakpoint-tablet) {
          transform: translateX(200px);
          z-index: 1010;
        }

        @media screen and (max-width: breakpoints.$breakpoint-mobile) {
          transform: translateX(140px);
          z-index: 1010;
        }
      }

      img {
        width: 100%;
      }
    }
  }
}

.shadow {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -999;
  display: block;
  background: rgba(0, 0, 0, 0.8);
}
</style>