<script setup lang='ts'>
import { ref } from 'vue';
import { defaultRules, modules } from '@/plugins/validate/index';

const { Form, Field } = modules;

const account = ref<string>('');
// 初始化
defaultRules();

const onSubmit = (value: any) => {
    console.log(value);
};


</script>

<template>
    <div class=" flex w-screen h-screen justify-center items-center bg-gray-800">
        <Form @submit="onSubmit">

            <Field name="account" label="账号" :rules="{ required: true, email: true }" :validate-on-input="true"
                #default="{ field, errorMessage }">
                <input type="text " v-bind="field" v-model="account" autocomplete="off"
                    class=" border-4 p-2 rounded-md border-violet-700 outline-none">
                <hr>
                <p>{{ errorMessage }}</p>
            </Field>
            <hr>
            <button class=" border bg-violet-600 text-white">提交表单</button>
        </Form>
    </div>
</template>

<style scoped lang='scss'></style>

