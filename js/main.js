/*
请求地址：http://wthrcdn.etouch.cn/weather_mini
请求方法：get
请求参数：city
响应内容：天气信息。Réponse: Informations météorologiques

1.点击回车
2.查询数据
3.渲染数据
1. Appuyez sur Entrée
2. Interroger les données
3. Rendu des données
*/

var app = new Vue({
	el:"app",
	methods: {
		searchWeather:function(){
			console.log('Search Weather');
		}
	}
})