<template>
  <div class="home">
    <h1>Home</h1>
    <div class="container">
      <div class="row">
      <div class="col-md-4 col-lg-4" v-for="(product, index) in products" :key="product.id">
        <img :src="product.image" class="img-fluid img-thumbnail">
      <router-link :to='/details/ + product.id'><h3>{{product.title}}</h3></router-link>   
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      products:[
      {
        title:"Pizza",
        image: require('../assets/img/product1.jpg'),
        id:1
      },
      {
        title:"Custard",
        image: require('../assets/img/product2.jpg'),
        id:2
      },
      {
        title:"Snail",
        image: require('../assets/img/product3.jpg'),
        id:3
      },
      {
        title:"Cereal",
        image: require('../assets/img/product4.jpg'),
        id:4
      },
      {
        title:"Fruit Mix",
        image: require('../assets/img/product5.jpg'),
        id:5
      },
      {
        title:"Date Fruit",
        image: require('../assets/img/product6.jpg'),
        id:6
      }
      ]
    }
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row img{
  height: 80%;
  width: 100%;
  padding-bottom: 20px;
  }
.row h3{
  cursor:pointer;
  }
</style>