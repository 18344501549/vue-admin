<script setup lang='ts'>

const handleInputChange = (event: Event) => (event.target as HTMLInputElement).value;

const props = defineProps({
    modelValue: String
});

</script>

<template>
    <input type="text" :value="props.modelValue" @input="$emit('update:modelValue', handleInputChange($event))"
        class="hd-input placeholder: text-xs focus:ring ring-violet-600  ">
</template>

<style  lang='scss' scoped>
.hd-input {
    @apply border w-full rounded-sm py-2 px-2 border-gray-200 duration-300 outline-none #{!important};
}
</style>

