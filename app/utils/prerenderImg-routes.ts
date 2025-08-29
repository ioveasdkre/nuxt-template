// 讀取 public/images 資料夾中的所有圖片路徑
import fs from 'fs';
import path from 'path';

export const usePrerenderImageRoutes = (dir: string) => {
  const routes: string[] = [];
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      routes.push(...usePrerenderImageRoutes(filePath)); // 遞迴子資料夾
    } else {
      // 確保是圖片檔，可以根據副檔名判斷
      if (['.jpg', '.jpeg', '.png', '.gif', '.svg'].includes(path.extname(filePath))) {
        // Nuxt Image 的預渲染路徑格式，相對於 public 資料夾
        routes.push(
          `/_ipx/_/images/${path.relative('public/images', filePath).replace(/\\/g, '/')}`,
        );
      }
    }
  }
  return routes;
};
