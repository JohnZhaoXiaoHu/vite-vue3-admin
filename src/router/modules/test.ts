export default {
  'views/shared/demos/form/rule-form.vue': () => import('@/views/shared/demos/form/rule-form.vue'), // 验证表单
  'views/shared/demos/icons/Iconfont.vue': () => import('@/views/shared/demos/icons/Iconfont.vue'), // 自定义图标
  'views/shared/demos/tables/summary-table/index.vue': () =>
    import('@/views/shared/demos/tables/summary-table/index.vue'), // 合计表格
  'views/shared/demos/button.vue': () => import('@/views/shared/demos/button.vue'), // 自定义按钮
  'views/shared/demos/custom-modal.vue': () => import('@/views/shared/demos/custom-modal.vue') // 自定义模态框
}

// export const constantRouterComponents = {
//   '/system': RouterTransition, // 系统管理
//   '/system/access': () =>
//     import(/* webpackChunkName: "system-access" */ '@/views/auth/system/access/index.vue'), // 资源管理
//   '/system/account': () =>
//     import(/* webpackChunkName: "system-account" */ '@/views/auth/system/account/index.vue'), // 账号管理
//   '/system/dict': () =>
//     import(/* webpackChunkName: "system-dict" */ '@/views/auth/system/dict/index.vue'), // 字典管理
//   '/system/role': () =>
//     import(/* webpackChunkName: "system-role" */ '@/views/auth/system/role/index.vue') // 角色管理
// }
