<script setup lang="js">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

// define props & emits
const props = defineProps({
  item: Object,
  level: Number
})
const emit = defineEmits(['childActive'])

const route = useRoute()

// Check if this item is active
const isActive = computed(() => {
  return route.path.toLowerCase() === props.item?.to?.toLowerCase()
})

// Notify parent if active
onMounted(() => {
  if (isActive.value) {
    emit('childActive', props.item?.title)
  }
})

// Get relative base URL
const relativeURL = ref('')
onMounted(() => {
  try {
    relativeURL.value = import.meta.env.BASE_URL
  } catch (error) {
    console.error('Error url not found:', error)
  }
})

// Final computed link
const linkTo = computed(() => {
  if (props.item?.getURL && props.item?.type === 'external') {
    return '/'
  } else if (props.item?.getURL) {
    return `${relativeURL.value}${props.item.to}`
  } else {
    return props.item?.to
  }
})

// Handle external links
const handleClick = (e) => {
  document.querySelector('.pc-sidebar')?.classList.remove('mob-sidebar-active')
  document.querySelector('.pc-sidebar .pc-menu-overlay')?.remove()

  if (props.item?.getURL && props.item?.type === 'external') {
    e.preventDefault()
    window.open(props.item?.to, '_blank')
  }
}
</script>
