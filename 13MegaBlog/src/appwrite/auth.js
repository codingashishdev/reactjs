import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteEndPoint)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, name, password}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, name, password)
            
            if(userAccount)
                return this.login(email, password)
            else{
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getUserAccount(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error;
        }

        // Process reaches here only if no account is found.
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            return error
        }
    }
}

const authService = new AuthService();

export default authService;
