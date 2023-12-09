import RightMenu from "./src/right-menu.vue"
RightMenu.install = function (Vue) {
    Vue.component(RightMenu.name, RightMenu);
};
export default RightMenu;