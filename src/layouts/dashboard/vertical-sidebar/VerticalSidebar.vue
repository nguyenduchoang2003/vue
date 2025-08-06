<script setup lang="js">
import { shallowRef, ref, onMounted, onBeforeUnmount } from 'vue'

import { BImg } from 'bootstrap-vue-next'

// third party
import SimpleBar from 'simplebar-vue'

// files
import sidebarItems from './sidebarItem'

// components
import Logo from '../logo/LogoMain.vue'
import NavGroup from './NavGroup/NavGroup.vue'
import NavItem from './NavItem/NavItem.vue'
import NavCollapse from './NavCollapse/NavCollapse.vue'


const isSmallScreen = ref(window.innerWidth <= 1024)

// Function to update screen size
const updateScreenSize = () => {
  isSmallScreen.value = window.innerWidth <= 1024
}

onMounted(() => {
  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenSize)
})

const sidebarMenu = shallowRef(sidebarItems)
</script>

<template>
  <!-- [ Sidebar Menu ] start -->
  <nav class="pc-sidebar">
    <div class="navbar-wrapper">
      <Logo />
      <div class="navbar-content">
        <SimpleBar style="height: calc(100vh - 90px)">
          <ul class="pc-navbar">
            <!---Menu Loop -->
            <template v-for="(item, i) in sidebarMenu" :key="i">
              <!---Item Sub Header -->
              <NavGroup :item="item" v-if="item.header" :key="item.title" />
              <!---If Has Child -->
              <NavCollapse :item="item" :level="0" v-else-if="item.children" />
              <!---Single Item-->
              <NavItem :item="item" v-else />
              <!---End Single Item-->
            </template>
          </ul>
          <div class="card pc-user-card my-3 bg-white bg-opacity-10">

          </div>
        </SimpleBar>
      </div>
    </div>
  </nav>
  <!-- [ Sidebar Menu ] end -->
</template>
