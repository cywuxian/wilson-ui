<template>
    <div @contextmenu.prevent.stop="__rightClick($event)">
        <slot></slot>
        <div class="zy-right-meun-body" v-if="showMenu" @click="__closeMenusList">
            <div class="zy-right-meun-body-list" :style="{ left: `${menuLeft}px`, top: `${menuTop}px` }">
                <div v-for="item in menus" :key="item.text" class="zy-right-meun-body-list-item" @click="__clickItem(item)">
                    {{ item.label }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'zy-right-menu',
    props: {
        menus: {
            type: Array,
            default: () => [
                {
                    label: '删除'
                },
                {
                    label: '编辑'
                },
                {
                    label: '更新'
                }
            ]
        }
    },
    data() {
        return {
            showMenu: false,
            menuTop: 100,
            menuLeft: 200
        }
    },
    methods: {
        __rightClick(e) {
            if (this.showMenu) return
            this.menuTop = e.pageY
            this.menuLeft = e.pageX
            this.showMenu = true
        },
        __closeMenusList() {
            this.showMenu = false
        },
        __clickItem(val) {
            console.log(val.label)
            this.$emit('click', val)
            this.__closeMenusList()
        }
    }
}
</script>
