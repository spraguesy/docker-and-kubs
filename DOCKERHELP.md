<h1>Docker: A Primer</h1>
<hr>

<h3>
Docker Files
</h3>
<p>
Docker files are composed of docker commands. These are set of commands that
tell docker how to build the container. This process usually starts from a
base container, which is a container that already has programs installed. These
are the most important commands:
<ul>
<li><code>FROM</code></li>
<li><code>RUN</code></li>
<li><code>CMD</code></li>
</ul>

<code>FROM</code> tells the docker server what base image to use. <code>RUN</code> tells
the container what to do to the container. <code>CMD</code> tells the container what
command to run on startup.

</p>

Here is an example:

    # Use an existing docker image as a base
    FROM alpine

    # set working directory
    WORKDIR /usr/app

    # Download and install a dependency
    RUN apk add --update redis

    # Tell the image when to do when it starts as a container
    CMD ["redis-server"]

This Dockerfile uses the alpine base (alpine refers to the minimal installation of something, i.e. no fluff or junk).
It sets the working directory to /use/app so we can use that as our root directory.
It updates redis. And then tell the container to run the redis server command on startup.

<h5>Copy files into container</h5>
<p>
<code>COPY ./path/to/folder/of/files/to/copy ./path/to/folder/to/paste/in</code>
</p>
<ul>
	<li>If you specify a WORKDIR then ./ is the working directory. Otherwise it is root.</li>
</ul>
<br>

<hr/>
<h3>
Docker Lifecycle
</h3>

<!-- Docker Group -->
<h5>Docker Group</h5>
<p>
<code>newgrp docker</code>
</p>
<ul>
<li>Changes the group do the docker group</li>
<li>Allows docker ot run with same permissions as sudo</li>
<li>Must great the docker group first</li>
<li><a href="https://docs.docker.com/install/linux/linux-postinstall/">Link here for the post-installation reference</a></li>
</ul>
<br/>

<!-- Build a Container -->
<h5>Build a Container</h5>
<p>
<code>docker build -t &ltusername/project:versiosn&gt &ltdocker_folder&gt</code>
</p>
<ul>
<li>Builds a container from the docker file within the folder</li>
<li>-t adds the image name to the container you are building</li>
<li>-n adds the name to the container you are building</li>
</ul>
<br/>

<!-- Run a Container -->
<h5>Run a Container</h5>
<p>
<code>docker run &ltcontainer_name&gt</code>
</p>
<ul>
<li>Runs the container</li>
<li>This a combination of <code>docker create</code> and <code>docker start</code></li>
<li>This start a container and gives it an id and a name</li>
<li>That name is different than the <strong>IMAGE</strong> name</li>
</ul>
<br/>

<!-- Docker Create -->
<h5>Build a Container</h5>
<p>
<code>docker create &ltcontainer_name&gt &ltoverride command&gt</code>
</p>
<ul>
<li>Creates the container without starting it</li>
<li>The override commands overrides the intial command for the container</li>
<ul><li>This can be something like <code>sh</code> to open a shell</li></ul>
<li>That name is different than the <strong>IMAGE</strong> name</li>
</ul>
<br/>

<!-- Start a container -->
<h5>Start a Container</h5>
<p>
<code>docker start &ltcontainer_id | container_name&gt &ltoverride command&gt</code>
</p>
<ul>
<li>Creates the container without starting it</li>
<li>The override commands overrides the intial command for the container</li>
<ul><li>This can be something like <code>sh</code> to open a shell</li></ul>
<li>That name is different than the <strong>IMAGE</strong> name</li>
</ul>
<br/>

<!-- Stop a container -->
<h5>Stop a Container</h5>
<p>
<code>docker stop &ltcontainer_id | container_name&gt</code>
</p>
<ul>
<li>Stops a container</li>
<li>Can also use <code>kill</code> to kill it immediately</li>
</ul>
<br/>

<!-- Execute a command in a container -->
<h5>Execute a command in a container</h5>
<p>
<code>docker exec -it &ltcontainer_id&gt &ltcmd&lt</code>
</p>
<ul>
<li>Stops a container</li>
<li>Can also use <code>kill</code> to kill it immediately</li>
</ul>
<br/>

<!-- List Containers -->
<h5>List Containers</h5>
<p>
<code>docker ps --all</code>
</p>
<ul>
<li>List all containers, running and stopped</li>
</ul>
<br/>

<!-- Prune Containers -->
<h5>Prune Containers</h5>
<p>
<code>docker system prunel</code>
</p>
<ul>
<li>Prunes all of the containers</li>
</ul>
<br/>

<!-- Docker Compose -->
<hr>
<h3>Docker Compose</h3>
<br/>
<hr>
