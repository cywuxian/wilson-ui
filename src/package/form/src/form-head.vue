<template>
  <div class="zy-form-head">
    <div class="zy-form-head-info">
      <div class="zy-form-head-info-title">{{ title }}</div>
      <div class="zy-form-head-info-content">
        <div
          class="zy-form-head-info-content-item"
          v-for="row in content"
          :key="row.key"
        >
          {{ row.label }}
          <span :style="row.style ? row.style(model) : ''">
            {{ model[row.key] || "——" }}
          </span>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "zy-form-head",
  props: {
    //原始数据
    model: {
      type: Object,
      default: () => {
        return {};
      },
    },
    //表单标题
    title: {
      type: String,
    },
    // 标题下方详情标题配置，可以根据需求进行修改
    content: {
      type: Array,
      default: () => [
        {
          label: "单据编号：",
          key: "billCode",
        },
        {
          label: "单据状态：",
          key: "billStatusStr",
          // 真的值不同，可以自定义样式，
          style: (val) => {
            let color = "color: #606266;";
            switch (val.billStatus) {
              case 0: {
                color = "color: #1768B4;";
                break;
              }
              case 1: {
                color = "color: #E6A23C;";
                break;
              }
              case 2: {
                color = "color: #67C23A;";
                break;
              }
              default: {
                color = "color: #606266;";
              }
            }
            return color;
          },
        },
        {
          label: "单据类型：",
          key: "billTypeStr",
        },
      ],
    },
  },
};
</script>
