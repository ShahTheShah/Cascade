<script lang="ts">
    import '$src/app.scss';

    import Header from '$component/Header.svelte';

	import { BodyPrun } from '$store/defaults';

    import { Body } from 'svelte-body';
    import { onMount } from 'svelte';
    import getClientTheme from '$tool/get-client-theme';

    let
        bodyIsPrun: boolean,
        clientTheme: boolean;

    BodyPrun.subscribe(isPrun => bodyIsPrun = isPrun);

    onMount(async() => {
        clientTheme = await getClientTheme(window);
    })
</script>

<svelte:head>
    <title>NeatCascade</title>
    <link rel="icon" href="/{ clientTheme ? 'favicon' : 'favicon-dark' }.svg">
</svelte:head>

<Body class="{ bodyIsPrun && 'prun' }" />

<Header />
<slot />

<style global lang="scss">
    body.prun {
        width: 100vw; height: 100vh;
        overflow: hidden;
    }
</style>