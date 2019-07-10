<template>
  <div id="pageUpdate" class="article-content">
    <div class="section-update">
      <h3 class="title-sub">Update</h3>
      <p class="desc-sub">Interactive Caltalog에 추가되는 개별 프로토타입 파일의 업데이트 히스토리 내역입니다. 프로토타입 항목의 종류, 일자, 간략한 내용을 포함하고 있습니다.</p>
      <ul class="list-update">
        <li v-for="(update, index) in updateItem" :key="index">
          <div class="head-list">
            <span class="icon-new" v-if="update.newIcon">NEW</span>
            <span class="tools-icon" v-bind:class="update.type"></span>
          </div>
          <div class="body-list">
            <strong class="title-update">{{ update.text }}</strong>
          </div>
          <div class="foot-list">{{ update.date }}</div>
        </li>
      </ul>
    </div>
    <div class="section-copyright">
      <small>COPYRIGHT © SK PLANET CO. LTD. ALL RIGHTS RESERVED.</small>
    </div>
  </div>
</template>

<script>
  import update from '../data/update'
  export default {
    data: function () {
      return {
        updateItem : update.item
      }
    }
  }
</script>
