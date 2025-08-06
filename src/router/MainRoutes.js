const MainRoutes = {
  path: '/',
  component: () => import('../layouts/dashboard/DashboardLayout.vue'),
  // meta: {
  //   requiresAuth: true
  // },
  children: [
    {
      name: 'dashboard',
      path: '/',
      meta: { title: 'Home' },
      component: () => import('../pages/dashboard/Dashboard.vue'),
    },
  
  ],
}

export default MainRoutes
