import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// let target;
// if (process.env.NODE_ENV == 'production') {
//   target = "node-koa-app.azurewebsites.net"
// }
// else {
// 	target = 'http://localhost:5501'
// }

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	server: {
    proxy: {
      "/api/test": {
        target: 'http://localhost:8080',
        changeOrigin: true
      },
      "/api/dish": {
        target: 'http://localhost:8080',
        changeOrigin: true
      },
      "/api/allPublicMainDishes": {
        target: 'http://localhost:8080',
        changeOrigin: true
      },
    },
  },
});
