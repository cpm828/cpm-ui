## cpm-ui开源项目基于vue-cli2改造，结构如下：

```
├── build: webpack编译打包
│
├── config: webpack配置文件
│
├── examples: cpm-ui教程，最后会存放在cpm828.github.io/cpm-ui项目中，使用github page服务访问
│   ├── demo: 各组件demo编译后代码
│   ├── fontdemo: 阿里巴巴矢量库图表使用教程，详细列举了cIcon组件所包含的icon
│   └── src: 各组件demo开发时代码
│
├── src: cpm-ui开源组件，对应于安装cpm-ui后node_modules中文件
│   ├── assets: 组件使用的静态资源，如icon等
│   ├── packages: 各组件
│   │   ├── toast
│   │   ├── loading
│   │   └── dialog
│   │
│   ├── util: 各组件demo开发时代码
│   ├── index.js: 以对象的形式输出全部组件
│   ├── package.json: 发布npm
│   └── README.md: npm官网cpm-ui使用介绍
│
├── static: 站点静态资源
│
├── test: 测试
│
├── package.json  
└── README.md: github cpm-ui使用介绍
```


开发流程：

流程一：1. 开发src/packages组件 -> 2. 测试通过后使用npm发布

流程二：1. 编写examples/demo教程 -> 2. 发布到cpm828.github.io/cpm-ui上
```bash
npm run build

npm run deploy # 发布dist目录到cpm-ui工程的gh-pages分支上
```

流程三：1. 进入另一个工程cpm-ui-docs编写说明文档 -> 2. 发布到cpm828.github.io/cpm-ui-docs上
```bash
npm run build

npm run deploy # 发布dist目录到cpm-ui-docs工程的gh-pages分支上
```