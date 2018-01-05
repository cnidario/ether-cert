<template>
	<div class="personas-predefinidas">
		<h3>Personas predefinidas</h3>
		<select name="persona" v-model="address" @change="actualizarCambios">
			<option :value="p" v-for="p in allPersonas()">
				{{ nombrePersona(p) }}
			</option>
		</select>
	</div>
</template>
<script>
import { listaPersonas, findPersona } from '@/data/mock-data'
export default {
    name: 'PersonasPredefinidas',
    data () {
        return {
        	address: ''
        }
    },
    computed: {
    	nombre: function() { return this.nombrePersona(this.address) }
    },
    methods: {
    	nombrePersona: function(p) {
    		return findPersona(p).nombre;
    	},
    	allPersonas: function() {
    		return listaPersonas();
    	},
    	actualizarCambios: function() {
    		this.$emit('update:address', this.address);
    		this.$emit('update:nombre', this.nombre);
    	}
    }
}
</script>
<style lang="scss" scoped>
	
</style>