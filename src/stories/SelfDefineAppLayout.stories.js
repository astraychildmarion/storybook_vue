import AppLayout from "@/components/Layout/AppLayout.vue";
import Sider from "@/components/Sider.vue";
import Header from "@/components/Header.vue";

export default {
  title: "Component/AppLayout",
  component: AppLayout,
  argTypes: {
    siderExpanded: {
      description: "Whether sider is expanded or not",
    },
    siderWidth: {
      description: "sider width before expanding",
    },
    siderExpandedWidth: {
      description: "sider width after expanding",
    },
  },
};

const ComposedTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AppLayout, Header, Sider },
  data() {
    return { siderCollapsed: false };
  },
  template: `<AppLayout v-bind="$props" :siderExpanded="!siderCollapsed">
  <template #header>
    <Header v-bind="$props" @clickTopLeftCorner="siderCollapsed = !siderCollapsed" />
  </template>
  <template #sider>
    <Sider v-bind="$props" :collapsed="siderCollapsed" />
  </template>
</AppLayout>`,
});

export const Composed = ComposedTemplate.bind({});
Composed.args = {
  logoUrl: "/logo.svg",
  manageMenu: [{ name: "Role Manage (IAM)", url: "#" }],
  userMenu: [{ name: "Log Out", url: "#", icon: "logout" }],
  userInfo: {
    name: "User 1",
    avatar: "/logo.png",
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
};
