import { OptionsDto } from './options.dto';

export class PollDto {
  id: string;
  title: string;
  options: OptionsDto;
}
