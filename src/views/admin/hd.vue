<script setup lang='ts'>
import { Form, Field, defineRule } from 'vee-validate';
import { ref } from 'vue';
import { required, email, min, max, confirmed } from '@vee-validate/rules'
const account = ref<string>('');
defineRule('required', required)
defineRule('email', email)
const onSubmit = (value: any) => {
    console.log(value);

};


</script>

<template>
    <div class=" flex w-screen h-screen justify-center items-center bg-gray-800">
        <Form @submit="onSubmit">

            <Field name="account" :rules="{ required: true, email: true }" :validate-on-input="true"
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

