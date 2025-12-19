# Base image met node + pnpm (corepack)
FROM node:22-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
# nodig voor native deps zoals argon2
RUN apk add --no-cache libc6-compat

# dev dependencies
FROM base AS dev-deps

WORKDIR /app
COPY package.json pnpm*.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# prod dependencies
FROM base AS prod-deps

WORKDIR /app
COPY package.json pnpm*.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# build stage
FROM base AS builder

WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# runtime
FROM base AS runner

WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/migrations ./migrations

EXPOSE 3000

CMD ["node", "dist/src/main"]
