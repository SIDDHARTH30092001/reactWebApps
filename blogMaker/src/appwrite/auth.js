import conf from "../conf/conf";
import {Client, Account, ID} from "appwrite";


//we cr8 class so even appwrite auth has to be removed some day still it'll work so we create services ie class
export class AuthService{
    client = new Client(); 
    account; //we're not giving new Account() since upper client needs .setEndpoint('../v1') and .setProject('projID) which not make sence till new a new object of authService to be made. o.w. waste of resoruces


    //you can change this for firebase as well 
    constructor(){ //when object made (authService) then method will call where i can call the functionality, so we use constructor
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account=new Account(this.client);
    }//we've did same thing as per doc but inside consturctor so itll make sense

//either we can use promise.then(..).. or this async await
//since we want services listed here even appwrite to fbase or anything else. till acc wont ccr8ed itll
    async createAccount({email,password,name}){ //destructured when method passed itll give object with these values
      //under this will change for firebase for migrate
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name)//first param is userId
            if(userAccount){
                // return userAccount;
                //call another method since if user acc exists do login directly after registration here
                return this.login({email,password})
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
           return await this.account.createEmailSession(email,password);

        } catch (error) {
            throw error
        }
    }
//check loged in or not - checks if account in session or not
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }

        return null; //if failed but aanyway get executed
    }

    //logout
    async logout(){
        try {
            await this.account.deleteSessions() //all sessions deleted
        } catch (error) {
            throw error;
        }
    }
}


const authService=new AuthService();//already cr8ing object so by authService.something will help to get in other js
//new keyword cr8 constructor i.e we're using it all



export default authService;

//authservice.logout()
//authservice.login() etc etc...