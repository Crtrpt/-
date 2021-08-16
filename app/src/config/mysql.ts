// console.log("mysql配置");
export default {
    host: process.env.MYSQL_HOST || "localhost",
    port:process.env.MYSQL_PORT || 3306,
    user:process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "123456Zz..*",
    database: process.env.MYSQL_DATABASE || "shorebf",
}