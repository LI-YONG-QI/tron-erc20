const erc20 = artifacts.require("ERC20");

contract("ERC20", (accounts) => {
  it("Deploy", async () => {
    let token = await erc20.deployed();

    console.log(await token.symbol());
    console.log(await token.name());
  });
});
