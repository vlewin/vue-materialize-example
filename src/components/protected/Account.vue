<template>
  <div class="container">
    <h2 class="teal-text">Account</h2>
    <div class="divider"></div>
    <br>

    <div class="row">
      <div class="col s12 m12">
        <div class="card">
          <div class="card-content blue-grey lighten-5 center-align">
            <span class="card-title">Wellcome Mr. Superman</span>
            <p class="valign">
              <img src="https://33.media.tumblr.com/avatar_1bfb7ba339ea_128.png" alt="" class="avatar-big circle valign">
            </p>
            <p>In order to change your account informations please go to <a href="https://manage.auth0.com/#/account" target="_blank">Auth0</a> account page</p>

            </div>
            <div class="card-action">
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s6">
                      <input placeholder="First Name" id="first_name" value="Miss" type="text">
                      <label class="active" for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s6">
                      <input id="last_name" type="text" value="Universe" class="validate">
                      <label class="active" for="last_name">Last Name</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="email" type="email" class="validate" value="miss.universe@example.com" disabled>
                      <label class="active" for="email">Email</label>
                    </div>
                  </div>
                  <!-- <div class="row">
                    <div class="input-field col s12">
                      <input disabled value="Disabled" id="disabled" type="text">
                      <label for="disabled">Disabled</label>
                    </div>
                  </div> -->
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="password" type="password" class="validate" value="***********" disabled>
                      <label class="active" for="password">Password</label>
                    </div>
                  </div>
                </form>
              </div>

              <div class="chip teal white-text">
                Email verified
                <i class="material-icons">close</i>
              </div>

              <div class="chip teal white-text">
                Social login
                <i class="material-icons">close</i>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>




</template>

<script>
</script>

<style lang="sass">
.avatar-big
  height: 128px
  width: 128px

// $blue: #3bbfce
// $red: red
//
// h2
//   color: $blue
//   border: 1px solid $blue

</style>
