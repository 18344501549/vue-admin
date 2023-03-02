<script setup lang="ts">
const response = await fetch('http://localhost:5173/api/get').then(res => res.json());
console.log(response, 'await');

</script>

<template>
    <ul>
        <li>1首页</li>
        <li>商品</li>
        <li>评价</li>
    </ul>
    <RouterView></RouterView>
</template>

<style></style>
