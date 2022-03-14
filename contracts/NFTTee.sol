// SPDX-License-Identifier:MIT

// solidity version greater than 0.8.4
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract NFTee is ERC721{
    constructor() ERC721("NFTdemo","nft"){
        _mint(msg.sender, 1);

    }
}