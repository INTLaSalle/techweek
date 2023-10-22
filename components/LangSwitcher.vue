<script setup>
    const {locales, locale, setLocale} = useI18n();
    const language = computed({
        get: ()=> locale.value,
        set: (value)=> {
            setLocale(value);
        }
    });
</script>
<template>
    <!-- <NuxtLink v-for="item in locales" :key="typeof item=== 'object' ? item.code: item" :to="'/'+item.code">{{ typeof item === "object"? item.name: item }}</NuxtLink> -->
    <!-- <NuxtLink :key="(typeof item=== 'object'? item.code: item" :to=) -->
    <select class="switch form-select p-4 bg-info-subtle" v-model="language">
        <option v-for="item in locales"
            :key="typeof item=== 'object' ? item.code: item " :value="typeof item==='object' ? item.code: item">
            {{ typeof item === "object"? item.name: item }}
        </option>
    </select>
</template>


<style scoped>
 

    .switch{
        padding:1% !important;
        width:20%;
        height: 50%;
        
    }
</style>