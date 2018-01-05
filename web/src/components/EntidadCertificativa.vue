<template>
	<div class="ent-cert">
        <div class="">
            <div class="l-box">
                <h1 class="title">{{nombre}}</h1>
                <div class="cuenta">EtherCert account: {{cuenta}}</div>
                <div class="num-certs">Número de certificaciones emitidas: {{documentos.length}}</div>
            </div>
        </div>
        <div class="emite l-box">
            <EmitirCertificadoForm :cuenta="cuenta"/>
        </div>
        <div class="certs">
            <h1 class="title">Títulos emitidos</h1>
            <div class="cert" v-for="cert in documentos">
                <router-link
                    :to="'/titulo/' + cert">
                    {{cert}}
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import EmitirCertificadoForm from '@/components/EmitirCertificadoForm'
import { findEntidad } from '@/data/mock-data'
export default {
    name: 'EntidadCertificativa',
    data () {
        return {
            nombre: '',
            documentos: []
        }
    },
    props: ['cuenta'],
    created: function() {
        let data = findEntidad(this.cuenta);
        this.nombre = data.nombre;
        this.documentos = data.documentos;
    },
    components: { EmitirCertificadoForm }
}
</script>
<style lang="scss" scoped>
@import '../styles/basic';
.ent-cert {
    legend {
        font-size: 2em;
    }
    margin-left: 3em;
    width: 40%;
    .emite {
        border: 1px solid hsl(0,0,80%);
    }
}
    
</style>