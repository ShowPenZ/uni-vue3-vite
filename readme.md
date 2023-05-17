#### 使用步骤

下载依赖
```yarn```

运行测试环境
```yarn dev:wx```

运行正式环境打包
```yarn build:wx```

### 注意事项

在根目录下新建env文件夹存放环境变量文件，并新增.env.dev文件在文件中添加类似如下内容以VITE_作为前缀名

```javascript
VITE_BASE_URL=http://192.168.10.211:5000
```

同理正式环境配置需要新建文件.env.prod
