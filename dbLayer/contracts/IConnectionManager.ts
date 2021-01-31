export namespace sekady.dbLayer.contracts {
  export interface IConnectionManager {
    getConnection(connectionUrl: string): Promise<any>;
    closeConnection(): void;
  }
}
