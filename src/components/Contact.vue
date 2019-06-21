<template>
  <div id="contact">
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
      <label for="name">Name:</label>
      <div class="field">
        <input type="text" id="name" name="name" v-validate="'alpha_spaces|required'">
        <transition name="slide">
          <span class="error-msg" :key="nameError">{{ nameError }}</span>
        </transition>
      </div>

      <label for="email">Email:</label>
      <div class="field">
        <input type="mail" id="email" name="email" v-validate="'email|required'" ref="email">
        <transition name="slide">
          <span class="error-msg" :key="emailError">{{ emailError }}</span>
        </transition>
      </div>

      <label for="email-confirm">Email Confirm:</label>
      <div class="field">
        <input
          type="email"
          id="email-confirm"
          name="email confirm"
          v-validate="'email|required|confirmed:email'"
        >
        <transition name="slide">
          <span class="error-msg" :key="emailConfirmError">{{ emailConfirmError }}</span>
        </transition>
      </div>

      <div class="message">
        <label for="msg">What is your message?</label>
        <div class="field">
          <textarea id="msg" name="msg" cols="30" rows="10" v-validate="'required'"></textarea>
          <transition name="slide">
            <span class="error-msg bottom" :key="messageError">{{ messageError }}</span>
          </transition>
        </div>
      </div>

      <input type="submit" value="send!">
    </form>
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
    }
  }
};
</script>

<style lang='scss'>
#contact {
  display: flex;
  flex-flow: column;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  .title {
    margin: 0;
    font-size: 2.5em;
  }

  .contact-form {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1em;
    grid-row-gap: 1.5em;
    justify-content: center;
    padding: 1em 0 2em;
    margin-top: 1em;
    text-align: end;

    .field {
      position: relative;
    }

    label {
      color: $grey-light;
      font-weight: 700;
      transition: all 200ms ease;
      margin: auto 0;

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
      grid-column: 1 / -1;
      display: flex;
      flex-flow: column;
    }

    label[for="msg"] {
      text-align: center;
      margin-bottom: 0.5em;
    }

    textarea {
      padding: 0.25em;
    }

    input[type="submit"] {
      grid-column: 1 / -1;
      justify-self: center;
      background: $green;
      border: none;
      border-radius: 0.25em;
      color: $white;
      text-transform: uppercase;
      font-weight: 700;
      padding: 0.5em;
    }
  }

  // Validation
  .error-msg {
    position: absolute;
    bottom: calc(100% + 0.25em);
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
