import Vue from 'vue'
import Router from 'vue-router'
import CertificadosPersona from '@/components/CertificadosPersona'
import EntidadCertificativa from '@/components/EntidadCertificativa'
import ListaEntidades from '@/components/ListaEntidades'
import ConsultarPersona from '@/components/ConsultarPersona'
import Titulo from '@/components/Titulo'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/entidades',
  		name: 'ListaEntidades',
  		component: ListaEntidades
    },
    {
  		path: '/personas',
  		name: 'ConsultarPersona',
  		component: ConsultarPersona
    },
    {
  		path: '/entidad/:cuenta',
  		name: 'EntidadCertificativa',
  		component: EntidadCertificativa,
  		props: true
    },
    {
      path: '/titulo/:hash',
      name: 'Titulo',
      component: Titulo,
      props: true
    },
    {
    	path: '/persona/:cuenta',
    	name: 'CertificadosPersona',
    	component: CertificadosPersona,
      props: true
    }
  ]
})
