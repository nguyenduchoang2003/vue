<template>
    <BRow>
        <BCol xxl="9" md="10" class="mb-4">
            <p class="text-muted">{{ props.content }}</p>
            <BButton variant="primary" size="sm" pill class="btn-light-primary" :href="props.link" target="_blank">
                <i class="ti ti-external-link me-1"></i>
                Reference
            </BButton>
        </BCol>
    </BRow>
</template>
<script lang="js" setup>
import { BRow, BCol, BButton } from 'bootstrap-vue-next'
const props = defineProps({
    content: String,
    link: String,
})
</script>