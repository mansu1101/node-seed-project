export declare namespace singleclicktenant.dbLayer.contracts {
    interface IConnectionManager {
        getConnection(connectionUrl: string, callback: Function): any;
    }
}
