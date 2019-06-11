<template>
  <div id="about">
    <h2>This is my description</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum deserunt ad architecto atque saepe placeat aperiam similique optio, rem explicabo iusto, at deleniti sed, cupiditate eveniet? Quam, fugit voluptatem!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor itaque unde, totam ea atque, vero minus dolorum ex iure dignissimos sapiente deserunt deleniti aliquid id repellendus, cumque fugiat quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, asperiores ratione. Veritatis neque repellat, voluptatibus aperiam nobis quasi non incidunt adipisci atque cumque nesciunt commodi itaque facere at dignissimos labore.</p>
  </div>
</template>

<script>
export default {
  name: "about-comp"
};
</script>

<style lang="scss">
#about {
  padding: 3rem;

  & > h2 {
    text-align: center;
  }

  & > p {
    text-align: justify;
  }
}
</style>
