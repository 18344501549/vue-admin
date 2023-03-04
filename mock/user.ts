import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/info',
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: '请求成功',
                type: 'success',
                result: {
                    name: '不再犹豫',
                    age: 24
                },
            }
        },
    },
    {
        url: '/api/login',
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: '登陆成功',
                type: 'success',
                result: {
                    token: Random.string(18)
                },
            }
        },
    },
] as MockMethod[]