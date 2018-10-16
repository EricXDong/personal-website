FROM golang:1.11-alpine3.7 as development

# Install git
RUN apk update
RUN apk add git

RUN mkdir -p /go/src/github.com/personal-website-server
WORKDIR /go/src/github.com/personal-website-server

RUN go get -v github.com/pilu/fresh
# `...` tells go to install all its dependencies too
RUN go get -u github.com/golang/dep/...

ADD . .

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

COPY --from=development /go/bin/personal-website-server .

ENTRYPOINT [ "./personal-website-server" ]
