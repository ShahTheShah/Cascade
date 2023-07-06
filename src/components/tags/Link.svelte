<script>

</script>

<a href={$$props.href} class="link {$$props.class}">
    <slot />
</a>

<style lang="scss">
    .link {
        position: relative;
        text-decoration: none;
        display: block;
        color: $color;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        &::after {
            content: '';
            position: absolute;
            top: 100%; left: 0;
            height: 2px; width: 0%;
            background-color: $primary;
            border-radius: 5px;
            transition: all .25s ease-in-out;
        }
        &:hover {
            cursor: pointer;
            &::after {
                width: 100%;
            }
        }
    }
</style>