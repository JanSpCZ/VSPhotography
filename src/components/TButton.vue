<template>
    <button @click="onClicked">{{ label }}</button>
</template>


<script>

export default {
    name: "TButton",
    props: {
        label: {
            type: String,
            required: true
        },
        emitEvent: {
            type: String,
            required: true
        }
    },
    methods: {
        onClicked() {
            this.$emit(this.emitEvent)
        }
    }
}


</script>

<style lang="scss" scoped>
@use "src/assets/colors";

button {
    padding: .3rem .7rem;
    font-size: large;
    text-transform: uppercase;
    border: 5px solid colors.$bg-color;
    background-color: rgba(0, 0, 0, 0);
    color: colors.$bg-color;
    transition: all .2s linear;
    backdrop-filter: blur(10px);
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        color: colors.$third;
        border-color: colors.$third;
    }
}



</style>