<script lang="ts">
    import Image from '$tag/Image.svelte';
    import Navigation from './Navigation.svelte';
    import UserToolbar from './UserToolbar.svelte';
</script>

<header class="header">
    <a href="/">
        <Image src="logo.svg" class="logo" />
    </a>
    <Navigation />
    <UserToolbar />
</header>

<style lang="scss">
    $class: '.header';
    #{$class} {
        padding: 5px 24px;
        position:fixed;
        top: 0; left: 0;
        display: flex;
        align-items: center;
        gap: 24px;
        height: 61px;
        width: 100%;
        background-color: #fff;
        border-bottom: 1px solid #d1cfd7;
        :global(.logo) {
            aspect-ratio: 138 / 44;
            height: 44px;
        }
    }
</style>