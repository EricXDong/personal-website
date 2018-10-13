# CLIENT BUILD

FROM node:8.9.4 as client

RUN mkdir /app
WORKDIR /app

ADD ./client ./

RUN yarn install
RUN yarn build

ENTRYPOINT [ "yarn start" ]

# SERVER BUILD

FROM golang:1.11-alpine3.7 as server

# Install git
RUN apk update
RUN apk add git

RUN mkdir -p /go/src/github.com/personal-website-server
WORKDIR /go/src/github.com/personal-website-server
ADD ./server ./

# Copy client build over
RUN mkdir public
COPY --from=client /app/build ./public

RUN go get -v github.com/pilu/fresh
# `...` tells go to install all its dependencies too
RUN go get -u github.com/golang/dep/...
RUN dep ensure

# Set GOPATH so `go install` drops the executable in /go/bin
ENV GOPATH /go
RUN go install

EXPOSE 5000
ENTRYPOINT ["fresh"]

# PRODUCTION BUILD

FROM alpine:latest

RUN mkdir /app
WORKDIR /app

COPY --from=server /go/bin/personal-website-server .
COPY --from=client /app/build .

ENTRYPOINT [ "./personal-website-server" ]
