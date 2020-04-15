<template>
    <div class="forecast">
        <Header />
        <div 
            class="forecast__form"
        >
            <settings-form />
            <forecast-responce />
        </div>
    </div>
</template>

<script>
import Header from '../components/header/index.vue';
import SettingsForm from '../components/settings-form/index.vue';
import ForecastResponce from '../components/forecast-block/index.vue';

export default {
    components: {
        Header,
        SettingsForm,
        ForecastResponce,
    },
};
</script>

<style lang="stylus">
    .forecast {
        padding-left 50px
        padding-right 50px
        &__form {
            display flex
            flex-direction column
        }
    }
</style>
