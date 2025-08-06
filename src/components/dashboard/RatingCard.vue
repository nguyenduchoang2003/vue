<script setup>
import { ref } from 'vue'

import { BProgress, BProgressBar, BRow, BCol } from 'bootstrap-vue-next'

import CardHeader from '../shared/CardHeader.vue'

const ratingScore = ref([
    { star: 5, count: 384, value: 70 },
    { star: 4, count: 145, value: 35 },
    { star: 3, count: 24, value: 25 },
    { star: 2, count: 1, value: 10 },
    { star: 1, count: 0, value: 0 },
])
</script>

<template>
    <CardHeader title="Rating-score" class="user-list">
        <BRow class="align-items-center justify-content-center m-b-20">
            <BCol cols="6">
                <h2 class="f-w-300 d-flex align-items-center float-start m-0">
                    4.7
                    <i class="ti ti-star-filled f-12 m-l-10 text-warning"></i>
                </h2>
            </BCol>
            <BCol cols="6">
                <h6 class="d-flex align-items-center float-end m-0">
                    0.4
                    <i class="ti ti-caret-up-filled text-success f-22 m-l-10" style="margin-bottom: -2px"></i>
                </h6>
            </BCol>
        </BRow>
        <BRow>
            <BCol cols="6" v-for="(item, stt) in ratingScore" :key="stt">
                <h6>{{ item.star }}</h6>
                <h6>{{ item.count }}</h6>
                <BProgress class="m-t-30" height="7px" :aria-label="`${index}`">
                    <BProgressBar  class="bg-brand-color-1"
                        :value="item.value" />
                </BProgress>

            </BCol>
        </BRow>

    </CardHeader>
</template>
