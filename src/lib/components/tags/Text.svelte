<script>

</script>

<p class="text {$$props.class}">
    <slot />
</p>

<style lang="scss">
    $class: '.text';
    #{$class} {
        font-size  : $font-z;
        font-weight: $font-w;
        line-height: $line-h;
        color      :  $color;
    }
</style>