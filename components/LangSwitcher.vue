<script setup>
    const {locales, locale, setLocale} = useI18n();
    const language = computed({
        get: ()=> locale.value,
        set: (value)=> {
            setLocale(value);
        }
    });
    const setLanguage = (code) => {
        setLocale(code);
    }
</script>
<template>
    
    <li class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">{{$t('LANGUAGE')}}</a>

        <ul class="dropdown-menu">
            <li v-for="item in locales" :key="typeof item === 'object' ? item.code : item">
                
                <a :class="{active : language === (typeof item === 'object' ? item.code : item)} " class="dropdown-item"
                    @click="language = typeof item === 'object' ? item.code : item"
                >
                    {{ typeof item === 'object' ? item.name : item }}
                </a>
            </li>
        </ul>
    </li>
    
</template>


<style scoped>
 

   /* css */
</style>