<script lang="ts">

</script>

<div class="container {$$props.class ? $$props.class : ''}">
    <slot />
</div>

<style lang="scss">
    $class: '.container';
    #{$class} {
        // padding: 40px 0;
        @include mediaQueryMin($breakpoint-xs) {
            margin: 0 auto;
            width: 100%;
        }

        @include mediaQueryMin($breakpoint-sm) {
            width: 540px;
        }

        @include mediaQueryMin($breakpoint-md) {
            width: 700px;
        }

        @include mediaQueryMin($breakpoint-lg) {
            width: 930px;
        }

        @include mediaQueryMin($breakpoint-xl) {
            width: 1140px;
        }

        @include mediaQueryMin($breakpoint-xxl) {
            width: 1320px;
        }
        @include mediaQueryMin(1600px) {
            width: 1520px;
        }
    }
</style>