export const exampleRoutes = [
  {
    path: 'example/icon',
    name: 'ExampleIcon',
    component: () => import('./Icon.vue'),
    meta: {
      title: 'ExampleIcon',
      ignore: true
    }
  },
  {
    path: 'example/echarts-gl-map',
    name: 'ExampleEchartsGlMap',
    component: () => import('./EchartsGlMap.vue'),
    meta: {
      title: 'ExampleEchartsGlMap',
      ignore: true
    }
  }
]
