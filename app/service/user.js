const {Service} = require('egg')
class UserService extends Service {
    // async getAll(){
    //     // return {
    //     //     name:'tom'
    //     // }
    //    // return await this.ctx.model.User.findAll()
    // }

    async create(payload){
        const {ctx} = this
        payload.password = await ctx.genHash(payload.password)
        return ctx.model.User.create(payload)
    }
}
module.exports = UserService