const userSchema = require("../userDetails/userDB");
const postData = async (req, res) => {

  const data = new userSchema({
    Rollno: req.body.Rollno,
    Name: req.body.Name,
    Email: req.body.Email,
    MobileNo: req.body.MobileNo,
  });
  const saveData = await data.save();
  res.json(saveData);
};
const getData = async (req, res) => {
  const viewData = await userSchema.find();
  res.json(viewData);
};

// const putData = async(req,res) =>{
//     const updateData = await userSchema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
//     res.json({Msg:"UserData updated successfully",data:updateData})
// }
const putData = async (req, res) => {
  const { Rollno, Name, Email, MobileNo } = req.body;
  const updateData = await userSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        Rollno: Rollno,
        Name: Name,
        Email: Email,
        MobileNo: MobileNo,
      },
    },
    { new: true }
  );
  res.json({ Msg: "UserData update successfully", userdata: updateData });
};
const deleteData = async (req, res) => {
  const removeData = await userSchema.findByIdAndDelete(req.params.id);
  if (removeData == null) {
    res.json({ Message: "No record found with given id" });
  } else {
    res.json({
      msg: "userData deleted successfully",
      data_deleted: removeData,
    });
  }
};
module.exports = { postData, getData, putData, deleteData };
