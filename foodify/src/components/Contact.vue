<template>
 <div class="contact">
  <h1>{{title}}</h1>
		 	<form>
		 		<div class="form-group">
		 			<div class="input-group-prepend">
		 				<input type="text" class="form-control" name="name" placeholder="Enter your name...">
		 			</div>
		 			<div class="input-group-prepend">
		 				
		 				<input type="text" class="form-control" name="email" placeholder="Enter your email...">
		 			</div>
		 			<div class="input-group-prepend">
		 			
		 				<textarea class="form-control" placeholder="Enter your message..." rows="3">
		 					
		 				</textarea>
		 			</div>
		 			<button class="btn btn-primary btn-block">Submit</button>
		 		</div>
		 	</form>
 </div>
</template>
<script>
 export default{
  name:'contact',
  data (){
   return{
    title:'Contact'
   }
  }
 }
</script>
<style scoped>
    .contact form{
    max-width: 40em;
    margin: 2em auto;
    }
  .contact form .form-control{
    margin-bottom: 1em;
    }
		.contact {
			margin-top: 80px;
		}
</style>