export interface IPhones {
  id?: number;
  name: string;
  short_desc?: string;
  img?: string;
  threads_name?: string;
  front_camera?: string | number;
  main_camera?: string | number;
  count?: number;
  quantity_threads?: number;
  memory?: number | string;
  price?: number | string;
  click?: boolean;
  click_versus?: boolean;
}
