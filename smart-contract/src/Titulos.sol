pragma solidity ^0.4.19;
contract Titulos {
	struct Titulo {
		//XXX IMPLÍCITO en la estructura de datos -- bytes32 hash_titulo; //hash de la información certificada
		address entidad;
		address persona;
	}
	mapping(bytes32 => Titulo) titulosHash;

	function emitirCertificado(bytes32 hash, address persona) public returns (uint) {
		//asumimos no colisión AKA === títulos únicos y no muy muy mala suerte (:
		titulosHash[hash] = Titulo(msg.sender, persona);
		return 1;
	}
	function personaTieneDocumento(bytes32 hash, address persona) public view returns (address) {
		Titulo memory titulo = titulosHash[hash];
		//elijo entidad en lugar de persona para el check null porque la interfaz permite custom address en campo persona
		//(es un parámetro libre)
		if(titulo.entidad != 0 && titulo.persona == persona) {
			return titulo.entidad;
		} else {
			return 0; //null
		}
	}
	function entidadEmitioDocumento(bytes32 hash, address entidad) public view returns (address) {
		Titulo memory titulo = titulosHash[hash];
		if(titulo.entidad != 0 && titulo.entidad == entidad) {
			return titulo.persona;
		} else {
			return 0; //null
		}	
	}
}