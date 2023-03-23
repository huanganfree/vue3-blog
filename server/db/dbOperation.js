// 连接数据库
const mysql = require('mysql');
const dbConfig = require('./db.config');

// 对于node js程序，要想访问MYSQL也是通过网络发送SQL命令给MYSQL服务器
// 下面的链接数据库，就是node的MYSQL驱动程序
const connection = mysql.createConnection(dbConfig);

connection.connect() // 这个链接不可经常调用

const dbQueryPromise = function (queryParams) {
  return new Promise((res, rej) => {
    // 连接异常，抛出错误
    connection.query(queryParams, function (error, results) {
      // 查询异常，抛出错误
      if (error) rej(error)
      res(results)
      // connection.end(); // 这个适当时机调用
    });
  });
}

module.exports = dbQueryPromise






