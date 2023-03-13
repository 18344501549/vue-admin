import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';
import rules from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import yup from './yup';
import * as veeLalidate from 'vee-validate';


veeLalidate.configure({
    generateMessage: localize('zh_CN')
});

function defaultRules() {
    Object.keys(rules).forEach((key) => {
        // 自动设置规则
        veeLalidate.defineRule(key, rules[key]);
    });
};

const modules = { yup, ...veeLalidate }


export { defaultRules, modules };