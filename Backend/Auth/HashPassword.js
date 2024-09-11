import bcrypt from 'bcrypt';
export const Hash = async(password)=>{
    const salt = 10
    return await bcrypt.hash(password,salt)
}
export const ComparePassword = async(password,hash)=>{
    return await bcrypt.compare(password,hash)
}