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
    startDate:String
})

//compile a Schema into a Model
//first arg:
//singular name of the collection the model is used
//second arg:
//the schema that need to be finished because it is copied
const Vehicle=Mongoose.model('Vehicle',vehicleSchema)
module.exports=Vehicle;

