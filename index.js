const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const dotenv = require("dotenv").config();
var mysql = require('mysql');
var bodyParser = require('body-parser');
const { stringify } = require("querystring");


app.use(bodyParser.json());

app.get('/hello2', (req, res) => {
  res.send('Hello World runaway!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


var con = mysql.createConnection({
  host:process.env.DB_HOST,
  user:process.env.DB_USER,
  password:process.env.DB_PASS,
  database:process.env.MYSQL_DB
});


// commands


app.post('/login', (req, res) => {

  var post_data = req.body;
  var studId = post_data.studentID;
  var pass = post_data.password;
   
  con.query("SELECT tbl_stud.student_id, tbl_stud.f_name, tbl_stud.m_name, tbl_stud.l_name, tbl_sect.name as section, tbl_course.name as course ,tbl_course.description as courseName, tbl_stud.email, tbl_stud.gender, tbl_stud.account_status FROM sql12729827.tbl_student_info as tbl_stud INNER JOIN sql12729827.tbl_section_info as tbl_sect ON tbl_stud.section_id = tbl_sect.section_id INNER JOIN sql12729827.tbl_course_info as tbl_course ON tbl_stud.course_id = tbl_course.course_id WHERE tbl_stud.student_id = ? && tbl_stud.password = ?",[studId, pass],(err,result,fields)=>{

    if(err){
      return res.send(err);
    }
    return res.send(result);
  })
  
})

app.post('/getBody',(req, res)=>{

  res.send(res);
  res.send(req);

})

app.post('/postBody',(req, res)=>{

  res.send(res);
  res.send(req);

})