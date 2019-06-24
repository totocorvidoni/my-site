<template>
  <div id="contact">
    <transition name="slide" mode="out-in">
      <div class="wrapper received" v-if="messageSent" key="received">
        <h2 class="title">Thanks for your message!</h2>
        <p>I will get in touch with you shortly.</p>
        <p>Have a nice day!</p>
      </div>
      <div class="wrapper" v-else key="form">
        <h2 class="title">Let's talk!</h2>
        <p class="text">Do you have any project or idea that needs my help?</p>
        <p>
          Send me an email directly at
          <a
            href="mailto:totocorvidoni@gmail.com"
            target="_blank"
            rel="nooppener norefferer"
            class="link"
          >totocorvidoni@gmail.com</a> or using the form below and we will build something great.
        </p>
        <form class="contact-form" @submit.prevent="onContactSubmit">
          <div class="small-fields">
            <div class="field">
              <label for="name" class="small-label">Name</label>
              <input
                type="text"
                placeholder="Mr. Firstand Lastname"
                v-model="name"
                id="name"
                name="name"
                v-validate="'alpha_spaces|required'"
                required
              >
              <transition name="slide">
                <span class="error-msg" :key="nameError">{{ nameError }}</span>
              </transition>
            </div>

            <div style="position: absolute; left: -5000px;">
              <input
                type="checkbox"
                name="amazing_rose_cracked_spider_wolf"
                value="1"
                tabindex="-1"
                autocomplete="no"
              >
            </div>

            <div class="field">
              <label for="email" class="small-label">Email</label>
              <input
                type="email"
                placeholder="me@example.com"
                v-model="email"
                id="email"
                name="email"
                v-validate="'email|required'"
                required
                ref="email"
              >
              <transition name="slide">
                <span class="error-msg" :key="emailError">{{ emailError }}</span>
              </transition>
            </div>

            <div class="field">
              <label for="email-confirm" class="small-label">Email Confirm</label>
              <input
                type="email"
                placeholder="me@example.com"
                id="email-confirm"
                name="email confirm"
                v-validate="'email|required|confirmed:email'"
                required
              >
              <transition name="slide">
                <span class="error-msg" :key="emailConfirmError">{{ emailConfirmError }}</span>
              </transition>
            </div>
          </div>

          <div class="message">
            <label for="msg">Your message</label>
            <textarea
              v-model="message"
              id="msg"
              name="message"
              rows="12"
              v-validate="'required'"
              required
            ></textarea>
            <transition name="slide">
              <span class="error-msg" :key="messageError">{{ messageError }}</span>
            </transition>
          </div>

          <input
            type="submit"
            id="submit"
            name="submit"
            ref="submit"
            :value="submitMsg"
            :disabled="errors.any()"
          >
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "contact-comp",

  data() {
    return {
      name: "",
      email: "",
      message: "",
      messageSent: false
    };
  },

  methods: {
    async onContactSubmit() {
      this.$refs.submit;
      const response = await axios({
        method: "post",
        url: "https://app.99inbound.com/api/e/QWFs6h1E",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        data: {
          name: this.name,
          email: this.email,
          message: this.message
        }
      });
      if (response.data.status == "received") {
        this.messageSent = true;
      }
    }
  },

  computed: {
    nameError() {
      return this.errors.first("name");
    },

    emailError() {
      return this.errors.first("email");
    },

    emailConfirmError() {
      return this.errors.first("email confirm");
    },

    messageError() {
      return this.errors.first("message");
    },

    submitMsg() {
      return this.errors.any() ? "Verify!" : "Send";
    }
  }
};
</script>

<style lang='scss'>
#contact {
  background: linear-gradient(45deg, $background-gradient),
    linear-gradient(135deg, $background-gradient);

  & > .wrapper {
    padding: 2rem 1rem;
    width: 80%;
    margin: 0 auto;

    // Received message.
    &.received {
      text-align: center;

      p {
        font-weight: 700;
      }
    }
  }

  .title {
    margin: 0;
    font-size: 2.5em;
  }

  .contact-form {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1em;
    align-items: center;
    margin-top: 1em;
    text-align: end;

    .field {
      position: relative;
      margin-bottom: 1em;
    }

    label {
      display: inline-block;
      background: $white;
      border-radius: 0.25em;
      padding: 0.25em;
      color: $grey-light;
      font-weight: 700;
      padding: 0.25em;
      transition: all 200ms ease;

      &:hover {
        cursor: pointer;
        filter: brightness(110%);
      }
    }

    input,
    textarea {
      padding: 0.25em 0.5em;
      border: 1px solid $grey-light;
      border-radius: 0.25em;
      color: $grey;
      width: 100%;
      transition: all 150ms ease;

      &.invalid {
        border-color: $bad;
      }

      &.valid {
        border-color: $good;
      }

      &:focus {
        outline: none;
        border-color: transparent;
        box-shadow: 0 0 5px 1px rgba($color: $focus, $alpha: 0.5);

        &.invalid {
          box-shadow: 0 0 5px 1px rgba($color: $bad, $alpha: 0.5);
        }

        &.valid {
          box-shadow: 0 0 5px 1px rgba($color: $good, $alpha: 0.5);
        }
      }

      &::placeholder {
        color: $grey-light;
        font-style: italic;
      }
    }

    .message {
      position: relative;
      display: flex;
      flex-flow: column;
      margin-bottom: 0.5em;
    }

    label[for="msg"] {
      margin: 0 auto;
      text-align: center;
    }

    #msg {
      padding: 0.25em;
    }

    #submit {
      grid-column: -2;
      justify-self: center;
      background: $green;
      border: none;
      border-radius: 0.25em;
      color: $white;
      text-transform: uppercase;
      font-weight: 700;
      padding: 0.5em;

      &:hover {
        cursor: pointer;
        filter: brightness(110%);
      }

      &:active {
        filter: brightness(90%);
      }

      &:focus {
        box-shadow: none;
      }

      &:disabled {
        background: $grey-lightest;

        &:hover {
          cursor: not-allowed;
          filter: none;
        }
      }
    }
  }

  // Validation
  .error-msg {
    position: absolute;
    top: calc(100% + 0.25em);
    right: 0.25em;
    color: $bad;
    font-size: 0.75em;
    transition: all 300ms $rubber-band;
  }

  @media screen and (max-width: 770px) {
    .contact-form {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
}
</style>
