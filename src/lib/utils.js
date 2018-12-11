
import axios from 'axios';
axios.defaults.timeout = 3000; 

export function toFormData(opt) {
    let formData = new FormData();
    window.Object.keys(opt).forEach(v => {
        if(opt[v] != undefined) {
            formData.append(v, opt[v])
        }
    })
    return formData;
} 

/**
 * get请求
 * @param  { String }   options.url       api地址
 * @param  { String }   options.params    params参数
 * @return { Promise }                    Promise
 */
export function _get({ url, params }) {
    return axios.get(url, { params }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.data
        }
        return Promise.reject(new Error(response.status))
    }).catch(error => {
        console.log("_get==>");
        return Promise.reject(error);
    })
}

/**
 * post请求
 * @param  { String }    options.url     api地址
 * @param  { Object }    options.params   params参数
 * @param  { Boolean }   options.params   params参数  是否将options.params转化成formData格式
 * @return { Promise }   Promise
 */
export function _post({ url, params, toForm }) {
    if(toForm) {
        params = toFormData(params);
    }
    return axios.post(url, params, {
        method: 'post',
        // headers: { 'Content-Type': 'multipart/form-data' }
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.data
        }
        // return Promise.reject(new Error(response.status))
    }).catch(error => {
        console.log("_post==>");
        return Promise.reject(error);
    })
}

/**
 * 上传文件的post请求
 * @param  {String} options.url   api地址
 * @param  {String} options.params params参数 使用formData
 * @return {Promise}               Promise
 */
export function _upload({ url, params, cb }) {
    return axios.post(url, params, {
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: function (progressEvent) {
            cb(progressEvent.loaded/progressEvent.total)
        },
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.data
        }
        return Promise.reject(new Error(response.status))
    })
}