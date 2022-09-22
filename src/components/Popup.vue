<template>
  <div class="cs-loader">
    <div class="ld-content">
        <div class="cs-loader-inner">
          <div v-if="showClosePopup" class="popup-exit" v-on:click="removeSelected">
      

      <svg width="45" height="45" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="none" stroke="#333" stroke-width="1" stroke-linejoin="round"/><path d="M29.6569 18.3431L18.3432 29.6568" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.3432 18.3431L29.6569 29.6568" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>

          
          </div>
            <slot></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: {
    showClosePopup: {
      type: Boolean,
      default: true
    },
  },
  methods: {
    removeSelected: function() {
      this.$emit("closePopup");
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.cs-loader {
  position: absolute;
  user-select: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  // transform: translate(-50%, -50%);
  background-color: rgba(#000, 0.5);
}


.ld-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .ld-msg {
    font-size: 24px;
    color: #fff;
    margin: 25px;
    padding-left: 10px;
  }

}
.cs-loader-inner {
  position: relative;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  z-index: 99;
}

.cs-loader-inner label {
  font-size: 20px;
  opacity: 0;
  display: inline-block;
}

.popup-exit{
  position: absolute;
  top:-15px;
  right:-15px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background: #fff;
  display:flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
}

@keyframes lol {
  0% {
    opacity: 0;
    transform: translateX(-300px);
  }
  33% {
    opacity: 1;
    transform: translateX(0px);
  }
  66% {
    opacity: 1;
    transform: translateX(0px);
  }
  100% {
    opacity: 0;
    transform: translateX(300px);
  }
}

@-webkit-keyframes lol {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-300px);
  }
  33% {
    opacity: 1;
    -webkit-transform: translateX(0px);
  }
  66% {
    opacity: 1;
    -webkit-transform: translateX(0px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(300px);
  }
}
</style>
