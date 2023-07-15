<script>
    import { lazyload } from '$module/lazyLoadImage.js';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="image {$$props.class ? $$props.class : null}"
    on:click
>
    <img use:lazyload data-src={$$props.src} alt={$$props.alt} />
</div>

<style lang="scss">
    $class: '.image';
    #{$class} {
        height: 100%; width: auto;
        overflow: hidden;
        img {
            width: 100%; height: 100%;
            object-fit: contain;
        }
    }
</style>