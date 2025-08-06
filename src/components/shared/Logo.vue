<template>
  <svg class="pc-ico">
    <use :xlink:href="`${logoPath}#${props.name}`"></use>
  </svg>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue'

const props = defineProps({
  name: String,
})

const logoPath = ref('')

onMounted(() => {
  logoPath.value = '/svg/sprite.svg'
})
</script>
