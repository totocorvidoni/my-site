<template>
  <div id="contact">
    <div class="wrapper">
      <h2 class="title">Let's talk!</h2>
      <p>
        Do you have any project or idea that needs my help? Send me an email directly at
        <a
          href="mailto:totocorvidoni@gmail.com"
          target="_blank"
          rel="nooppener norefferer"
          class="link"
        >totocorvidoni@gmail.com</a> or using the form below and we will build something great.
      </p>
      <form class="contact-form">
        <div class="small-fields">
          <div class="field">
            <label for="name" class="small-label">Name</label>
            <input type="text" id="name" name="name" v-validate="'alpha_spaces|required'" required>
            <transition name="slide">
              <span class="error-msg" :key="nameError">{{ nameError }}</span>
            </transition>
          </div>

          <div class="field">
            <label for="email" class="small-label">Email</label>
            <input
              type="mail"
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
          <textarea id="msg" name="msg" rows="12" v-validate="'required'" required></textarea>
          <transition name="slide">
            <span class="error-msg bottom" :key="messageError">{{ messageError }}</span>
          </transition>
        </div>

        <input type="submit" id="submit" name="submit" :value="submitMsg" :disabled="errors.any()">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-comp",

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
      return this.errors.first("msg");
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
    padding: 2rem;
    width: 80%;
    margin: 0 auto;
  }

  .title {
    margin: 0;
    font-size: 2.5em;
  }

  .contact-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    align-items: center;
    margin-top: 1em;
    text-align: end;

    .field {
      position: relative;
      margin-bottom: 1em;
    }

    label {
      display: block;
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
      padding-left: 0.25em;
      padding-right: 0.25em;
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
    }

    label[for="name"] {
      text-align: end;
    }

    .message {
      position: relative;
      display: flex;
      flex-flow: column;
      margin-bottom: 0.5em;
    }

    label[for="msg"] {
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
    left: 0.25em;
    color: $bad;
    font-size: 0.75em;
    transition: all 300ms $rubber-band;

    &.bottom {
      top: calc(100% + 0.25em);
      right: 0.25em;
    }
  }
}
</style>
