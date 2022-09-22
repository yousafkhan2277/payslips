 <template>

  <div class="main-div">    
  <nav class="nav" :class="{ navClosed: close_menu }">
    <svg class="nav__expand" viewBox="0 0 256 512" width="100" title="angle-right"  @click="close_menu = !close_menu" >
      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
    </svg>
   <div>

<div class="top-div"> 
	<h4 :class="{ topDivText: close_menu }">Employee self service</h4>
</div>

<MenuItems :menuItems="menuItems" />
 		<div class="footerDiv">
	       <h4  :class="{ footerText: close_menu }"> Marchen@2022 </h4>
		</div>
    </div>
  </nav>
  </div>
</template>
<script>

import { ref } from 'vue'
import menuJson from '../../data/menu.json'
import MenuItems from './MenuItems.vue'
export default {
  components: { MenuItems },
    setup() {
      const close_menu = ref(false)
      const menuItems = ref(menuJson)
      return {menuItems, close_menu}
    },
}
</script>


<style lang="scss" scoped>
:root {
  /*   color variables */
  --clr-primary: #5930ff;
  --clr-primary-hover: #29e6a7;
  --clr-primary-dark: #039d69;
  --clr-gray100: #f9fbff;
  --clr-gray150: #f4f6fb;
  --clr-gray200: #eef1f6;
  --clr-gray300: #e1e5ee;
  --clr-gray400: #767b91;
  --clr-gray500: #4f546c;

  /*   border radius */
  --radius: 0.2rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.nav {
  position: relative;
  background-color: white;
  box-shadow: 0px 0px 10px var(--clr-gray300);
  height: 100vh;

  &__expand {
    width: 2rem;
    height: 2rem;
    fill: var(--clr-gray400);
    background-color: white;
    box-shadow: 0px 0px 10px var(--clr-gray300);
    border-radius: 50%;
    position: absolute;
    right: -1rem;
    top: 5rem;
    z-index: 99;
    cursor: pointer;
    transform: rotatez(-180deg);
    transition: transform 200ms ease-in-out;
	border-style: solid;
	border-color: #f1f5f9;
    

    &:hover {
      fill: var(--clr-gray500);
    }
  }
  .top-div{
    display: flex;
    width: min-content;
    min-width: -webkit-fill-available;
    background-color: black !important;
    color: white;
    padding: 21px

  }  
}
 .main-div{
    width: min-content;
}
.router-link-active{
  background-color: ghostwhite !important;
    color: coral !important;
    height: 40px;
}
.footerText{
  font-size: 11px;
}
.topDivText{
  font-size: 15px;
}
.footerDiv{
    text-align: center;
    width: -webkit-fill-available;
  position: absolute;
    bottom: 20px;
}
</style>

