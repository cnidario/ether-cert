<template>
	<form class="pure-form pure-form-stacked" v-on:submit.prevent>
	    <fieldset>
	        <legend>Emitir nuevo certificado</legend>
	        <label for="ether-address">Ethereum Address</label>
	        <input type="text" id="ether-addres" placeholder="Ethereum address" v-model="address">
	        <span class="pure-form-message">requerido</span>
	        <PersonasPredefinidas @update:address="val => address = val" @update:nombre="val => nombre = val"/>

	        <label for="nombre">Nombre de la persona</label>
	        <input type="text" id="nombre" v-model="nombre">
	        <label for="titulo">Titulación</label>
	        <input type="text" id="titulo" v-model="titulo">
	        <label for="fecha">Fecha expedición</label>
	        <input type="date" id="fecha" v-model="fecha">
	        <label for="nota-media">Nota media</label>
	        <input type="number" id="nota-media" v-model="nota">
	        <label for="pais">País</label>
	        <input type="text" id="pais" v-model="pais">

	        <button class="pure-button pure-button-primary" @click="emitir">Certificar</button>
	    </fieldset>
	    <div v-if="emitido" class="msg">{{emitido}}</div>
	</form>
</template>
<script>
import { emitirDocumento } from '@/ether-app'
import { addDocumento } from '@/data/mock-data'
import PersonasPredefinidas from '@/components/PersonasPredefinidas'
export default {
    name: 'EmitirCertificadoForm',
    data () {
        return {
        	address: '',
        	nombre: '',
        	titulo: '',
        	fecha: '',
        	nota: 2,
        	pais: '',
        	emitido: null
        }
    },
    props: ['cuenta'],
    methods: {
    	emitir: function() {
            let self = this;
    		let documento = {
    			addressReceptor: this.address,
				nombre: this.nombre,
				titulo: this.titulo,
				fecha: this.fecha,
				nota: this.nota,
				pais: this.pais
    		};
    		emitirDocumento(documento, this.address).then(function(hash) {
    			self.emitido = 'Documento emitido';
    			addDocumento(hash, documento, self.cuenta, self.address);
    		}).catch(function() {
    			self.emitido = 'Error: Documento NO emitido';
    		});
    	}
    },
    components: { PersonasPredefinidas }
}
</script>
<style lang="scss" scoped>
</style>