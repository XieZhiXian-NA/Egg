const {Controller} = require('egg')
/**
 * @Controller
 */
class UserController extends Controller{
  constructor(ctx){
      super(ctx)
  }
  /**
   * @summary 创建用户
   * @description 创建用户，记录用户账号/密码/类型
   * @router post /api/user
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async create(){
    const {ctx,service} = this
     //校验参数 validate与rule都是egg-validate插件提供的 
     console.log('createUserRequest',ctx.rule.createUserRequest)
     //如果验证失败 直接throw  exception 
     ctx.validate(ctx.rule.createUserRequest)
     const payload = ctx.request.body || {}
      const res = await service.user.create(payload)
      ctx.helper.success({ctx,res})
  }

 
}
module.exports = UserController