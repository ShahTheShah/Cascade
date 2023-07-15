<script>

</script>

<form
    action="/"
    on:submit={_e => _e.preventDefault()}
    on:focus
    class="form {$$props.class ? $$props.class : ''}"
>
    <slot />
</form>

<style lang="scss">
    $class: '.form';
    #{$class} {

    }
</style>