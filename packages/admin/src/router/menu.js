export default [
  {
    path: 'order',
    name: 'ORDER',
    component: () => import('@admin/pages/order/index.vue'),
    redirect: '/order/list',
    meta: {
      label: '订单管理',
    },
    children: [
      {
        path: 'list',
        name: 'ORDER-LIST',
        meta: {
          label: '订单列表',
        },
        component: () => import('@admin/pages/order/list/index.vue'),
      },
      {
        path: 'add',
        name: 'ORDER-ADD',
        meta: {
          label: '添加订单',
        },
        component: () => import('@admin/pages/order/add/index.vue'),
      },
    ],
  },
  {
    path: 'user',
    name: 'USER',
    meta: {
      label: '用户管理',
    },
    component: () => import('@admin/pages/user/index.vue'),
  },
];
