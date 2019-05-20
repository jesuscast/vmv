<?php
function get_create_editor() {
    ?>
<iframe id="image-editor" src="https://viewmyvoice.net/wp-content/plugins/vmv/html/editor.html" style="
    width: 100%;
    height: 800px;
    border: 0px;
"/>
<script>
setTimeout(() => {
    const params = new URLSearchParams(window.location.search);
    const product_id = params.get("product_id");
    jQuery("#image-editor")[0].contentWindow.postMessage({
        product_id: product_id
    }, '*')
}, 200);
</script>
    <?php
}

?>