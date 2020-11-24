tvzShopApp.component('app',{
    template:`
      <nav-bar></nav-bar>
      <main id="main" ui-view></main>
      <br style="clear: both;"/>
      <footer class="center-text">
           <i class="fa fa-facebook-official w3-hover-opacity"></i>
           <i class="fa fa-instagram hover-opacity"></i>
           <i class="fa fa-snapchat hover-opacity"></i>
           <i class="fa fa-pinterest-p hover-opacity"></i>
           <i class="fa fa-twitter hover-opacity"></i>
           <p class="text-medium">Powered by <a href="https://www.tvz.hr/" target="_blank">tvz.hr</a></p>
      </footer>
     `
});