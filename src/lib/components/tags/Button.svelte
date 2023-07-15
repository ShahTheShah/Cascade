<svelte:options customElement={{
    tag: 'neat-button',
    shadow: "open",
    props: {
        name: {
            reflect: true,
            type: "String",
            attribute: 'button-name'
        }
    }
}} />

<script>
    export let name = '';
</script>

<button
    class="button {$$props.class ? $$props.class : ''}"
    type="{$$props.type ? $$props.type : 'button'}"
    on:click
>
{name ? name : ''}
    <slot />
</button>

<style lang="scss">
    $class: '.button';
    #{$class} {
        background-color: red;
        color: white;
    }
</style>