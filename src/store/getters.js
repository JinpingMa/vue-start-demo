import { constantRouterMap } from '../router'
const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  taxonomicList: state => state.taxonomicData.taxonomicList,
  termTypeData: state => state.termData.termTypeList,
  languageData: state => state.termData.languageList,
  sourceTypeData: state => state.termData.sourceTypeList,
  // permission_routers: state => state.permission.routers, //有登录后，根据不同权限生成路由
  permission_routers: () => constantRouterMap, // 没有登录时路由
  addRouters: state => state.permission.addRouters,
  errorLogs: state => state.errorLog.logs
}
export default getters