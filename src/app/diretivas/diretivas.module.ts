import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivasComponent } from './diretivas.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';

@NgModule({
  declarations: [DiretivasComponent, DiretivaNgifComponent, DiretivaNgswitchComponent, DiretivaNgForComponent],
  imports: [CommonModule],
  exports: [DiretivasComponent],
})
export class DiretivasModule {}
