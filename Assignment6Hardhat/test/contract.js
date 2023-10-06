//import expect 
const {expect}=require("chai");
describe("MyContract",function(){
    let OwnableCounter,ownableCounter;
    let owner ,otherAccount;
    let myContract;
    describe("MyContract",function(){
    before(async function(){
        [owner,otherAccount]=await ethers.getSigners();
        OwnableCounter=await ethers.getContractFactory("OwnableCounter");
        OwnableCounter=await OwnableCounter.connect(owner);
        ownableCounter=await OwnableCounter.deploy();
        console.log("Deployment finished");
    });
    it("Deployment Check", async function(){
        expect(await ownableCounter.getState()).to.equal(0);
        expect(await ownableCounter.owner()).to.equal(owner.address);
    })
    it("Only owner can call", async function(){
        const incrementTx=await ownableCounter.connect(owner).increment();
        await incrementTx.wait();
        expect(await ownableCounter.getState()).to.equal(1);
    })

    it("Other account can not call", async function(){
        await expect(ownableCounter.connect(otherAccount).increment()).to.be.revertedWith("Ownable: caller is not the owner");
    })
    it("Should set new value", async function(){
        const newValue=10;
        const setTx= await myContract.setState(newValue);
        await setTx.wait();
        expect(await myContract.getState()).to.equal(newValue);
    })
 })


});