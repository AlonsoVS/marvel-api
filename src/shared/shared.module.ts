import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [DataService],
  exports: [DataService],
})
export class SharedModule {}
