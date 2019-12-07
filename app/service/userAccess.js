const {Service} = require('egg')
class UserAccess extends Service{
    /**
     * 登录
     * @param {*} payload 
     */
    async login(payload){
        const {ctx,service} = this
        const user = await service.user.findByMobile(payload.mobile)
        if(!user) {
            ctx.throw(400,'user is  not found')
        }
        //compare 是hash加密的插件提供的方法
        let verifyPsw = await ctx.compare(payload.password,user.password)
        if(!verifyPsw){
            ctx.throw(404,'user password is error')
        }
        return {token:await service.actionToken.apply(user._id)}
    }
    /**
     * 当前用户信息
     */
    async current(){
       const {ctx,service} = this
       //ctx.state.user 可以提取到JWT编码的data
       const _id = ctx.state.user.data._id
       const user = await service.user.find(_id)
       if(!user){
        ctx.throw(400,'user  is not found')
       }
       user.password = 'how old are you?'
       return user
    }
}
module.exports = UserAccess