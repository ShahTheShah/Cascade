<script>

</script>

<label class="label" {...$$props}>
    <slot />
</label>

<style lang="scss">
    $class: '.label';
    #{$class} {
        display: flex;
        justify-content: space-between;
        gap: 50px;
    }
</style>