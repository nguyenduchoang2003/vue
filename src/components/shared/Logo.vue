<template>
<svg class="pc-ico">
    <use v-bind:xlink:href="logoPath + '#' + props.name"></use>

</svg>
</template>
<script lang="js" setup>
const props = defineProps({
    name: String,
})
const logoPath = ref(null)
onMounted(async () => {
    try {
        logoPath.value = '@/assets/svg/sprite.svg'
    } catch (error) {
        console.error("Error loading logo", error)
    }
})

</script>