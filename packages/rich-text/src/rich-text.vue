<template>
    <editor v-model="model" :disabled="readonly" :init="init" id="tiny-textarea" ref="editor"></editor>
</template>

<script>
import Editor from "@tinymce/tinymce-vue"
const uploadFile = function (file, succFun, failFun, uplodaPath) {
    var xhr, formData;
    xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("POST", uplodaPath);
    xhr.onload = function () {
        var json;
        if (xhr.status != 200) {
            failFun("HTTP Error: " + xhr.status);
            return;
        }
        json = JSON.parse(xhr.responseText);
        if (!json) {
            failFun("Invalid JSON: " + xhr.responseText);
            return;
        }
        const result = json.data[0];
        succFun(result.fileUrl, { text: result.fileName }); //成功回调函数 text 显示的文本
    };
    formData = new FormData();
    formData.append("file", file, file.name); //此处与源文档不一样
    xhr.send(formData);
};
export default {
    name: 'zy-rich-text',
    components: {
        Editor
    },
    data() {
        return {
            model: ''
        }
    },
    watch: {
        value: {
            immediate: true,
            handler(val) {
                this.model = val
            }
        },
        model: {
            handler() {
                this.$emit('input', this.model)
            }
        }
    },
    props: {
        value: String,
        height: { type: Number },
        width: { type: Number },
        minHeight: { type: Number, default: 300 },
        minWidth: { type: Number, default: 720 },
        placeholder: { type: String, default: '请输入' },
        languageUrl: { type: String, default: '/js/tinymce/langs/zh-Hans.js' },
        uplodaPath: { type: String, default: '/zy-park/pub/file/uploadFile' },
        readonly: { type: Boolean, default: false },
        toolbar: {
            type: String,
            default: 'undo redo |bold italic underline strikethrough  alignleft aligncenter alignright alignjustify outdent indent removeformat |  hr table |link image media importword upfile | code preview fullscreen'
        },
        menubar: { type: String, default: 'edit insert  format' }
    },
    computed: {
        init() {
            const weakThis = this
            return {
                selector: '#tiny-textarea',
                height: this.height,
                width: this.width,
                min_height: this.minHeight,
                min_width: this.minWidth,
                language_url: this.languageUrl,
                language: 'zh-Hans',
                statusbar: false,
                typeahead_urls: true,
                menubar: this.menubar,
                placeholder: this.placeholder,
                plugins:
                    "lists, advlist, image, autolink, link, autosave, code, fullscreen, hr, table, media, imagetools, preview, paste, importword, upfile, layout, upfile", //依赖lists插件
                toolbar: this.toolbar,
                paste_data_images: true,
                images_upload_url: this.uplodaPath,
                images_upload_handler: function (blobInfo, succFun, failFun) {
                    var file = blobInfo.blob(); //转化为易于理解的file对象
                    uploadFile(file, succFun, failFun, weakThis.uplodaPath);
                },
                file_callback: function (file, succFun) {
                    uploadFile(file, succFun, () => { }, weakThis.uplodaPath);
                }
            }
        }
    }
}
</script>
