# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

yarn
yarn dev


📂 src/

    📂 src/assets/
    Chứa hình ảnh, font, SCSS,...

    📂 src/components/
    Chứa các component tái sử dụng ở share và các component cho từng page.


    📂 src/composables/
    Chứa các composable functions (useXxx.js) để tách logic xử lý.

    📂 src/directives/
    Chứa các custom directives (chỉ thị tùy chỉnh)
    → Dùng để tái sử dụng logic DOM phức tạp ngoài phạm vi component.


    📂 src/layouts/
    Định nghĩa layout tổng thể (ví dụ: layout có navbar, sidebar,...).


    📂 src/views/
    Chứa các component trang tương ứng với từng route.


    📂 src/router/
    Cấu hình Vue Router (index.js) cho client-side routing.
    Xác định đường dẫn URL và trang tương ứng.

    📂 src/stores/
    Chứa các Pinia stores (userStore.js, cartStore.js, etc.).

    Giống Redux store của React+
    📂 src/utils/
    Chứa các hàm tiện ích như định dạng ngày, xử lý chuỗi,...

📄 App.vue
    Component gốc của ứng dụng (root component).

    Nơi chứa layout chính, router-view và cấu trúc tổng thể.

📄 main.js
    File entry point khởi tạo ứng dụng Vue, mount vào DOM.

    Import store, router, và cấu hình global.


