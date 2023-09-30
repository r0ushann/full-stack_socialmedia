import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();


const connectDB =  async () => {
    //const PORT = process.env.PORT || 6001;
    try{
        const connectdb = await mongoose.connect(process.env.MONGO_URL,{
         //must add in order to not get any error masseges:
            useUnifiedTopology:true,
            useNewUrlParser: true,
        }).then(() => {
            //app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
             console.log(`mongo database is connected! running on PORT: ${process.env.PORT}, ${conn.connection.host} `)
        })
       
    }catch(error){
        console.error(`Error: ${error} `)
        process.exit(1) //passing 1 - will exit the proccess with error
    }
}

export default connectDB;