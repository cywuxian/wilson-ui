<template>
  <div class="zy-form-group">
    <zy-form-group-head
      v-if="title.length > 0"
      :title="title"
    ></zy-form-group-head>
    <div class="zy-form-group-table">
      <table
        border="1"
        width="100%"
      >
        <tr v-show="false">
          <th
            v-for="index in 24"
            :key="`th_${index}`"
          >
            {{ index }}
          </th>
        </tr>
        <tr
          v-for="(row, trIndex) in rows"
          :key="`tr_${trIndex}`"
        >
          <template v-for="(td, tdIndex) in row">
            <zy-form-row
              :key="`td_${trIndex}_${tdIndex}_row`"
              :vnode="td"
            ></zy-form-row>
          </template>
        </tr>
      </table>
      <div v-show="false">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "zy-form-group",
  provide() {
    return {
      model: () => this.model,
      _colSpan: () => this.colSpan,
    }
  },
  data() {
    return {
      rows: [],
    }
  },
  components: {
    ZyFormRow: {
      functional: true,
      render(h, ctx) {
        const { vnode } = ctx.props
        return vnode
      },
    },
  },
  computed: {
    colSpan() {
      return 24 / this.colNumber
    },
  },
  props: {
    // 渲染展示的列数，标题+内容为一列。
    colNumber: {
      type: Number,
      default: 3,
    },
    //分栏标题
    title: {
      type: String,
      default: "",
    },
    // 原始数据
    model: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  watch: {
    "$slots.default": {
      deep: true,
      immediate: true,
      handler() {
        this.$nextTick(() => {
          this.__updateTdRow()
        })
      },
    },
  },
  methods: {
    __updateTdRow() {
      const slots = this.$slots.default
      const items = []
      let array = []
      let _colSpan = 0
      for (let i = 0; i < slots.length; i++) {
        const row = slots[i]
        //过滤掉所有非zy-form-group-row组件
        if (!row.tag || row.tag.indexOf("zy-form-group-row") == -1) continue

        // 如果设置了指定列宽，则用指定的，否则根据设置的列数作平均
        let propsSpan = row.componentOptions.propsData.colSpan
        let colSpan = propsSpan > 0 ? propsSpan : this.colSpan
        if (colSpan > 24) {
          colSpan = 1
        }
        const tolColSpan = _colSpan + colSpan
        //如果未超出，则往里面加入
        if (tolColSpan < 24) {
          array.push(row)
          _colSpan += colSpan
        } else if (tolColSpan == 24) {
          // 如果刚好等于，往里面加入的同时需要把array缓存清空
          array.push(row)
          items.push(array)
          array = []
          _colSpan = 0
          continue // 跳过该循环，这里很重要，不然如果它是最后一个数据，会在下面重复添加
        } else {
          // 当大于时当前，应独立开始一行。
          items.push(array)
          array = []
          _colSpan += colSpan
          array.push(row)
        }
        // 最后一条数据时，把数据添加进去
        if (i == slots.length - 1) {
          items.push(array)
        }
      }
      this.rows = items
    },
  },
}
</script>
