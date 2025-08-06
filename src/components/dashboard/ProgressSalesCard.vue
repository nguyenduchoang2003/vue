<template>
    <BCard>
        <h6 class="mb-4">{{ props.title }} </h6>
        <BRow>
            <BCol cols="9">
                <h3 class="f-w-300 d-flex align-items-center m-b-0">
                    <i :class="`${props.icon} text-${props.iconVariant}  f-30 m-r-5`"></i>
                    ${{ props.sales }}
                </h3>
            </BCol>
            <BCol cols="3" class="text-end">
                <p class="m-b-0">{{ props.percent }}%</p>
            </BCol>
        </BRow>
        <BProgress class="m-t-30" height="7px" :aria-label="props.title">
            <BProgressBar :class="`${props?.progressClass}`" class="bg-brand-color-1" :value="props.progressValue" />
        </BProgress>
    </BCard>
</template>
<script lang="js" setup>
import { BRow, BCol, BProgress, BProgressBar, BCard } from 'bootstrap-vue-next'
const props = defineProps({
    title: String,
    icon: String,
    iconVariant: String,
    sales: String,
    percent: Number,
    progressValue: Number,
    progressClass: String
})
</script>
