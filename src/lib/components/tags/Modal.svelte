<script>
    import Button from '$tag/Button.svelte';

    import { ModalIsOpen, ModalContent } from '$store/Modal.js';

    let isOpen;
    ModalIsOpen.subscribe(value => isOpen = value);
</script>

<div class="modal__wrapper" {isOpen}>
    <aside class="modal">
        <div class="modal-content">
            <svelte:component this={$ModalContent.component} />
        </div>
        <div class="modal-controllers">
            <Button
                class="modal_close"
                on:click={() => ModalIsOpen.update(() => false)}
            >
                <span />
                <span />
            </Button>
            <slot name="controllers" />
        </div>
    </aside>
</div>

<style lang="scss">
    $class: '.modal';
    #{$class} {
        &__wrapper {
            &[isOpen="true"] {
                // transform: translateY(0);
                user-select: inherit;
                pointer-events: inherit;
                opacity: 1;
            }
            // transform: translateY(-16px);
            user-select: none;
            pointer-events: none;
            opacity: 0;

            position: fixed;
            top: 0; left: 0;
            z-index: 12000;
            width: 100vw; height: 100vh;
            background-color: rgba(black, .3);

            display: flex;
            align-items: center;
            justify-content: center;
            transition: all .25s ease-in-out;
        }
        &-controllers,
        &-content {
            padding: 20px;
            position: absolute;
            top: 0; left: 0;
            background-color: transparent;
        }
        &-controllers {
            width: 100%; height: 100%;
            user-select: none;
            pointer-events: none;
        }
        &-content {
            margin: 5px 10px;
            width: calc(100% - 20px);
            height: calc(100% - 10px);
            // overflow-y: scroll;
            box-sizing: border-box;
            // z-index: 1000;
        }
        :global(.modal_close) {
            padding: 0;
            position: absolute;
            top: 26px; right: 26px;
            width: 40px; height: 40px;
            background-color: transparent;
            user-select: all;
            pointer-events: all;
            transition: all .25s ease-in-out;

            &:hover {
                transform: scale(1.05);
            }
            &:active {
                transform: scale(0.95);
            }
        }
        :global(.modal_close span) {
            position: absolute;
            top: calc(50% - 1.5px);
            left: 0;
            display: block;
            height: 3px; width: 100%;
            background-color: black;
            border-radius: 5px;

            &:first-child {
                transform: rotate(45deg);
            }
            &:last-child {
                transform: rotate(-45deg);
            }
        }
        position: relative;
        min-width: 800px;
        width: fit-content;
        height: 90%;
        max-height: 800px;
        background-color: #fff;
        border-radius: 12px;
    }
</style>