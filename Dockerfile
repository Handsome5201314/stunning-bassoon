# 使用官方 Node.js 镜像
FROM node:20

# 设置工作目录
WORKDIR /app

# 复制 package*.json 以安装依赖
COPY package*.json ./

RUN npm install --production

# 复制所有项目文件到容器内
COPY . .

# 设置环境变量（如有需要可修改）
ENV NODE_ENV=production

# 启动端口（微信云托管建议监听 0.0.0.0:80）
ENV PORT=80

# 暴露端口
EXPOSE 80

# 启动服务
CMD ["npm", "start"]
