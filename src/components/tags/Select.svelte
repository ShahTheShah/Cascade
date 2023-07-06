<script>
    import Title from '$tag/Title.svelte';

    export let
        items = {
            current: '',
            others: []
        };
</script>

<section class="select">
    <Title level={5} class="select_title">
        { items.current }
    </Title>
    <!-- <ul class="select-list">
        {#each items.others as name, index(index)}
            <li class="selsct-list-item">
                { name }
            </li>
        {/each}
    </ul> -->
</section>

<style lang="scss">
    $class: '.select';
    #{$class} {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .25s ease-in-out;
        :global(#{$class}_title) {
            position: relative;
            z-index: 10;
            padding: 5px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 700;
            line-height: 18px;
            color: white;
            transition: all .25s ease-in-out;
        }
        &:hover {
            cursor: pointer;
            #{$class}-list {
                opacity: 1;
                transform: translateY(4px);
                user-select: all;
                pointer-events: all;
                &::after {
                    height: 4px;
                }
            }
        }
        &-list {
            position: absolute;
            z-index: 5;
            top: 100%; left: 0px;
            padding: 5px;

            opacity: 0;
            transform: translateY(8px);
            user-select: none;
            pointer-events: none;

            display: flex;
            flex-direction: column;
            min-width: 200px;
            gap: 5px;
            width: fit-content;
            border-radius: 8px;
            background-color: #fff;
            box-shadow: 0px 0px 10px rgba(black, .2);
            transition: all .25s ease-in-out;
            &::after {
                content: '';
                position: absolute;
                bottom: 100%; left: 0;
                width: 100%; height: 0px;
            }
        }
    }
</style>