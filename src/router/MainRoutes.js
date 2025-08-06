const MainRoutes = {
  path: '/',
  component: () => import('../layouts/dashboard/DashboardLayout.vue'),
  // meta: {
  //   requiresAuth: true
  // },
  children: [
    {
      name: 'dashboard',
      path: '/dashboard',
      meta: { title: 'Home' },
      component: () => import('../pages/dashboard/Dashboard.vue'),
    },
  
  ],
}

export default MainRoutes
