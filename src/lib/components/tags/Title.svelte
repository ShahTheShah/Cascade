<script>
    import Text from '$tag/Text.svelte';
    export let level = 2;
</script>

{#if      level === 1}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <h1
        class="title {$$props.class ? $$props.class : null}"
        style={$$props.style ? $$props.style : ''}
        on:click
    >
        <slot />
    </h1>

{:else if level === 2}
<!-- svelte-ignore a11y-click-events-have-key-events -->
    <h2
        class="title {$$props.class ? $$props.class : null}"
        style={$$props.style ? $$props.style : ''}
        on:click
    >
        <slot />
    </h2>

{:else if level === 3}
<!-- svelte-ignore a11y-click-events-have-key-events -->
    <h3
        class="title {$$props.class ? $$props.class : null}"
        style={$$props.style ? $$props.style : ''}
        on:click
    >
        <slot />
    </h3>

{:else if level === 4}
<!-- svelte-ignore a11y-click-events-have-key-events -->
    <h4
        class="title {$$props.class ? $$props.class : null}"
        style={$$props.style ? $$props.style : ''}
        on:click
    >
        <slot />
    </h4>

{:else if level === 5}
<!-- svelte-ignore a11y-click-events-have-key-events -->
    <h5
        class="title {$$props.class ? $$props.class : null}"
        style={$$props.style ? $$props.style : ''}
        on:click
    >
        <slot />
    </h5>

{:else if level === 6}
<!-- svelte-ignore a11y-click-events-have-key-events -->
    <h6
        class="title {$$props.class ? $$props.class : null}"
        style={$$props.style ? $$props.style : ''}
        on:click
    >
        <slot />
    </h6>

{:else}
    <Text class="title_error">Пожалуйста, укажите корректный уровень заголовка числом от 1 до 6!</Text>
{/if}

<style lang="scss">
    $class: ".title";
    #{$class} {
        font-size  : $font-z;
        font-family: $font-f;
        font-weight: $font-w;
        line-height: $line-h;
        color      :  $color;

        &.type1 {
            font-family: Epice;
        }
        &.type2 {
            font-size: 24px;
            line-height: 24px;
            font-weight: 700;
            text-transform: uppercase;
        }
    }
    :global(#{$class}_error) {
        color: $red !important;
    }
</style>
