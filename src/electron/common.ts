export interface IWallet {
  id?: number;
  category: string;
  mnemonic: string;
  address: string;
  status?: string;
  round?: number;
  balance: number | null;
  date?: string;
}
