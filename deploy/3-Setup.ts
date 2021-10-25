import {DeployFunction} from 'hardhat-deploy/types';
import {ethers} from 'hardhat';

const version = 'v0.1.0';

const func: DeployFunction = async function () {
  const contractA = await ethers.getContract('A');
  const contractB = await ethers.getContract('B');

  await contractA.setContractB(contractB.address);
  await contractB.setContractA(contractA.address);

  return true;
};

const id = 'Setup' + version;

export default func;
func.tags = [id, version];
func.id = id;
