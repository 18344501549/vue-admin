import _ from "loadsh";

function paseEnv(env: Record<string, any>): ViteEnv {
    const envs = _.cloneDeep(env);
    Object.entries(env).forEach(([key, value]) => {
        console.log(typeof value, 'value');
        if (value === 'true' || value === 'false') envs[key] = value === "true" ? true : false;
        else if (/^\d+$/.test(value)) envs[key] = Number(value)
        else if (value === 'null') envs[key] = null
        else if (value === 'undefined') envs[key] = undefined;
        console.log(envs[key], 'value');
    });
    return envs;
};

export default paseEnv;