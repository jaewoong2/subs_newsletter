FROM node:18-alpine AS base

# Install dependencies needed for certain node modules
RUN apk add --no-cache --virtual .gyp python3 make g++ \
    && apk del .gyp

RUN apk add --update --no-cache python3 build-base gcc && ln -sf /usr/bin/python3 /usr/bin/python

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install yarn package manager
RUN apk add --no-cache yarn

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock ./
RUN yarn

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "start"]
