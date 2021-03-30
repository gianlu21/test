#use an existing docker image as a base
FROM node


RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

#dowload and install a dependency
RUN npm install

COPY . .

EXPOSE 3000

#tell the image what to do when it starts as a container
#a comand that we want to run when the container is first created
CMD ["npm", "start"]
