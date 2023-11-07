import { ethers, HDNodeWallet } from "ethers";

const createRandomWallet = (
  batchSize: number,
  prefix?: string,
  suffix?: string
): HDNodeWallet[] => {
  const startTime = new Date().getTime();
  const listWallet = [];
  let total = 0;

  while (true) {
    const wallet = ethers.Wallet.createRandom();
    const walletAddress = wallet.address;
    console.log("wallet: ", walletAddress);
    total += 1;
    if (
      Boolean(prefix) &&
      walletAddress?.slice(0, prefix?.length).toLowerCase() !==
        prefix?.toLowerCase()
    ) {
      continue;
    }

    if (
      Boolean(suffix) &&
      walletAddress?.slice(-suffix?.length!).toLowerCase() !==
        suffix?.toLowerCase()
    ) {
      continue;
    }

    listWallet.push(wallet);
    if (listWallet.length === batchSize) {
      break;
    }
  }

  const endTime = new Date().getTime();
  console.log(`take: ${(endTime - startTime) / 1000}s, total: ${total}`);

  return listWallet;
};

const createWalletFromMnemonic = (
  phrase: string | undefined,
  batchSize: number
): HDNodeWallet[] => {
  const listWallet = [];
  if (phrase === undefined) {
    return [];
  }

  const instance = ethers.HDNodeWallet.fromPhrase(phrase);
  for (let i = 0; i < batchSize; i++) {
    const wallet = instance.deriveChild(i + 1);
    listWallet.push(wallet);
  }

  console.log("listWallet: ", listWallet);
  return listWallet;
};

export { createRandomWallet, createWalletFromMnemonic };
