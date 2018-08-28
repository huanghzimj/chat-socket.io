var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'chat'
});

connection.connect();

        var sql="create table if not exists jilu(id int auto_increment primary key, username varchar(60), contents varchar(3500),time varchar(100))";
connection.query(sql,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }

});
server.listen(3001);
console.log('运行在3001端口')
io.sockets.on('connection',function(socket){


    socket.on('disconnect',function(){
    

    });
});


io.on('connection', function(socket) {
    //接收并处理客户端的hi事件
    socket.on('qun', function(data) {

//保存聊天记录

        socket.broadcast.emit('qun',data);
        var data=JSON.stringify(data);
        var data=JSON.parse(data);


        console.log(data)

if(data.username==null||data.contents==null){
console.log('no person NUll')
    return;
}

        var  addSql = 'INSERT INTO jilu(username,contents,time) VALUES(?,?,?)';
        var  addSqlParams = [data.username, data.contents,data.time];




        connection.query(addSql,addSqlParams,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }

        });



    })
    //断开事件
    socket.on('disconnect', function(data) {

    });
    socket.on('chaxun', function(data) {


var page=JSON.parse(JSON.stringify(data)).text*20;


       var addSql= 'select * from jilu  order by id desc limit '+page+',20';

  var result='';
        connection.query(addSql,function (err, result) {
        result= JSON.stringify(result);


            socket.emit('chaxun',result);
          })
    });


});