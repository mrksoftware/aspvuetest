import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ESPromise from 'es6-promise';
ESPromise.polyfill(); // IE compability
import axios from 'axios'

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

@Component
export default class FetchDataComponent extends Vue {
    forecasts: WeatherForecast[] = [];

    mounted() {
        axios.get('api/SampleData/WeatherForecasts').then(response => {
            this.forecasts = response.data;
        });
    }
}
