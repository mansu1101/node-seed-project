/* tslint:disable:typedef */
import {sekady} from '../contracts/IConnectionManager';

export namespace dbLayer.connectionManager {
  import IConnectionManager = sekady.dbLayer.contracts.IConnectionManager;

  export class SqlClientManager implements IConnectionManager {
    private  dbInstance: SqlClientManager;

    // config: Config;
    constructor() {
      // config can be defined at the time of constructor call;
      /* this.config = Config.instance;
       this.encryptModule = KeyEncryption.instance;*/
    }

    public async instance() {
      if (this.dbInstance === null || this.dbInstance === undefined) {
        this.dbInstance = await new SqlClientManager().getConnection('');
      }
      return this.dbInstance;
    }

    public getConnection(connectionUrl: string): Promise<any> {
      return new Promise(async (resolve, reject) => {
        // Singleton implemented here
        try {
          this.dbInstance = await this.connect({});
          resolve(this.dbInstance);
        } catch (exception) {
          reject(exception);
        }

      });
    }

    public closeConnection = () => {
      // write connection close command
    };

    private async connect(config: object): Promise<any> {
      // sql-server connection part will write here
    }

  }
}
