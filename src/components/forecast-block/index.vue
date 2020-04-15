<template>
    <div class="forecast-response">
        <div
            v-if="showLoader"
            class="forecast-response__loader"
        >
            <span>Гадаем на кофейной гуще...</span>
        </div>
        <div
            v-if="showResponce"
            class="forecast-response__info"
        >
            <h3>Прогноз погоды на сегодня:</h3>
            <span>{{ city }}: </span>
            <div class="weater-info-block">
                <div class="weater-info-block__left-side">
                    <span class="main-text">{{ currentTemp }}{{units}}</span>
                    <span>{{ weather.main.name }}</span>
                </div>
                <div class="weater-info-block__middle">
                    <img width="50" height="50" :src="`${publicPath}${weather.main.imgName}.png`">
                </div>
                <div class="weater-info-block__right-side">
                    <span>Ветер: {{ weather.wind }}</span>
                    <span>Влажность: {{ weather.humidity }}%</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            showResponce: false,
        };
    },
    computed: {
        ...mapState({
            city: 'city',
            currentTemp: 'currentTemp',
            units: 'units',
            weather: 'weather',
            isError: 'isError',
            showLoader: 'showLoader'
        }),
        backgroundStyle() {
            return {
                backgroundImage: `url('${this.weather.main.img}')`,
            };
        }
    },
    watch: {
        currentTemp(val) {
            if (val) {
                this.showResponce = true;
            }
        },
        isError(val) {
            if (val) {
                alert('Что-то барахлит. Попробуй попозже...');
            }
        }
    },
};
</script>

<style lang="stylus">
    .forecast-response {
        &__info {
            display flex
            flex-direction column
            width 100%
        }
    }
    .weater-info-block {
        display flex
        justify-content space-between
        align-items center
        max-width 500px
        border 1px solid #dfe1e5
        border-radius 8px
        padding 20px
        margin-top 10px

        &__left-side,
        &__right-side {
            display flex
            flex-direction column
        }

        &__middle {
            display flex
            align-items center
            justify-content center
        }
    }

    .main-text {
        font-size 25px
        color #222
    }
</style>
