<textarea
    class="textarea {$$props.class ? $$props.class : ''}"
    {...$$props}
    placeholder={$$props.placeholder ? $$props.placeholder : ''}
    required={$$props.required ? $$props.required : ''}
    on:change
    on:focus
    on:blur
    on:input
/>

<style lang="scss">
    $class: '.textarea';
    #{$class} {

    }
</style>