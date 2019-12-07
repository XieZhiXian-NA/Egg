 module.exports = app=>{
        // const {STRING} = app.Sequelize
        // //定义模型
        // const User = app.module.define(
        //     'user',
        //     {name:STRING(30)},
        //     {timestamps:false}
        // )
        // User.sync({force:true})
        // return User;


        const mongoose = app.mongoose
        const UserSchema = new mongoose.Schema({
            mobile:{type:String,unique:true,required:true},
            password:{type:'String',required:true},
            realName:{type:'String',required:true},
            avatar:{type:'String',default:'https://1.gravatar.com/avatar/a3e54af3cb6e157e496ae430aed4f4a3?s=96&d=mm'},
            extra:{type:mongoose.Schema.Types.Mixed},
            createAt:{type:Date,default:Date.now}
        })
        return mongoose.model('User',UserSchema)
 }