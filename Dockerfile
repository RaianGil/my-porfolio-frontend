FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
COPY .env.production ./
RUN yarn install --frozen-lockfile

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_PUBLIC_SECRETS_ACCESS_KEY true
ENV PRUEBA1 TINGUIRIQUI_TINGUIS_TINGUIS_TINGUIS

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
RUN ls -ltrs
USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "-e", "process.env.PRUEBA1 = 'TINGUIRIQUI_TINGUIS_TINGUIS_TINGUIS';", "server.js"]