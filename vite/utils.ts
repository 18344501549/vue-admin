import _ from "loadsh"

function paseEnv(env: Record<string, any>) {
    const envs = _.cloneDeep(env);
    Object.entries(env).forEach(([key, value]) => {
        if (value === 'true' || value === 'false') {
            envs[key] = value === true ? false : true;
        };

        if (/^\d+$/.test(value)) {
            envs[key] = parseInt(value);
        };

    });
    return envs;
};

export default paseEnv;