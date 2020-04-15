<template>
    <div class="user-settings-form">
        <h2 class="user-settings-form__title">Выберете настройки погоды:</h2>
        <div class="generation-form">
            <div class="generation-form__input">
                <label for="city">В каком городе хотите узнать прогноз погоды: </label>
                <input
                    id="city"
                    v-model="userConfig.city"
                    readonly
                >
            </div>
            <br>
            <div class="generation-form__radio">
                <input type="radio" id="radio-one" value='metric' v-model="userConfig.units">
                <label for="radio-one">°C</label>
                <br>
                <input type="radio" id="radio-two" value="imperial" v-model="userConfig.units">
                <label for="radio-two">°F</label>
                <br>
            </div>
        </div>
        <div
            class="btn"
            @click="checkWeather"
        >
            <span>Какая погодка?</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userConfig: {
                city: 'Moscow',
                units: 'metric',
            },
        };
    },
    methods: {
        checkWeather() {
            this.$store.dispatch('getWeatherFetch', this.userConfig);
        }
    }
};
</script>

<style lang="stylus">
    .user-settings-form {
        margin-bottom 20px
    }
    .generation-form {
        margin-bottom 20px
        &__input>input {
            border 1px solid #dfe1e5
            border-radius 5px
            padding 5px
            padding-left 10px
        }
    }
    .btn {
        display flex
        align-items center
        justify-content center
        border 1px solid #222
        border-radius 5px
        height 30px
        max-width 150px
        cursor pointer
    }
</style>
