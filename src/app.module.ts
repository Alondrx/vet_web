import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from '././auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [
    // Carga el .env globalmente en toda la app
    ConfigModule.forRoot({ isGlobal: true }),

    PrismaModule,
    AuthModule,
    UsuariosModule,
    CloudinaryModule,
  ],
})
export class AppModule {}
