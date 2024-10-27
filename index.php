<?php
// Ví dụ sử dụng exec() trên Linux
$output = shell_exec('iwconfig');
if (strpos($output, 'wlan') !== false) {
    echo "Đang sử dụng kết nối WiFi";
} else {
    echo "Đang sử dụng kết nối khác";
}


?>


<script>
    if (navigator.connection) {
    console.log(navigator.connection.type); // Ví dụ: wifi, cellular
}
</script>