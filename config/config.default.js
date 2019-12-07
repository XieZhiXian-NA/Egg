/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575448362310_757';

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // config.mongoose = {
  //   url: 'mongodb://127.0.0.1:27017/egg_x',
  //   options: {
  //   // useMongoClient: true,
  //   autoReconnect: true,
  //   reconnectTries: Number.MAX_VALUE,
  //   bufferMaxEntries: 0,
  //   },
  // }


  config.jwt = {
    secret: 'Great4-M',
    enable: true, // default is false
    match: /^\/api/, // optional
  } 

  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: '开课吧接口',
      description: '开课吧接口 swagger-ui for egg',
      version: '1.0.0',
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    enableSecurity: false,
    // enableValidate: true, //还不支持
    routerMap: true, //根据文档自动生成路由
    enable: true,
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    // sequelize: {
    //   dialect:'mysql',
    //   host:'127.0.0.1',
    //   port:3306,
    //   username:'root',
    //   password:'123456',
    //   database:'egg'
    // }
  };

  return {
    ...config,
    ...userConfig,
  };
};
