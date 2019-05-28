<template>
 <div class="details">
   <div class="row">
      <div class="col-md-6" v-for="(product,index) in products" :key="product.id">
        <div v-if="proId == product.id">
          <h1>{{product.title}}</h1>
          <img :src="product.image" class="img-fluid img-thumbnail">
        </div>
      </div>
      <div class="col-md-6">
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus exercitationem veritatis reiciendis modi voluptate sunt obcaecati autem, quod velit repellendus eligendi, neque tempore suscipit, vitae earum. Animi esse amet est dolorum perspiciatis, enim, tempora ipsa assumenda debitis odio aut maiores!</p>
      </div>
   </div>
 </div>
</template>
<script>
 export default{
  name:'details',
  data(){
   return{
     proId:this.$route.params.Pid,
    title:"details",

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
  }
 }
</script>
<style scoped>
  img {
    height: 50%;
    width: 50%;
  }
  .details {
    display: flex;
    flex-direction: row !important;
    margin-top: 80px;
  }
</style>
