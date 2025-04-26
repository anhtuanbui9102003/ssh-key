// Lấy tất cả các nút "Thêm vào giỏ"
const addToCartButtons = document.querySelectorAll('.menu-item button');

// Lắng nghe sự kiện click trên mỗi nút
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Sản phẩm đã được thêm vào giỏ!');
    });
});
