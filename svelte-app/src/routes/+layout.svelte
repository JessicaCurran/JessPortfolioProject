<script>
    import {Header} from '$lib';
</script>

<Header/>
<main>
    <slot />
</main>

<style>
    main {
        padding: 2rem;
        text-align: center;
        min-height: 100vh;
    }
</style>