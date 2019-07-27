<?php
function get_create_editor() {
    $user = wp_get_current_user();
    ?>

<input type="hidden" value="<?php echo $user->ID ?>" id="wp-user-id" />
<iframe id="image-editor" src="https://viewmyvoice.net/wp-content/plugins/vmv/html/editor.html" style="
    width: 100%;
    height: 800px;
    border: 0px;
"></iframe>
<script>
    setTimeout(() => {
        const params = new URLSearchParams(window.location.search);
        const product_id = params.get("product_id");
        const userImageUrl = localStorage.getItem('img');
        jQuery("#image-editor")[0].contentWindow.postMessage({
            product_id: product_id,
            userImageUrl: userImageUrl
        }, '*')
    }, 200);
</script>
    <?php
}

function get_product_list() {
    ?>
    <input type="hidden" value="<?php echo $user->ID ?>" id="wp-user-id" />
    <iframe id="image-editor" src="https://viewmyvoice.net/wp-content/plugins/vmv/html/selection.html" style="
        width: 100%;
        border: 0px;
        height: 1200px;
        overflow: scroll;
    "></iframe>
    <script>
        setTimeout(() => {
            const params = new URLSearchParams(window.location.search);
            const userImageUrl = localStorage.getItem('img');
            jQuery("#image-editor")[0].contentWindow.postMessage({
                userImageUrl: userImageUrl
            }, '*')
        }, 200);
    </script>
        <?php
}

?>