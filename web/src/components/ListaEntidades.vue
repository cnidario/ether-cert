<template>
	<div class="lista-entidades">
        <div v-for="ent in entidades">
        	<router-link 
        		:to="'/entidad/' + ent">
        			{{ nombre(ent) }}
        	</router-link>
        </div>
    </div>
</template>
<script>
import { listaEntidades, findEntidad } from '@/data/mock-data'
export default {
    name: 'ListaEntidades',
    data () {
        return {
        	entidades: []
        }
    },
    methods: {
    	nombre: function(cuenta) {
    		return findEntidad(cuenta).nombre;
    	}
    },
    created: function() {
    	this.entidades = listaEntidades();
    }
}
</script>
<style lang="scss" scoped>
	.lista-entidades {
        legend {
            font-size: 2em;
        }
        margin-top: 2em;
        margin-left: 3em;
        width: 40%;
    }
        
</style>