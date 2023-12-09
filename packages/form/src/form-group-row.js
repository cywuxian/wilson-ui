export default {
  name: "zy-form-group-row",
  inject: ["model", "_colSpan", "labelWidth"],
  props: {
    //字段名，标题
    label: String,
    //字段值
    prop: String,
    // 内容所占的宽度，计算公式：标题(3) + 内容宽度 = colSpan,
    // 如： colSpan为12，其中标题固定为3，内容即prop展示位置，宽度为9
    // 这里值得注意的_colSpan,该字段由ZyFormGroup根据展示列数(24/列数)得到的内容宽度，该值为平均值
    // colSpan优先级高于_colSpan,可以根据需求样式调整colSpan
    colSpan: {
      type: Number,
    },
  },
  /* eslint-disable */
  render(h, ctx) {
    const model = this.model();
    // 获取内容所占的列宽
    const spanWidth = this.colSpan > 0 ? this.colSpan : this._colSpan();
    const style = {
      class: "zy-form-group-row",
      attrs: {
        colspan: spanWidth, // 减去标题的3个占位空间
      },
    };
    const title = h(
      "div",
      {
        class: "zy-form-group-row-head",
        style: {
          width: this.labelWidth,
        },
      },
      [this.label]
    );
    //如果没有做自定义，那么常规默认展示文本。
    if (!this.$scopedSlots.default) {
      let prop = this.prop;
      let value = model[prop];
      //内联数据处理,暂时不支持数组
      if (prop.indexOf(".") != -1) {
        const keys = prop.split(".");
        value = JSON.parse(JSON.stringify(model));
        keys.forEach((key) => {
          value = value[key];
        });
      }
      const label = h(
        "div",
        {
          class: "zy-form-gtoup-row-content",
        },
        [value || "——"]
      );
      const box = h(
        "div",
        {
          class: "zy-form-group-row-box",
        },
        [title, label]
      );
      return h("td", style, [box]);
    }
    //渲染自定义样式
    const label = h(
      "span",
      {
        class: "zy-form-gtoup-row-content",
      },
      [this.$scopedSlots.default({ props: this.$props, model: model })]
    );
    const box = h(
      "div",
      {
        class: "zy-form-group-row-box",
      },
      [title, label]
    );
    return h("td", style, [box]);
  },
};
