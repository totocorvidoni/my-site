<template>
  <div id="contact">
    <h2>Want to get in touch?</h2>
    <p>
      You can send me an email at
      <a
        href="mailto:totocorvidoni@gmail.com"
        target="_blank"
        rel="nooppener norefferer"
        class="link"
      >totocorvidoni@gmail.com</a> or using the form below.
    </p>
    <form class="contact-form">
      <label for="name">Name</label>
      <input type="text" name="name" v-validate="'alpha_spaces|required'">
      <span>{{ errors.first('name') }}</span>

      <label for="email">Email</label>
      <label for="email-confirm">Email Confirmation</label>

      <input type="mail" name="email" v-validate="'email|required'" ref="email">
      <span>{{ errors('email') }}</span>
      <input type="email" name="email-confirmation" v-validate="'email|required|confirmed:email'">
      <span>{{ errors.first('email-confirmation') }}</span>

      <label for="message">Tsell me what you think</label>
      <textarea name="message" id cols="30" rows="10"></textarea>

      <input type="submit" value="send!">
    </form>
  </div>
</template>

<script>
export default {
  name: "contact-comp"
};
</script>

<style lang='scss'>
#contact {
  display: flex;
  flex-flow: column;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;

  .contact-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    justify-content: center;
    padding: 1em;
    text-align: center;

    label[for="name"] {
      text-align: end;
    }

    label[for="message"],
    textarea[name="message"] {
      grid-column: 1 / -1;
    }

    label[for="message"] {
      text-align: start;
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
}
</style>
