# dede-mongo
access mongo data base for [Dede real-time map]{https://dedriver.org}

## Setup for development environment
Run the following command in your favorite GNU/Linux shell to install dependenies.
```
npm i
```
Run the following command in your favorite GNU/Linux shell if you fancy log messages for debugging.
```
export DEBUG=$DEBUG,dede-mongo,mongoose
```
Run the following command in your favorite GNU/Linux shell to start the service.
```
npm run dev
