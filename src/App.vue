<script setup lang="ts">
import { watchEffect } from 'vue';
import userApi from './apis/userApi';

watchEffect(async () => {
    const response = await userApi.info();
    const token = await userApi.login();
    console.log(response.message, 'response');
    console.log(token, 'token');

})

</script>

<template>
    <RouterView></RouterView>
</template>

<style></style>
