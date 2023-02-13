// id | user_id | ptaskname | description | category | duedate | entrydate | url | place | style
import { request } from "express";
import { pool } from "./connectDb.mjs";

const addTudu = async (request,response) =>{
    const { todoDate, todoCategory, todoItem, email} = request.body;
    console.log(request.body)
    response.json( {message:'got data'} )
    return response.send("got data at backend")
}
export default addTudu