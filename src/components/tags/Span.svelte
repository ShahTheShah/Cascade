<script>

</script>

<span class="mark {$$props.class ? $$props.class : null}">
    <slot />
</span>

<style lang="scss">
    $class: '.mark';
    #{$class} {
        font-size  : inherit;
        font-weight: inherit;
        line-height: inherit;
        color      : inherit;
    }
</style>