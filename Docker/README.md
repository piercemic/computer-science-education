# Docker
Docker is an open platform designed to help developers build, share, and run applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. Basically, you can manage your infrastructure in the same ways you manage your applications. Allowing applications to run quickly and reliably from one computing environment to another.
<br/><br/>
## How does Docker work?
Docker uses containers - isolated processes on the host machine that package up code and all its dependencies.  Each container is built by an executable container image at runtime that contains dependencies like nodejs, any configuration like environment variables, or scripts to run. While a container can create, update, and delete files, those changes are lost when the container is removed and all changes are isolated to that container. <br/> However container volumes provide the ability to connect specific filesystem paths of the container back to the host machine. Volumes allow data persistence by connecting to the container to the host machine. If a directory in the container is mounted, changes in that directory are also seen on the host machine. If we mount that same directory across container restarts, we'd see the same files.<br/>Dockerfile is a text-based script of instructions that is used to create a container image.
<br/><br/>
## How To Build A Docker Container Image
### *Setup*
- DockerAPI
- Docker account

### *Implementation*
1. **Create a Dockerfile** <br/>
 A Dockerfile is a text-based file without an extention that contains a script of instructions to create a container image. Example:<br/>
```
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000
```
2. **Build the container image**<br/>
```
docker build -t getting-started .
```
  - `docker build` command initiates the Dockerfile to build a new container image
  - `-t` flag tags the image with the name `getting-started`
  - `.` indeicates that the location of the Dockerfile is in the current root directory
3. **Start the container app**
```
docker run -dp 3000:3000 getting-started
```
- `docker run` command starts the container
- `-d` flag runs a container in "detached" mode or in the background
- `-p` flag creates a mapping between the hosts port to the containers port
- In this example, you can access your app in the browser at `http://localhost:3000`.
4. **Update the app**<br/>
To see any code changes come through you'll need to update the application and container image.<br/>
    A. Get the container ID, stop the container, and remove the container.
    ```
    docker ps
    docker stop <the-container-id>
    docker rm <the-container-id>
    ```
    or use<br/>
    ```
    docker rm -f <container-id>
    ```
    B. Start the container, then refresh your browser.
    ``` 
    docker run -dp 3000:3000 getting-started
    ```
5. **Share the app**<br/>
To share Docker images, you have to use a Docker registry. <br/>
    A. Create a repo on Docker Hub if you haven't already.<br/>
    B. Tag the existing image with another name. <br/>
    ```
    docker tag getting-started YOUR-USER-NAME/getting-started
    ```
    C. Push to Docker Hub
    ```
    docker push YOUR-USER-NAME/getting-started
    ```
    D. Optionally, run this new instance going to [Play with Docker](https://labs.play-with-docker.com/), selecting "ADD NEW INSTANCE", and starting your app.
    ```
    docker run -dp 3000:3000 YOUR-USER-NAME/getting-started
    ```
6. **Persist the DB**<br/>
Named Volumes<br>
A container is wiped clean each time the container is launched, unless volumes are used.
A named volume is like a bucket of data because Docker maintains the physical location of the disk and you only need to know the name of the volume. <br/>
    A. Create a volume using the demo repo's default SQLite Database, a relational database in which all of the data is stored in a single file.
    ```
    docker volume create todo-db
    ```
    B. Stop container.
    C. Start the container with `-v` flag to specify the volume mount.
    ```
    docker run -dp 3000:3000 -v todo-db:/etc/todos getting-started
    ```
    D. Add data to the todo appl. Stop current container and start a new container. The data entered in the app should appear.<br/>
    E. `docker volume inspect todo-db` to view the data. `Mountpoint` is the actual location on the disk where the data is stored.<br>
Bind mounts<br>
Set the exact mountpoint on the host so the container can see code changes instantly. Docker recommends nodemon to watch for file changes.

<table>
  <tr>
    <th></th>
    <th>Names Volumes</th>
    <th>Bind Mounts</th>
  </tr>
  <tr>
    <td>Host Location</td>
    <td>Docker chooses</td>
    <td>You control</td>
  </tr>
  <tr>
    <td>Mount Example</td>
    <td>my-volume:/usr/local/data</td>
    <td>/path/to/data:/usr/local/data</td>
  </tr>
  <tr>
    <td>Populates new volume with container contents</td>
    <td>Yes</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Supports Volume Drivers</td>
    <td>Yes</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Tradeoffs</td>
    <td>Perists data without association to a specific container, but container needs to be restarted each time.</td>
    <td>Updates source code without creating a new image, but is associated to a specific container.</td>
  </tr>
</table>
<br>

7. **Multi container app**<br/>
- Each container should do one thing and do it well.
- If two containers are on the same network, they can talk to each other. If they aren’t, they can’t.
- There are two ways to put a container on a network: 1) Assign it at start or 2) connect an existing container. For now, we will create the network first and attach the MySQL container at startup.
- While using env vars to set connection settings is generally ok for development, it is HIGHLY DISCOURAGED when running applications in production. [More information](https://blog.diogomonica.com//2017/03/27/why-you-shouldnt-use-env-variables-for-secret-data/)
```
docker run -dp 3000:3000 \
   -w /app -v "$(pwd):/app" \
   --network todo-app \
   -e MYSQL_HOST=mysql \
   -e MYSQL_USER=root \
   -e MYSQL_PASSWORD=secret \
   -e MYSQL_DB=todos \
   node:18-alpine \
   sh -c "yarn install && yarn run dev"
```
8. **Use Docker Compose**<br>
Docker Compose is a tool that was developed to help define and share multi-container applications. With Compose, we can create a YAML file to define the services and with a single command, can spin everything up or tear it all down.<br>
The big advantage of using Compose is you can define your application stack in a file, keep it at the root of your project repo (it’s now version controlled), and easily enable someone else to contribute to your project. Someone would only need to clone your repo and start the compose app. In fact, you might see quite a few projects on GitHub/GitLab doing exactly this now. <br>
`docker-compose.yml`
```
services:
  app:
    image: node:18-alpine
    command: sh -c "yarn install && yarn run dev"
    ports:
      - 3000:3000
    working_dir: /app
    volumes:
      - ./:/app
    environment:
      MYSQL_HOST: mysql
      MYSQL_USER: root
      MYSQL_PASSWORD: secret
      MYSQL_DB: todos

  mysql:
    image: mysql:8.0
    volumes:
      - todo-mysql-data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: todos

volumes:
  todo-mysql-data:
```

`docker compose up -d` to start the app with everything running in the background and `docker compose down` to tearn down.