const themes = new Map();

themes.set('morning', new Map([
    ['no clouds', ['#8FD3F4', '#6AAFE9', '#478CD9']],
    ['clouds', ['#B0B8B5', '#879089', '#6E7776']],
    ['raining', ['#7E8F94', '#5B6C77', '#44525B']],
    ['snow', ['#C0C0C0', '#A2A2A2', '#7E8F94']]
]));

themes.set('day', new Map([
    ['no clouds', ['#5FBEEF', '#3E9CF8', '#2F8CFD']],
    ['clouds', ['#B0B8B5', '#8B8F8B', '#6E7776']],
    ['raining', ['#7E8F94', '#607180', '#44525B']],
    ['snow', ['#C0C0C0', '#A2A2A2', '#7E8F94']]
]));

themes.set('evening', new Map([
    ['no clouds', ['#FFB6C1', '#FF8FA3', '#FF6990']],
    ['clouds', ['#B0B8B5', '#8B8F8B', '#6E7776']],
    ['raining', ['#7E8F94', '#607180', '#44525B']],
    ['snow', ['#C0C0C0', '#A2A2A2', '#7E8F94']]
]));

themes.set('night', new Map([
    ['no clouds', ['#001F3F', '#002F5E', '#003366']],
    ['clouds', ['#394240', '#2C3335', '#1E2628']],
    ['raining', ['#1B1E1F', '#0D0E0E', '#060707']],
    ['snow', ['#B0B8B5', '#8B8F8B', '#6E7776']]
]));

export const ThemeLoader = () => {
    return themes.get('night').get('raining');
};

function GetTheme(){
    const daytime = GetDaytime;
    const weather = GetWeather;



    return themes.get(daytime).get(weather);
}

function GetDaytime(){

}

function GetWeather(){

}