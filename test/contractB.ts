import {ethers} from 'hardhat';
import chai, {expect} from 'chai';
import {solidity} from 'ethereum-waffle';

chai.use(solidity);

export default async function suite() {
  describe('Contract B', async () => {
    it('Should return the correct contract A address', async function () {
      expect(await this.contractB.contractA()).to.equal(this.contractA.address);
    });

    it('Should not allow to set a contract with zero address', async function () {
      await expect(
        this.contractB.setContractA(ethers.constants.AddressZero)
      ).to.be.revertedWith('Cannot initialize with 0 address');
    });

    it('Only contract B is allowed to read', async function () {
      await expect(
        this.contractB.connect(this.testerSigner).read()
      ).to.be.revertedWith('Only contract A can perform this action');
    });
  });
}
