import { IDLE_FETCHER } from "react-router-dom";
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query, Messaging } from "appwrite";

export class Service{
    client = new Client()
    databases;
    storage;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteEndPoint)
            .setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage, 
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage, 
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost({slug}){
        try {
            const deletedDocument = await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )

            return deletedDocument ? console.log("post deleted successfully") : null
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
        }
    }

    //getting a particular document by unique ID
    async getPost({slug}){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error)
        }
    }

    async getAllPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getAllPosts :: error", error)
        }
    }

    async listAllFiles(){
        this.storage.listFiles(this.bucketId)
    }

    // create a file to store in the storage
    async createFile({ file }){
        try {
            return await this.storage.createFile(this.bucketId, ID.unique(), file)
        } catch (error) {
            console.log("Appwrite storage service :: creating file error")
        }
    }

    async getFile(){
        this.storage.getFile(this.bucketId)
    }

    //download a file from the storage
    async downloadFile({ file }){
        try {
            return await this.storage.getFileDownload(this.bucketId, file)
        } catch (error) {
            console.log("Appwrite storage service :: file downloading erro")
        }
    }
}

const service = new Service()

export default service