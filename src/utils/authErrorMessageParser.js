
export default function(errorCode){
    switch(errorCode){
        case "auth/email-already-in-use":
            return "Girilen email zaten kayıtlı."
        case "auth/invalid-credential":
            return "Email veya parola hatalı."
        default:
            return errorCode;
    }
}