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

document.querySelector('.youtube-container').addEventListener('click', function() {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/avd2y6ZvgG8?autoplay=1';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    this.innerHTML = '';
    this.appendChild(iframe);
});