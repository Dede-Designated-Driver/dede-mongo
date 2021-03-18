/*
Copyright (C) 2021  Stefan Begerad

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

require('dotenv').config();
const mongoose = require('mongoose')
const debug = require('debug')('mongoose');

// enable logging collection methods + arguments to the console/file
if (process.env.MONGOOSE_DEBUG === 'true') {
    debug('debugging enabled')
    mongoose.set('debug',true)
}else{
    mongoose.set('debug',false)
    debug('debugging disabled')
    }

const DB=process.env.MONGOOSE_DB||'dev';
const PORT=parseInt(process.env.MONGOOSE_PORT)||27017;
const HOST=process.env.MONGOOSE_HOST||'localhost';
const UP=process.env.MONGOOSE_UP||'';
const TYPE=process.env.MONGOOSE_TYPE||'mongodb://';
const URL=TYPE+UP+HOST+':'+PORT+'/'+DB
debug('URL: %s',URL)

const options = {
    useNewUrlParser: true,
    // use the new Server Discover and Monitoring engine
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    // Don't build indexes
    autoIndex: false,
    // Maintain up to 10 socket connections
    poolSize: 10,
    // Keep trying to send operations for 5 seconds
    serverSelectionTimeoutMS: 5000,
    // Close sockets after 45 seconds of inactivity
    socketTimeoutMS: 45000,
    // Use IPv4, skip trying IPv6
    family: 4
};

// The format of the URL is type://username:password@host:port/database_name.
mongoose.connect(URL,options).then(
    () => {
	/** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
        debug('Connected to db: %s',DB)
    },
    err => {
	/** handle initial connection error */
        debug('err:'+err)
    }
);

module.exports=mongoose;

