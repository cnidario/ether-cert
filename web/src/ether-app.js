var CONTRACT_ADDRESS = '0xa2d1552c01872d0807d33fc8680b1b1b62976d71'; 

if (typeof web3 !== 'undefined') {
	web3 = new Web3(web3.currentProvider);
} else {
	console.log('no MetaMask :( ??');
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

var abi = [{"constant":true,"inputs":[{"name":"hash","type":"bytes32"},{"name":"entidad","type":"address"}],"name":"entidadEmitioDocumento","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"hash","type":"bytes32"},{"name":"persona","type":"address"}],"name":"personaTieneDocumento","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"bytes32"},{"name":"persona","type":"address"}],"name":"emitirCertificado","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var TitulosContract = web3.eth.contract(abi);
var TitulosContractInstance = TitulosContract.at(CONTRACT_ADDRESS);

function hashDocumento(documento) { return web3.sha3(JSON.stringify(documento)) }
function checkFirmaDocumento(documento, hash) { return hashDocumento(documento) == hash }

function emitirDocumento(documento, address) {
	return new Promise(function(resolve, reject) {
		let hash = hashDocumento(documento);
		TitulosContractInstance.emitirCertificado(hash, address,
			{ gas: 600000 }, function(error, result) {
				if(!error) {
					resolve(hash);
				} else {
					reject(error);
				}
			});
	});
}
function checkDocumentoPersona(documento, address) {
	return new Promise(function(resolve, reject) {
		TitulosContractInstance.personaTieneDocumento(hashDocumento(documento), address, function(error, result) {
			if(!error) {
				resolve(result);
			} else {
				reject(error);
			}
		});
	});
}
function checkDocumentoEntidad(documento, address) {
	return new Promise(function(resolve, reject) {
		TitulosContractInstance.entidadEmitioDocumento(hashDocumento(documento), address, function(error, result) {
			if(!error) {
				resolve(result);
			} else {
				reject(error);
			}
		});
	});
}


export { emitirDocumento, checkDocumentoPersona, checkDocumentoEntidad };