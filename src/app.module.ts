import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './products/product.module';

@Module({
  imports: [ProductModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
