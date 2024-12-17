<template>
    <h2 :class="{'animate-slide-in' : animate}">KONTAKT</h2>
    <div class="background-wrapper">
      <img src="/img/kontakt1.webp" alt="kontakt">
      <form id="myForm" @submit.prevent="submitForm">
        <h4>Rezervujte si termín focení</h4>
        <label for="fname">Jméno a příjmení:</label>
        <input type="text" v-model="formData.fname" id="fname" name="fname" autocomplete="off" required>
        <label for="fnumber">Telefonní číslo:</label>
        <input type="text" v-model="formData.fnumber" id="fnumber" name="fnumber" autocomplete="off" required>
        <label for="fmail">E-mail:</label>
        <input type="email" v-model="formData.fmail" id="fmail" name="fmail" autocomplete="off" required>
        <label for="fmessage">Zpráva:</label>
        <textarea rows="7" v-model="formData.fmessage" name="fmessage" id="fmessage" autocomplete="off" required></textarea>
        <!-- Skryté pole pro CSRF token -->
        <input type="hidden" v-model="csrfToken" />
        
        <!-- Google reCAPTCHA widget -->
        <div class="g-recaptcha" :data-sitekey="recaptchaSiteKey"></div>
        <input type="submit" value="Odeslat">
      </form>
    </div>
</template>

<script>
export default {
  name: "KontaktPage",
  data() {
    return {
      animate: false,
      formData: {
        fname: '',
        fnumber: '',
        fmail: '',
        fmessage: ''
      },
      csrfToken: '',  // CSRF token
      siteKey: '6LeilJ0qAAAAANoKgbEVqqAYiianoWkswJhNAyHE', // reCAPTCHA site key
    };
  },
  mounted() {
    setTimeout(() => {
      this.animate = true;
    }, 100);
    this.loadCSRFToken();
    this.loadRecaptchaScript();
  },
  methods: {
    // Načítání CSRF tokenu
    loadCSRFToken() {
      fetch('/php/generate_csrf.php')
        .then(response => response.json())
        .then(data => {
          this.csrfToken = data.csrf_token;
        })
        .catch(error => {
          console.error('Chyba při načítání CSRF tokenu:', error);
        });
    },

    // Načítání reCAPTCHA skriptu
    loadRecaptchaScript() {
      if (!window.grecaptcha) {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${this.siteKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          console.log('reCAPTCHA script loaded');
        };
        script.onerror = () => {
          console.error('Failed to load reCAPTCHA script');
        };
        document.head.appendChild(script);
      } else {
        console.log('reCAPTCHA script already loaded');
      }
    },

    // Odeslání formuláře
    submitForm() {
      this.ensureRecaptchaReady().then(() => {
        grecaptcha.ready(() => {
          grecaptcha.execute(this.siteKey, { action: 'submit' })
            .then(token => {
              console.log('reCAPTCHA token:', token);
              // Pokračujte v odesílání formuláře

              // Vytvoření FormData a odeslání dat
              const formData = new FormData();
              formData.append('fname', this.formData.fname);
              formData.append('fnumber', this.formData.fnumber);
              formData.append('fmail', this.formData.fmail);
              formData.append('fmessage', this.formData.fmessage);
              formData.append('csrf_token', this.csrfToken);
              formData.append('g-recaptcha-response', token);

              // Odeslání formuláře
              fetch('/php/send_email.php', {
                method: 'POST',
                body: formData
              })
                .then(response => response.text())
                .then(data => {
                  alert(data);
                })
                .catch(error => {
                  alert('Chyba při odesílání formuláře.');
                  console.error('Chyba:', error);
                });
            });
        });
      });
    },

    // Zajištění, že reCAPTCHA je připravena
    ensureRecaptchaReady() {
      return new Promise(resolve => {
        const checkGrecaptcha = () => {
          if (window.grecaptcha) {
            resolve();
          } else {
            setTimeout(checkGrecaptcha, 100);
          }
        };
        checkGrecaptcha();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "src/assets/colors";
@use "src/assets/breakpoints";

@keyframes slide-in {
  from {
    transform: translateX(-100px);
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
  color: colors.$third;
  padding: 1rem 2rem;
  text-align: center;
}

.background-wrapper {
  position: relative;
  width: 100vw;
  height: 900px;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 1024px) {
      justify-content: center;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;  
  }

  form {
    position: absolute;
    width: 500px;
    transform: translateX(-17vw);
    display: flex;
    flex-direction: column;
    padding: 4rem 3rem;
    font-weight: 200;
    background-color: rgba(255, 255, 255, 0.5);
    gap: 10px;

    @media screen and (max-width: 1024px) {
      transform: translateX(0);
    }

    @media screen and (max-width: breakpoints.$breakpoint-mobile) {
      width: 90%;
      padding: 3rem 2rem;
    }

    h4 {
      background-color: rgba(255, 255, 255, 0);
      text-align: center;
      font-weight: 400;
      font-size: 30px;
      margin-bottom: 30px;

      @media screen and (max-width: breakpoints.$breakpoint-mobile) {
        font-size: 22px;
      }
    }

    label {
      background-color: rgba(255, 255, 255, 0);
      font-size: 18px;

      @media screen and (max-width: breakpoints.$breakpoint-mobile) {
        font-size: 14px;
      }
    }

    input {
      background-color: rgba(255, 255, 255, 0);
      outline: none;
      -webkit-appearance: none;
      appearance: none;
      border-radius: 0;
      border: none;
      border-bottom: 1px solid black;
      padding: .5rem 0;
      font-size: 17px;
      transition: border-color .3s ease;

      &:focus {
        border-color: colors.$secondary;
      }

      @media screen and (max-width: breakpoints.$breakpoint-mobile) {
        font-size: 13px;
      }
    }

    input[type=submit] {
      border: 1px solid black;
      color: #000;
      cursor: pointer;
      transition: all .3s ease;

      &:hover {
        color: colors.$secondary;
        border-color: colors.$secondary;
      }
    }

    textarea {
      background-color: rgba(255, 255, 255, 0);
      outline: none;
      -webkit-appearance: none;
      appearance: none;
      border-radius: 0;
      border: none;
      border-bottom: 1px solid black;
      margin-bottom: 30px;
      font-size: 17px;
      resize: none;
      transition: border-color .3s ease;

      &:focus {
        border-color: colors.$secondary;
      }

      @media screen and (max-width: breakpoints.$breakpoint-mobile) {
        font-size: 13px;
      }
    }
  }
}
</style>