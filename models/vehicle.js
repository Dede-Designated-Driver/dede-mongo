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

const Mongoose=require('mongoose')
const Schema=Mongoose.Schema

/*create Schema for vehicles on Dede*/
const vehicleSchema=new Schema({
    uuid:{type:String,required:true,unique:true},
    lat:{type:Number,min:-90,max:90},
    lon:{type:Number,min:-180,max:180},
    ts:{type:Number,min:0},
    alias:String,
    vehicle:String,
    label:String,
    licensePlate:String,
    tripId:String,
    routeId:String,
    directionId:String,
    startTime:String,
    startDame:String
})

//compile a Schema into a Model
//first arg:
//singular name of the collection the model is used
//second arg:
//the schema that need to be finished because it is copied
const Vehicle=Mongoose.model('Vehicle',vehicleSchema)
module.exports=Vehicle;

