<template>
  <CardHeader title="Recent Users" class="Recent-Users" body-class="px-0 py-3">
    <BTableSimple responsive hover>
      <BTbody>
        <BTr v-for="(user, index) in users" :key="index" class="align-middle">
          <!-- Avatar -->
          <BTd class="text-center">
            <BImg :src="user.avatar" rounded="circle" style="width: 40px;" alt="User avatar" />
          </BTd>

          <!-- Name & Message -->
          <BTd>
            <h6 class="mb-1">{{ user.name }}</h6>
            <p class="m-0 text-muted">{{ user.message }}</p>
          </BTd>

          <!-- Date & Status -->
          <BTd>
            <h6 class="text-muted mb-0">
              <i
                :class="`d-inline-block rounded-circle bg-${user.status}`"
                style="width: 10px; height: 10px; margin-right: 10px"
              ></i>
              {{ user.date }}
            </h6>
          </BTd>

          <!-- Actions -->
          <BTd class="text-center">
            <BBadge tag="a" href="#!" variant="primary" class="bg-brand-color-2 text-white f-12 me-2">Reject</BBadge>
            <BBadge tag="a" href="#!" variant="success" class="bg-brand-color-1 text-white f-12">Approve</BBadge>
          </BTd>
        </BTr>
      </BTbody>
    </BTableSimple>
  </CardHeader>
</template>

<script setup>
import { BImg, BTableSimple, BTbody, BTr, BTd, BBadge } from 'bootstrap-vue-next'
import CardHeader from '../shared/CardHeader.vue'

// Images
import Img1 from '../../assets/images/user/avatar-1.jpg'
import Img2 from '../../assets/images/user/avatar-2.jpg'
import Img3 from '../../assets/images/user/avatar-3.jpg'

// Sample data
const users = [
  {
    avatar: Img1,
    name: 'Isabella Christensen',
    message: 'Lorem Ipsum is simply dummy text of…',
    status: 'success',
    date: '11 MAY 12:56',
  },
  {
    avatar: Img2,
    name: 'Mathilde Andersen',
    message: 'Lorem Ipsum is simply dummy text of…',
    status: 'danger',
    date: '11 MAY 10:35',
  },
  {
    avatar: Img3,
    name: 'Karla Sorensen',
    message: 'Lorem Ipsum is simply dummy text of…',
    status: 'success',
    date: '9 MAY 17:38',
  },
  {
    avatar: Img1,
    name: 'Ida Jorgensen',
    message: 'Lorem Ipsum is simply dummy text of…',
    status: 'danger',
    date: '19 MAY 12:56',
  },
]
</script>
