<template>
  <div class="page-header">
    <div class="page-block">
      <BRow>
        <BCol md="12">
          <div class="page-header-title">
            <h5 class="mb-0">{{ title }}</h5>
          </div>
        </BCol>
        <BCol md="12">
          <BBreadcrumb :items="computedBreadcrumbs" />
        </BCol>

      </BRow>

    </div>

  </div>
</template>
<script setup lang="js">
import { computed } from 'vue';
import { BBreadcrumb, BRow, BCol } from 'bootstrap-vue-next';
const props = defineProps({
  title: String,
  breadcrumbs: Array,
})

const computedBreadcrumbs = computed(() => [
  { text: 'Home', to: '/' },
  ...(props.breadcrumbs || [])
])
</script>

<style>
.page-header {
  padding: 20px;
  background-color: bisque;
}

.page-header nav .breadcrumb {
  margin-bottom: 0;
}

.page-header nav .breadcrumb-item.active {
  color: inherit;
}
</style>
