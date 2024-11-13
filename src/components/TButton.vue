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