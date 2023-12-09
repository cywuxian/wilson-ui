import RichText from "./src/rich-text.vue"
RichText.install = function (Vue) {
    Vue.component(RichText.name, RichText);
};
export default RichText;