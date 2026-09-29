FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/api/package.json apps/api/
RUN pnpm install --frozen-lockfile --filter api...
COPY apps/api apps/api
RUN pnpm --filter api build

FROM node:22-alpine
WORKDIR /app
RUN apk add --no-cache ffmpeg
ENV NODE_ENV=production
COPY --from=build /app /app
USER node
CMD ["node", "apps/api/dist/main.js"]