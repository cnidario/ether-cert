<template>
	<div class="consultar-persona">
		<form class="pure-form pure-form-stacked" v-on:submit.prevent>
			<fieldset>
				<legend>Consultar persona</legend>
				<label for="ether-address">Ethereum Address</label>
				<input type="text" id="ether-addres" placeholder="Ethereum address" v-model="address">
	        	<span class="pure-form-message">requerido</span>
                
                <PersonasPredefinidas @update:address="val => address = val" />

                <button @click="goPersona"
                    class="pure-button pure-button-primary">Consultar</button>
			</fieldset>
		</form>
    </div>
</template>
<script>
import CertificadosPersona from '@/components/CertificadosPersona'
import PersonasPredefinidas from '@/components/PersonasPredefinidas'
import { listaPersonas, findPersona } from '@/data/mock-data'
export default {
    name: 'ConsultarPersona',
    data () {
        return {
        	address: ''
        }
    },
    methods: {
    	goPersona: function() {
    		if(this.address) {
    			this.$router.push('/persona/' + this.address);
    		}
    	}
    },
    components: { CertificadosPersona, PersonasPredefinidas }
}
</script>
<style lang="scss" scoped>
	.consultar-persona {
        legend {
            font-size: 2em;
        }
        margin-left: 3em;
        width: 40%;
    }
</style>