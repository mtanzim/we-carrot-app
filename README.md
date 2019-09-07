# Nulleimer (by: We Carrot)

Incentivise restaurants to receive a low-waste certified (consumer-facing) badge by tracking waste through B2B software and IOT trash can.

## Requirements

### Locally

Install [NVM](https://github.com/nvm-sh/nvm) or [NODENV](https://github.com/nodenv/nodenv) on your system, and then install the LTS version of NodeJS.

### Docker

Install Docker on your machine: [https://www.docker.com/get-started](https://www.docker.com/get-started)

After the installation, go to preferences, and set the number of CPUs to the maximum capacity of your computer (to improve performance).

## Building the images

From within the root folder of the project:

```bash
docker build -f Dockerfile -t we-carrot-app .
```

## Running

From within the root folder of the project:

```bash
 # before the first time
docker run --rm -v $(pwd):/wecarrot:delegated -w /wecarrot we-carrot-app npm install

# after the first time
docker run -it --rm -v $(pwd):/wecarrot:delegated -w /wecarrot -p 3000:3000 --name WeCarrotApp we-carrot-app
```

## Other

From within the root folder of the project:

```bash
docker exec -it WeCarrotApp ash # enters a running container
docker kill WeCarrotApp # kills a running container
```
