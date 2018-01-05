<template>
	<div class="titulo">
        <div class="hash">Hash del certificado: {{hash}}</div>
        <div class="titulo-name">Título: {{titulo}}</div>
        <div class="nombre">Nombre: 
            <router-link
                :to="'/persona/' + receptor">
                {{nombre}}
            </router-link>
        </div>
        <div class="fecha">Fecha: {{fecha}}</div>
        <div class="nota">Nota: {{nota}}</div>
        <div class="pais">País: {{pais}}</div>
        <div class="verificacion">
            <img class="icon" :src="estadoVerificacion" alt="Estado de verificación del documento">
        </div>
    </div>
</template>
<script>
import { getDocumento } from '@/data/mock-data'
import { checkDocumentoPersona } from '@/ether-app.js'
let SINVERIFICAR_ST = 0;
let AUTENTICO_ST = 1;
let FALSO_ST = 2;
let NOSEPUEDEVERIFICAR_ST = 3;
export default {
    name: 'Titulo',
    data () {
        return {
        	estado: SINVERIFICAR_ST,
            nombre: '',
            titulo: '',
            fecha: '',
            nota: -1,
            pais: '',
            receptor: ''
        }
    },
    computed: {
        estadoVerificacion: function() {
            switch(this.estado) {
                case SINVERIFICAR_ST: return 'static/unverified.png';
                case AUTENTICO_ST: return 'static/valid.png';
                case FALSO_ST: return 'static/invalid.png';
                case NOSEPUEDEVERIFICAR_ST: return 'static/unverified.png';;
            }
        }
    },
    props: ['hash'],
    created: function() {
        let self = this;
        let certificado = getDocumento(this.hash);
        if(certificado) {
            this.nombre = certificado.nombre;
            this.titulo = certificado.titulo;
            this.fecha = certificado.fecha;
            this.nota = certificado.nota;
            this.pais = certificado.pais;
            this.receptor = certificado.addressReceptor;
            setTimeout( function() {
                checkDocumentoPersona(certificado, self.receptor).then(function(result) {                
                    if(parseInt(result)) {
                        self.estado = AUTENTICO_ST;
                    } else {
                        self.estado = FALSO_ST;
                    }
                }).catch(function(error) {
                    self.estado = NOSEPUEDEVERIFICAR_ST;
                });
            }, 2500); // <--- timeout para poner tensión, sino no se aprecia el chequeo
        }
    }
}
</script>
<style lang="scss" scoped>
	.titulo {
        padding-left: 3em;
        width: 50%;
        .icon {
            width: 64px;
        }
    }
</style>