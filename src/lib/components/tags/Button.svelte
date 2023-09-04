<script>
</script>

<button
    class="button {$$props.class ? $$props.class : ''}"
    type="{$$props.type ? $$props.type : 'button'}"
    disabled={$$props.disabled}
    on:click
>
    <slot />
</button>

<style lang="scss">
    $class: '.button';
    #{$class} {
        border: none;
        background-color: #00000000;
        // background-color: red;
        border-radius: 8px;
        &:hover {
        }
    }
</style>