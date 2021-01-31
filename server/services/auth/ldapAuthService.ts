import passport from 'passport';
import ldapStrategy from 'passport-ldapauth';

class LdapAuthService {

    private static instance: LdapAuthService;

    static getInstance(): LdapAuthService {
        if (!LdapAuthService.instance) {
            LdapAuthService.instance = new LdapAuthService();
        }
        return LdapAuthService.instance;
    }

    public configureLdapStrategy() {
        var OPTS = {
            server: {
                url: '',
                bindDN: '',
                bindCredentials: '',
                searchBase: '',
                searchFilter: ''
            }
        };

        //define passport strategy
        passport.use(new ldapStrategy(OPTS));
    }

    public async ldapAuth(
        request: any,
        response: any): Promise<any> {
        this.configureLdapStrategy();
        return new Promise((resolve, reject) => {
            try {
                passport.authenticate('ldapauth', function (err, user, info) {
                    if (err) {
                        reject(err);
                    }
                    else if (!user) {
                        reject(info);
                    } else {
                        resolve(user)
                    }
                })(request, (data: any) => {
                    resolve(data)
                });
            } catch (e) {
                reject(e)
            }
        })
    }
}

export default LdapAuthService.getInstance();