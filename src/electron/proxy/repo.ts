export interface IProxyProvider {
  getAProxy(currentIP?: string): Promise<IProxyRes>;
}

export interface IProxy {
  ip: string;
  port: number;
  timeout: number;
  createdAt: number;
}

export interface IProxyRes {
  proxy: IProxy | null;
  error: string | null;
}

export interface APIKeyConfig {
  value: string;
  shouldChangeProxy: boolean;
}
