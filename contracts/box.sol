pragma solidity ^0.8.0;

//smart contracts to store stuff like in a box and retrieve it

import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable{
    uint private _value;
    string private name;
    address private _owner;

    event ValueChanged(uint value);
    event ValueIncreased(uint value);

    constructor(){
        name = "Box";
        _owner = msg.sender;
    }

    function store(uint value) public onlyOwner {
        _value = value;
        emit ValueChanged(value);
    }

    function retrieve() public view returns(uint) {
        return _value;
    }
    
    function increment() public {
        _value += 1;
        emit ValueIncreased(_value);
    }

}