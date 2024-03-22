import mongoose from 'mongoose'

const connectDB = async () => {    
    try {
        if(!process.env.MONGO_URI){
            throw new Error('MONGO_URI is not defined')
        }
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB conncted: ${conn.connection.host}`)
    }catch(error){
        if(error instanceof Error){
            console.log(`Error: ${error.message}`)
        }   
        process.exit(1)           
    }
}

export default connectDB