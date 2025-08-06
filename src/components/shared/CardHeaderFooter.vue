<template>
    <BCard>
        <BCard>
            <template #header>
                <h5>{{ props.title }}</h5>
                <p class="f-12" v-if="props.caption" v-html="props.caption"></p>
            </template>
            <slot />
            <template #footer>
                <slot name="footer" />
            </template>
        </BCard>
    </BCard>
</template>
<script setup lang="js">
import { BCard } from 'bootstrap-vue-next'
const props = defineProps({
    title: String,
    caption: String,
})
</script>
