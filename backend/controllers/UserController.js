import UserModel from "../models/User.js";

export const create=async(req,res)=>{
    try{
        const userData=new UserModel(req.body);
        if(!userData){
            return res.status(404).json({msg:"user data not found"});
        }
        const savedData=await userData.save();
        res.status(200).json(savedData)
    }
    catch(error){
        res.status(500).json({error:error});
    }
}
export const getAll=async(req,res)=>{
    try{
        const userData=await UserModel.find();
        if(!userData){
            return res.status(404).json({msg:"user data not found"})
        }
        res.status(200).json(userData)    }
    catch(error){
        res.status(500).json({error:error});
    }
}
export const getOne=async(req,res)=>{
    try{
      const id=req.params.id;
      const userExist=await UserModel.findById(id);
      if(!userExist){
        return res.status(404).json({msg:"user not found"})
      }
      res.status(200).json(userExist);
    }
    catch(error){
        res.status(500).json({error:error})
    }}
export const update=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await UserModel.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"user not found"})
        }
        const updatedData=await UserModel.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json({msg:"User updated successfully"})
    }
    catch(error){
        res.status(500).json({error:error})    }
}

export const deleteUser=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await UserModel.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"user not exist"})
        }
        await UserModel.findByIdAndDelete(id);
        res.status(200).json({msg:"user deleted successfully"})
         
    }
    catch(error){
        res.status(500).json({error:error});
    }
}