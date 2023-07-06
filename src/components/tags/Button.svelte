<svelte:options customElement={{
    tag: 'cascad-button',
    shadow: 'none'
}} />

<button
    class="button {$$props.class ? $$props.class : ''}"
    type="{$$props.type ? $$props.type : 'button'}"
    on:click
>
    <slot />
</button>

<style lang="scss">
    $class: '.button';
    #{$class} {
        position: relative;
        padding: 14px 40px;
        background-color: $primary;
        border-radius: 10px;

        text-transform: uppercase;
        font-weight: 600;
        color: white;
        transition: all .25s ease-in-out;

        &.red {
            background-color: $red;
        }
        &::after {
            content: '';
            z-index: -1;
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            border-radius: 10px;
            background-color: rgba(black, .0);
            transition: all .25s ease-in-out;
        }
        &:hover {
            cursor: pointer;
            &::after {
                background-color: rgba(black, .1);
            }
        }
    }
</style>