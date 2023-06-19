const userData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' }
  ];

module.exports = {
    getUserList : (req, res)=>{
        res.status(200).json(userData);
    },

    getById : (req, res)=>{
        const user = userData.find(user => req.params.id == user.id);
        if(user){
            res.status(200).json(user);
        }else{
            res.status(404).json({
                message: "no user found"
            })
        }
    }
}