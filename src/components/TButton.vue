<template>
    <button @click="onClicked" :class="buttonClass">{{ label }}</button>
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
        },
        color: {
            type: String,
            default: "white"
        }
    },
    computed: {
        buttonClass() {
            return this.color === "brown" ? "brown-button" : "white-button"
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
    border: 5px solid transparent;
    background-color: rgba(0, 0, 0, 0);
    transition: all .3s ease;
    backdrop-filter: blur(10px);
    cursor: pointer;

    &.white-button {
        color: colors.$bg-color;
        border-color: colors.$bg-color;
        
        &:hover {
            color: colors.$secondary;
            border-color: colors.$secondary;
        }
    }

    &.brown-button {
        color: colors.$primary;
        border-color: colors.$primary;

        &:hover {
            color: colors.$third;
            border-color: colors.$third;
        }
    }
}



</style>