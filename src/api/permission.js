import request from '@/utils/request'
// 权限新增
export function addPermission(paraList) {
  const permission = {
    // "createTime": "2018-07-28T07:23:42.232Z",
    // "deleteFlag": 0,
    // "description": "string",
    // "id": 0,
    // "ip": "string",
    // "name": "string",
    // "pid": 0,
    // "port": "string",
    // "service": "string",
    // "updateTime": "2018-07-28T07:23:42.238Z",
    // "url": "string"
    'createTime': paraList.createTime,
    'deleteFlag': paraList.deleteFlag,
    'description': paraList.description,
    'id': paraList.id,
    'ip': paraList.ip,
    'name': paraList.name,
    'pid': paraList.pid,
    'port': paraList.port,
    'service': paraList.service,
    'updateTime': paraList.updateTime,
    'url': paraList.url
  }
  return request({
    url: '/permission/add',
    method: 'post',
    data: permission
  })
}

// 增加用户权限
export function addUserPermission(paraList) {
  const permission = {
    // 'permissionId': 0,
    // 'userId': 0,
    'permissionId': paraList.permissionId,
    'userId': paraList.userId
  }
  return request({
    url: '/permission/addUserPermission',
    method: 'post',
    data: permission
  })
}
// 权限更新
export function updatePermission(paraList) {
  const permission = {
    'createTime': paraList.createTime,
    'deleteFlag': paraList.deleteFlag,
    'description': paraList.description,
    'id': paraList.id,
    'ip': paraList.ip,
    'name': paraList.name,
    'pid': paraList.pid,
    'port': paraList.port,
    'service': paraList.service,
    'updateTime': paraList.updateTime,
    'url': paraList.url
  }
  return request({
    url: '/permission/update',
    method: 'post',
    data: permission
  })
}

// 根据id获取权限信息
export function getPermissionById(id) {
  const params = {
    id
  }
  return request({
    url: '/permission/getPermission',
    method: 'get',
    params
  })
}

// 获取所有权限
export function getAllPermission() {
  return request({
    url: '/permission/getAllPermission',
    method: 'get'
  })
}

// 获取用户所有权限
export function getUserPermission(id) {
  const params = {
    id
  }
  return request({
    url: '/permission/getUserPermission',
    method: 'get',
    params
  })
}

// 权限删除
export function deleteById(id) {
  const params = {
    id
  }
  return request({
    url: '/permission/delete',
    method: 'get',
    params
  })
}

// 删除用户权限
export function deleteUserPermission(paraList) {
  const data = {
    'permissionId': paraList.permissionId,
    'userId': paraList.userId
  }
  return request({
    url: '/permission/deleteUserPermission',
    method: 'post',
    data
  })
}

