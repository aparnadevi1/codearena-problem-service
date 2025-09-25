import mongoose from 'mongoose';
const { Schema } = mongoose;

const problemSchema = new Schema({
  title: {
    type:String,
    required:[true,'Title cannot be empty']
  },
  description:{
    type:String,
    required:[true,'Description can not be empty']
  },
  difficulty:{
    type:String,
    enum:['Easy','Medium','Hard'],
    default:'Easy',
    required:[true,'Difficulty can not be empty']
  },
  //Array of objects
  testCases:[
    {
        input:{
            type:String,
            required:true
        },
        output:{
            type:String,
            required:true
        }
    }
  ],
  editorial:{
    type:String
  }
});
//momgoogse model is what used to query data second param schema is for validating the data
const Problem=mongoose.model('Problem',problemSchema);
module.exports=Problem;