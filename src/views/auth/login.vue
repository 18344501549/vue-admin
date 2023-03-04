<script setup lang='ts'>
import hdInput from '@/components/from/hd-input.vue';
import hdButton from '@/components/from/hd-button.vue';
import hdLink from '@/components/from/hd-link.vue';
</script>

<template>
    <div class=" p-5 bg-slate-300 h-screen flex justify-center items-start  md:items-center md:p-0">
        <div
            class="w-[720px] translate-y-32 md:translate-y-0 bg-white  md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
            <div class=" p-6">
                <h2 class=" text-center text-zinc-700 text-lg mt-3">会员登陆</h2>
                <div class=" mt-8">
                    <hdInput />
                    <hdInput class="mt-3" />
                </div>
                <hdButton />
                <div class=" flex gap-2 justify-between mt-4">
                    <hdLink />
                    <hdLink />
                    <hdLink />
                    <hdLink />
                </div>
            </div>
            <div class=" hidden md:block">
                <img src="/image/photo.jpg" class=" h-80 w-full object-cover">
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'></style>