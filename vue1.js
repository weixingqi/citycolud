var data={a:1}
var vm = new Vue({
    data: data
})
// console.log(vm.a);
// console.log(vm.a==data.a);
vm.b = 'hi';
// console.log(vm.b);
console.log(vm._data)