FROM node:22.12-slim As build

WORKDIR /usr/src/app

COPY yarn.lock package.json ./

RUN yarn install --frozen-lockfile

COPY . .

RUN ln -sf /usr/share/zoneinfo/Asia/Bangkok /etc/localtime

ARG NEXT_PUBLIC_BASE_URL \
    NEXT_PUBLIC_BRANCH

ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL \
    NEXT_PUBLIC_BRANCH=$NEXT_PUBLIC_BRANCH

RUN yarn run build

FROM node:22.12-slim As production

WORKDIR /usr/src/app

# Copy the built application from the previous stage
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/node_modules ./node_modules

RUN ln -sf /usr/share/zoneinfo/Asia/Bangkok /etc/localtime

CMD ["yarn", "start", "-p", "3000"]
