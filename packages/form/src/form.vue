<template>
    <div class="zy-form">
        <!-- 表单标题，head配置组件为zy-form-head -->
        <div v-if="$slots.head">
            <slot name="head"></slot>
        </div>
        <!--slot使用zy-form-group嵌套zy-form-group-row
        示例：
        <zy-form-groud title="示例标题" :model="model">
            <zy-form-group-row label="标题" prop="key值">
                <template slot-scope="{model, props}">{{scope.model}}{{model.props}}</template>
            </zy-form-group-row>
        </zy-form-groud> -->
        <slot />
    </div>
</template>

<script>
export default {
    name: 'zy-form',
    provide() {
        return {
            labelWidth: this.labelWidth
        }
    },
    props: {
        labelWidth: { type: String, default: '120px' }
    }
}
</script>

