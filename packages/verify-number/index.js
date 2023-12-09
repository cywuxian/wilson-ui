import VerifyNumber from "./src/verify-number"
VerifyNumber.install = function (Vue) {
    Vue.component(VerifyNumber.name, VerifyNumber);
};
export default VerifyNumber;