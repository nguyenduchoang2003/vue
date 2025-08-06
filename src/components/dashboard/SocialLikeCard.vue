<script setup lang="js">
import { BCard, BCardBody, BRow, BCol, BProgress, BProgressBar } from 'bootstrap-vue-next'


const Facebookscore = defineProps({
    icon: String,
    like: Number,
    growth: String,
    target: Number,
    targetProgress: Number,
    duration: Number,
    durationProgress: Number
})
</script>
<template>
    <BCard>
        <BCardBody class="border-bottom">

            <BRow>
                <BCol cols="6">
                    <i :class="`${Facebookscore.icon}  f-36`"></i>
                </BCol>
                <BCol cols="6">
                    <h3>{{ Facebookscore.like }}</h3>
                    <h5 class="`mb-0`">
                        {{ Facebookscore.growth }}
                        <span class="text-muted">Total Likes</span>
                    </h5>
                </BCol>
            </BRow>
        </BCardBody>
        <BCardBody>
            <BRow>
                <BCol cols="6">
                    <h6 class="text-center m-b-10">
                        <span class="text-muted m-r-5">Target:</span>
                        {{ Facebookscore.target }}
                    </h6>
                    <BProgress>
                        <BProgressBar class="bg-brand-color-1" :value="Facebookscore.targetProgress" />

                    </BProgress>
                </BCol>
                <BCol cols="6">
                    <h6 class="text-center m-b-10">
                        <span class="text-muted m-r-5">Target:</span>
                        {{ Facebookscore.target }}
                    </h6>
                    <BProgress>
                        <BProgressBar class="bg-brand-color-1" :value="Facebookscore.targetProgress" />

                    </BProgress>
                </BCol>
            </BRow>


        </BCardBody>

    </BCard>


</template>