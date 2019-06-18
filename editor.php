<?php
function get_create_editor() {
    ?>
<iframe id="image-editor" src="https://viewmyvoice.net/wp-content/plugins/vmv/html/editor.html" style="
    width: 100%;
    height: 800px;
    border: 0px;
"></iframe>
<script>
    setTimeout(() => {
        const params = new URLSearchParams(window.location.search);
        const product_id = params.get("product_id");
        const userImageUrl = params.get("img") || localStorage.getItem('img');
        jQuery("#image-editor")[0].contentWindow.postMessage({
            product_id: product_id,
            userImageUrl: userImageUrl
        }, '*')
    }, 200);
</script>
    <?php
}

?>