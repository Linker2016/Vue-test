var app1 = new Vue({
  el: '#app1',
  data: {
    message: '<h1>WelCome to Vue!</h1>'
  }
});

var app2 = new Vue({
  el: '#app2',
  data: {
    message: 'WelCome to Vue!'
  }
});

var app3 = new Vue({
  el: '#app3',
  data: {
    message: 'Now is ' + new Date()
  }
});

var app4 = new Vue({
  el: '#app4',
  data: {
    seen: true
  }
});

var app5 = new Vue({
  el: '#app5',
  data: {
    todos: [
      {text: 'study javascript'},
      {text: 'study Vue'},
      {text: 'all projects'}
	]
  }
})