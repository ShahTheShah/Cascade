<script lang="ts">
    import '$src/app.scss';

	import { BodyPrun } from '$store/defaults';

    import { Body } from 'svelte-body';
    import { onMount } from 'svelte';
    import getClientTheme from '$tool/get-client-theme';

    let
        bodyIsPruning: boolean,
        clientTheme: boolean;

    BodyPrun.subscribe(isPrun => bodyIsPruning = isPrun);

    onMount(async() => {
        clientTheme = await getClientTheme(window);
    })
</script>

<svelte:head>
    <title>NeatCascade</title>
    <link rel="icon" href="/{ clientTheme ? 'favicon-dark' : 'favicon' }.svg">
</svelte:head>

<Body class="{ bodyIsPruning ? 'pruning' : '' }" />

<slot />

<style global lang="scss">
    body.pruning {
        width: 100vw; height: 100vh;
        overflow: hidden;
    }
</style>