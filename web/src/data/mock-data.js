var ENTIDADES = {
	'0x59279262cd92f700a92c24a487160ef258fbcbb9': {
		cuenta: '0x59279262cd92f700a92c24a487160ef258fbcbb9',
		nombre: 'Universidad de Oviedo',
		documentos : [
	    ]
	},
	'0xe690e78d323342489a8f04bba3572183f8796974': {
		cuenta: '0xe690e78d323342489a8f04bba3572183f8796974',
		nombre: 'Escuela Superior de Arte de Oviedo',
		documentos : [
	    ]
	},
	'0x9824613bb5f88e96fecf69a439c0f9b3e8503a1a': {
		cuenta: '0x9824613bb5f88e96fecf69a439c0f9b3e8503a1a',
		nombre: 'Escuela Politécnica Alfonso X',
		documentos : [
	    ]
	}
};

function listaEntidades() {
	var result = [];
	for(var k in ENTIDADES) result.push(k);
	return result;
}

function findEntidad(hash) {
	return ENTIDADES[hash];
}

var PERSONAS = {
	'0x7d1ac5b7792830174fb4364c2523c3f190d06e96': {
		nombre: 'José Jamón Julión',
		documentos: [
		]
	},
	'0xa03bdeb897aaaf9812cfc4bd28dcdc1fef906529': {
		nombre: 'Ricardo Vélez Castigo',
		documentos: [
		]
	},
	'0x09cf105eff01949bc15648280df642d1ffafcbf6': {
		nombre: 'Josefina Sánchez Flannagan',
		documentos: [
		]
	},
	'0x71f2deb351ebed9109944ecd2bfa021619efd180': {
		nombre: 'Senén Prieto Gómez',
		documentos: [
		]	
	},
	'0x403749e2a2c988ed4defa540c9185ded85cc6d64': {
		nombre: 'Hacker Impostor Bad Boy',
		documentos: [
			'0xBAD00BAD00BAD00BAD00BAD00BAD00BAD00BAD00',
			'0xBAD00BAD00BAD00BAD00BAD00BAD00BAD00BAD11'
		]
	}
};
function listaPersonas() {
	var result = [];
	for(var k in PERSONAS) result.push(k);
	return result;
}
function findPersona(hash) {
	return PERSONAS[hash];
}
function updatePersona(hash, persona) {
	PERSONAS[hash] = persona;
}let documento = {
    			addressReceptor: this.address,
				nombre: this.nombre,
				titulo: this.titulo,
				fecha: this.fecha,
				nota: this.nota,
				pais: this.pais
    		};

var DOCUMENTOS = {
	'0xBAD00BAD00BAD00BAD00BAD00BAD00BAD00BAD00' : {
		addressReceptor: '0x403749e2a2c988ed4defa540c9185ded85cc6d64',
		nombre: 'Hacker Impostor Bad Boy',
		titulo: 'Médico',
		fecha: '01/01/90',
		nota: 9.9,
		pais: 'Rusia'
	},
	'0xBAD00BAD00BAD00BAD00BAD00BAD00BAD00BAD11' : {
		addressReceptor: '0x403749e2a2c988ed4defa540c9185ded85cc6d64',
		nombre: 'Calisto Fernández Bermúdez',
		titulo: 'Ingeniero en Todo',
		fecha: '11/11/11',
		nota: 10,
		pais: 'Lituania'
	},
};

function addDocumento(hash, documento, emisor, receptor) {
	if(!(receptor in PERSONAS)) {
		console.error('Error, acceso a mock de persona no bajo control');
		return;
	} else if(!(emisor in ENTIDADES)) {
		console.error('Error, acceso a mock de entidad no bajo control');
		return;
	} else {
		DOCUMENTOS[hash] = documento;
		PERSONAS[receptor].documentos.push(hash);
		ENTIDADES[emisor].documentos.push(hash);

	}
}

function getDocumento(hash) {
	return DOCUMENTOS[hash];
}

export { listaEntidades, findEntidad, listaPersonas, findPersona, updatePersona, addDocumento, getDocumento };