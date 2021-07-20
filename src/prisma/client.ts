import { PrismaClient } from '@prisma/client';

// cria uma nova conexão com o banco de
// dados da aplicação
const client = new PrismaClient();

// devemos usar o client
export { client };
