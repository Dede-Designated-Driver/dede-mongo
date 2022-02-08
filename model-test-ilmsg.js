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
const debug=require('debug')('dede-mongo')
const mongoose = require('./connect')
const Obc=require('./models/on-board-computer.js')

// enable logging collection methods + arguments to the console/file
if(process.env.MONGOOSE_DEBUG == 'true') {
    mongoose.set('debug',true)
}else{
    mongoose.set('debug',false)
}

const db=mongoose.connection
db.once('open', _ => {
    debug('Database connected')
})
db.on('error', err => {
    console.error('connection error:', err)
})

//create model instance also known as document
const obcFoo=new Obc(
    {
	uuid:'uuid',
	lat:39,
	lon:-79,
	ts:0,
	alias:'alias'
    }
)

debug('obcFoo created')

obcFoo.save(function (err) {
    if(err){
	return handleError(err);
    }else{
	console.log('saved')
    }
});

debug('obcFoo saved')

obcFoo.updateOne(
    {ts:0},
    {alias:"ABCD"},
    function (err, docs) { 
	if (err){ 
		console.log(err) 
	} 
	else{ 
		console.log("Updated Docs : ", docs); 
	} 
    }
); 

debug('obcFoo updated')

/*db.collection.updateOne(filter, update, options)*/
obcFoo.updateOne({uuid:'uuid'},
		 {$set:
		  {lat:53.4,lon:11.2,ts:1,alias:"ABCDE"}
		 },
		 function (err, docs) {
		     if (err){
			 console.log(err)
		     }else{
			 console.log("Updated Docs : ", docs);
		     }
		 }
); 

debug('obcFoo updated')
