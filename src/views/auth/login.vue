<script setup lang='ts'>
import { reactive } from 'vue';

const from = reactive({
    account: 'aa',
    password: 'aax'
});
</script>

<template>
    <div class=" p-5 bg-slate-300 h-screen flex justify-center items-start  md:items-center md:p-0">
        <div
            class="w-[720px] translate-y-32 md:translate-y-0 bg-white  md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
            <div class=" p-6">
                <h2 class=" text-center text-zinc-700 text-lg mt-3">会员登陆</h2>
                <div class=" mt-8">
                    <hdInput placeholder="请输入手机号或邮箱" v-model="from.account" />
                    <hdInput v-model="from.password" placeholder="请输入登陆密码" class="mt-3" />
                </div>
                <hdButton />
                <div class=" flex gap-2 justify-between mt-4">
                    <!-- <hdLink /> -->
                    <a href="" class=" text-xs text-gray-700 hover:text-violet-700">网站首页</a>
                    <a href="" class=" text-xs text-gray-700 hover:text-violet-700">找回密码</a>
                    <a href="" class=" text-xs text-gray-700 hover:text-violet-700">网站首页</a>
                </div>
            </div>
            <div class=" hidden md:block">
                <img src="/image/photo.jpg" class=" h-80 w-full object-cover">
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'></style>