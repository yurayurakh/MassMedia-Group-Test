import { request } from './request';

class ClassAPI {
    searchRepositories = (params) => request({
        url: 'search/repositories',
        method: 'GET',
        params
    });

    getUsers = () => request({
        url: 'user',
        method: 'GET',
    });

    getRoles = () => request({
        url: 'roles',
        method: 'GET',
    });

    authRegion = ({ data }) => request({
        url: 'v1/regional/authorize',
        method: 'POST',
        data
    })

    getRegionUser = (params) => request({
        url: 'v1/user/loginPassword',
        method: 'GET',
        params
    });

    tokenGenerate = ({ userId, roleId, subsystem }) => request({
        url: 'v1/token/generate',
        method: 'GET',
        params: { userId, roleId, subsystem }
    })
}


const API = new ClassAPI();

export default API;