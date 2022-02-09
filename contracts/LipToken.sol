//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LipToken is ERC721, Ownable {
    string public constant Name = "PetsGO";
    string public constant Symbol = "PGO";

    constructor() ERC721(Name, Symbol) {}

    uint256 COUNTER; //+-N.F.T. ID Numbers.

    uint256 fee = 0.01 ether;
    /**+-See how the Front-End Connects to the S.C. and Pays this Fee using the Function "mintNFT"
    in the file "ROOTFOLDER/src/App.js".*/

    struct Lip {
        string name;
        uint256 id;
        uint256 dna; //+-Random Number of 16 Digits used to Generate the N.F.T. Images.
        uint8 level;
        uint8 rarity;
    } /**+-To Auto-Generate the Lip Appeareance, the D.N.A. Number of 16 Digits will be divided
    in pairs of 2 Digits which will each be used to determine a different Layer of the Art of the N.F.T.
    +-See file "ROOTFOLDER/src/components/lipRender.js" to know more.*/

    Lip[] public lips;

    event NewLip(address indexed owner, uint256 id, uint256 dna);

    //+-Helpers:_
    function _createRandomNum(uint256 _mod) internal view returns (uint256) {
        uint256 randomNum = uint256(
            keccak256(abi.encodePacked(block.timestamp, msg.sender, COUNTER))
        );
        return randomNum % _mod;
    }

    function updateFee(uint256 _fee) external onlyOwner {
        fee = _fee;
    }

    //+-Owner Withdrawals earnings:_
    function withdraw() external payable onlyOwner {
        address payable _owner = payable(owner());
        _owner.transfer(address(this).balance);
    }

    //+-Creation of Pet N.F.T.s:_
    function _createLip(string memory _name) internal {
        uint8 randRarity = uint8(_createRandomNum(100)); //+-There are 100 Levels of Rarity.
        uint256 randDna = _createRandomNum(10**16); //D.N.A. Number must be of 16 Digits.
        Lip memory newLip = Lip(_name, COUNTER, randDna, 1, randRarity);
        lips.push(newLip);
        _safeMint(msg.sender, COUNTER);
        emit NewLip(msg.sender, COUNTER, randDna);
        COUNTER++;
    }

    function createRandomLip(string memory _name) public payable {
        require(msg.value == fee);
        _createLip(_name);
    }

    //+-Information Getters:_
    function getLips() public view returns (Lip[] memory) {
        return lips;
    }

    function getOwnerLips(address _owner) public view returns (Lip[] memory) {
        Lip[] memory result = new Lip[](balanceOf(_owner));
        uint256 counter = 0;
        for (uint256 i = 0; i < lips.length; i++) {
            if (ownerOf(i) == _owner) {
                result[counter] = lips[i];
                counter++;
            }
        }
        return result;
    }

    //+-Game Actions:_
    function levelUp(uint256 _lipId) public {
        require(ownerOf(_lipId) == msg.sender);
        Lip storage lip = lips[_lipId];
        lip.level++;
    }
}
