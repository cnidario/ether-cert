<template>
	<div class="certificados-persona">
        <div class="">
        	<div class="l-box">
        		<h1 class="title">Certificaciones de {{nombre}}</h1>
        		<div class="cuenta">EtherCert account: {{cuenta}}</div>
        		<div class="num-certs">Número de certificados: {{certificados.length}}</div>
        	</div>
        </div>
        <div class="certs">
            <h1 class="title">Títulos</h1>
            <Titulo class="titulo" v-for="cert in certificados" :key="cert"
            	:hash="cert" />
        </div>
    </div>
</template>
<script>
import Titulo from '@/components/Titulo'
import { findPersona } from '@/data/mock-data'
export default {
    name: 'CertificadosPersona',
    data () {
        return {
        	nombre: '',
        	certificados: []
        }
    },
    props: ['cuenta'],
    created: function() {
        let p = findPersona(this.cuenta);
        this.nombre = p.nombre;
        this.certificados = p.documentos;
    },
    components: { Titulo }
}
</script>
<style lang="scss" scoped>
@import '../styles/basic';
.certificados-persona {
    legend {
        font-size: 2em;
    }
    margin-left: 3em;
    .titulo {
        padding: 1em;
        border: 1px solid black;
        margin-top: 1em;
    }
}
</style>