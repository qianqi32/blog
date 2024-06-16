// 导入Node.js的路径和文件系统模块
import path from 'node:path';
import fs from 'node:fs';

// 定义项目根目录路径
const DIR_PATH = path.resolve();

// 定义需要排除的文件及目录列表（白名单）
const EXCLUDE_LIST = [
  'index.md', '.vitepress', 'node_modules', '.idea', 'assets',
];

/**
 * 判断给定路径是否为目录
 * @param {string} filePath - 路径字符串
 * @returns {boolean} 如果是目录则返回true，否则返回false
 */
const isDirectory = (filePath) => fs.lstatSync(filePath).isDirectory();

/**
 * 计算两个数组的差集
 * @param {Array} array1 - 第一个数组
 * @param {Array} array2 - 第二个数组，其元素将从array1中移除
 * @returns {Array} 返回差集数组
 */
const difference = (array1, array2) =>
  array1.filter(item => !array2.includes(item));

/**
 * 递归生成侧边栏菜单项
 * @param {Array} entries - 当前层级的文件及目录名数组
 * @param {string} baseDir - 当前遍历的基目录路径
 * @param {string} relativePath - 相对于网站根目录的路径
 * @returns {Array} 生成的侧边栏菜单项数组
 */
function generateSidebarItems(entries, baseDir, relativePath) {
  const result = [];
  entries.forEach(entry => {
    const fullPath = path.join(baseDir, entry);
    if (isDirectory(fullPath)) {
      // 读取子目录下的文件及目录
      const subEntries = fs.readdirSync(fullPath);
      // 递归调用生成子侧边栏项
      result.push({
        text: entry,
        collapsible: true, // 允许折叠
        items: generateSidebarItems(subEntries, fullPath, `${relativePath}/${entry}`),
      });
    } else {
      // 处理Markdown文件，排除其他类型文件
      if (path.extname(entry) === '.md') {
        const itemName = path.basename(entry, '.md'); // 移除文件扩展名
        result.push({
          text: itemName,
          link: `${relativePath}/${itemName}`, // 构建链接
        });
      }
    }
  });
  return result;// 在处理 Markdown 文件时加入排序逻辑
}

/**
 * 根据指定路径生成VitePress侧边栏配置
 * @param {string} targetPath - 目标目录的相对路径
 * @returns {Array} 生成的侧边栏配置数组
 */
export function set_sidebar(targetPath) {
  // 获取目标目录的绝对路径
  const targetDirPath = path.join(DIR_PATH, targetPath);
  // 读取目标目录下的所有条目
  const allEntries = fs.readdirSync(targetDirPath);
  // 过滤掉不需要的条目
  const filteredEntries = difference(allEntries, EXCLUDE_LIST);
  // 调用辅助函数生成侧边栏配置
  return generateSidebarItems(filteredEntries, targetDirPath, targetPath);
}