//Load Dependencies
const{ expect} = require ("chai");
// Load the contract from compiled artifacts
const Box = artifacts.require('Box');

//Startin the test
contract ('Box', function(){
    beforeEach(async function(){
        //we deploy a new box instance
        this.box =  await Box.new();
    });
    // Test case
  it('retrieve returns a value previously stored', async function () {
    // Store a value
    await this.box.store(42);

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await this.box.retrieve()).toString()).to.equal('42');
  });
  it('increment a value previously stored', async function(){
    await this.box.store(42);
    await this.box.increment();

    expect((await this.box.retrieve()).toString()).to.equal('43');
  });
});