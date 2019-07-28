<?php
include 'create_product_default_view.php';
include 'editor.php';

function image_editor_view_func() {
    return get_create_editor();
}

function product_list_view_func() {
    return get_product_list();
}

function get_product_history_func() {
    return get_product_history();
}
?>

