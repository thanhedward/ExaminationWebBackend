import "dotenv/config";

export const configs = {
    express: {
        host: process.env.HOST_NAME || "localhost",
        port: process.env.PORT_NUMBER || "4200",
    },
    mongo: {
        addresses: [
            {
                host: process.env.MONGO_HOST_1 || "127.0.0.1",
                port: process.env.MONGO_PORT_1 || "27017",
            },
            {
                host: process.env.MONGO_HOST_2 || "127.0.0.1",
                port: process.env.MONGO_PORT_2 || "27018",
            },
            {
                host: process.env.MONGO_HOST_3 || "127.0.0.1",
                port: process.env.MONGO_PORT_3 || "27019",
            },
        ],

        username: process.env.MONGO_USERNAME || "root",
        password: process.env.MONGO_PASSWORD || "",
        authSource: process.env.MONGO_AUTHOR_SOURCE || "admin",
        dbName: process.env.MONGO_DB_NAME || "auth",
        templateUri: 
            "mongodb+srv://${username}:${password}>@atlascluster.oshxj4f.mongodb.net/?retryWrites=true&w=majority",

        getUri: function (): string {
            const url = this.addresses.map((a) => `${a.host}:${a.port}`).join();
            let uri = this.templateUri;
            uri = uri.replace("${username}", this.username);
            uri = uri.replace("${password}", this.password);
            uri = uri.replace("${authSource}", this.authSource);
            uri = uri.replace("${dbName}", this.dbName);
            uri = uri.replace("${url}", url);
            return uri;
        },
    },
}