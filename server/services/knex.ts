import knex, { Config } from "knex";
import $env from "@bahatron/env";

const config: Config = {
    // client: "mysql2",
    // connection: {
    //     host: $env.get("MYSQL_HOST"),
    //     port: parseInt($env.get("MYSQL_PORT")),
    //     user: $env.get("MYSQL_USER"),
    //     password: $env.get("MYSQL_PASSWORD"),
    //     database: $env.get("MYSQL_DATABASE"),
    // },
    client: "pg",
    connection: {
        host: $env.get("POSTGRES_HOST"),
        port: parseInt($env.get("POSTGRES_PORT")),
        user: $env.get("POSTGRES_USER"),
        password: $env.get("POSTGRES_PASSWORD"),
        database: $env.get("POSTGRES_DB"),
    },
    migrations: {
        tableName: "mercurios_migrations",
    },
};

const $knex = knex(config);

export default $knex;
