"use strict";

// Импортируем другие js-файлы

Vue.component('checkbox', {
  template: `
    <div class="custom-checkbox" v-bind:class="{ inverted: inverted }">
      <input type="checkbox" v-bind:name="name" v-bind:class="className" v-bind:id="id" v-bind:value="value" v-bind:checked="checked" v-bind:required="required" v-on:change="updateInput">
      <label v-bind:for="id">{{ label }}</label>
    </div>
  `,
  props: {
    name: {
      type: String,
      required: false
    },
    className: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    inverted: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    updateInput: function (event) {
      this.$emit('input', event.target.checked);
    }
  }
});

new Vue({
    el: '#app',
    data() {
      return {
        toggleField: ''
      }
    }
  });

Vue.component('tabs', {
  template: `
    <div>
      <div class="tabs">
        <ul class="tabs__list">
          <li class="tabs__item" v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
            <a class="link link--tab" :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
          </li>
        </ul>
      </div>

      <div class="tabs-details">
        <slot></slot>
      </div>
    </div>
  `,
  data() {
    return { tabs: [] }
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab: function(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  }
});

Vue.component('tab', {
  props: {
    name: { required: true },
    selected: { default: false }
  },
  template: `<div v-show="isActive"><slot></slot></div>`,
  data() {
    return { isActive: false }
  },
  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g , '-');
    }
  },
  mounted() {
    this.isActive = this.selected;
  }
});

new Vue({
  el: '#app',
});
Vue.component('range', {
  template: `
    <div class="custom-range">
      <div class="custom-range__item">{{ title }}</div>
      <div class="custom-range__item">{{ label }}</div>
      <input type="range" class="custom-range__item range-slider" v-model="label">
    </div>
  `,
  props: ['title'],
  data: function () {
    return {
      label: 0,
      items: [
        { id: 'range-1', title: 'Минимальное кол-во' },
        { id: 'range-2', title: 'Минимальная цена' }
      ]
    }
  },
});

new Vue({
  el: '#range',
  data: {

  }
});