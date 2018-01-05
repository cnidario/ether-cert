pragma solidity ^0.4.19;
import "ds-test/test.sol";
import "./Titulos.sol";

contract TitulosTest is DSTest {
	Titulos titulos;
	function setUp() public {
		titulos = new Titulos();
	}

	function test_Simple() public {
		address emisor = msg.sender;
		address receptor = 0x1;
		address impostora = 0xf;
		bytes32 hash = 0x2;
		bytes32 otro_doc = 0x3;
		titulos.emitirCertificado(hash, receptor);
		assertEq(titulos.personaTieneDocumento(hash, receptor), emisor);
		assertEq(titulos.personaTieneDocumento(hash, impostora), 0);
		assertEq(titulos.entidadEmitioDocumento(hash, emisor), receptor);
		assertEq(titulos.entidadEmitioDocumento(otro_doc, emisor), 0);
	}
}