import axios, { AxiosRequestConfig } from "axios"

export default class Axios {
    private instance
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);
        this.interceptors()
    };

    public request<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.instance.request<D>(config);
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        }) as Promise<D>
    };

    private interceptors() {
        this.interceptorsRequest();
        this.interceptorsResponse();
    };

    private interceptorsRequest() {
        this.instance.interceptors.request.use(
            (config) => {
                // 在发送请求之前做些什么
                return config;
            },
            (error) => {
                // 对请求错误做些什么
                return Promise.reject(error);
            }
        )
    };

    private interceptorsResponse() {
        // 添加响应拦截器
        this.instance.interceptors.response.use((response) => {
            // 对响应数据做点什么
            return response;
        }, (error) => {
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    };
};