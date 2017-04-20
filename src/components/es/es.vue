<template>
  <div>
        {{ name }}
    <p>{{ $route.params.id }}</p>
    <router-view></router-view>
  </div>
</template>
<script>
    export default{
        data(){
            return {
                name: "Es组件"
            }
        },
        mounted(){
            alert("check!");
        }
    }
</script>
