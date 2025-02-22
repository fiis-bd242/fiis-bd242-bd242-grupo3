import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: () => import("../views/modules/6/login.vue")
    },
    {
      path: '/inicio/',
      name: 'inicio',
      component: () => import("../views/HomeView.vue")
    },
    {
      path: '/moduloplanificacion/crea_orden',
      name: 'crea_orden',
      component: () => import("../views/modules/1/crea_orden.vue")
    },
    {
      path: '/moduloplanificacion/crea_plan',
      name: 'crea_plan',
      component: () => import("../views/modules/1/crea_plan.vue")
    },
    {
      path: '/moduloplanificacion/dashboard_planificacion',
      name: 'dashboard_planificacion',
      component: () => import("../views/modules/1/dashboard_planificacion.vue")
    },
    {
      path: '/moduloplanificacion/detalle_actividad/:id_actividad',
      name: 'detalle_actividad',
      component: () => import("../views/modules/1/detalle_actividad.vue")
    },
    {
      path: '/moduloplanificacion/detalle_orden/:id_orden',
      name: 'detalle_orden',
      component: () => import("../views/modules/1/detalle_orden.vue")
    },
    {
      path: '/moduloplanificacion/detalle_plan/:id_plan',
      name: 'detalle_plan',
      component: () => import("../views/modules/1/detalle_plan.vue")
    },
    {
      path: '/moduloplanificacion/edita_actividad/:id_actividad',
      name: 'edita_actividad',
      component: () => import("../views/modules/1/edita_actividad.vue")
    },
    {
      path: '/moduloplanificacion/edita_orden/:id_orden',
      name: 'edita_orden',
      component: () => import("../views/modules/1/edita_orden.vue")
    },
    {
      path: '/moduloplanificacion/edita_plan/:id_plan',
      name: 'edita_plan',
      component: () => import("../views/modules/1/edita_plan.vue")
    },
    {
      path: '/moduloplanificacion/lista_actividades',
      name: 'lista_actividades',
      component: () => import("../views/modules/1/lista_actividades.vue")
    },
    {
      path: '/moduloplanificacion/lista_ordenes',
      name: 'lista_ordenes',
      component: () => import("../views/modules/1/lista_ordenes.vue")
    },
    {
      path: '/moduloplanificacion/lista_planes',
      name: 'lista_planes',
      component: () => import("../views/modules/1/lista_planes.vue")
    },
    {
      path: '/modulogestionreportes/historial',
      name: 'historial',
      component: () => import("../views/modules/7/historial_mantenimiento.vue")
    },
    {
      path: '/modulogestionreportes/dash',
      name: 'dash_perso',
      component: () => import("../views/modules/7/dashboard_personal.vue")
    },
    {
      path: '/modulogestionreportes/registros',
      name: 'registros',
      component: () => import("../views/modules/7/realizar_registros.vue")
    },
    {
      path: '/modulogestionreportes/verificacionreporte',
      name: 'reporte',
      component: () => import("../views/modules/7/verificacion_reporte.vue")
    },
    {
      path: '/modulogestionreportes/verificaciondatos',
      name: 'sup_datos',
      component: () => import("../views/modules/7/verificacion_datos.vue")
    },
    {
      path: '/modulogestionreportes/exportaciondatos',
      name: 'exportaciondatos',
      component: () => import("../views/modules/7/exportacion_datos.vue")
    },
    {
      path: '/modulocontrol/trabajos',
      name: 'trabajos',
      component: () => import("../views/modules/2/trabajos.vue")
    },
    {
      path: '/modulocontrol/detalles/:id_plan',
      name: 'detalles',
      component: () => import("../views/modules/2/detalles.vue")
    },
    {
      path: '/modulocontrol/notificacion/:id_plan',
      name: 'notificacion',
      component: () => import("../views/modules/2/notificacion.vue")
    },
    {
      path: '/moduloreportesinsumos/Insumos',
      name: 'Insumos',
      component: () => import("../views/modules/3/Solicitudes.vue")
    },
    {
      path: '/moduloequiposoporte/dashboard_equipos_soporte',
      name: 'dashboard_equipos_soporte',
      component: () => import("../views/modules/5/dashboard_equipos_soporte.vue")
    },
    {
      path: '/moduloequiposoporte/ver_inventario',
      name: 'ver_inventario',
      component: () => import("../views/modules/5/inventario_equipos_soporte.vue")
    },
    {
      path: '/moduloequiposoporte/gestionar_pedidos',
      name: 'gestionar_pedidos',
      component: () => import("../views/modules/5/gestion_pedido_equipo.vue")
    },
    {
      path: '/moduloseguridad/dashboard_admin',
      name: 'dashboard_admin',
      component: () => import("../views/modules/6/dashboard_admin.vue")
    },
    {
      path: '/moduloseguridad/crea_usuario',
      name: 'crea_usuario',
      component: () => import("../views/modules/6/crea_usuario.vue")
    },
    {
      path: '/moduloseguridad/informe_incidente',
      name: 'informe_incidente',
      component: () => import("../views/modules/6/informe_incidente.vue")
    },
    {
      path: '/moduloseguridad/lista_usuario',
      name: 'lista_usuario',
      component: () => import("../views/modules/6/lista_usuario.vue")
    },
    {
      path: '/moduloseguridad/ver_notificaciones',
      name: 'ver_notificacion',
      component: () => import("../views/modules/6/ver_notificaciones.vue")
    },
  ]
})

export default router;