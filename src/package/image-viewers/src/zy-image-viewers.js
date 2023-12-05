
import ImageViewers from "element-ui/packages/image/src/image-viewer.vue";
export default {
    name: 'zy-image-viewers',
    components: { ImageViewers },
    data() {
        return {
            showViewers: false,
            initialIndex: 0, //展示图片下标
        }
    },
    props: {
        images: { type: Array, default: () => [] },
        fileUrl: { type: String, default: 'fileUrl' },
        type: { type: String, default: 'text' }, //展示方式，list:图片矩阵, text: '文字按钮'
        text: { type: String, default: '查看图片' }, //当type为text时展示文字
        imgWidth: { type: String, default: '100px' }, // 当type为list时图片大小
        imgHeight: { type: String, default: '100px' }, //当type为list时图片高度
    },
    methods: {
        showImagesViewers(index) {
            this.initialIndex = index
            this.showViewers = true
        }
    },
    render(h) {
        const urlList = this.images.map((image) => {
            return image[this.fileUrl]
        })
        const viewers = h('image-viewers', {
            props: {
                urlList: urlList,
                initialIndex: this.initialIndex,
                onClose: () => {
                    this.showViewers = false
                }
            }
        })
        // 如果时展示文字，非图片列表
        if (this.type == 'text') {
            const text = h('div', {
                class: 'image-viewers-button',
                on: {
                    click: () => {
                        this.showImagesViewers(0)
                    }
                }
            }, [this.text, this.showViewers ? viewers : null])
            return text
        }
        const images = []
        urlList.forEach((url, index) => {
            const fileNode = h('img', {
                class: 'zy-image-viewers-item',
                attrs: {
                    src: url,
                    width: this.imgWidth,
                    height: this.imgHeight
                },
                on: {
                    click: () => {
                        this.showImagesViewers(index)
                    }
                }
            })
            images.push(fileNode)
        });
        return h('div', {
            class: 'zy-image-viewers'
        }, [...images, this.showViewers ? viewers : null])
    }
}