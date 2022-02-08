const Mongoose=require('mongoose')
const Schema=Mongoose.Schema

//create Schema for IVU location message
const ivuLocationMsgSchema=new Schema({
    //Entity
    String date:String,
    time:String,
    logLevel:String,
    addressPartA:String,
    addressPartB:String,
    peer:String,
    addressNext:String,
    direction:String,
    //Communication
    //Header
    //Sender
    sender:String,
    //Receiver
    receiver:String,
    //Telegram
    //TelegramHdr
    teleType:String,
    teleVersion:String,
    teleId:String,
    //LocationMsg
    //Position
    netPoint:String,
    relPosition:String,
    longitude:String,
    latitude:String,
    offRoute:String,
    velocity:String,
    heading:String,
    //DriverNumber
    driverNumber:String,
    //Trip
    blockNo:String,
    lineNo:String,
    tripNo:String,
    routeNo:String,
    deviation:String,
    loadDegree:String,
    destinationNo:String,
    tripType
})

//compile a Schema into a Model
//first arg:
//singular name of the collection the model is using
//second arg:
//the finished schema to be copied into a Model
const ivuLocationMsg=Mongoose.model('IvuLocationMsg',ivuLocationMsgSchema)
module.exports=ivuLocationMsg;

