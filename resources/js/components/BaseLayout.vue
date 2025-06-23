<template>
    <div class="max-w-[1200px]  flex flex-col mx-auto w-full box-border">
        <n-layout-header
            class="!px-4 flex   justify-between h-16  items-center"
        >
            <!-- Left: Logo/Name -->
            <n-h1 class="m-0"><n-text :code="false" :strong="true">Al Mustafa</n-text></n-h1>
            <n-h2 class="m-0"><n-text>{{ $t('application') }}</n-text></n-h2>

            <!-- Right: Language Switch -->
            <div>
                <n-switch
                    v-model:value="isEn"
                    :checked="true"
                    checked-children="EN"
                    unchecked-children="FA"
                    @update:value="switchLang"
                >
                    <template #checked>
                        de
                    </template>
                    <template #unchecked>
                        en
                    </template>
                </n-switch>
            </div>
        </n-layout-header>
        <n-divider />
        <slot></slot>

    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
import { ref } from 'vue'

const isEn = ref(true)
function  switchLang(lang) {
    console.log(lang);
    if (lang){
        locale.value = 'de';
    }else {
        locale.value = 'en';
    }
}

function setLang(lang) {
    console.log(locale)
    // locale.value = lang

}


</script>

<style scoped>
h1 {
    color: #42b983;
}
</style>
