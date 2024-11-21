const Employee=require('../models/Employee')
//create or POST
const createEmployee=async(req,res)=>{
    try{
        const{name,email,phone,city}=req.body
        const employee=new Employee({
            name,
            email,
            phone,
            cityconst Employee=require('../models/Employee')

            const createEmployee=async(req,res)=>{
                try{
                    const {name,email,phone,city}=req.body
                    const employee=new Employee({
                        name,
                        email,
                        phone,
                        city
                    })
                    await employee.save();
                    res.status(201).json({message:"Employee data inserted successfully"})
                }catch(error){
                    console.log(error);
                    res.status(500).json({message:'server error'})
                }
            }
            
            const getEmployees=async(req,res)=>{
                try{
                    const employees=await Employee.find();
                    res.status(201).json(employees);
                }
                catch(err){
                    console.log(err);
                    res.status(500).json({message:"server error"});
                }
            }
            
            const getEmployee=async(req,res)=>{
                try{
                    const employee=await Employee.findById(req.params.id);
                    if(!employee){
                        return res.status(404).json({message:"Employee Record not found"})
                    }
                    res.status(201).json(employee);
                }
                catch(error){
                    console.log(error);
                    res.status(501).json({message:"Server error"})
                }
            }
            
            
            const updateEmployee=async(req,res)=>{
                try{
                   const  {name, email, phone,city}=req.body;
                   const myEmployee=await Employee.findByIdAndUpdate(
                    req.params.id,
                    {name,email,phone,city}
                   )
                   if(!myEmployee){
                    return res.status(404).json({message:"employee not found"})
                   }
                   res.status(200).json(myEmployee)
                }
                catch(error){
                    console.log(error);
                    res.status(500).json({message:"server error"})
                }
            }
            
            
            const deleteEmployee=async(req,res)=>{
                try{
                    const deleteEmployee=await Employee.findByIdAndDelete(req.params.id);
                    res.status(201).send();
                }
                catch(error)
                {
                    console.log(error)
                    res.status(500).json({message:"Server error"})
                }
            }
            
            module.exports={createEmployee, getEmployees, getEmployee, updateEmployee,deleteEmployee};
            
        })
        await employee.save();
        res.status(201).json({message:"Data insertion is done"})
    }
    catch(error){
        console.log(error);
    }
}
module.exports={createEmployee}
