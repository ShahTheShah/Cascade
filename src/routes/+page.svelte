<script lang="ts">
    import Container from "$component/Container.svelte";


</script>

<section class="home">
    <Container class="home-container">
        <a href="/new_product">Добавить товар</a>
    </Container>
</section>

<style lang="scss">
    $class: '.home';
    #{$class} {
        position: fixed;
        top: 61px; left: 0;
        height: calc(100vh - 61px);
        width: 100vw;
    }
</style>