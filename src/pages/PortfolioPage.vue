<template>
    <h2>Hello portfolio!</h2>
    <div class="wrapper">
        <div class="gallery">
            <div v-for="(image, index) in gallery" :key="index" class="gallery__image" @click="showPreview(index)">
                <span>
                    <img :src="image" alt="Portfolio" />
                </span>
            </div>
        </div>
    </div>

    <!-- Preview Box -->
    <div v-if="isPreviewVisible" class="preview-box-wrapper">
        <div class="preview-box preview-box--visible">
            <div class="preview-box__details">
                <div class="preview-box__title">
                    <p>Image</p>
                    <p class="preview-box__current-img">{{ currentIndex + 1 }}</p>
                    <p>of</p>
                    <p class="preview-box__total-img">{{ gallery.length }}</p>
                </div>
                <div class="preview-box__icon" @click="closePreview">✖</div>
            </div>
            <div class="preview-box__image-box">
                <button class="preview-box__slide preview-box__slide--prev" @click="prevImage" v-if="currentIndex > 0">
                    ‹
                </button>
                <img :src="currentImage" alt="Portfolio current" />
                <button class="preview-box__slide preview-box__slide--next" @click="nextImage" v-if="currentIndex < gallery.length - 1">
                    ›
                </button>
            </div>
        </div>
        <!-- Shadow Overlay -->
        <div class="shadow" @click="closePreview"></div>
    </div>
</template>

<script>

export default {
    name: "Portfolio",
    data() {
        return {
            gallery: [
                "/img/cow.webp",
                "/img/mountains.webp",
                "/img/nature1.webp",
                "/img/wedding1.webp",
                "/img/janek1.webp",
                "/img/couple1.webp"
            ],
            currentIndex: 0,
            isPreviewVisible: false,
        }
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
        }
    }
}


</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 100%;
  margin: 0 auto;

  .gallery {
    display: flex;
    flex-wrap: wrap;

    &__image {
      padding: 7px;
      width: calc(100% / 3);

      span {
        display: flex;
        width: 100%;
        overflow: hidden;

        img {
          width: 100%;
          vertical-align: middle;
          transition: transform 0.3s ease;

          &:hover {
            transform: scale(1.1);
          }
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

  .preview-box {
    position: relative;
    background: #fff;
    max-width: 700px;
    width: 100%;
    border-radius: 3px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, -50%) scale(0.9);
    transition: all 0.3s ease;

    &--visible {
      opacity: 1;
      pointer-events: auto;
      transform: scale(1);
    }

    &__details {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 15px 12px 10px;

      &__title {
        display: flex;
        font-size: 18px;
        font-weight: 400;

        p {
          margin: 0 5px;

          &.preview-box__current-img {
            font-weight: 500;
          }
        }
      }

      &__icon {
        color: #007bff;
        font-size: 20px;
        cursor: pointer;
      }
    }

    &__image-box {
      display: flex;
      width: 100%;
      position: relative;

      &__slide {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
        font-size: 30px;
        cursor: pointer;
        height: 50px;
        width: 60px;
        line-height: 50px;
        text-align: center;
        border-radius: 3px;

        &--prev {
          left: 0;
        }

        &--next {
          right: 0;
        }
      }

      img {
        width: 100%;
        border-radius: 0 0 3px 3px;
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
  z-index: 999;
  display: block;
  background: rgba(0, 0, 0, 0.45);
}

@media (max-width: 1000px) {
  .gallery {
    &__image {
      width: calc(100% / 2);
    }
  }
}

@media (max-width: 600px) {
  .gallery {
    &__image {
      width: 100%;
      padding: 4px;
    }
  }
}
</style>