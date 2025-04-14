
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    try{


      await prisma.$connect();
        console.log('deu tudo certo');
    }
    catch(error){
        console.log("não foi possivel conectar com o banco de Dados", error);

    }finally{

        await prisma.$disconnect();
 }
}
main();   
