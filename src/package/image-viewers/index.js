import ZyImageViewers from "./src/zy-image-viewers"
ZyImageViewers.install = function (Vue) {
    Vue.component(ZyImageViewers.name, ZyImageViewers);
};
export default ZyImageViewers;