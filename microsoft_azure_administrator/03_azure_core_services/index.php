<!DOCTYPE html>
<html>

<head>
    <meta char-set="utf-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
</head>
<style>
    body {
	color: white;
	background-color: rgb(64, 64, 64);
    }


    hr {
	margin-top: 1rem;
	` margin-bottom: 1rem;
	border: 0;
	border-top: 1px solid rgb(108, 117, 125);
    }
</style>

<body>
    <nav class="navbar navbar-light navbar-expand-lg" style="background-color: rgb(237, 125, 49)">
	<a class="navbar-brand">
		<p class="lead" style="margin-bottom: 0rem">Logo</p>
	</a>
    </nav>
    <div id="component" class="jumbotron jumbotron-fluid" style="padding-top: 1rem; background-color: rgb(64, 64, 64);">
	<div class="container">
		<h3 class="display-4 text-center" style="padding-bottom: 1rem; font-size: 2.5rem;">Connect to Azure  Database</h3>
		<p class="lead text-center">Get the connection information needed to connect to the Azure Database for MySQL</p>
		<form name="form" action="database.php" method="post">
			<div class="row justify-content-center">
				<div class="form-group col-5">
				    <label for="inputAccount">Server Name</label>
				    <input class="form-control" v-model="user.server" id="InputEmail1"
					aria-describedby="accountHelp" placeholder="Enter Server Name" name="server">
				    <small id="accountHelp" class="form-text text-muted">Your Azure Database Server Name</small>
				</div>
				</div>
			<div class="row justify-content-center">
				<div class="form-group col-5">
				    <label for="inputAccount">Database Name</label>
				    <input class="form-control" v-model="user.database" id="InputEmail2"
					aria-describedby="accountHelp" placeholder="Enter Database Name" name="database">
				    <small id="accountHelp" class="form-text text-muted">Your Azure Database Name</small>
				</div>
				</div>
			<div class="row justify-content-center">
				<div class="form-group col-5">
				    <label for="inputAccount">User Name</label>
				    <input class="form-control" v-model="user.name" id="InputEmail3"
					aria-describedby="accountHelp" placeholder="Enter User Name" name="user">
				    <small id="accountHelp" class="form-text text-muted">Your Azure  Database User Name</small>
				</div>
				</div>
			<div class="row justify-content-center">
				<div class="form-group col-5">
				    <label for="inputPassword">Password</label>
				    <input type="password" class="form-control" v-model="user.password"
					id="inputPassword4" placeholder="Enter Password" name="password">
				</div>
				</div>
			<div class="row justify-content-center">
				<button type="submit" class="btn btn-success">Sign In</button>
			</div>
 	       </form>
  	  </div>
    </div>
</body>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>

<script>
var Item = new Vue({
el: '#component',
	data: {
	user: {
	server: null,
		database: null,
		name: null,
		password: null
},
isShow: false
},
created: function () {
	$('#loginModal').on('shown.bs.modal', function () {
		$('#myInput').trigger('focus')
	})
},
methods: {
	}
})
</script>

</html>



