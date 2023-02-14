// id | user_id | ptaskname | description | category | duedate | entrydate | url | pla
import { request } from "express";
import { pool } from "./connectDb.mjs";

const addTudu = async (request,response) =>{
    try {
        const {
            ptaskname,
            description,
            category,
            duedate,
            entrydate,
            url,
            place,
            user_id
          } = request.body
          console.log(request.body)
          const style = 1
          const menuQuerry =`INSERT INTO  personaltask (user_id , ptaskname, description , category , duedate , entrydate, url , place,style)
            VALUES ((SELECT id FROM "user" WHERE login_id =$8 ),$1,$2,$3,$4,$5,$6,$7,${style})`
            await pool.query(menuQuerry, [ ptaskname,description,category,duedate,entrydate,url,place,user_id])
            return  response.json({info:"tudu added"})
        }catch (error) {
        console.error(error)
        return response.status(500).send({error:"internal server error"})
    }
}
export default addTudu

