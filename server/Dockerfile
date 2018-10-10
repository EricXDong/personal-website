FROM golang:1.11-alpine3.7 as development

# Install git
RUN apk update
RUN apk add git

RUN mkdir -p /go/src/github.com/personal-website-server
WORKDIR /go/src/github.com/personal-website-server
ADD . ./

RUN go get -v github.com/pilu/fresh
# `...` tells go to install all its dependencies too
RUN go get -u github.com/golang/dep/...
RUN dep ensure

# Set GOPATH so `go install` drops the executable in /go/bin
ENV GOPATH /go
RUN go install

EXPOSE 5000
ENTRYPOINT ["fresh"]

FROM alpine:latest

WORKDIR /app

# We only need the executable for prod
COPY --from=development /go/bin/personal-website-server .

EXPOSE 5000
ENTRYPOINT ["./personal-website-server"]
