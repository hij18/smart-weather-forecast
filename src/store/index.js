import Vue from 'vue';

/**
 * Округляем температуру до ближайшего целого числа
 * @param {Number} temp - текущая температура не округленная
 */
const getCurrentTemp = (temp) => Math.round(temp);

// Объект с переводами городов на русский язык
const cityTranslate = {
    'Moscow': 'Москва'
};

const weatherTranslate = {
    'Clear': {
        name: 'Ясно',
        imgName: 'sun'
    },
    'Rain': {
        name: 'Дождь',
        imgName: 'rain'
    },
    'Snow': {
        name: 'Снег',
        imgName: 'snow'
    },
    'Extreme': {
        name: 'Шторм',
        imgName: 'extr'
    },
    'Clouds': {
        name: 'Облачно',
        imgName: 'clouds'
    },
};

export default {
    namespaced: true,
    state() {
        return {
            city: '',
            currentTemp: null,
            units: '°C',
            weather: {
                main: {},
                wind: '',
                humidity: null,
            },
            isError: false,
            showLoader: false,
        };
    },
    mutations: {
        // Устанавливаем значение теспературе в указанном городе
        'setWeather'(state, { main, units, wind, weather }) {
            const { temp, humidity } = main;
            Vue.set(state, 'currentTemp', getCurrentTemp(temp));
            Vue.set(state, 'units', units === 'metric' ? '°C' : '°F');
            Vue.set(state.weather, 'humidity', humidity);
            Vue.set(state.weather, 'wind', `${wind.speed} м/с`);
            Vue.set(state.weather, 'main', weatherTranslate[weather[0].main] || '');
        },
        // Записываем название города
        'setCity'(state, name) {
            Vue.set(state, 'city', cityTranslate[name]);
        },
        'setError'(state, err) {
            Vue.set(state, 'isError', err);
        },
        'showLoader'(state, value) {
            Vue.set(state, 'showLoader', value);
        }
    },
    actions: {
        'getWeatherFetch'({ commit }, { city = 'Moscow', units = 'metric' }) {
            const APIKey = '28c7d687accc7c75aabbc7fb71173feb';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=${units}`;
            commit('showLoader', true);
            return fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    const { main, name, wind, weather } = res;
                    commit('setWeather', { main, units, wind, weather });
                    commit('setCity', name);
                    commit('showLoader', false);
                })
                .catch(() => {
                    commit('setError', true);
                    commit('showLoader', false);
                });
        },
    },
};
