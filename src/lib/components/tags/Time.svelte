<script>
    export let
        type = 'default',
        datetime,
        time = datetime;

    if(type === 'taimer' && datetime) {
        setInterval(() => {
            const
                date = new Date(datetime),
                now = new Date(),
                diff = new Date(new Date(date.getTime() + 1000 * 60 * 60 * 21).getTime() - now);
            let
                Hour = String(diff.getHours()),
                Minutes = String(diff.getMinutes()),
                Seconds = String(diff.getSeconds());

            Hour    = Hour.length    === 2 ? Hour    : '0' +    Hour;
            Minutes = Minutes.length === 2 ? Minutes : '0' + Minutes;
            Seconds = Seconds.length === 2 ? Seconds : '0' + Seconds;

            time = `${Hour}:${Minutes}:${Seconds}`;
        }, 1000);
    }
</script>

<time
    class="time {$$props.class ? $$props.class : ''}"
    datetime={$$props.time}
>
    {#if type === 'default'}
        <slot />
    {:else}
        {time}
    {/if}
</time>

<style lang="scss">
    $class: '.time';
    #{$class} {
        // color: white;
    }
</style>