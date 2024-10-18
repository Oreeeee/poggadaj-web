<script>
    export let wType;
    export let message;
</script>

<div class="warning warning-{wType}">
    <img class="warning-symbol" src="warning-{wType}.gif" alt="{wType}-level warning symbol">
    {message}
</div>

<style>
    .warning {
        border: 1px solid black;
        text-align: left;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 5px;
        padding-right: 5px;
    }

    .warning-symbol {
        object-fit: scale-down;
        width: 40px;
        height: 18px;
    }

    .warning-info {
        background-color: aqua;
    }

    .warning-warn {
        background-color: yellow;
    }

    .warning-serious {
        background-color: firebrick;
    }
</style>
