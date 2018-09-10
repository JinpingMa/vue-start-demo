import request from '@/utils/request'

export function loginByUsername(loginName, password) {
  const data = {
    loginName,
    password
  }
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/auth/logout',
    method: 'post'
  })
}

export function getUserInfo() {
  return request({
    url: '/auth/user',
    method: 'get'
  })
}

export function getUserList() {
  return request({
    url: 'auth/pageList',
    method: 'get'
  })
}
// 根据id删除用户
export function deleteUserById(id) {
  const data = {
    id
  }
  return request({
    url: 'auth/delete',
    method: 'get',
    data
  })
}
// 获取指定用户信息
export function getUserById(id) {
  const data = {
    id
  }
  return request({
    url: 'auth/getUserById',
    method: 'get',
    data
  })
}

// 注册新用户
export function registry() {
  const data = {
    'createTime': '2018-07-27T09:12:23.031Z',
    'deleteFlag': 0,
    'description': 'string',
    'email': 'string',
    'icon': 'string',
    'id': 0,
    'lastVisit': '2018-07-27T09:12:23.034Z',
    'loginCount': 0,
    'loginName': 'string',
    'name': 'string',
    'password': 'string',
    'plainPassword': 'string',
    'roles': 'string',
    'salt': 'string',
    'status': 'string',
    'teamId': 0,
    'updateTime': '2018-07-27T09:12:23.034Z'
  }
  return request({
    url: 'auth/registry',
    method: 'post',
    data
  })
}

// 更新用户信息
export function update(id) {
  const data = {
    'createTime': '2018-07-27T09:12:23.031Z',
    'deleteFlag': 0,
    'description': 'string',
    'email': 'string',
    'icon': 'string',
    'id': 0,
    'lastVisit': '2018-07-27T09:12:23.034Z',
    'loginCount': 0,
    'loginName': 'string',
    'name': 'string',
    'password': 'string',
    'plainPassword': 'string',
    'roles': 'string',
    'salt': 'string',
    'status': 'string',
    'teamId': 0,
    'updateTime': '2018-07-27T09:12:23.034Z'
  }
  return request({
    url: 'auth/update',
    method: 'post',
    data
  })
}
