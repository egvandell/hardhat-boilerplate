// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EngToken is ERC20 {
    constructor() ERC20("Engineation Token", "ENGT") {
//       _mint(msg.sender, 5000 * 10 ** 18);
       _mint(msg.sender, 1000000);
    }
}
