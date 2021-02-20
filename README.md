# vue-crash-course

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Конспект
1. npm install -g @vue/cli (для продвинутой установки и создания полноценного прложения в терминале )
2. в терм. vue --version проверка версии vue 
3. в терм. d: change disk
4. cd IT -> cd Vladilen -> cd Vue.js ...
5. в терм. vue create vue-crash-course <-- (name folder)
6. Manually select features
7. Выбрать нужные пункты (Babel, Linter ...)
8. In dedicated config files (?????)
9. n (для НЕсохранения данного пресета)
10. Содержание проекта:
- node_modules(отвечает за библиотеки)
- publik:
 -- favicon.ico(picture)
 -- index.html (файл с <div id="app"> куда моунтиться все приложение).
- src (все исходные файлы)
--.browserslistrc (поддержка браузеров)
-- .gitignore(файлы которые не должны попасть в git)
-- babel.config.js
-- package.json

11. В терм. npm run serve (команда из package.json)
12. В файле App.vue удалили из <template> <HelloWord>, из <script> удалили import файла HelloWord,и удалили компонент из components
13. Удалили файл HelloWorld.vue из папки components  и картинку favicon.ico из папки public.
14. Переходим в браузере на http://localhost:8080/ и видим нашу пустую страничку без ошибок в консоле
15. Теперь внося изменения в App.vue --> template --> <div id="app"> --> сразу видим изменение в браузере на http://localhost:8080/
16.Создаем новій компонент TodoList.vue в папке components создаем шаблон template с одним корневым елементом div --> в котором создаем список Todo елементов
17.Импортируем данный шаблон в родительский компонент App.vue -->import  TodoList from '@/components/TodoList.vue'  (@ значек указывает на папку src, от которой легче писать пути)--> регистрируем TodoList:TodoList в  поле (обьекте) components  или просто TodoList(т.к. ключ и значение совпадают)--> и теперь можем использовать даный компонент в template добавля <TodoList/> 
18. Данніе компоненты использ. для выноса логики
19. Для описания взаимодействия компонентов создаем в папке components файл TodoItem.vue --> в секции template созд. любой список todo1 --> в файле TodoList.vue в секции script импортируем файл TodoItem.vue, экспортируем по дефолту обьект и регестриуем его в секции components--> и теперь вместо елемента li вставляем созданій компонент <TodoItem /> с закрівающим тегом и при рендеренге вместо етого тега вставиться содержимое всего содержимого секции templateфайла TodoItem.vue 
20. Работа с данными--> создадим в родительском элементе ф-ию data, которая будет возращять обьект с какими небудь переменными, например масив todos:[]--> елементами которого будут обекты - список что нужно сделать(купить, убрать, поздравить ...), у каждого елемента есть поле id для отличия, поле title с содержимым задачи и поле completed для контроля выполнена ли задача(false/true).
21. Далее масив todos:[] пердаем в компонент <TodoList/> для этого прибиндим этот масив к этому компоненту  v-bind:todos="todos"  первый todos - название переменной, второй "todos" - сам масив
22.Название переменной - todos мы передаем в файл TodoList.vue в обьект export default {} и в знаение props:['todos']
23. Проитерируем масив todos в теге <TodoItem/> с помощью директивы v-for="todo of/in todos", далее в теге <TodoItem/> прибиндим ето  значение заначение v-bind:todo="todo" и прибиндим индивидуальній ключ v-bind:key="todo.index  или v-bind:key="todo.id если id указано.
24. В дочернем компонене TodoItem.vue в  <script> в пропсах(ОБЬЕКТ) указуем полученый результат итерации todo(ключ) и параметры валидности данных (значение) :   type: Object,required: true. В секции  template рендерим нужную часть {{todo.title }}  из обьектов полученых с итетирируемого массива.
25. Иерархия такая: App.vue - div с id="app" содеращий тег <TodoList > --> TodoList.vue - div - ul - <TodoItem> --> TodoItem.vue - li - {{todo.title}}
26. Для итерации боле сложного елемента в  компоненте TodoItem.vue в li lj добавим span и button
27. span  будет содержать <input type="checkbox"> - отметка галочка  о выполнении, <strong>{{todo.id}}</strong> - порядковый номер тодушки, {{todo.title}} - ну и само содержание.
28.TodoList.vue --> <style> --> <style  scoped> для видимости єтих стилей только внутри етого компоненнта -->далее задаем стили для тега <ul> и в браузере в среде разработчика в консоли можно увидеть что для <ul> сгенерирован индивидуальній хеш, который показывает, что данные стили только для етого компонента. Идентично поступаем и для др. компонентов
29. В стилях TodoItem.vue создадим класс .done , который будет присваиваться динамически только тем елементам списка, которые выполнены, присаивать будем с помощью v-bind:class= "{done: todo.completed}", где done -это присваеваемый класс, а todo.completed - условие при котором он будет присвоен.
30. TodoItem.vue --> при нажатии на чекбокс <input type="checkbox"> состояние completed должно сменить свое состояние false/true, для обработки этого события применяем директиву <input type="checkbox" v-on:change="todo.completed = !todo.completed> -- теперь при нажатии чекбокса todo.completed  будет = !todo.completed, span будет присвоен класс done и  текст будет перечеркнут  и наооборот. 
31.Кнопка удаленияя в каждом елементе <button class="rm">-->  добавляем собітие клика на кнопку <button class="rm" v-on:click="$emit('remove-todo', todo.id)"> (v-on: можно заменить на @), $emit () - для передачи события родительскому компоненту (TodoList.vue), 'remove-todo' - придуманое название события, todo.id - передаем некоторые данные 
32.  TodoList.vue -- необходимо прослушивать соббытие 'remove-todo', переданое от дочернего компонента, для етого используем так же дерективу @remove-todo="removeTodo" в теге <TodoItem/>, где remove-todo - название события переданого от дочернего компонента, "removeTodo" - название методо который будет выполняться. Данный метод нужно определить в обьекте methods:{} в scripts, данный метод будет так же передавать данное событие removeTodo(id){this.$emit('remove-toto', id)} в родительский компонент App.vue  , что бы менять массив (удалять елементы массив) со списком ToDo
33. В App.vue аналогично добавляем директиву @remove-todo="removeTodo" и добавляем метод в скрипты 
 methods:{
    removeTodo(id){
      this.todos=this.todos.filter(t=>t.id !==id)
    }
  }, 
В даном примере елементы списка удаляються с помощью метода filter().
34. Для добавления новых елементов списка  создадим новый компонент AddTodo.vue и зарегестрируем его в App.vue в script добавляем импорт import AddTodo from "@/components/AddTodo"; и в components добавляем AddTodo. А в template вставляем в нужное место тег <AddTodo/>
35.В AddTodo.vue добавляем стили, а в скрипты  добавим метод onSubmit(), который будет обрабатывать событие <form @submit.prevent="onSubmit"> на етой форме, .prevent- что бы страница не обновлялась после нажатия кнопки Create в форме мы делаем prevent default для отключения действия события по умолчанию
36. Для получения данных с строки <input type="text"> воспользуемся атрибутом <input type="text" v-model="title"> и етот "title" будем передавать в модель title , в поле data(){}
 data(){
    return {
      title:''
      }
  },
и в методах описуем логику после отправки формы
 methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          complete: false,
        };
        this.$emit("add-todo", newTodo);
	this.title=''
      }
    },
  },
};
где if (this.titlt.trim())-условие что в инпуте чтото написано, complete: false - что бы после создания нового todo нет смысла его сразу же завершать,  this.$emit("add-todo", newTodo) - передача полученного newTodo в родительский компонент, this.title='' - для очистки строки инпута, после добавления очеедного елемента. 
37. В родительском компоненте Add.vue добавляем прослушку события "add-todo" -->  <AddTodo @add-todo="addTodo"/> --  и реализуем метод     "addTodo"  вметодах в скриптах
38. В файле TodoList.vue --  в тег TodoItem прибиндим индекс"i" полученый в процесе итерации
	v-for="(todo, i) of todos"
        v-bind:index="i" 
а в файле TodoItem.vue в пропсах укажем что index: Number а в секцию template рендерим <strong>{{index+1}}</strong>
39. Взаимодействие Vue.js с сервером: 
-заходим на сайт JSONPlaceholder -- берем код фейкового REST API Servis который позволит продемонстрировать работу с сервером, копируем метод fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
и вставляем етот код в компонент App.vue в скрипты в  хук жизненого цикла  mounted(), 
- добавляем лимит тудушек _limit=3, получаем какието данные .then, заносим их в переменную ((json) this.todos = json и очищаем наш масив тудус, т.к. 3 елемента будут подтянуты с сервера , Vue  сам посмотрит что нужно изменить и перересует шаблон.
40. Роутинг: установим в терминале  пакет - d npm i vue-router--> в папке src создадим новый файл router.js--> импортируем Vue: import Vue from 'Vue' и роутер: import Router from 'vue-router' --> регистрируем роутер как плагин: Vue.use(Router) --> экспортируем по дефолту новый екземпляр класса роутер в конструктор которого передаем обьект:
export default new Router({
  mode:history,
  routes: [
    {
      path: '/',
      coponent: Home
    }
  ]
  
})
где mode:history - для того что бы были обычные слеши в путях, также масив routes: [] , где каждый обьект это новая страница с двумя обязательными параметрами path: '/' -главная страниц, и компонент который должен быть загружен, например в данном случае component: Home
41. В папке src создаем папку views а в ней файл Home.vue --> шаблон template(содержащий <h2>, <p>, <a>) 
42.В файле router.js подключим компонент Home.vue: import Home from '@/views/Home.vue' , и зарегестрируем еще один путь 
{
  path:'/todos',
   
}
где coponent: ()=>import('./vuews/Todos.vue') -- lasyLoading для каких либо страниц делаем с помощью callback функции с динамическим импортом.
42. Cоздадим компонент Todos.vue --> перенесем <script> из родительского компонента App.vue--> template скопируем также из родительского компонента App.vue, только уберем идентификатор id="app", который должен остаться в App.vue 
43. в App.vue останеться только  <div id="app"> в котором <h1>Todo aplication</h1> и <router-view/> - место куда рендерить страницы
44. И в итоге в файл main.js  импортируем роутер import router from './router' и регистрируем его передав в конструктор

new Vue({
  router:router,  (--> или просто router т.к. ключ и значение совп)
  render: h => h(App),
}).$mount('#app')

45.Что бы страницы не перезагружались на странице Home.vue анативный html компонент <a> на компонент <router-link>  и вместо атрибута   href="/todos" передадим атрибут to="/todos". И такую же ссылку только на домашнюю страницу добавим в страницу Todos.vue - <router-link to="/">Home</router-link>. В результате переход будет выполняться без перезагрузки страницы.
46.В Todos.vue--> в тег <TodoList> --> добавим условие -- v-if="todos.length" - т.е. показывать список если елементов не 0 , иначе <p v-else>No dodos!</p>
47. В папке components создадим файл Loader.vue который будет отображаться пока подгружаеться список тудушек -- гугл -- loading css -- https://loading.io/css/ --  Pure CSS Loaders -- нажимаем на выбраный лоадер-- копируем стили -- вставляем в секцию <style>  и копируем html  и вставляем в секцию <template>
48. В компонент Todos.vue импортируем лоадер -- import Loader from "@/components/Loader"; --> добавляем Loader в components --> добавляем в обект data(){} свойство loading: true --> и в обьект mounted() {}  добавим строку -- this.loading = false; - что бы лоадер исчез после загрузки данных.
49.В компонент Todos.vue добавим тег <Loader v-if="loading"/> с условием показывать его если loading: true, далее тег <TodoList v-else-if="todos.length"/> получит условие v-else-if, или же конечный вариант с v-else -- <p v-else>No dodos!</p> , если списка нет.
50. Фильтры - для трансформации данных внутри шаблона. Например в компоненте 
 TodoItem.vue нам нужно что бы весь текст был в верхнем регистре --> в скриптах там  где експортируем по дефолту новый оьект создаем свойство filters:{}  с нужной фу-ей -->
filters: {
    uppercase(value) {
      return value.toUpperCase();
    },
  },

а в нужном теге {{ todo.title }} добавляем нужный фильтр {{ todo.title | uppercase }} и тогда в етот фильтр todo.title будет передано как значение value
52. Фильтрация и компьютед свойства. Для фильтрование тудушек по определенному параметру --> создадим <select> со списком вариантов параметров
     <select>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>
--> в data() создадим новую переменную filter со значением по умолчанию filter: "all" --> и привяжем данную переменную как модель к селекту <select v-model="filter"> --> в скриптах создаем св-во watch:{} , в котором укажем название той ф-ии за которой мы следим
watch: {
    filter(value) {
      console.log(value);
    },
  },
для даного примера лучше использовать вычисляеые свойства -->где прописываем логику которая зависит от каких либо моделей либо переменных во Vue.js
computed: {
    filterTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      if (this.filter === "completed") {
        return this.todos.filter((t) => t.commleted);
      }
      if (this.filter === "not-completed") {
        return this.todos.filter((t) => !t.commleted);
      }
    },
  },

Данную ф-ию filterTodos() в шаблоне <template> мы будем использовать как обычную переменную и просто заменим в тег  <TodoList> места где мы биндим  todos заменим на  filterTodos
