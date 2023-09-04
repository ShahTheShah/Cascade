<script lang="ts">
    import Button from "$tag/Button.svelte";

    let nav_items = [
        'Товары',
        'Поставки',
        'Маркетплейс',
        'Цены и скидки',
        'Аналитика',
        'Карта складов',
        'Реклама',
    ];
</script>

<nav class="nav">
    <ul class="nav-list">
        {#each nav_items as nav_item, i(i)}
            <li class="nav-item">
                <Button class="nav_button {i === 0 ? 'active' : ''}" disabled={i !== 0}>{nav_item}</Button>
            </li>
        {/each}
    </ul>
</nav>

<style lang="scss">
    $class: '.nav';
    #{$class} {
        &-list {
            padding: 0;
            display: flex;
            align-items: center;
            gap: 4px;
        }
        &-item {
            :global(.nav_button) {
                padding: 7px 12px;
                font-size: 15px;
                font-weight: 500;
                line-height: 20px;
            }
            :global(.nav_button[disabled=""]) {
                cursor: not-allowed;
            }
            :global(.nav_button.active) {
                color: $primary;
                background-color: rgba($primary, .1);
                cursor: pointer;
            }
        }
    }
</style>