<?php
function get_create_editor() {
    $user = wp_get_current_user();
    if ( 0 == $current_user->ID ) {
        ?>
        <input type="hidden" value="<?php echo $user->ID ?>" id="wp-user-id" />
        <?php
    } else {

    }
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
        const userImageUrl = localStorage.getItem('img');
        const hiddenField = document.getElementById("wp-user-id");
        let userId = null;
        if (hiddenField) {
            userId = hiddenField.value;
        }
        jQuery("#image-editor")[0].contentWindow.postMessage({
            product_id: product_id,
            userImageUrl: userImageUrl,
            userId
        }, '*')
    }, 200);
</script>
    <?php
}

function get_product_list() {
    $user = wp_get_current_user();
    if ( 0 == $current_user->ID ) {
        ?>
        <input type="hidden" value="<?php echo $user->ID ?>" id="wp-user-id" />
        <?php
    } else {

    }
    ?>
    <iframe id="image-editor" src="https://viewmyvoice.net/wp-content/plugins/vmv/html/selection.html" style="
        width: 100%;
        border: 0px;
        height: 1200px;
        overflow: scroll;
    "></iframe>
    <script>
        window.addEventListener("message", receiveMessage, false);

        function receiveMessage(event) {
            console.log(`Received ${JSON.stringify(event.data)}`);
            if (event.data.status === 'loaded') {
                const params = new URLSearchParams(window.location.search);
                const hiddenField = document.getElementById("wp-user-id");
                const userImageUrl = localStorage.getItem('img');
                let userId = null;
                if (hiddenField) {
                    userId = hiddenField.value;
                }
                console.log("holla");
                jQuery("#image-editor")[0].contentWindow.postMessage({
                    userImageUrl,
                    userId
                }, '*');
                if(jQuery('.woocommerce-info')) {
                    jQuery('.woocommerce-info').remove()
                }
            }
        }
    </script>
        <?php
}

function get_product_history() {
    $user = wp_get_current_user();
    if ( 0 == $current_user->ID ) {
        ?>
        <input type="hidden" value="<?php echo $user->ID ?>" id="wp-user-id" />
        <?php
    } else {

    }
    ?>
    <iframe id="image-editor" src="https://viewmyvoice.net/wp-content/plugins/vmv/html/product_history.html" style="
        width: 100%;
        border: 0px;
        height: 1200px;
        overflow: scroll;
    "></iframe>
    <script>

        window.addEventListener("message", receiveMessage, false);

        function receiveMessage(event) {
            console.log(`Received ${JSON.stringify(event.data)}`);
            if (event.data.status === 'loaded') {
                const params = new URLSearchParams(window.location.search);
                const hiddenField = document.getElementById("wp-user-id");
                let userId = null;
                if (hiddenField) {
                    userId = hiddenField.value;
                }
                console.log("holla");
                jQuery("#image-editor")[0].contentWindow.postMessage({
                    userId
                }, '*');
                if(jQuery('.woocommerce-info')) {
                    jQuery('.woocommerce-info').remove()
                }
            }
        }
    </script>
        <?php
}

?>