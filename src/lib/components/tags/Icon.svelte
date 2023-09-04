<svg
    class="icon {$$props.class}"
    aria-hidden="true"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    on:click
>
    <use xlink:href='./{$$props.name}.svg'  />
</svg>

<style lang="scss">
    $class: '.icon';
    #{$class} {
        aspect-ratio: 1 / 1;
        height: 100%;
    }
</style>