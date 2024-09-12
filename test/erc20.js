const erc20 = artifacts.require("ERC20");

contract("ERC20", (accounts) => {
  it("Deploy", async () => {
    let token = await erc20.deployed();

    console.log(token.abi);

    console.log(await token.symbol());

    // const name = await token.name();
    // const symbol = await token.symbol();

    // assert.equal(name, "TEST");
    // assert.equal(symbol, "test");

    //let balance = await instance.getBalance.call(accounts[0]);
    //assert.equal(balance.valueOf(), 10000);
  });
});
