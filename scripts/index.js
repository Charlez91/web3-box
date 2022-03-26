module.exports = async function main(callback) {
    try{
        // Retrieve accounts from the local node
        const accounts = await web3.eth.getAccounts();
        console.log(accounts)

        const Box = artifacts.require('Box');
        const box = await Box.deployed();

        const value1 =await box.retrieve();
        console.log("Box value is:", value1.toString());

        const stored = await box.store(50);
        console.log(stored);

        const value2 = await box.retrieve();
        console.log("Box value is:", value2.toString());

        const value3 = await box.increment();
        console.log(value3);

        callback(0)

    }catch (error){
        console.error(error);
        callback(1);
    }
}
