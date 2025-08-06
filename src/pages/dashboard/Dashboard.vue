ư<script setup lang="js">
import { ref, shallowRef } from 'vue'
import { BRow, BCol } from 'bootstrap-vue-next'
import Breadcrumb from "../../components/shared/Breadcrumb.vue"
import CardHeader from "../../components/shared/CardHeader.vue"

import ProgressSalesCard from "../../components/dashboard/ProgressSalesCard.vue"
import SocialLikeCard from "../../components/dashboard/SocialLikeCard.vue"
import RatingCard from "../../components/dashboard/RatingCard.vue"
import RecentUser from "../../components/dashboard/RecentUser.vue"
const page = ref({ title: 'Home' })
const breadcrumbs = shallowRef([{ text: 'Dashboard' }, { text: 'Home' }])
</script>

<template>
    <Breadcrumb :title="page.title" :breadcrumbs="breadcrumbs" />
    <BRow>
        <BCol cols="4">
            <ProgressSalesCard title="Daily Sales" icon="ph ph-arrow-up" iconVariant="success" sales="249.95"
                :progressValue="50" :percent="67" />
        </BCol>
    </BRow>
    <BRow>
        <BCol cols="4">
            <ProgressSalesCard title="Yearly Sales" icon="ph ph-arrow-up" iconVariant="success" sales="8.638.32"
                :progressValue="70" :percent="80" />
        </BCol>
    </BRow>
    <BRow>
        <BCol cols="4">
            <ProgressSalesCard title="Monthly Sales" icon="ph ph-arrow-down" iconVariant="danger" sales="2.942.32"
                :progressValue="35" progressClass="bg-brand-color-2" :percent="36" />
        </BCol>
    </BRow>
    <BRow>
        <BCol cols="4">
            <SocialLikeCard like="12,281" icon="ti ti-brand-facebook-filled" growth="+7.2%" target="35,098"
                :targetProgress="60" duration="3,539" :durationProgress="45" />
        </BCol>
        <BCol cols="4">
            <SocialLikeCard like="12,281" icon="ti ti-brand-facebook-filled" growth="+7.2%" target="35,098"
                :targetProgress="60" duration="3,539" :durationProgress="45" />
        </BCol>
        <BCol cols="4">
            <SocialLikeCard like="12,281" icon="ti ti-brand-facebook-filled" growth="+7.2%" target="35,098"
                :targetProgress="60" duration="3,539" :durationProgress="45" />
        </BCol>

    </BRow>
    <BRow>
        <BCol cols="4">
            <RatingCard />

        </BCol>
        <BCol cols="8">
            <RecentUser />


        </BCol>
    </BRow>

</template>