const path = require("path");

console.log(path.sep); // 获取平台特定的路径片段分隔符，windows->'\',

// const dirname = __dirname; // 当前模块文件所在文件夹的绝对路径  = path.dirname('./')
// const filename = __filename; // 当前模块文件的绝对路径

// // path.join([path1][,path2][,...])   用分隔符将参数path连接，生成规范路径,
// const joinPath = path.join(__dirname, "text", "aaa.js"); //   C:\dev\project\componentsExpressProject\server\text\aaa.js
// const joinPath1 = path.join("/aaa", "/bbb", "ccc", "./ddd", "../eee"); //   \aaa\bbb\ccc\eee

// // path.resolve([path][,path1][,...])   将路径或路径片段解析成绝对路径，
// // 给定的路径序列会从右到左进行处理，后面的每个 path 会被追加到前面，直到构造出绝对路径
// const resolvePath = path.resolve("/foo/bar", "baz");
// const resolvePath1 = path.resolve("/foo/bar", "./baz");
// const resolvePath2 = path.resolve("foo/bar", "/baz");
// const resolvePath3 = path.resolve("/foo/bar", "/baz");
// const resolvePath4 = path.resolve("/foo", "/bar", "baz");

// 如果没有传入 path 片段，或传入当前工作目录，则 path.resolve() 会返回当前工作目录的绝对路径
console.log(path.resolve()); // C:\dev\project\componentsExpressProject
console.log(path.resolve("."));
console.log(path.resolve("./"));
// 
console.log(path.resolve("/")); // C:\     

// 如果在处理完所有给定的 path 片段之后还未生成绝对路径，则会将拼接后的字符串放到当前工作目录的绝对路径后面生成绝对路径
const resolveAbsPath = path.resolve("foo/bar", "baz");
const resolveAbsPath1 = path.resolve("aaa", "foo/bar/", "../baz/image.gif");

const relativePath = path.relative("/home/page/aaa/bbb", "/home/src/fd");

// console.log(dirname);
// console.log(filename);
// console.log(filePath, 222);
// console.log(joinPath);
// console.log(joinPath1, "11111111");
// console.log(resolvePath);
// console.log(resolvePath1);
// console.log(resolvePath2);
// console.log(resolvePath2);
// console.log(resolvePath3);
// console.log(resolvePath4);
console.log(relativePath);
console.log(path.dirname("./index"));
