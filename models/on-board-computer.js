const Mongoose=require('mongoose')
const Schema=Mongoose.Schema

/*create Schema for Dede On-board Computer (OBC)*/
const obcSchema=new Schema({
    uuid:{type:String,required:true,unique:true},
    lat:{type:Number,min:-90,max:90},
    lon:{type:Number,min:-180,max:180},
    ts:{type:Number,min:0},
    alias:String,
    vehicle:String
})

//compile a Schema into a Model
//first arg:
//singular name of the collection the model is using
//second arg:
//the schema that need to be finished because it is copied
const onBoardComputer=Mongoose.model('OnBoardComputer',obcSchema)
module.exports=onBoardComputer;

