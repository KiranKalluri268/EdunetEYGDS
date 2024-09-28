const Employee=require('../models/Employee')
//create or POST
const createEmployee=async(req,res)=>{
    try{
        const{name,email,phone,city}=req.body
        const employee=new Employee({
            name,
            email,
            phone,
            city
        })
        await employee.save();
        res.status(201).json({message:"Data insertion is done"})
    }
    catch(error){
        console.log(error);
    }
}
module.exports={createEmployee}