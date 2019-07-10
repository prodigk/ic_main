<template>
  <div id="pageDocs" class="article-content">
    <div class="section-update">
      <h3 class="title-sub">Documentation</h3>
      <p class="desc-sub">Interaction Catalog를 구성하고 있는 개별 프로토타입 형식에 대한 간략한 설명입니다. 추후 Framer Classic의 Coffeescript Document로 확장예정입니다.</p>
      <ul class="list-docs">
        <li v-for="(docs, index) in docsItem" :key="index">
          <strong class="title-docs">{{ docs.title }}</strong>
          <p class="text-docs"v-html="docs.text"></p>
        </li>
      </ul>
    </div>
    <div class="section-copyright">
      <small>COPYRIGHT © SK PLANET CO. LTD. ALL RIGHTS RESERVED.</small>
    </div>
  </div>
</template>

<script>
    import docs from '../data/docs'
    export default {
      data: function () {
        return {
          docsItem : docs.item
        }
      }
    }
</script>
