<template>
  <div id="app">
    <h1>Simple demo for common UI library</h1>
    <h3>
      Welcome to common UI library demo. You can run <br /><b
        >yarn build-storybook</b
      ><br />
      or <br /><b>npm build-storybook</b><br />
      in your command-line and open Storybook for more info.
    </h3>
    <div class="seperator">AppLayout</div>
    <app-layout :siderExpanded="!siderCollapsed">
      <template #header>
        <common-header
          :logoUrl="logoUrl"
          :manageMenu="manageMenu"
          :userMenu="userMenu"
          :userInfo="userInfo"
          @clickTopLeftCorner="siderCollapsed = !siderCollapsed"
        />
      </template>
      <template #sider>
        <common-sider :siderData="siderData" :collapsed="siderCollapsed" />
      </template>
    </app-layout>
    <div class="seperator">Header</div>
    <common-header
      :logoUrl="logoUrl"
      :manageMenu="manageMenu"
      :userMenu="userMenu"
      :userInfo="userInfo"
      @clickTopLeftCorner="siderCollapsed = !siderCollapsed"
    />
    <div class="seperator">Sider</div>
    <common-button
      @clickButton="clickSiderControl"
      buttonText="click to hide/show sider"
    />
    <common-sider :siderData="siderData" :collapsed="siderCollapsed" />
    <!-- <div class="seperator">AuthModal</div>
    <auth-modal @clickButton="clickAuthButton" />
    <div class="seperator">CommonCard and TextDetail</div>
    <common-card :detail="cardDetail"
      ><text-detail :detail="cardDetail"
    /></common-card>
    <div class="seperator">CommonAlert</div>
    <common-alert />
    <div class="seperator">CommonButton</div>
    <common-button
      @clickButton="clickFilterControl"
      buttonText="click to hide/show filter"
    />
    <div class="seperator" v-show="isShowFilterModal">CommonFilter</div>
    <common-filter
      :isShowFilterModal="isShowFilterModal"
      :filterData="filterData"
    />
    <div class="seperator">DropDownMenu</div>
    <dropdown-menu
      :menuData="menuData"
      dropdownIcon="caret-down"
      title="Hover and open"
    /> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isShowFilterModal: true,
      siderCollapsed: false,
      filterData: [
        {
          value: 0,
          text: "Request id",
        },
        {
          value: 1,
          text: "BU",
        },
        {
          value: 2,
          text: "Date",
        },
      ],
      menuData: [
        {
          url: "https://antdv.com/components/dropdown-cn/",
          name: "dropdown",
        },
        {
          url: "https://storybook.js.org/docs/vue/essentials/actions",
          name: "storybook",
        },
        {
          url: "https://cli.vuejs.org/guide/css.html#pre-processors",
          name: "vue precessor",
        },
      ],
      cardDetail: {
        type: "整套公寓",
        add: "宜蘭縣羅東鎮公正路284巷1-3號",
        source: "Ann's Story～青庭",
        price: "$7,280 TWD",
        unit: "晚",
        imageSrc:
          "https://a0.muscache.com/im/pictures/5a647313-052f-48bd-873d-00094e3cb96a.jpg?im_w=480",
      },
      siderData: [
        {
          icon: "user",
          name: "Member",
          to: "/Member",
        },
        {
          icon: "pie-chart",
          name: "Chart",
          to: "/Chart",
        },
        {
          icon: "block",
          name: "Product",
          child: [
            {
              icon: null,
              name: "Product 1",
              to: "/Product1",
            },
            {
              icon: null,
              name: "Product 2",
              to: "/Product2",
            },
          ],
        },
      ],
      logoUrl: "/logo.svg",
      manageMenu: [{ name: "Role Manage (IAM)", url: "#" }],
      userMenu: [{ name: "Log Out", url: "#", icon: "logout" }],
      userInfo: {
        name: "User 1",
        avatar: "/logo.png",
      },
    };
  },
  methods: {
    showFilterModal() {
      this.isShowFilterModal = !this.isShowFilterModal;
    },
    clickAuthButton(data) {
      alert("clicked auth button, your username is " + data.user);
    },
    clickFilterControl() {
      this.isShowFilterModal = !this.isShowFilterModal;
    },
    clickSiderControl() {
      this.siderCollapsed = !this.siderCollapsed;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 50px 100px;
}
.seperator {
  padding-top: 50px;
  font-size: 20px;
}
</style>
