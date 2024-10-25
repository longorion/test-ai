function changeContent(contentId) {
    // Ẩn tất cả các phần tử nội dung
    const contentItems = document.querySelectorAll('.content-item');
    contentItems.forEach(item => {
        item.classList.add('d-none');
    });

    // Hiển thị phần tử nội dung tương ứng
    const activeContent = document.getElementById(contentId);
    if (activeContent) {
        activeContent.classList.remove('d-none');
    }
}