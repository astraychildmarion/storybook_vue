import Header from "@/components/XYHeader.vue";

export default {
  title: "XY Component/Header",
  component: Header,
  argTypes: {
    clickTopLeftCorner: {
      description: "Action triggered by clicking top left corner",
    },
    logoUrl: {
      description: "A logo link",
    },
    manageMenu: {
      description: "Menu items of manage menu, including item text and link",
    },
    userMenu: {
      description:
        "User items of user menu, including item text, link and icon key",
    },
    userInfo: {
      description: "User information, including user name and avatar",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Header },
  template: '<Header v-bind="$props"/>',
});

export const Default = Template.bind({});
Default.args = {
  logoUrl: "/logo.svg",
  manageMenu: [{ name: "Role Manage (IAM)", url: "#" }],
  userMenu: [{ name: "Log Out", url: "#", icon: "logout" }],
  userInfo: {
    name: "User 1",
    avatar: "/logo.png",
  },
};
