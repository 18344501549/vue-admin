<script setup lang='ts'>

import { defaultRules, modules } from '@/plugins/validate/index';

defaultRules();

const { handleSubmit, errors } = modules.useForm({
    initialValues: {
        username: 'xj',
        password: ''
    },
    validationSchema: {
        username: modules.yup.string().required().email().label('账号'),
        password: modules.yup.string().required().label('密码')
    }
})

const onSubmit = handleSubmit((value: any) => {
    alert('2')
    console.log(value);

})



const { value: usernameValue } = modules.useField('username', {}, { label: '用户名' });
const { value: passwordValue } = modules.useField('password', {}, { label: '密码' });
</script>

<template>
    <form @submit="onSubmit">
        <input type="text" v-model="usernameValue">
        <p>{{ errors.username }}</p>
        <input type="text" v-model="passwordValue">
        <p>{{ errors.password }}</p>
        <button>点击</button>
    </form>
</template>

<style scoped lang='scss'></style>

