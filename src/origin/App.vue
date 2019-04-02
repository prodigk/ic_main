<template>
  <div id="wrapContainer" class="wrap-container" v-bind:class="{side__close:toggleBar}">
    <side-bar></side-bar>
    <div class="section-content">
      <h2 class="heading-content">가이드 본문</h2>
      <div class="wrap_tab">
        <div class="view-tab">
          <div id="tabBar" class="bar_menu" style="width:51px;left:59px;" >
            <div class="inner_bar" style="width: 100%"></div>
          </div>
          <ul class="list-tab">
            <li>
              <router-link to="/home" class="link-tab" data-position="60" data-width="50" data-page="/home">Home</router-link>
            </li>
            <li>
              <router-link to="/update" class="link-tab" data-position="138" data-width="60" data-page="/update">Update</router-link>
            </li>
            <li>
              <router-link to="/docs" class="link-tab" data-position="218" data-width="42" data-page="/docs">Docs</router-link>
            </li>
            <li>
              <router-link to="/about" class="link-tab" data-position="291" data-width="54" data-page="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { BUS } from './assets/js/eventBus'
import sideBar from '../origin/assets/components/_sidebar.vue'
export default {
  created(){
    BUS.$on('sidebarBus', this.receiveSidebar)
  },
  mounted() {
    BUS.$on('toggleBarBus', this.receivetoggleBarBus)
  },
  data: function () {
    return {
      toggleBar : false
    }
  },
  components: {
    'side-bar' : sideBar
  },
  methods: {
    receiveSidebar : function(e){
      return this.toggleBar = e;
    },
    receivetoggleBarBus : function(e){
      return this.toggleBar = e;
    }
  }
}
</script>
