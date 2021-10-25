import {ethers} from 'hardhat';
import chai, {expect} from 'chai';
import {solidity} from 'ethereum-waffle';

chai.use(solidity);

export default async function suite() {
  describe('Contract A', async () => {
    it('Should return the correct contract B address', async function () {
      expect(await this.contractA.contractB()).to.equal(this.contractB.address);
    });

    it('Should not allow to set a contract with zero address', async function () {
      await expect(
        this.contractA.setContractB(ethers.constants.AddressZero)
      ).to.be.revertedWith('Cannot initialize with 0 address');
    });

    it('Should x be 1', async function () {
      expect(await this.contractA.x()).to.equal(1);
    });

    it('Should change x and y after call print', async function () {
      await this.contractA.print();
      const x = await this.contractA.x();
      const y = await this.contractB.y();
      expect(x).to.equal(2);
      expect(y).to.equal(3);
    });

    it('Should change x and y after call print, double and triple', async function () {
      await this.contractA.print();
      await this.contractA.print();
      const x = await this.contractA.x();
      const y = await this.contractB.y();
      expect(x).to.equal(4);
      expect(y).to.equal(9);
    });

    it('Should emit and event', async function () {
      await expect(this.contractA.print())
        .to.emit(this.contractA, 'ESum')
        .withArgs(5);

      await expect(this.contractA.print())
        .to.emit(this.contractA, 'ESum')
        .withArgs(13);
    });
  });
}
