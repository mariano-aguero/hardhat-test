import contractA from './contractA';
import contractB from './contractB';

import {deployments, ethers} from 'hardhat';

describe('Tests', function () {
  beforeEach(async function () {
    // Deploy fixtures
    await deployments.fixture();

    this.contractA = await ethers.getContract('A');
    this.contractB = await ethers.getContract('B');

    const signers = await ethers.getSigners();
    this.testerSigner = signers[1];
  });

  describe('When checking contract A', contractA.bind(this));
  describe('When checking contract B', contractB.bind(this));
});
