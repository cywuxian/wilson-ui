<template>
    <div class="zy-verify-number">
        <div id="picyzm" />
        <input type="text" v-model="inputCode" ref="inputRef" autofocus @keyup="startVerify" />
        <template v-if="inputCode.length == 4">
            <span v-if="value" class="zy-verify-number-success">验证成功</span>
            <span v-else class="zy-verify-number-fail">验证失败</span>
        </template>
    </div>
</template>

<script>
import GVerify from './verify';
export default {
    name: 'zy-verify-number',
    data() {
        return {
            inputCode: '',
            verifyValue: null
        }
    },
    props: {
        verifyType: {
            type: String,
            default: 'number'//number 数字，blend字母数字混合
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        this.verifyValue = new GVerify({
            id: "picyzm", // 绘制验证码的区域id
            type: this.type
        });
    },
    methods: {
        startVerify() {
            console.log(this.verifyValue);
            if (this.inputCode.length < 4) return;
            const res = this.verifyValue.validate(this.inputCode);
            this.$emit('input', res)
            this.verifyValue.refresh();
        }
    }
}
</script>