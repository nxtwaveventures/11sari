// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SareeAuthentication {
    struct Saree {
        string sareeId;
        string name;
        string artisan;
        string description;
        uint256 timestamp;
        bool isAuthentic;
        address owner;
    }

    mapping(string => Saree) public sarees;
    mapping(address => string[]) public ownerSarees;
    
    event SareeAuthenticated(string sareeId, address owner);
    event SareeTransferred(string sareeId, address from, address to);

    function authenticateSaree(
        string memory _sareeId,
        string memory _name,
        string memory _artisan,
        string memory _description
    ) public {
        require(bytes(sarees[_sareeId].sareeId).length == 0, "Saree already exists");
        
        sarees[_sareeId] = Saree({
            sareeId: _sareeId,
            name: _name,
            artisan: _artisan,
            description: _description,
            timestamp: block.timestamp,
            isAuthentic: true,
            owner: msg.sender
        });

        ownerSarees[msg.sender].push(_sareeId);
        emit SareeAuthenticated(_sareeId, msg.sender);
    }

    function getSareeDetails(string memory _sareeId) public view returns (
        string memory name,
        string memory artisan,
        string memory description,
        uint256 timestamp,
        bool isAuthentic,
        address owner
    ) {
        Saree memory saree = sarees[_sareeId];
        require(bytes(saree.sareeId).length > 0, "Saree does not exist");
        
        return (
            saree.name,
            saree.artisan,
            saree.description,
            saree.timestamp,
            saree.isAuthentic,
            saree.owner
        );
    }

    function transferSaree(string memory _sareeId, address _to) public {
        require(bytes(sarees[_sareeId].sareeId).length > 0, "Saree does not exist");
        require(sarees[_sareeId].owner == msg.sender, "Not the owner");
        
        sarees[_sareeId].owner = _to;
        ownerSarees[_to].push(_sareeId);
        
        // Remove from previous owner's list
        string[] storage ownerList = ownerSarees[msg.sender];
        for (uint i = 0; i < ownerList.length; i++) {
            if (keccak256(bytes(ownerList[i])) == keccak256(bytes(_sareeId))) {
                ownerList[i] = ownerList[ownerList.length - 1];
                ownerList.pop();
                break;
            }
        }
        
        emit SareeTransferred(_sareeId, msg.sender, _to);
    }

    function getOwnerSarees(address _owner) public view returns (string[] memory) {
        return ownerSarees[_owner];
    }
} 